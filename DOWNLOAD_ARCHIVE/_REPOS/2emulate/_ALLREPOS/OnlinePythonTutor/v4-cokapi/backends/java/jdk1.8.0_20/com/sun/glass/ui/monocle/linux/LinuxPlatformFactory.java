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

package com.sun.glass.ui.monocle.linux;

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativePlatformFactory;

import java.security.AccessController;
import java.security.PrivilegedAction;

public class LinuxPlatformFactory extends NativePlatformFactory {

    @Override
    protected boolean matches() {
        String os = AccessController.doPrivileged(
                (PrivilegedAction<String>) () -> System.getProperty("os.name"));
        return os != null && os.equals("Linux");
    }

    @Override
    protected NativePlatform createNativePlatform() {
        return new LinuxPlatform();
    }
}
