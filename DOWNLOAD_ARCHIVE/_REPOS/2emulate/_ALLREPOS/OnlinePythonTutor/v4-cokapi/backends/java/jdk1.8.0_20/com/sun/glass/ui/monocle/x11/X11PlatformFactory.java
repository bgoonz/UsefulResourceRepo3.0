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

package com.sun.glass.ui.monocle.x11;

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativePlatformFactory;

import java.security.AccessController;
import java.security.PrivilegedAction;

public class X11PlatformFactory extends NativePlatformFactory {

    @Override
    protected boolean matches() {
        String display = AccessController.doPrivileged(
                (PrivilegedAction<String>) () -> System.getenv("DISPLAY"));
        return display != null;
    }

    @Override
    protected NativePlatform createNativePlatform() {
        return new X11Platform();
    }

}
