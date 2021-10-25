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

package com.sun.prism.sw;

import com.sun.prism.PixelFormat;
import com.sun.prism.impl.BaseResourcePool;
import com.sun.prism.impl.PrismSettings;
import com.sun.prism.impl.TextureResourcePool;

class SWTexturePool extends BaseResourcePool<SWTexture>
    implements TextureResourcePool<SWTexture>
{
    static final SWTexturePool instance = new SWTexturePool();

    private static long maxVram() {
        long heapmax = Runtime.getRuntime().maxMemory();
        long setmax = PrismSettings.maxVram;
        return Math.min(heapmax / 4, setmax);
    }

    final long targetVram;

    private SWTexturePool() {
        super(null, maxVram());
        targetVram = Math.min(max() / 2, PrismSettings.targetVram);
    }

    public long target() {
        return targetVram;
    }

    @Override
    public long used() {
//        long heapfree = Runtime.getRuntime().freeMemory();
//        long managedfree = max() - managed();
//        return max() - Math.min(heapfree, managedfree);
        return 0;
    }

    public long size(SWTexture resource) {
        long size = resource.getPhysicalWidth();
        size *= resource.getPhysicalHeight();
        if (resource instanceof SWArgbPreTexture) {
            size *= 4L;
        }
        return size;
    }

    public long estimateTextureSize(int width, int height, PixelFormat format) {
        switch (format) {
            case BYTE_ALPHA:
                return ((long) width) * ((long) height);
            default:
                return ((long) width) * ((long) height) * 4L;
        }
    }

    public long estimateRTTextureSize(int width, int height, boolean hasDepth) {
        return ((long) width) * ((long) height) * 4L;
    }
}
