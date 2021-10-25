/*
 * Copyright (c) 2009, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.robot;

import java.nio.Buffer;
import java.nio.IntBuffer;

/**
 * This class encapsulates a bucket of pixels stored in IntArgbPre format.
 * 
 */
public class FXRobotImage {
    private final IntBuffer pixelBuffer;
    private final int width;
    private final int height;
    private final int scanlineStride;

    public static FXRobotImage create(Buffer pixelBuffer,
                                      int width, int height, int scanlineStride)
    {
        return new FXRobotImage(pixelBuffer, width, height, scanlineStride);
    }

    private FXRobotImage(Buffer pixelBuffer,
                         int width, int height, int scanlineStride)
    {
        if (pixelBuffer == null) {
            throw new IllegalArgumentException("Pixel buffer must be non-null");
        }
        if (width <= 0 || height <= 0) {
            throw new IllegalArgumentException("Image dimensions must be > 0");
        }
        this.pixelBuffer = (IntBuffer)pixelBuffer;
        this.width = width;
        this.height = height;
        this.scanlineStride = scanlineStride;
    }

    /**
     * Returns {@link java.nio.Buffer} which holds the data.
     * 
     * @return {@code Buffer} holding the data for this image
     */
    public Buffer getPixelBuffer() {
        return pixelBuffer;
    }

    /**
     * Width of the image.
     * @return width
     */
    public int getWidth() {
        return width;
    }

    /**
     * Height of the image
     * @return height
     */
    public int getHeight() {
        return height;
    }

    /**
     * Returns scanline stride of this image in bytes
     * 
     * @return scan line stride in bytes
     */
    public int getScanlineStride() {
        return scanlineStride;
    }

    /**
     * Returns pixel stride of this image in bytes.
     *
     * @return pixel stride in bytes
     */
    public int getPixelStride() {
        return 4;
    }

    /**
     * Returns pixel (in IntArgbPre) format (Argb premultiplied).
     *
     * @param x coordinate
     * @param y coordinate
     * @return pixel in IntArgbPre format
     */
    public int getArgbPre(int x, int y) {
        if (x < 0 || x >= width || y < 0 || y >= height) {
            throw new IllegalArgumentException("x,y must be >0, <width, height");
        }
        return pixelBuffer.get(x + y*scanlineStride/4);
    }

    /**
     * Returns pixel in IntArgb format (non-premultiplied).
     * 
     * @param x coordinate
     * @param y coordinate
     * @return pixel in IntArgb format
     */
    public int getArgb(int x, int y) {
        if (x < 0 || x >= width || y < 0 || y >= height) {
            throw new IllegalArgumentException("x,y must be >0, <width, height");
        }
        int argb = pixelBuffer.get(x + y*scanlineStride/4);
        if ((argb >> 24) == -1) {
            return argb;
        }
        int a = argb >>> 24;
        int r = (argb >> 16) & 0xff;
        int g = (argb >>  8) & 0xff;
        int b = (argb      ) & 0xff;
        int a2 = a + (a >> 7);
        r = (r * a2) >> 8;
        g = (g * a2) >> 8;
        b = (b * a2) >> 8;
        return ((a << 24) | (r << 16) | (g << 8) | (b));
    }

    @Override
    public String toString() {
        return super.toString() +
            " [format=INT_ARGB_PRE width=" + width + " height=" + height +
            " scanlineStride=" + scanlineStride  +" pixelStride=" + getPixelStride()+
            " pixelBuffer=" + pixelBuffer + "]";
    }
}
