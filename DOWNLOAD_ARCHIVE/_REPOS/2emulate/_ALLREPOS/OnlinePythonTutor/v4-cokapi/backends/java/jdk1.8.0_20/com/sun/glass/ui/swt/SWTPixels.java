/*
 * Copyright (c) 2012, 2014, Oracle and/or its affiliates. All rights reserved.
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
package com.sun.glass.ui.swt;

import com.sun.glass.ui.Pixels;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;

final class SWTPixels extends Pixels {

    public SWTPixels(int width, int height, ByteBuffer data) {
        super(width, height, data);
    }

    public SWTPixels(int width, int height, IntBuffer data) {
        super(width, height, data);
    }
    
    protected SWTPixels(int width, int height, IntBuffer data, float scale) {
        super(width, height, data, scale);
    }

    @Override
    protected void _fillDirectByteBuffer(ByteBuffer bb) {
        //TODO - not implemented
    }
    
    @Override
    protected void _attachInt(long ptr, int w, int h, IntBuffer ints, int[] array, int offset) {
        //TODO - not implemented
    }

    @Override
    protected void _attachByte(long ptr, int w, int h, ByteBuffer bytes, byte[] array, int offset) {
        //TODO - not implemented
    }
}
