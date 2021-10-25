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

package com.sun.glass.ui.monocle.mx6;

import com.sun.glass.ui.monocle.AcceleratedScreen;
import com.sun.glass.ui.monocle.GLException;
import com.sun.glass.ui.monocle.NativeCursor;
import com.sun.glass.ui.monocle.linux.LinuxPlatform;

public class MX6Platform extends LinuxPlatform {

    @Override
    protected NativeCursor createCursor() {
        return new MX6Cursor();
    }

    @Override
    public synchronized AcceleratedScreen getAcceleratedScreen(int[] attributes)
            throws GLException {
        if (accScreen == null) {
            accScreen = new MX6AcceleratedScreen(attributes);
        }
        return accScreen;
    }

}
