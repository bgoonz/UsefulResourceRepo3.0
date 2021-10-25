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

package javafx.embed.swt;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Cursor;
import org.eclipse.swt.widgets.Display;

import com.sun.javafx.cursor.CursorFrame;
import com.sun.javafx.cursor.ImageCursorFrame;

/**
 * An utility class to translate cursor types between embedded
 * application and SWT.
 *
 */
class SWTCursors {

    private static Cursor createCustomCursor(ImageCursorFrame cursorFrame) {
        /*
        Toolkit awtToolkit = Toolkit.getDefaultToolkit();

        double imageWidth = cursorFrame.getWidth();
        double imageHeight = cursorFrame.getHeight();
        Dimension nativeSize = awtToolkit.getBestCursorSize((int)imageWidth, (int)imageHeight);

        double scaledHotspotX = cursorFrame.getHotspotX() * nativeSize.getWidth() / imageWidth;
        double scaledHotspotY = cursorFrame.getHotspotY() * nativeSize.getHeight() / imageHeight;
        Point hotspot = new Point((int)scaledHotspotX, (int)scaledHotspotY);

        final com.sun.javafx.tk.Toolkit fxToolkit =
                com.sun.javafx.tk.Toolkit.getToolkit();
        BufferedImage awtImage = 
                (BufferedImage) fxToolkit.toExternalImage(
                                              cursorFrame.getPlatformImage(),
                                              BufferedImage.class);

        return awtToolkit.createCustomCursor(awtImage, hotspot, null);
        */
        return null;
    }

    static Cursor embedCursorToCursor(CursorFrame cursorFrame) {
        int id = SWT.CURSOR_ARROW;
        switch (cursorFrame.getCursorType()) {
            case DEFAULT:   id = SWT.CURSOR_ARROW; break;
            case CROSSHAIR: id = SWT.CURSOR_CROSS; break;
            case TEXT:      id = SWT.CURSOR_IBEAM; break;
            case WAIT:      id = SWT.CURSOR_WAIT; break;
            case SW_RESIZE: id = SWT.CURSOR_SIZESW; break;
            case SE_RESIZE: id = SWT.CURSOR_SIZESE; break;
            case NW_RESIZE: id = SWT.CURSOR_SIZENW; break;
            case NE_RESIZE: id = SWT.CURSOR_SIZENE; break;
            case N_RESIZE:  id = SWT.CURSOR_SIZEN; break;
            case S_RESIZE:  id = SWT.CURSOR_SIZES; break;
            case W_RESIZE:  id = SWT.CURSOR_SIZEW; break;
            case E_RESIZE:  id = SWT.CURSOR_SIZEE; break;
            case OPEN_HAND:
            case CLOSED_HAND:
            case HAND:      id = SWT.CURSOR_HAND; break;
            case MOVE:      id = SWT.CURSOR_SIZEALL; break;
            case DISAPPEAR:
                // NOTE: Not implemented
                break;
            case H_RESIZE:  id = SWT.CURSOR_SIZEWE; break;
            case V_RESIZE:  id = SWT.CURSOR_SIZENS; break;
            case NONE:
                return null;
            case IMAGE:
                // RT-27939: custom cursors are not implemented
                // return createCustomCursor((ImageCursorFrame) cursorFrame);
        }
        Display display = Display.getCurrent();
        return display != null ? display.getSystemCursor(id) : null;
    }
}
