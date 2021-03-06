/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.iio.bmp;

import com.sun.javafx.iio.*;
import com.sun.javafx.iio.common.*;
import java.io.*;
import java.nio.ByteBuffer;

final class BMPDescriptor extends ImageDescriptor {

    static final String formatName = "BMP";
    static final String extensions[] = { "bmp" };
    static final Signature signatures[] = {new Signature((byte)0x42, (byte)0x4D)};
    static final ImageDescriptor theInstance = new BMPDescriptor();

    private BMPDescriptor() {
        super(formatName, extensions, signatures);
    }
}

// the difference of LEInputStream from DataInputStream is Endianness
final class LEInputStream {

    final public InputStream in;

    LEInputStream(InputStream is) {
        in = is;
    }

    public final short readShort() throws IOException {
        int ch1 = in.read();
        int ch2 = in.read();
        if ((ch1 | ch2) < 0) {
            throw new EOFException();
        }
        return (short)((ch2 << 8) + ch1);
    }

    public final int readInt() throws IOException {
        int ch1 = in.read();
        int ch2 = in.read();
        int ch3 = in.read();
        int ch4 = in.read();
        if ((ch1 | ch2 | ch3 | ch4) < 0) {
            throw new EOFException();
        }
        return ((ch4 << 24) + (ch3 << 16) + (ch2 << 8) + ch1);
    }

    public final void skipBytes(int n) throws IOException {
        int m = (int)in.skip(n);
        if (m < n) {
            throw new EOFException();
        }
    }
}

final class BitmapInfoHeader {

    static final int BIH_SIZE = 40;
    static final int BIH4_SIZE = 108;
    static final int BIH5_SIZE = 124;
    static final int BI_RGB = 0;
    static final int BI_RLE8 = 1;
    static final int BI_RLE4 = 2;
    static final int BI_BITFIELDS = 3;
    static final int BI_JPEG = 4;
    static final int BI_PNG = 5;

    final int    biSize;
    final int    biWidth;
    final int    biHeight;
    final short  biPlanes;
    final short  biBitCount;
    final int    biCompression;
    final int    biSizeImage;
    final int    biXPelsPerMeter;
    final int    biYPelsPerMeter;
    final int    biClrUsed;
    final int    biClrImportant;

    BitmapInfoHeader(LEInputStream data) throws IOException {
        biSize = data.readInt();
        biWidth = data.readInt();
        biHeight = data.readInt();
        biPlanes = data.readShort();
        biBitCount = data.readShort();
        biCompression = data.readInt();
        biSizeImage = data.readInt();
        biXPelsPerMeter = data.readInt();
        biYPelsPerMeter = data.readInt();
        biClrUsed = data.readInt();
        biClrImportant = data.readInt();

        if (biSize > BIH_SIZE) {
            if (biSize == BIH4_SIZE || biSize == BIH5_SIZE) {
                data.skipBytes(biSize - BIH_SIZE);
            } else {
                throw new IOException("BitmapInfoHeader is corrupt");
            }
        }
        validate();
    }

    void validate() throws IOException {
        if (biBitCount < 1 ||
                biCompression == BI_JPEG || biCompression == BI_PNG)
        {
            throw new IOException("Unsupported BMP image: " +
                    "Embedded JPEG or PNG images are not supported");
        }

        switch (biCompression) {
            case BI_RLE4:
                if (biBitCount != 4) {
                    throw new IOException("Invalid BMP image: " +
                            "Only 4 bpp images can be RLE4 compressed");
                }
                break;
            case BI_RLE8:
                if (biBitCount != 8) {
                    throw new IOException("Invalid BMP image: " +
                            "Only 8 bpp images can be RLE8 compressed");
                }
                break;
            case BI_BITFIELDS:
                throw new IOException("Unsupported BMP image: " +
                        "Bitfields BMP files are not supported");
            case BI_RGB:
                break;
            default:
                throw new IOException("Unknown BMP compression type");
        }
    }
}

final class BMPImageLoader extends ImageLoaderImpl {

    static final short BM = 0x4D42;
    static final int BFH_SIZE = 14;

    final LEInputStream data;

    int   bfSize;
    int   bfOffBits;
    byte  bgra_palette[];
    BitmapInfoHeader bih;

    BMPImageLoader(InputStream input) throws IOException {
        super(BMPDescriptor.theInstance);
        data = new LEInputStream(input);
        if (data.readShort() != BM) {
            throw new IOException("Invalid BMP file signature");
        }
        readHeader();
    }

    private void readHeader() throws IOException {
        bfSize = data.readInt();
        data.skipBytes(4); // 32  bits reserved
        bfOffBits = data.readInt();
        bih = new BitmapInfoHeader(data);
        if (bfOffBits < bih.biSize + BFH_SIZE) {
            throw new IOException("Invalid bitmap bits offset");
        }

        if (bih.biSize + BFH_SIZE != bfOffBits) {
            int length = bfOffBits - bih.biSize - BFH_SIZE;
            int paletteSize = length / 4;
            bgra_palette = new byte[paletteSize * 4];
            int read = data.in.read(bgra_palette);
            // goto bitmap bits
            if (read < length) {
                data.in.skip(length - read);
            }
        }
    }

    @Override
    public void dispose() {
    }

    private void readRLE(byte[] image, int rowLength, int hght, boolean isRLE4)
            throws IOException
    {
        int imgSize = bih.biSizeImage;
        if (imgSize == 0) {
            imgSize = bfSize - bfOffBits;
        }
        byte imgData[] = new byte[imgSize];
        ImageTools.readFully(data.in, imgData);

        boolean isBottomUp = bih.biHeight > 0;
        int line = isBottomUp ? hght - 1 : 0;
        int i = 0;
        int dstOffset = line * rowLength;
        while (i < imgSize) {
            int b1 = getByte(imgData, i++);
            int b2 = getByte(imgData, i++);
            if (b1 == 0) { // absolute
                switch (b2) {
                    case 0: // end of line
                        line += isBottomUp ? -1 : 1;
                        dstOffset = line * rowLength;
                        break;
                    case 1: // end of bitmap
                        return;
                    case 2: // delta
                        int deltaX = getByte(imgData, i++);
                        int deltaY = getByte(imgData, i++);
                        line += deltaY;
                        dstOffset += (deltaY * rowLength);
                        dstOffset += deltaX * 3;
                        break;
                    default:
                        int indexData = 0;
                        int index;
                        for (int p = 0; p < b2; p++) {
                            if (isRLE4) {
                                if ((p & 1) == 0) {
                                    indexData = getByte(imgData, i++);
                                    index = (indexData & 0xf0) >> 4;
                                } else {
                                    index = indexData & 0x0f;
                                }
                            } else {
                                index = getByte(imgData, i++);
                            }
                            dstOffset = setRGBFromPalette(image, dstOffset, index);
                        }
                        if (isRLE4) {
                            if ((b2 & 3) == 1 || (b2 & 3) == 2) i++;
                        } else {
                            if ((b2 & 1) == 1) i++;
                        }
                        break;
                }
            } else { // encoded
                if (isRLE4) {
                    int index1 = (b2 & 0xf0) >> 4;
                    int index2 = b2 & 0x0f;
                    for (int p = 0; p < b1; p++) {
                        dstOffset = setRGBFromPalette(image, dstOffset,
                                (p & 1) == 0 ? index1 : index2);
                    }
                } else {
                    for (int p = 0; p < b1; p++) {
                        dstOffset = setRGBFromPalette(image, dstOffset, b2);
                    }
                }
            }
        }

    }

    private int setRGBFromPalette(byte[] image, int dstOffset, int index) {
        index *= 4;
        image[dstOffset++] = bgra_palette[index + 2];
        image[dstOffset++] = bgra_palette[index + 1];
        image[dstOffset++] = bgra_palette[index];
        return dstOffset;
    }

    private void readPackedBits(byte[] image, int rowLength, int hght)
            throws IOException
    {
        int pixPerByte = 8 / bih.biBitCount;
        int bytesPerLine = (bih.biWidth + pixPerByte - 1) / pixPerByte;
        int srcStride = (bytesPerLine + 3) & ~3;
        int bitMask = (1 << bih.biBitCount) - 1;

        byte lineBuf[] = new byte[srcStride];
        for (int i = 0; i != hght; ++i) {
            ImageTools.readFully(data.in, lineBuf);
            int line = bih.biHeight < 0 ? i : hght - i - 1;
            int dstOffset = line * rowLength;

            for (int x = 0; x != bih.biWidth; x++) {
                int bitnum = x * bih.biBitCount;
                int element = lineBuf[bitnum / 8];
                int shift = 8 - (bitnum & 7) - bih.biBitCount;
                int index = (element >> shift) & bitMask;
                dstOffset = setRGBFromPalette(image, dstOffset, index);
            }
        }
    }

    private static int getWord(byte[] buf, int pos) {
        return ((buf[pos    ] & 0xff)     ) |
               ((buf[pos + 1] & 0xff) << 8);
    }

    private static int getByte(byte[] buf, int pos) {
        return buf[pos] & 0xff;
    }

    private byte convertFrom5to8Bit(int i) {
        byte b = (byte)(i & 0x1F);
        return (byte)(b << 3 | b >> 2);
    }

    private void read16Bit555(byte[] image, int rowLength, int hght) throws IOException {
        int bytesPerLine = bih.biWidth * 2;
        int srcStride = (bytesPerLine + 3) & ~3;
        byte lineBuf[] = new byte[srcStride];
        for (int i = 0; i != hght; ++i) {
            ImageTools.readFully(data.in, lineBuf);
            int line = bih.biHeight < 0 ? i : hght - i - 1;
            int dstOffset = line * rowLength;

            for (int x = 0; x != bih.biWidth; x++) {
                int element = getWord(lineBuf, x * 2);
                image[dstOffset++] = convertFrom5to8Bit(element >> 10);
                image[dstOffset++] = convertFrom5to8Bit(element >> 5);
                image[dstOffset++] = convertFrom5to8Bit(element);
            }
        }
    }

    private void read32BitRGB(byte[] image, int rowLength, int hght) throws IOException {
        int bytesPerLine = bih.biWidth * 4;
        byte lineBuf[] = new byte[bytesPerLine];
        for (int i = 0; i != hght; ++i) {
            ImageTools.readFully(data.in, lineBuf);
            int line = bih.biHeight < 0 ? i : hght - i - 1;
            int dstOff = line * rowLength;

            for (int x = 0; x != bih.biWidth; x++) {
                int srcOff = x * 4;
                image[dstOff++] = lineBuf[srcOff + 2];
                image[dstOff++] = lineBuf[srcOff + 1];
                image[dstOff++] = lineBuf[srcOff    ];
            }
        }
    }

    private void read24Bit(byte[] image, int rowLength, int hght) throws IOException {
        int bmpStride = (rowLength + 3) & ~3;
        int padding = bmpStride - rowLength;

        for (int i = 0; i != hght; ++i) {
            int line = bih.biHeight < 0 ? i : hght - i - 1;
            int lineOffset = line * rowLength;
            ImageTools.readFully(data.in, image, lineOffset, rowLength);
            data.skipBytes(padding);
            BGRtoRGB(image, lineOffset, rowLength);
        }
    }

    static void BGRtoRGB(byte data[], int pos, int size) {
        for (int sz = size / 3; sz != 0; --sz) {
            byte b = data[pos], r = data[pos + 2];
            data[pos + 2] = b; data[pos] = r;
            pos += 3;
        }
    }

    public ImageFrame load(int imageIndex, int width, int height,
            boolean preserveAspectRatio, boolean smooth) throws IOException
    {
        if (0 != imageIndex) {
            return null;
        }

        int hght = Math.abs(bih.biHeight);

        if ((width > 0 && width != bih.biWidth) ||
            (height > 0 && height != hght))
        {
            throw new IOException("scaling for BMP is not supported");
        }

        // Pass image metadata to any listeners.
        ImageMetadata imageMetadata = new ImageMetadata(null, Boolean.TRUE,
            null, null, null, null, bih.biWidth, hght,
            null, null, null);
        updateImageMetadata(imageMetadata);

        int stride = bih.biWidth * 3;

        byte image[] = new byte[stride * hght];

        switch (bih.biBitCount) {
            case 1:
                readPackedBits(image, stride, hght);
                break;
            case 4:
                if (bih.biCompression == BitmapInfoHeader.BI_RLE4) {
                    readRLE(image, stride, hght, true);
                } else {
                    readPackedBits(image, stride, hght);
                }
                break;
            case 8:
                if (bih.biCompression == BitmapInfoHeader.BI_RLE8) {
                    readRLE(image, stride, hght, false);
                } else {
                    readPackedBits(image, stride, hght);
                }
                break;
            case 16:
                read16Bit555(image, stride, hght);
                break;
            case 32:
                read32BitRGB(image, stride, hght);
                break;
            case 24:
                read24Bit(image, stride, hght);
                break;
            default:
                throw new IOException("Unknown BMP bit depth");
        }

        return new ImageFrame(ImageStorage.ImageType.RGB, ByteBuffer.wrap(image),
                bih.biWidth, hght, stride, null, null);
    }
}

public final class BMPImageLoaderFactory implements ImageLoaderFactory {

    private static final BMPImageLoaderFactory theInstance =
            new BMPImageLoaderFactory();

    public static ImageLoaderFactory getInstance() {
        return theInstance;
    }

    public ImageFormatDescription getFormatDescription() {
        return BMPDescriptor.theInstance;
    }

    public ImageLoader createImageLoader(InputStream input) throws IOException {
        return new BMPImageLoader(input);
    }
}
