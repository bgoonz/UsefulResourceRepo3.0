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

package com.sun.glass.ui.monocle.dispman;

import com.sun.glass.ui.monocle.AcceleratedScreen;
import com.sun.glass.ui.monocle.GLException;

import java.security.AccessController;
import java.security.PrivilegedAction;

public class DispmanAcceleratedScreen extends AcceleratedScreen {

    public DispmanAcceleratedScreen(int[] attributes) throws GLException {
        super(attributes);
    }

    private native long _platformGetNativeWindow(int displayID, int layerID);

    @Override
    protected long platformGetNativeWindow() {
        int displayID = AccessController.doPrivileged(
                (PrivilegedAction<Integer>)
                        () -> Integer.getInteger("dispman.display", 0 /* LCD */));
        int layerID = AccessController.doPrivileged(
                (PrivilegedAction<Integer>)
                        () -> Integer.getInteger("dispman.layer", 1));
        return _platformGetNativeWindow(displayID, layerID);
    }
}
