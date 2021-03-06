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

package com.sun.glass.ui.monocle;

import java.io.IOException;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;
import java.nio.channels.WritableByteChannel;

/**
 * A ByteBuffer used as a rendering target for window composition. Stored as
 * 32-bit and can write to a 16-bit or 32-bit target.
 */
public class Framebuffer {

    private ByteBuffer bb;
    private int width;
    private int height;
    private int byteDepth;
    private boolean receivedData;
    private ByteBuffer clearBuffer;
    private ByteBuffer lineByteBuffer;
    private Buffer linePixelBuffer;
    private int address;

    public Framebuffer(ByteBuffer bb, int width, int height, int depth, boolean clear) {
        this.bb = bb;
        this.width = width;
        this.height = height;
        this.byteDepth = depth >>> 3;
        if (clear) {
            clearBuffer = ByteBuffer.allocate(width * 4);
        }
    }

    public ByteBuffer getBuffer() {
        bb.clear();
        return bb;
    }

    public void reset() {
        receivedData = false;
    }

    public void setStartAddress(int address) {
        this.address = address;
    }

    public void clearBufferContents() {
        bb.clear();
        bb.position(address);
        bb.limit(address + width * height * 4);
        for (int i = 0; i < height; i++) {
            clearBuffer.clear();
            bb.put(clearBuffer);
        }
    }

    public boolean hasReceivedData() {
        return receivedData;
    }

    public void composePixels(Buffer src,
                              int pX, int pY, int pW, int pH,
                              float alpha) {
        int stride = pW * 4;
        int start = 0;
        if (pX < 0) {
            start -= pX * 4;
            pW += pX;
            pX = 0;
        }
        if (pY < 0) {
            start -= pY * stride;
            pH += pY;
            pY = 0;
        }
        if (pX + pW > width) {
            pW = width - pX;
        }
        if (pY + pH > height) {
            pH = height - pY;
        }
        int alphaMultiplier = Math.round(Math.min(alpha, 1f) * 256f);
        if (pW < 0 || pH < 0 || alphaMultiplier <= 0) {
            return;
        }
        // If clearBuffer is set, clear the buffer on the first upload of each
        // frame, unless that upload already overwrites the whole buffer.
        if (!receivedData && clearBuffer != null) {
            if (alphaMultiplier < 256 || start != 0 || pW != width || pH != height) {
                clearBufferContents();
            }
        }
        bb.position(address + pX * 4 + pY * width * 4);
        bb.limit(bb.capacity());
        // TODO: use a back buffer in Java when double buffering is not available in /dev/fb0
        // TODO: move alpha blending into native
        if (receivedData) {
            IntBuffer srcPixels;
            if (src instanceof IntBuffer) {
                srcPixels = ((IntBuffer) src);
            } else {
                srcPixels = ((ByteBuffer) src).asIntBuffer();
            }
            IntBuffer dstPixels = bb.asIntBuffer();
            for (int i = 0; i < pH; i++) {
                int dstPosition = i * width;
                int srcPosition = (start + i * stride) >> 2;
                if (alphaMultiplier >= 255) {
                    for (int j = 0; j < pW; j++) {
                        int srcPixel = srcPixels.get(srcPosition + j);
                        int srcA = (srcPixel >> 24) & 0xff;
                        if (srcA == 0xff) {
                            dstPixels.put(dstPosition + j, srcPixel);
                        } else {
                            dstPixels.put(dstPosition + j,
                                          blend32(srcPixel,
                                                  dstPixels.get(dstPosition + j),
                                                  256));
                        }
                    }
                } else {
                    for (int j = 0; j < pW; j++) {
                        dstPixels.put(dstPosition + j,
                                      blend32(srcPixels.get(srcPosition + j),
                                              dstPixels.get(dstPosition + j),
                                              alphaMultiplier));
                    }
                }
            }
        } else {
            if (pW == width) {
                if (src instanceof ByteBuffer) {
                    src.position(start);
                    src.limit(stride * pH);
                    bb.put((ByteBuffer) src);
                } else {
                    IntBuffer srcPixels = (IntBuffer) src;
                    srcPixels.position(start >> 2);
                    srcPixels.limit((stride * pH) >> 2);
                    bb.asIntBuffer().put(srcPixels);
                }
            } else {
                if (src instanceof ByteBuffer) {
                    for (int i = 0; i < pH; i++) {
                        bb.position(address + pX * 4 + (pY + i) * width * 4);
                        src.limit(start + i * stride + pW * 4);
                        src.position(start + i * stride);
                        bb.put((ByteBuffer) src);
                    }
                } else {
                    bb.position(address);
                    bb.limit(address + width * height * 4);
                    IntBuffer dstPixels = bb.asIntBuffer();
                    IntBuffer srcPixels = (IntBuffer) src;
                    for (int i = 0; i < pH; i++) {
                        dstPixels.position(pX + (pY + i) * width);
                        srcPixels.limit(pW + ((start + i * stride) >> 2));
                        srcPixels.position((start + i * stride) >> 2);
                        dstPixels.put((IntBuffer) src);
                    }
                }
            }
        }
        receivedData = true;
    }

    private static int blend32(int src, int dst, int alphaMultiplier) {
        int srcA = (((src >> 24) & 0xff) * alphaMultiplier) >> 8;
        int srcR = (src >> 16) & 0xff;
        int srcG = (src >> 8) & 0xff;
        int srcB = src & 0xff;
        int dstA = (dst >> 24) & 0xff;
        int dstR = (dst >> 16) & 0xff;
        int dstG = (dst >> 8) & 0xff;
        int dstB = dst & 0xff;
        dstR = (srcR * srcA / 255) + (dstR * dstA * (255 - srcA) / 0xff00);
        dstG = (srcG * srcA / 255) + (dstG * dstA * (255 - srcA) / 0xff00);
        dstB = (srcB * srcA / 255) + (dstB * dstA * (255 - srcA) / 0xff00);
        dstA = srcA + (dstA * (255 - srcA) / 0xff);
        return (dstA << 24)| (dstR << 16) | (dstG << 8) | dstB;
    }

    public void write(WritableByteChannel out) throws IOException {
        bb.clear();
        if (byteDepth == 4) {
            out.write(bb);
        } else if (byteDepth == 2) {
            if (lineByteBuffer == null) {
                lineByteBuffer = ByteBuffer.allocate(width * 2);
                lineByteBuffer.order(ByteOrder.nativeOrder());
                linePixelBuffer = lineByteBuffer.asShortBuffer();
            }
            IntBuffer srcPixels = bb.asIntBuffer();
            ShortBuffer shortBuffer = (ShortBuffer) linePixelBuffer;
            for (int i = 0; i < height; i++) {
                shortBuffer.clear();
                for (int j = 0; j < width; j++) {
                    int pixel32 = srcPixels.get();
                    int r = ((((pixel32 >> 19) & 31) * 539219) >> 8) & (31 << 11);
                    int g = ((((pixel32 >> 10) & 63) * 265395) >> 13) & (63 << 5);
                    int b = (((pixel32 >> 3) & 31) * 539219) >> 19;
                    int pixel16 = r | g | b;
                    shortBuffer.put((short) pixel16);
                }
                lineByteBuffer.clear();
                out.write(lineByteBuffer);
            }
        }
    }

    public void copyToBuffer(ByteBuffer out) {
        bb.clear();
        if (byteDepth == 4) {
            out.put(bb);
        } else if (byteDepth == 2) {
            if (lineByteBuffer == null) {
                lineByteBuffer = ByteBuffer.allocate(width * 2);
                lineByteBuffer.order(ByteOrder.nativeOrder());
                linePixelBuffer = lineByteBuffer.asShortBuffer();
            }
            IntBuffer srcPixels = bb.asIntBuffer();
            ShortBuffer shortBuffer = (ShortBuffer) linePixelBuffer;
            for (int i = 0; i < height; i++) {
                shortBuffer.clear();
                for (int j = 0; j < width; j++) {
                    int pixel32 = srcPixels.get();
                    int r = ((((pixel32 >> 19) & 31) * 539219) >> 8) & (31 << 11);
                    int g = ((((pixel32 >> 10) & 63) * 265395) >> 13) & (63 << 5);
                    int b = (((pixel32 >> 3) & 31) * 539219) >> 19;
                    int pixel16 = r | g | b;
                    shortBuffer.put((short) pixel16);
                }
                lineByteBuffer.clear();
                out.put(lineByteBuffer);
            }
        }
    }

}
