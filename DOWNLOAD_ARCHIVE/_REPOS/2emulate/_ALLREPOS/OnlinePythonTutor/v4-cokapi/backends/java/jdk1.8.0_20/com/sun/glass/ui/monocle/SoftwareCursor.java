/*
 * Copyright (c) 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.glass.ui.monocle;

import com.sun.glass.ui.Size;

import java.nio.Buffer;
import java.nio.ByteBuffer;

public class SoftwareCursor extends NativeCursor {

    private ByteBuffer cursorBuffer;
    private int renderX;
    private int renderY;
    private int hotspotX;
    private int hotspotY;

    @Override
    public Size getBestSize() {
        return new Size(16, 16);
    }

    @Override
    public void setVisibility(boolean visibility) {
        if (visibility != isVisible) {
            isVisible = visibility;
            MonocleWindowManager.getInstance().repaintAll();
        }
    }

    @Override
    public void setImage(byte[] cursorImage) {
        cursorBuffer = ByteBuffer.allocate(cursorImage.length);
        NativeCursors.colorKeyCursor(cursorImage, cursorBuffer.asIntBuffer(), 32, 0);
    }

    @Override
    public void setLocation(int x, int y) {
        int renderX = x - hotspotX;
        int renderY = y - hotspotY;
        if (renderX != this.renderX || renderY != this.renderY) {
            this.renderX = renderX;
            this.renderY = renderY;
            MonocleWindowManager.getInstance().repaintAll();
        }
    }

    @Override
    public void setHotSpot(int hotspotX, int hotspotY) {
        this.hotspotX = hotspotX;
        this.hotspotY = hotspotY;
    }

    @Override
    public void shutdown() {
    }

    public int getRenderX() {
        return renderX;
    }

    public int getRenderY() {
        return renderY;
    }

    public Buffer getCursorBuffer() {
        cursorBuffer.clear();
        return cursorBuffer;
    }

}
