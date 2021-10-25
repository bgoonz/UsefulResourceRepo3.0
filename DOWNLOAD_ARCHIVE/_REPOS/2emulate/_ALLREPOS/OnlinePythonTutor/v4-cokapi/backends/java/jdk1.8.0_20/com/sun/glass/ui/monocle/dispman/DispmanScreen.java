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

import com.sun.glass.ui.monocle.linux.FBDevScreen;
import com.sun.glass.ui.monocle.linux.LinuxSystem;

public class DispmanScreen extends FBDevScreen {

    private native void wrapNativeSymbols();

    public DispmanScreen() {
        super();
        wrapNativeSymbols();
    }
}
