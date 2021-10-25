/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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
package com.sun.glass.ui;

public abstract class Cursor {

    public final static int CURSOR_NONE = -1;
    public final static int CURSOR_CUSTOM = 0;
    public final static int CURSOR_DEFAULT = 1;
    public final static int CURSOR_TEXT = 2;
    public final static int CURSOR_CROSSHAIR = 3;
    public final static int CURSOR_CLOSED_HAND = 4;
    public final static int CURSOR_OPEN_HAND = 5;
    public final static int CURSOR_POINTING_HAND = 6;
    public final static int CURSOR_RESIZE_LEFT = 7;
    public final static int CURSOR_RESIZE_RIGHT = 8;
    public final static int CURSOR_RESIZE_UP = 9;
    public final static int CURSOR_RESIZE_DOWN = 10;
    public final static int CURSOR_RESIZE_LEFTRIGHT = 11;
    public final static int CURSOR_RESIZE_UPDOWN = 12;
    public final static int CURSOR_DISAPPEAR = 13;
    public final static int CURSOR_WAIT = 14;
    public final static int CURSOR_RESIZE_SOUTHWEST = 15;
    public final static int CURSOR_RESIZE_SOUTHEAST = 16;
    public final static int CURSOR_RESIZE_NORTHWEST = 17;
    public final static int CURSOR_RESIZE_NORTHEAST = 18;
    public final static int CURSOR_MOVE = 19;

    private final int type;

    // Native cursor ptr, for custom cursors
    private long ptr;

    protected Cursor(final int type) {
        Application.checkEventThread();
        this.type = type;
    }

    protected Cursor(final int x, final int y, final Pixels pixels) {
        this(CURSOR_CUSTOM);
        ptr = _createCursor(x, y, pixels);
    }

    public final int getType() {
        Application.checkEventThread();
        return type;
    }

    protected final long getNativeCursor() {
        Application.checkEventThread();
        return ptr;
    }

    /**
     * Shows or hides the cursor.
     */
    public static void setVisible(boolean visible) {
        Application.checkEventThread();
        Application.GetApplication().staticCursor_setVisible(visible);
    }

    /**
     * Returns the 'best' cursor size based on the given preferred size.
     */
    public static Size getBestSize(int width, int height) {
        Application.checkEventThread();
        return Application.GetApplication().staticCursor_getBestSize(width, height);
    }

    protected abstract long _createCursor(int x, int y, Pixels pixels);
}
