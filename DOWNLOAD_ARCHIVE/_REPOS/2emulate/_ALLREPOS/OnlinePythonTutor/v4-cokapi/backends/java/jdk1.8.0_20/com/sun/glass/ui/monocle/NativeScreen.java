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

package com.sun.glass.ui.monocle;

import java.nio.Buffer;
import java.nio.ByteBuffer;

public interface NativeScreen {

    public int getDepth();
    public int getNativeFormat();
    public int getWidth();
    public int getHeight();
    public int getDPI();
    public long getNativeHandle();
    public void shutdown();
    public void uploadPixels(Buffer b,
                             int x, int y, int width, int height, float alpha);

    public void swapBuffers();

    /**
     * Returns a read-only ByteBuffer in the native pixel format containing the screen contents.
     * @return ByteBuffer a read-only ByteBuffer containing the screen contents
     */
    public ByteBuffer getScreenCapture();

    /**
     * An Object to lock against when rendering
     */
    public static final Object framebufferSwapLock = new Object();

}
