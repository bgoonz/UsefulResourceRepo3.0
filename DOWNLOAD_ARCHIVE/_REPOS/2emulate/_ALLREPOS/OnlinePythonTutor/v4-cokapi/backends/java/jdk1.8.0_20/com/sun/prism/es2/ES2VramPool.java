/*
 * Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.
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

import com.sun.prism.PixelFormat;
import com.sun.prism.impl.BaseResourcePool;
import com.sun.prism.impl.PrismSettings;
import com.sun.prism.impl.TextureResourcePool;

class ES2VramPool extends BaseResourcePool<ES2TextureData>
    implements TextureResourcePool<ES2TextureData>
{
    static ES2VramPool instance = new ES2VramPool();

    private ES2VramPool() {
        super(PrismSettings.maxVram);
    }

    public long target() {
        return PrismSettings.targetVram;
    }

    public long estimateTextureSize(int width, int height,
                                    PixelFormat format)
    {
        return ((long) width) * ((long) height) *
               ((long) format.getBytesPerPixelUnit());
    }

    public long estimateRTTextureSize(int width, int height,
                                      boolean hasDepth)
    {
        // REMIND: need to deal with size of depth buffer, etc.
        return ((long) width) * ((long) height) * 4L;
    }

    public long size(ES2TextureData resource) {
        return resource.getSize();
    }

    @Override
    public String toString() {
        return "ES2 Vram Pool";
    }
}
