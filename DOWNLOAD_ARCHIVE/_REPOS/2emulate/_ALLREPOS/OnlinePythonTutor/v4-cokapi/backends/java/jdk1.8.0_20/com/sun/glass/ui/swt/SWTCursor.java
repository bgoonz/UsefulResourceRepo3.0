/*
 * Copyright (c) 2012, 2014, Oracle and/or its affiliates. All rights reserved.
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
package com.sun.glass.ui.swt;

import com.sun.glass.ui.Cursor;
import com.sun.glass.ui.Pixels;

import org.eclipse.swt.graphics.ImageData;
import org.eclipse.swt.widgets.*;

final class SWTCursor extends Cursor {
    org.eclipse.swt.graphics.Cursor cursor;
    protected SWTCursor(int type) {
        super(type);
    }

    protected SWTCursor(int x, int y, Pixels pixels) {
        super(x, y, pixels);
    }

    @Override protected long _createCursor(int x, int y, Pixels pixels) {
        //TODO - dispose custom cursors earlier (ie. when shell closes)
        Display display = Display.getDefault();
        ImageData data = SWTApplication.createImageData(pixels);
        cursor = new org.eclipse.swt.graphics.Cursor(display, data, x, y);
        display.disposeExec(() -> cursor.dispose());
        return 1L;
    }
}
