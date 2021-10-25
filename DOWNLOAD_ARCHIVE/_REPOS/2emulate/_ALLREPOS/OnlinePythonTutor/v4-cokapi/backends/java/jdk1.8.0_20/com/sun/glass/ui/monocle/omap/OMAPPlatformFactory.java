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

package com.sun.glass.ui.monocle.omap;

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativePlatformFactory;

import java.io.File;

public class OMAPPlatformFactory extends NativePlatformFactory {

    @Override
    protected boolean matches() {
        return new File("/sys/devices/omapdss").exists();
    }

    @Override
    protected NativePlatform createNativePlatform() {
        return new OMAPPlatform();
    }

}
