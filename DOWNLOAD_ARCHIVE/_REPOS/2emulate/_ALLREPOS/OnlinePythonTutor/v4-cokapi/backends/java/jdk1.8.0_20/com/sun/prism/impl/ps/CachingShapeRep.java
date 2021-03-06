/*
 * Copyright (c) 2009, 2014, Oracle and/or its affiliates. All rights reserved.
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

package com.sun.prism.impl.ps;

import com.sun.javafx.geom.BaseBounds;
import com.sun.javafx.geom.RectBounds;
import com.sun.javafx.geom.Shape;
import com.sun.javafx.geom.transform.BaseTransform;
import com.sun.prism.BasicStroke;
import com.sun.prism.Graphics;
import com.sun.prism.Texture;
import com.sun.prism.Texture.WrapMode;
import com.sun.prism.paint.Paint;
import com.sun.prism.shape.ShapeRep;
import com.sun.prism.impl.Disposer;
import com.sun.prism.impl.PrismSettings;
import com.sun.prism.impl.VertexBuffer;
import com.sun.prism.impl.ps.BaseShaderContext.MaskType;
import com.sun.prism.impl.shape.ShapeUtil;
import com.sun.prism.impl.shape.MaskData;
import com.sun.prism.ps.Shader;
import java.util.Arrays;
import java.util.Comparator;

/**
 * An implementation of ShapeRep that attempts to cache and reuse the
 * mask texture that is used to render the filled/stroked geometry.
 * There is an artificial cap on the size of shapes that are considered
 * for caching, so that we do not fill up VRAM with lots of large shape
 * masks.  The shape is considered for caching only when it is rendered
 * a certain number of times with unchanging transform (ignoring the
 * translation components) and geometry.  This means that this class is
 * good for caching static shapes that are either completely stationary
 * or being translated.  This class will also attempt to reuse a mask
 * that corresponds to a completely different shape instance as long as
 * the two shapes are equal and the transforms only differ by their
 * translation components.  This means that if you have 1000 Path nodes
 * all with exactly the same geometry but with different translation factors,
 * then we will only rasterize and cache a single mask texture and reuse
 * it among all the Path nodes.
 *
 * (Of course, the fact that we reuse the same mask texture for different
 * sub-pixel translation factors means we're knowingly being a bit sloppy,
 * so when caching is enabled you may see some dancing at the shape edges
 * for slowly animating translations, but otherwise will hopefully not be
 * too noticeable.)
 *
 * The current implementation limits the size of the cache (512 pixels in
 * each dimension, and 4 MB in total) so that it doesn't grow without bound.
 * Space is granted on a first come first served basis.
 */
public class CachingShapeRep implements ShapeRep {

    private CachingShapeRepState fillState;
    private CachingShapeRepState drawState;

    public CachingShapeRep() {
    }

    CachingShapeRepState createState() {
        return new CachingShapeRepState();
    }

    public boolean is3DCapable() {
        return false;
    }

    public void invalidate(InvalidationType type) {
        // NOTE: for now we invalidate for any location or geometry change;
        // should consider allowing certain location changes...
        if (fillState != null) {
            fillState.invalidate();
        }
        if (drawState != null) {
            drawState.invalidate();
        }
    }

    public void fill(Graphics g, Shape shape, BaseBounds bounds) {
        if (fillState == null) {
            fillState = createState();
        }
        fillState.render(g, shape, (RectBounds) bounds, null);
    }

    public void draw(Graphics g, Shape shape, BaseBounds bounds) {
        if (drawState == null) {
            drawState = createState();
        }
        drawState.render(g, shape,(RectBounds) bounds, g.getStroke());
    }

    public void dispose() {
        if (fillState != null) {
            fillState.dispose();
            fillState = null;
        }
        if (drawState != null) {
            drawState.dispose();
            drawState = null;
        }
    }
}

class CachingShapeRepState {

    private static class MaskTexData {
        private CacheEntry cacheEntry;
        private Texture maskTex;
        private float maskX;
        private float maskY;
        private int maskW;
        private int maskH;

        void adjustOrigin(BaseTransform xform) {
            float dx = (float)(xform.getMxt()-cacheEntry.xform.getMxt());
            float dy = (float)(xform.getMyt()-cacheEntry.xform.getMyt());
            this.maskX = cacheEntry.texData.maskX + dx;
            this.maskY = cacheEntry.texData.maskY + dy;
        }

        MaskTexData copy() {
            MaskTexData data = new MaskTexData();
            data.cacheEntry = this.cacheEntry;
            data.maskTex = this.maskTex;
            data.maskX = this.maskX;
            data.maskY = this.maskY;
            data.maskW = this.maskW;
            data.maskH = this.maskH;
            return data;
        }

        void copyInto(MaskTexData other) {
            if (other == null) {
                throw new InternalError("MaskTexData must be non-null");
            }
            other.cacheEntry = this.cacheEntry;
            other.maskTex = this.maskTex;
            other.maskX = this.maskX;
            other.maskY = this.maskY;
            other.maskW = this.maskW;
            other.maskH = this.maskH;
        }
    }

    private static class CacheEntry {
        Shape shape;
        BasicStroke stroke;
        BaseTransform xform;
        RectBounds xformBounds;
        MaskTexData texData;
        int refCount;
    }

    private static class MaskCache {
        private static final int MAX_MASK_DIM = 512;
        private static final int MAX_SIZE_IN_PIXELS = 4194304; // 4 MB
        private static Comparator<CacheEntry> comparator = (o1, o2) -> {
            int widthCompare = Float.compare(o1.xformBounds.getWidth(), o2.xformBounds.getWidth());
            if (widthCompare != 0) {
                return widthCompare;
            }
            return Float.compare(o1.xformBounds.getHeight(), o2.xformBounds.getHeight());
        };

        private CacheEntry[] entries = new CacheEntry[8];
        private int entriesSize = 0;
        private int totalPixels;

        private CacheEntry tmpKey = new CacheEntry();
        {
            tmpKey.xformBounds = new RectBounds();
        }

        private void ensureSize(int size) {
            if (entries.length < size) {
                CacheEntry[] newEntries = new CacheEntry[size * 3 / 2];
                System.arraycopy(entries, 0, newEntries, 0, entries.length);
                entries = newEntries;
            }
        }

        private void addEntry(CacheEntry entry) {
            ensureSize(entriesSize + 1);
            int pos = Arrays.binarySearch(entries, 0, entriesSize, entry, comparator);
            if (pos < 0) {
                pos = ~pos;
            }
            System.arraycopy(entries, pos, entries, pos + 1, entriesSize - pos);
            entries[pos] = entry;
            ++entriesSize;
        }

        private void removeEntry(CacheEntry entry) {
            int pos = Arrays.binarySearch(entries, 0, entriesSize, entry, comparator);
            if (pos < 0) {
                throw new IllegalStateException("Trying to remove a cached item that's not in the cache");
            }
            if (entries[pos] != entry) {
                tmpKey.xformBounds.deriveWithNewBounds(0, 0, 0, entry.xformBounds.getWidth(), Math.nextAfter(entry.xformBounds.getHeight(), Float.NEGATIVE_INFINITY), 0);
                pos = Arrays.binarySearch(entries, 0, entriesSize, tmpKey, comparator);
                if (pos < 0) {
                    pos = ~pos;
                }
                tmpKey.xformBounds.deriveWithNewBounds(0, 0, 0, entry.xformBounds.getWidth(), Math.nextAfter(entry.xformBounds.getHeight(), Float.POSITIVE_INFINITY), 0);
                int toPos = Arrays.binarySearch(entries, 0, entriesSize, tmpKey, comparator);
                if (toPos < 0) {
                    toPos = ~toPos;
                }
                while (entries[pos] != entry && pos < toPos) { ++pos; };
                if (pos >= toPos) {
                    throw new IllegalStateException("Trying to remove a cached item that's not in the cache");
                }
            }
            System.arraycopy(entries, pos + 1, entries, pos, entriesSize - pos - 1);
            --entriesSize;
        }

        boolean hasRoom(RectBounds xformBounds) {
            int w = (int)(xformBounds.getWidth() + 0.5f);
            int h = (int)(xformBounds.getHeight() + 0.5f);
            int size = w*h;
            return
                w <= MAX_MASK_DIM &&
                h <= MAX_MASK_DIM &&
                totalPixels + size <= MAX_SIZE_IN_PIXELS;
        }

        boolean entryMatches(CacheEntry entry, Shape shape, BasicStroke stroke, BaseTransform xform) {
            return equalsIgnoreTranslation(xform, entry.xform) && entry.shape.equals(shape) &&
                   (stroke == null ? entry.stroke == null : stroke.equals(entry.stroke));

        }

        void get(BaseShaderContext context,
                 MaskTexData texData,
                 Shape shape, BasicStroke stroke, BaseTransform xform,
                 RectBounds xformBounds,
                 boolean xformBoundsIsACopy)
        {
            if (texData == null) {
                throw new InternalError("MaskTexData must be non-null");
            }
            if (texData.cacheEntry != null) {
                throw new InternalError("CacheEntry should already be null");
            }

            tmpKey.xformBounds.deriveWithNewBounds(0, 0, 0, xformBounds.getWidth(), Math.nextAfter(xformBounds.getHeight(), Float.NEGATIVE_INFINITY), 0);
            int i = Arrays.binarySearch(entries, 0, entriesSize, tmpKey, comparator);
            if (i < 0) {
                i = ~i;
            }

            tmpKey.xformBounds.deriveWithNewBounds(0, 0, 0, xformBounds.getWidth(), Math.nextAfter(xformBounds.getHeight(), Float.POSITIVE_INFINITY), 0);
            int toPos = Arrays.binarySearch(entries, 0, entriesSize, tmpKey, comparator);
            if (toPos < 0) {
                toPos = ~toPos;
            }
            for (;i < toPos; i++) {
                CacheEntry entry = entries[i];

                if (entryMatches(entry, shape, stroke, xform))
                {
                    entry.texData.maskTex.lock();
                    if (entry.texData.maskTex.isSurfaceLost()) {
                        // Eventually refcount will go to zero and entry will be freed
                        entry.texData.maskTex.unlock();
                        continue;
                    }
                    // increment ref count for the chosen entry and
                    // link the given texData to it
                    entry.refCount++;
                    entry.texData.copyInto(texData);
                    texData.cacheEntry = entry;
                    // adjust the maskX/maskY by the delta between the
                    // cached transform and the current transform
                    texData.adjustOrigin(xform);
                    return;
                }
            }

            // did not find an existing mask; create a new one here
            MaskData maskData =
                ShapeUtil.rasterizeShape(shape, stroke, xformBounds, xform, true);
            int mw = maskData.getWidth();
            int mh = maskData.getHeight();
            texData.maskX = maskData.getOriginX();
            texData.maskY = maskData.getOriginY();
            texData.maskW = mw;
            texData.maskH = mh;
            texData.maskTex =
                context.getResourceFactory().createMaskTexture(mw, mh, WrapMode.CLAMP_TO_ZERO);
            maskData.uploadToTexture(texData.maskTex, 0, 0, false);
            texData.maskTex.contentsUseful();

            // add the new mask texture to the cache; note that we copy the
            // shape and transform so that dependents are not affected
            // if the original geometry is mutated (since NGPath will reuse
            // and mutate a single Path2D instance, for example)
            CacheEntry entry = new CacheEntry();
            entry.shape = shape.copy();
            if (stroke != null) entry.stroke = stroke.copy();
            entry.xform = xform.copy();
            entry.xformBounds = xformBoundsIsACopy ? xformBounds : (RectBounds)xformBounds.copy();
            entry.texData = texData.copy();
            entry.refCount = 1;
            texData.cacheEntry = entry;
            addEntry(entry);
            totalPixels += mw*mh;
        }

        void unref(MaskTexData texData) {
            if (texData == null) {
                throw new InternalError("MaskTexData must be non-null");
            }
            CacheEntry entry = texData.cacheEntry;
            if (entry == null) {
                return;
            }
            texData.cacheEntry = null;
            texData.maskTex = null;
            entry.refCount--;
            if (entry.refCount <= 0) {
                removeEntry(entry);
                entry.shape = null;
                entry.stroke = null;
                entry.xform = null;
                entry.xformBounds = null;
                entry.texData.maskTex.dispose();
                entry.texData = null;
                totalPixels -= (texData.maskW * texData.maskH);
            }
        }
    }

    /**
     * Returns true if the two transforms are equal or if they differ only
     * in their translation components; otherwise returns false.
     */
    private static boolean equalsIgnoreTranslation(BaseTransform a,
                                                   BaseTransform b)
    {
        if (a == b) {
            return true;
        }

        return
            a.getMxx() == b.getMxx() &&
            a.getMxy() == b.getMxy() &&
            a.getMyx() == b.getMyx() &&
            a.getMyy() == b.getMyy();
    }

    private static final BaseTransform IDENT = BaseTransform.IDENTITY_TRANSFORM;
    // NOTE: need separate MaskCache per context?
    private static final MaskCache maskCache = new MaskCache();

    private int renderCount;
    private Boolean tryCache;
    private BaseTransform lastXform;
    private final MaskTexData texData;
    private float[] bbox;

    private final Object disposerReferent = new Object();
    private final Disposer.Record disposerRecord;

    CachingShapeRepState() {
        this.texData = new MaskTexData();
        this.disposerRecord = new CSRDisposerRecord(texData);
        Disposer.addRecord(disposerReferent, disposerRecord);
    }

    // Note: Subclasses may override this method to use a more direct op.
    void fillNoCache(Graphics g, Shape shape) {
        g.fill(shape);
    }

    // Note: Subclasses may override this method to use a more direct op.
    void drawNoCache(Graphics g, Shape shape) {
        g.draw(shape);
    }

    void invalidate() {
        // Note: this method will be called from the FX thread, so just mark
        // the state as invalid and then the next render() call will take
        // care of unref'ing the cache entry (on the render thread).
        renderCount = 0;
        tryCache = null;
        lastXform = null;
        bbox = null;
    }

    private void invalidateMaskTexData() {
        // Note: this method should only be called from the render thread
        // (since calling unref() may cause textures to be disposed).
        tryCache = null;
        lastXform = null;
        maskCache.unref(texData);
    }

    void render(Graphics g, Shape shape, RectBounds shapeBounds, BasicStroke stroke) {
        // The following is safe; this method does not mutate xform
        BaseTransform xform = g.getTransformNoClone();

        // we need to invalidate our cached MaskTexData if:
        //   - lastXform is null, indicating that we were marked invalid
        //     (due to a geometry or location change), or
        //   - the current transform is significantly different than the last
        if (lastXform == null || !equalsIgnoreTranslation(xform, lastXform)) {
            invalidateMaskTexData();
            if (lastXform != null) {
                renderCount = 0;
            }
        }

        if (texData.cacheEntry != null) {
            texData.maskTex.lock();
            if (texData.maskTex.isSurfaceLost()) {
                texData.maskTex.unlock();
                invalidateMaskTexData();
            }
        }

        RectBounds xformBounds = null;
        boolean boundsCopy = false;

        if (tryCache == null) {
            // determine whether the shape size is within the limits
            if (xform.isIdentity()) {
                xformBounds = shapeBounds;
            } else {
                xformBounds = new RectBounds();
                boundsCopy = true;
                //this is a safe cast as this ShapeRep is not 3d capable.
                // all 3d transformed shapes are thus rendered by different ShapeRep
                xformBounds = (RectBounds) xform.transform(shapeBounds, xformBounds);
            }
            tryCache = !xformBounds.isEmpty() && maskCache.hasRoom(xformBounds);
        }

        renderCount++;
        if (tryCache == Boolean.FALSE ||
            renderCount <= 1 ||
            (!(g instanceof BaseShaderGraphics)) ||
            ((BaseShaderGraphics)g).isComplexPaint())
        {
            // render the slow way if:
            //   - the shape size exceeds the threshold, or
            //   - we haven't rendered enough times to get an idea of
            //     whether it is worth caching the mask, or
            //   - there is a complex paint set (note that we could
            //     potentially use the cached mask in this case, but the
            //     complex paint case is not common enough to warrant
            //     further optimization at this time)
            if (stroke == null) {
                fillNoCache(g, shape);
            } else {
                drawNoCache(g, shape);
            }
            return;
        }

        BaseShaderGraphics bsg = (BaseShaderGraphics)g;
        BaseShaderContext context = bsg.getContext();
        if (lastXform == null || !lastXform.equals(xform)) {
            // need to create a new mask texture, or reuse an existing one
            if (xformBounds == null) {
                if (xform.isIdentity()) {
                    xformBounds = shapeBounds;
                } else {
                    xformBounds = new RectBounds();
                    boundsCopy = true;
                    xformBounds = (RectBounds) xform.transform(shapeBounds, xformBounds);
                }
            }

            if (texData.cacheEntry != null) {
                // in this case, we already have a valid mask texture, but
                // the transform (translation) has changed since we last used
                // it, so we just need to update the maskX/maskY variables
                texData.adjustOrigin(xform);
            } else {
                // the following will locate an existing cached mask that
                // matches the given parameters, or failing that, will create
                // a new mask and put it in the cache
                maskCache.get(context, texData, shape, stroke, xform, xformBounds, boundsCopy);
            }

            if (lastXform == null) {
                lastXform = xform.copy();
            } else {
                lastXform.setTransform(xform);
            }
        }

        Paint paint = bsg.getPaint();
        float bx = 0f, by = 0f, bw = 0f, bh = 0f;
        if (paint.isProportional()) {
            if (bbox == null) {
                bbox = new float[] {
                    Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY,
                    Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY,
                };
                Shape.accumulate(bbox, shape, BaseTransform.IDENTITY_TRANSFORM);
            }
            bx = bbox[0];
            by = bbox[1];
            bw = bbox[2] - bx;
            bh = bbox[3] - by;
        }

        int mw = texData.maskW;
        int mh = texData.maskH;
        Texture maskTex = texData.maskTex;
        float tw = maskTex.getPhysicalWidth();
        float th = maskTex.getPhysicalHeight();
        float dx1 = texData.maskX;
        float dy1 = texData.maskY;
        float dx2 = dx1 + mw;
        float dy2 = dy1 + mh;
        float tx1 = maskTex.getContentX() / tw;
        float ty1 = maskTex.getContentY() / th;
        float tx2 = tx1 + mw / tw;
        float ty2 = ty1 + mh / th;

        if (PrismSettings.primTextureSize != 0) {
            // the mask has been generated in device space, so we use
            // identity transform here
            Shader shader =
                context.validatePaintOp(bsg, IDENT,
                                        MaskType.ALPHA_TEXTURE, texData.maskTex,
                                        bx, by, bw, bh);

            VertexBuffer vb = context.getVertexBuffer();
            vb.addQuad(dx1, dy1, dx2, dy2, tx1, ty1, tx2, ty2,
                       bsg.getPaintTextureTx(xform, shader, bx, by, bw, bh));
        } else {
            // the mask has been generated in device space, so we use
            // identity transform here
            context.validatePaintOp(bsg, IDENT, texData.maskTex, bx, by, bw, bh);

            VertexBuffer vb = context.getVertexBuffer();
            vb.addQuad(dx1, dy1, dx2, dy2, tx1, ty1, tx2, ty2);
        }
        maskTex.unlock();
    }

    void dispose() {
        // Note: this method will be called from the FX thread; just
        // invalidate and let the DisposerRecord take care of cutting
        // the ties with the mask cache and disposing textures if necessary
        // (on the render thread).
        invalidate();
    }

    private static class CSRDisposerRecord implements Disposer.Record {
        private MaskTexData texData;

        private CSRDisposerRecord(MaskTexData texData) {
            this.texData = texData;
        }

        public void dispose() {
            // Note: this method should only be called from the rendering thread
            if (texData != null) {
                maskCache.unref(texData);
                texData = null;
            }
        }
    }
}
