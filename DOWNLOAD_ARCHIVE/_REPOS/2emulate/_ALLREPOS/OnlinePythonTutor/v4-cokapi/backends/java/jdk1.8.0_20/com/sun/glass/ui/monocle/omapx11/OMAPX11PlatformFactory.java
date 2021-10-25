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

package com.sun.glass.ui.monocle.omapx11;

import com.sun.glass.ui.monocle.NativePlatform;
import com.sun.glass.ui.monocle.omap.OMAPPlatformFactory;

public class OMAPX11PlatformFactory extends OMAPPlatformFactory {

    @Override
    protected NativePlatform createNativePlatform() {
        return new OMAPX11Platform();
    }

}
