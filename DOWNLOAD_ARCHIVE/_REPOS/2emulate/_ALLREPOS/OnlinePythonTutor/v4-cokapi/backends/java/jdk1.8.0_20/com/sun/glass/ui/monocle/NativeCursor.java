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

public abstract class NativeCursor {

    public boolean isVisible = false;

    public abstract Size getBestSize();

    // setVisibility can fail silently; use getVisibility to check the results
    public abstract void setVisibility(boolean visibility);

    public boolean getVisiblity() {
        return isVisible;
    }

    public abstract void setImage(byte[] cursorImage);

    public abstract void setLocation(int x, int y);

    public abstract void setHotSpot(int hotspotX, int hotspotY);

    public abstract void shutdown();
}
