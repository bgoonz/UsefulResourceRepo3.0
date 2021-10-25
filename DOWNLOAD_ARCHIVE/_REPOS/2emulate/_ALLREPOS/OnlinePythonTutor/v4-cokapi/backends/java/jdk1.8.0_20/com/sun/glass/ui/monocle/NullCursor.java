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

package com.sun.glass.ui.monocle;

import com.sun.glass.ui.Size;

public class NullCursor extends NativeCursor {

    @Override
    public Size getBestSize() {
        return new Size(16, 16);
    }

    @Override
    public void setVisibility(boolean visibility) {
    }

    @Override
    public void setImage(byte[] cursorImage) {
    }

    @Override
    public void setLocation(int x, int y) {
    }

    @Override
    public void setHotSpot(int hotspotX, int hotspotY) {
    }

    @Override
    public void shutdown() {
    }
}
