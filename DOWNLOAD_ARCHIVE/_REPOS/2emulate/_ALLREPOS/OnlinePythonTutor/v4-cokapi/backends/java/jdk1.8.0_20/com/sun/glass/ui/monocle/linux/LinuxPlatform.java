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

package com.sun.glass.ui.monocle.linux;

import com.sun.glass.ui.monocle.NativeCursor;
import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativeScreen;
import com.sun.glass.ui.monocle.NullCursor;
import com.sun.glass.ui.monocle.SoftwareCursor;
import com.sun.glass.ui.monocle.input.InputDeviceRegistry;
import com.sun.glass.utils.NativeLibLoader;

/** LinuxPlatform matches any Linux system */
public class LinuxPlatform extends NativePlatform {

    public LinuxPlatform() {
        LinuxSystem.getLinuxSystem().loadLibrary();
    }

    @Override
    protected InputDeviceRegistry createInputDeviceRegistry() {
        return new LinuxInputDeviceRegistry(false);
    }

    @Override
    protected NativeCursor createCursor() {
        return new SoftwareCursor();
    }

    @Override
    protected NativeScreen createScreen() {
        return new FBDevScreen();
    }
}
