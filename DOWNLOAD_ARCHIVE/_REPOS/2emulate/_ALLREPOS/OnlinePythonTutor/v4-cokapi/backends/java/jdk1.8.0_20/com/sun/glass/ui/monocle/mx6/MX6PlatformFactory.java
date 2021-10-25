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

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.NativePlatformFactory;

import java.io.File;

public class MX6PlatformFactory extends NativePlatformFactory {

    @Override
    protected boolean matches() {
        boolean retval = new File("/sys/devices/platform/Vivante GCCore:00").exists() ||
                         new File("/sys/devices/platform/Vivante GCCore").exists();
        return retval;
    }

    @Override
    protected NativePlatform createNativePlatform() {
        return new MX6Platform();
    }

}
