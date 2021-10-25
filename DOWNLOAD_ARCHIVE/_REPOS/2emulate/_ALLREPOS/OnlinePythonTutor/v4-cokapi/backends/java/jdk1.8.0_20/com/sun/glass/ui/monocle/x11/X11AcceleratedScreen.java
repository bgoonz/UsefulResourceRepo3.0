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

package com.sun.glass.ui.monocle.x11;

import com.sun.glass.ui.monocle.AcceleratedScreen;
import com.sun.glass.ui.monocle.GLException;
import com.sun.glass.ui.monocle.NativePlatformFactory;
import com.sun.glass.ui.monocle.linux.LinuxSystem;

import java.security.AccessController;
import java.security.PrivilegedAction;

public class X11AcceleratedScreen extends AcceleratedScreen {
    private X.XDisplay nativeDisplay;

    public X11AcceleratedScreen(int[] attributes) throws GLException {
        super(attributes);
    }

    @Override
    protected long platformGetNativeDisplay() {
        if (nativeDisplay == null) {
            boolean doMaliWorkaround =
                    AccessController.doPrivileged(
                            (PrivilegedAction<Boolean>) () ->
                                    Boolean.getBoolean(
                                            "monocle.maliSignedStruct"));
            X.XDisplay display = new X.XDisplay(X.XOpenDisplay(null));
            if (doMaliWorkaround) {
                long address = 0x7000000;
                nativeDisplay = new X.XDisplay(
                        ls.mmap(address, display.sizeof(),
                                LinuxSystem.PROT_READ | LinuxSystem.PROT_WRITE,
                                LinuxSystem.MAP_PRIVATE
                                        | LinuxSystem.MAP_ANONYMOUS,
                                -1, 0)
                );
                ls.memcpy(nativeDisplay.p, display.p, display.sizeof());
            } else {
                nativeDisplay = display;
            }
        }
        return nativeDisplay.p;
    }

    @Override
    protected long platformGetNativeWindow() {
        return NativePlatformFactory.getNativePlatform()
                .getScreen().getNativeHandle();
    }

}
