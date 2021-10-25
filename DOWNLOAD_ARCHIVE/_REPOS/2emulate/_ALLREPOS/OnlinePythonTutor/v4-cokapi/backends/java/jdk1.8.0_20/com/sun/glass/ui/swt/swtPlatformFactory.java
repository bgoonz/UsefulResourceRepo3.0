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

import com.sun.glass.ui.*;
import com.sun.glass.ui.delegate.ClipboardDelegate;
import com.sun.glass.ui.delegate.MenuBarDelegate;
import com.sun.glass.ui.delegate.MenuDelegate;
import com.sun.glass.ui.delegate.MenuItemDelegate;

public final class swtPlatformFactory extends PlatformFactory {

    @Override
    public Application createApplication(){
        return new SWTApplication();
    }

    @Override
    public MenuBarDelegate createMenuBarDelegate(final MenuBar menubar) {
        return new SWTMenuBarDelegate();
    }

    @Override
    public MenuDelegate createMenuDelegate(final Menu menu) {
        SWTMenuDelegate result = new SWTMenuDelegate(menu);
        return result;
    }

    @Override
    public MenuItemDelegate createMenuItemDelegate(final MenuItem item) {
        return new SWTMenuDelegate();
    }

    public ClipboardDelegate createClipboardDelegate() {
        return clipboardName -> {
            if (Clipboard.SYSTEM.equals(clipboardName)) {
                return new SWTClipboard(clipboardName);
            }
            if (Clipboard.DND.equals(clipboardName)) {
                return new SWTClipboard(clipboardName);
            }
            return null;
        };
    }

}
