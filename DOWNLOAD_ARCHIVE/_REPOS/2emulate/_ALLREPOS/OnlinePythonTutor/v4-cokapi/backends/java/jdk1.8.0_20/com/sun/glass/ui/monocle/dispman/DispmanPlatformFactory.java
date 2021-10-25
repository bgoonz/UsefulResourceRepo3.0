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

package com.sun.glass.ui.monocle.dispman;

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativePlatformFactory;
import com.sun.glass.ui.monocle.omap.OMAPPlatform;

import java.io.File;

public class DispmanPlatformFactory extends NativePlatformFactory {

    @Override
    protected boolean matches() {
        return new File("/opt/vc/lib/libbcm_host.so").exists();
    }

    @Override
    protected NativePlatform createNativePlatform() {
        return new DispmanPlatform();
    }

}
