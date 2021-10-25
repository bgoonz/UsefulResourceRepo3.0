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

package com.sun.glass.ui.monocle.vnc;

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativePlatformFactory;

public class VNCPlatformFactory extends NativePlatformFactory {

    @Override
    protected boolean matches() {
        return true;
    }

    @Override
    protected NativePlatform createNativePlatform() {
        return new VNCPlatform();
    }

}
