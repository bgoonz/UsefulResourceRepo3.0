/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.tk.quantum;

import java.nio.IntBuffer;
import java.util.concurrent.atomic.AtomicInteger;
import com.sun.glass.ui.Application;
import com.sun.glass.ui.Pixels;
import com.sun.prism.Graphics;
import com.sun.prism.GraphicsPipeline;
import com.sun.prism.RTTexture;
import com.sun.prism.Texture.WrapMode;
import com.sun.prism.impl.BufferUtil;
import com.sun.prism.impl.Disposer;
import com.sun.prism.impl.ManagedResource;

/**
 * UploadingPainter is used when we need to render into an offscreen buffer.
 * The PresentingPainter is used when we are rendering to the main screen.
 */
final class UploadingPainter extends ViewPainter implements Runnable {

    private Application app = Application.GetApplication();
    private Pixels      pix;
    private IntBuffer   textureBits; // Used for RTTs that are not backed by a SW array
    private IntBuffer   pixBits; // Users for RTTs that are backed by a SW array
    private final AtomicInteger uploadCount = new AtomicInteger(0);
    private RTTexture   rttexture;
    
    private volatile float pixScaleFactor = 1.0f;

    UploadingPainter(GlassScene view) {
        super(view);
    }

    void disposeRTTexture() {
        if (rttexture != null) {
            rttexture.dispose();
            rttexture = null;
        }
    }
    
    public void setPixelScaleFactor(float scale) {
        pixScaleFactor = scale;
    }
    
    @Override
    public float getPixelScaleFactor() {
        return pixScaleFactor;
    }    

    @Override public void run() {
        renderLock.lock();

        boolean valid = false;
        boolean errored = false;
        try {
            valid = validateStageGraphics();

            if (!valid) {
                if (QuantumToolkit.verbose) {
                    System.err.println("UploadingPainter: validateStageGraphics failed");
                }
                paintImpl(null);
                return;
            }
            
            if (factory == null) {
                factory = GraphicsPipeline.getDefaultResourceFactory();
            }
            if (factory == null || !factory.isDeviceReady()) {
                return;
            }
            
            float scale = pixScaleFactor;
            
            boolean needsReset = (pix == null) ||
                                 (scale != pix.getScaleUnsafe()) ||
                                 (viewWidth != penWidth) || (viewHeight != penHeight);
            
            if (!needsReset) {
                rttexture.lock();
                if (rttexture.isSurfaceLost()) {
                    rttexture.unlock();
                    sceneState.getScene().entireSceneNeedsRepaint();
                    needsReset = true;
                }
            }
            
            int bufWidth = (int)Math.round(viewWidth * scale);
            int bufHeight = (int)Math.round(viewHeight * scale);
            
            if (needsReset) {
                disposeRTTexture();
                rttexture = factory.createRTTexture(bufWidth, bufHeight, WrapMode.CLAMP_NOT_NEEDED);
                if (rttexture == null) {
                    return;
                }
                penWidth    = viewWidth;
                penHeight   = viewHeight;
                textureBits = null;
                pixBits = null;
                freshBackBuffer = true;
            }
            Graphics g = rttexture.createGraphics();
            if (g == null) {
                disposeRTTexture();
                sceneState.getScene().entireSceneNeedsRepaint();
                return;
            }
            g.scale(scale, scale);
            paintImpl(g);
            freshBackBuffer = false;

            int rawbits[] = rttexture.getPixels();
            
            if (rawbits != null) {
                if (pixBits == null || uploadCount.get() > 0) {
                    pixBits = IntBuffer.allocate(bufWidth * bufHeight);
                }
                System.arraycopy(rawbits, 0, pixBits.array(), 0, bufWidth * bufHeight);
                pix = app.createPixels(bufWidth, bufHeight, pixBits, scale);
            } else {
                if (textureBits == null || uploadCount.get() > 0) {
                    textureBits = BufferUtil.newIntBuffer(bufWidth * bufHeight);
                }
                
                if (textureBits != null) {
                    if (rttexture.readPixels(textureBits)) {
                        pix = app.createPixels(bufWidth, bufHeight, textureBits, scale);
                    } else {
                        /* device lost */
                        sceneState.getScene().entireSceneNeedsRepaint();
                        disposeRTTexture();
                        pix = null;
                    }
                }
            }

            if (rttexture != null) {
                rttexture.unlock();
            }

            if (pix != null) {
                /* transparent pixels created and ready for upload */
                // Copy references, which are volatile, used by upload. Thus
                // ensure they still exist once event queue is consumed.
                uploadCount.incrementAndGet();
                sceneState.uploadPixels(pix, uploadCount);
            }
                
        } catch (Throwable th) {
            errored = true;
            th.printStackTrace(System.err);
        } finally {
            if (rttexture != null && rttexture.isLocked()) {
                rttexture.unlock();
            }

            Disposer.cleanUp();

            sceneState.getScene().setPainting(false);

            ManagedResource.freeDisposalRequestedAndCheckResources(errored);

            renderLock.unlock();
        }
    }
}
