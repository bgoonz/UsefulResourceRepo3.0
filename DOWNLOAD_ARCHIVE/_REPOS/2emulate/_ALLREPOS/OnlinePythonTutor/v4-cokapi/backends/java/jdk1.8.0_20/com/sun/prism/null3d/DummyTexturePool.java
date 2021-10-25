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

package com.sun.prism.null3d;

import com.sun.prism.PixelFormat;
import com.sun.prism.impl.BaseResourcePool;
import com.sun.prism.impl.TextureResourcePool;

public class DummyTexturePool extends BaseResourcePool
    implements TextureResourcePool
{
    public static final DummyTexturePool instance = new DummyTexturePool();

    private DummyTexturePool() {
        super(256 * 1024 * 1024);
    }

    public long target() {
        return max() / 2;
    }

    public long size(Object resource) {
        return 0;
    }

    public long estimateTextureSize(int width, int height, PixelFormat format) {
        return 0;
    }

    public long estimateRTTextureSize(int width, int height, boolean hasDepth) {
        return 0;
    }
}
