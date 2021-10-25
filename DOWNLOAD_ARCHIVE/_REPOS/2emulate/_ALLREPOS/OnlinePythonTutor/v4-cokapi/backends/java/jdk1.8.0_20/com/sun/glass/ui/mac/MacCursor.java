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
package com.sun.glass.ui.mac;

import com.sun.glass.ui.Cursor;
import com.sun.glass.ui.Pixels;
import com.sun.glass.ui.Size;

/**
 * MacOSX platform implementation class for Cursor.
 */
final class MacCursor extends Cursor {

    private native static void _initIDs();
    static {
        _initIDs();
    }

    protected MacCursor(int type) {
        super(type);
    }

    protected MacCursor(int x, int y, Pixels pixels) {
        super(x, y, pixels);
    }

    @Override native protected long _createCursor(int x, int y, Pixels pixels);

    void set() {
        int type = getType();
        setVisible(type != CURSOR_NONE);

        switch (type) {
            case CURSOR_NONE:
                break;
            case CURSOR_CUSTOM:
                _setCustom(getNativeCursor());
                break;
            default:
                _set(type);
                break;
        }
    }

    native private void _set(int type);
    native private void _setCustom(long ptr);

    native private static void _setVisible(boolean visible);
    native private static Size _getBestSize(int width, int height);

    static void setVisible_impl(boolean visible) {
        _setVisible(visible);
    }

    static Size getBestSize_impl(int width, int height) {
        return _getBestSize(width, height);
    }
}

