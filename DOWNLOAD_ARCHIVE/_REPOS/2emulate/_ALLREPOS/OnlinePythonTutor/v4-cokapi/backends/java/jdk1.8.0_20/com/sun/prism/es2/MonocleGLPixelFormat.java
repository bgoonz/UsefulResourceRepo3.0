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

package com.sun.prism.es2;

import com.sun.glass.ui.monocle.EGL;
import com.sun.glass.ui.monocle.NativeScreen;
import com.sun.glass.ui.monocle.NativePlatformFactory;

class MonocleGLPixelFormat extends GLPixelFormat {

    MonocleGLPixelFormat(long nativeScreen, Attributes attrs) {
        super(nativeScreen, attrs);
    }
}
