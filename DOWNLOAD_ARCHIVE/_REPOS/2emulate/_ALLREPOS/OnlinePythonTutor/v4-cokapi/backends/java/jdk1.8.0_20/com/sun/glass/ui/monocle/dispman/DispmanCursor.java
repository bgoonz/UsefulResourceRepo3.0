/*
 * Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.glass.ui.monocle.dispman;

import com.sun.glass.ui.monocle.NativeCursor;
import com.sun.glass.ui.Size;

/** Cursor using dispman API.
 * TODO: Can we mmap the image and location files?
 */
public class DispmanCursor extends NativeCursor {

    private static final int CURSOR_WIDTH = 16;
    private static final int CURSOR_HEIGHT = 16;


    private native void _initDispmanCursor(int cursorWidth, int cursorHeight);
    private native void _setVisible(boolean visible);
    private native void _setLocation(int x, int y);
    private native void _setImage(byte[] cursorImage);

    public DispmanCursor() {
        _initDispmanCursor(CURSOR_WIDTH, CURSOR_HEIGHT);
    }

    @Override
    public Size getBestSize() {
        return new Size(CURSOR_WIDTH, CURSOR_HEIGHT);
    }

    @Override
    public void setVisibility(boolean visibility) {
        isVisible = visibility;
        _setVisible(visibility);
    }

    private void updateImage(boolean always) {
        System.out.println("DispmanCursor.updateImage: not implemented");
    }

    @Override
    public void setImage(byte[] cursorImage) {
        _setImage(cursorImage);
    }

    @Override
    public void setLocation(int x, int y) {
        _setLocation(x, y);
    }

    @Override
    public void setHotSpot(int hotspotX, int hotspotY) {
    }

    @Override
    public void shutdown() {
    }
}
