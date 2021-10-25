/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.prism.sw;

import com.sun.glass.ui.Application;
import com.sun.glass.ui.Pixels;
import com.sun.javafx.geom.Rectangle;
import com.sun.prism.Presentable;
import com.sun.prism.PresentableState;
import com.sun.prism.impl.PrismSettings;
import java.nio.IntBuffer;
import java.util.concurrent.atomic.AtomicInteger;

final class SWPresentable extends SWRTTexture implements Presentable {

    private final PresentableState pState;
    private Pixels pixels;
    private IntBuffer pixBuf;
    private final AtomicInteger uploadCount = new AtomicInteger(0);

    public SWPresentable(PresentableState pState, SWResourceFactory factory) {
        super(factory, pState.getWidth(), pState.getHeight());
        this.pState = pState;
    }

    public boolean lockResources(PresentableState pState) {
        return (getPhysicalWidth() != pState.getWidth() ||
                getPhysicalHeight() != pState.getHeight());
    }

    public boolean prepare(Rectangle dirtyregion) {
        if (!pState.isViewClosed()) {
            /*
             * RT-27374
             * TODO: make sure the imgrep matches the Pixels.getNativeFormat()
             * TODO: dirty region support
             */
            int w = getPhysicalWidth();
            int h = getPhysicalHeight();
            if (pixels == null || uploadCount.get() > 0) {
                pixBuf = IntBuffer.allocate(w*h);
                pixels = Application.GetApplication().createPixels(w, h, pixBuf);
            }
            IntBuffer buf = getSurface().getDataIntBuffer();
            assert buf.hasArray();
            System.arraycopy(buf.array(), 0, pixBuf.array(), 0, w*h);
            return true;
        } else {
            return false;
        }
    }

    public boolean present() {
        uploadCount.incrementAndGet();
        pState.uploadPixels(pixels, uploadCount);
        return true;
    }

    public float getPixelScaleFactor() {
        return 1.0f;
    }

    public int getContentWidth() {
        return pState.getWidth();
    }

    public int getContentHeight() {
        return pState.getHeight();
    }

    @Override public boolean isAntiAliasing() {
        return super.isAntiAliasing();
    }
}
