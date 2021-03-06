/*
 * Copyright (c) 2009, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.iio;

import com.sun.javafx.PlatformUtil;
import com.sun.javafx.iio.ImageFormatDescription.Signature;
import com.sun.javafx.iio.bmp.BMPImageLoaderFactory;
import com.sun.javafx.iio.common.ImageTools;
import com.sun.javafx.iio.gif.GIFImageLoaderFactory;
import com.sun.javafx.iio.ios.IosImageLoaderFactory;
import com.sun.javafx.iio.jpeg.JPEGImageLoaderFactory;
import com.sun.javafx.iio.png.PNGImageLoaderFactory;
import java.io.ByteArrayInputStream;
import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.io.SequenceInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;

/**
 * A convenience class for simple image loading. Factories for creating loaders
 * for image formats must be registered with this class.
 */
public class ImageStorage {

    /**
     * An enumeration of supported image types.
     */
    public static enum ImageType {

        /**
         * An image with a single channel of 8-bit valued gray levels.
         */
        GRAY,
        /**
         * An image with with two 8-bit valued channels, one of gray levels,
         * the other of non-premultiplied opacity, ordered as GAGAGA...
         */
        GRAY_ALPHA,
        /**
         * An image with with two 8-bit valued channels, one of gray levels,
         * the other of premultiplied opacity, ordered as GAGAGA...
         */
        GRAY_ALPHA_PRE,
        /**
         * An image with with one 8-bit channel of indexes into a 24-bit
         * lookup table which maps the indexes to 8-bit RGB components.
         */
        PALETTE,
        /**
         * An image with with one 8-bit channel of indexes into a 32-bit
         * lookup table which maps the indexes to 8-bit RGBA components
         * wherein the opacity is not-premultiplied.
         */
        PALETTE_ALPHA,
        /**
         * An image with with one 8-bit channel of indexes into a 32-bit
         * lookup table which maps the indexes to 8-bit RGBA components
         * wherein the opacity is premultiplied.
         */
        PALETTE_ALPHA_PRE,
        /**
         * An image with with one 8-bit channel of indexes into a 24-bit
         * lookup table which maps the indexes to 8-bit RGB components, and
         * a single transparent index to indicate the location of transparent
         * pixels.
         */
        PALETTE_TRANS,
        /**
         * An image with with three 8-bit valued channels of red, green, and
         * blue, respectively, ordered as RGBRGBRGB...
         */
        RGB,
        /**
         * An image with with four 8-bit valued channels of red, green, blue,
         * and non-premultiplied opacity, respectively, ordered as
         * RGBARGBARGBA...
         */
        RGBA,
        /**
         * An image with with four 8-bit valued channels of red, green, blue,
         * and premultiplied opacity, respectively, ordered as
         * RGBARGBARGBA...
         */
        RGBA_PRE
    };
    /**
     * A mapping of lower case file extensions to loader factories.
     */
//    private static HashMap<String, ImageLoaderFactory> loaderFactoriesByExtension;
    /**
     * A mapping of format signature byte sequences to loader factories.
     */
    private static final HashMap<Signature, ImageLoaderFactory> loaderFactoriesBySignature;
    private static final ImageLoaderFactory[] loaderFactories;
    private static final boolean isIOS = PlatformUtil.isIOS();

    private static int maxSignatureLength;

    static {
        if (isIOS) {
            //On iOS we have single factory/ native loader
            //for all image formats
            loaderFactories = new ImageLoaderFactory[]{
                IosImageLoaderFactory.getInstance()
            };
        } else {
            loaderFactories = new ImageLoaderFactory[]{
                GIFImageLoaderFactory.getInstance(),
                JPEGImageLoaderFactory.getInstance(),
                PNGImageLoaderFactory.getInstance(),
                BMPImageLoaderFactory.getInstance()
                // Note: append ImageLoadFactory for any new format here.
            };
        }

//        loaderFactoriesByExtension = new HashMap(numExtensions);
        loaderFactoriesBySignature = new HashMap<Signature, ImageLoaderFactory>(loaderFactories.length);

        for (int i = 0; i < loaderFactories.length; i++) {
            addImageLoaderFactory(loaderFactories[i]);
        }
    }

    public static ImageFormatDescription[] getSupportedDescriptions() {
        ImageFormatDescription[] formats = new ImageFormatDescription[loaderFactories.length];
        for (int i = 0; i < loaderFactories.length; i++) {
            formats[i] = loaderFactories[i].getFormatDescription();
        }
        return (formats);
    }

    /**
     * Returns the number of bands for a raw image of the specified type.
     *
     * @param type the type of image
     * @return the number of bands of a raw image of this type
     */
    public static int getNumBands(ImageType type) {
        int numBands = -1;
        switch (type) {
            case GRAY:
            case PALETTE:
            case PALETTE_ALPHA:
            case PALETTE_ALPHA_PRE:
            case PALETTE_TRANS:
                numBands = 1;
                break;
            case GRAY_ALPHA:
            case GRAY_ALPHA_PRE:
                numBands = 2;
                break;
            case RGB:
                numBands = 3;
                break;
            case RGBA:
            case RGBA_PRE:
                numBands = 4;
                break;
            default:
                throw new IllegalArgumentException("Unknown ImageType " + type);
        }
        return numBands;
    }

    /**
     * Registers an image loader factory. The factory replaces any other factory
     * previously registered for the file extensions (converted to lower case)
     * and signature indicated by the format description.
     *
     * @param factory the factory to register.
     */
    public static void addImageLoaderFactory(ImageLoaderFactory factory) {
        ImageFormatDescription desc = factory.getFormatDescription();
//        String[] extensions = desc.getExtensions();
//        for (int j = 0; j < extensions.length; j++) {
//            loaderFactoriesByExtension.put(extensions[j].toLowerCase(), factory);
//        }

        for (final Signature signature: desc.getSignatures()) {
            loaderFactoriesBySignature.put(signature, factory);
        }

        // invalidate max signature length
        synchronized (ImageStorage.class) {
            maxSignatureLength = -1;
        }
    }

    /**
     * Load all images present in the specified stream. The image will be
     * rescaled according to this algorithm:
     *
     * <code><pre>
     * int finalWidth, finalHeight; // final dimensions
     * int width, height;     // specified maximum dimensions
     * // Use source dimensions as default values.
     * if (width <= 0) {
     *     width = sourceWidth;
     * }
     * if (height <= 0) {
     *     height = sourceHeight;
     * }
     * // If not downscaling reset the dimensions to those of the source.
     * if (!((width < sourceWidth && height <= sourceHeight) ||
     *       (width <= sourceWidth && height < sourceHeight))) {
     *      finalWidth = sourceWidth;
     *      finalHeight = sourceHeight;
     * } else if(preserveAspectRatio) {
     *      double r = (double) sourceWidth / (double) sourceHeight;
     *      finalHeight = (int) ((width / r < height ? width / r : height) + 0.5);
     *      finalWidth = (int) (r * finalHeight + 0.5);
     * } else {
     *      finalWidth = width;
     *      finalHeight = height;
     * }
     * </pre></code>
     *
     * @param input the image data stream.
     * @param listener a listener to receive notifications about image loading.
     * @param width the desired width of the image; if non-positive,
     * the original image width will be used.
     * @param height the desired height of the image; if non-positive, the
     * original image height will be used.
     * @param preserveAspectRatio whether to preserve the width-to-height ratio
     * of the image.
     * @param smooth whether to apply smoothing when downsampling.
     * @return the sequence of all images in the specified source or
     * <code>null</code> on error.
     */
    public static ImageFrame[] loadAll(InputStream input, ImageLoadListener listener,
            int width, int height, boolean preserveAspectRatio,
            float pixelScale, boolean smooth) throws ImageStorageException {
        ImageLoader loader = null;
        try {
            if (isIOS) {
                // no extension/signature recognition done here,
                // we always want the iOS native loader
                loader = IosImageLoaderFactory.getInstance().createImageLoader(input);
            } else {
                loader = getLoaderBySignature(input, listener);
            }
        } catch (IOException e) {
            throw new ImageStorageException(e.getMessage(), e);
        }

        ImageFrame[] images = null;
        if (loader != null) {
            images = loadAll(loader, width, height, preserveAspectRatio, pixelScale, smooth);
        } else {
            throw new ImageStorageException("No loader for image data");
        }

        return images;
    }

    /**
     * Load all images present in the specified input. For more details refer to
     * {@link #loadAll(java.io.InputStream, com.sun.javafx.iio.ImageLoadListener, int, int, boolean, boolean)}.
     */
    public static ImageFrame[] loadAll(String input, ImageLoadListener listener,
            int width, int height, boolean preserveAspectRatio,
            float pixelScale, boolean smooth) throws ImageStorageException {

        if (input == null || input.isEmpty()) {
            throw new ImageStorageException("URL can't be null or empty");
        }

        ImageFrame[] images = null;
        InputStream theStream = null;
        ImageLoader loader = null;

        try {
            try {
                if (pixelScale > 1.9f) {
                    // Use Mac Retina conventions for > 1.9f
                    StringBuilder new_input = new StringBuilder();
                    int last_dot_idx = input.lastIndexOf(".");
                    if (last_dot_idx < 0) last_dot_idx = input.length();
                    new_input.append(input.substring(0, last_dot_idx));
                    new_input.append("@2x");
                    new_input.append(input.substring(last_dot_idx));
                    try {
                        theStream = ImageTools.createInputStream(new_input.toString());
                    } catch (IOException e) {
                    }
                }
                if (theStream == null) {
                    theStream = ImageTools.createInputStream(input);
                    pixelScale = 1.0f;
                }

                if (isIOS) {
                    loader = IosImageLoaderFactory.getInstance().createImageLoader(theStream);
                } else {
                    loader = getLoaderBySignature(theStream, listener);
                }
            } catch (IOException e) {
                throw new ImageStorageException(e.getMessage(), e);
            }

            if (loader != null) {
                images = loadAll(loader, width, height, preserveAspectRatio, pixelScale, smooth);
            } else {
                throw new ImageStorageException("No loader for image data");
            }
        } finally {
            try {
                if (theStream != null) {
                    theStream.close();
                }
            } catch (IOException e) {
            }
        }

        return images;
    }

    private static synchronized int getMaxSignatureLength() {
        if (maxSignatureLength < 0) {
            maxSignatureLength = 0;
            for (final Signature signature:
                    loaderFactoriesBySignature.keySet()) {
                final int signatureLength = signature.getLength();
                if (maxSignatureLength < signatureLength) {
                    maxSignatureLength = signatureLength;
                }
            }
        }

        return maxSignatureLength;
    }

    private static ImageFrame[] loadAll(ImageLoader loader,
            int width, int height, boolean preserveAspectRatio,
            float pixelScale, boolean smooth) throws ImageStorageException {
        ImageFrame[] images = null;
        ArrayList<ImageFrame> list = new ArrayList<ImageFrame>();
        int imageIndex = 0;
        ImageFrame image = null;
        do {
            try {
                image = loader.load(imageIndex++, width, height, preserveAspectRatio, smooth);
            } catch (Exception e) {
                throw new ImageStorageException(e.getMessage(), e);
            }
            if (image != null) {
                image.setPixelScale(pixelScale);
                list.add(image);
            } else {
                break;
            }
        } while (true);
        int numImages = list.size();
        if (numImages > 0) {
            images = new ImageFrame[numImages];
            list.toArray(images);
        }
        return images;
    }

//    private static ImageLoader getLoaderByExtension(String input, ImageLoadListener listener) {
//        ImageLoader loader = null;
//
//        int dotIndex = input.lastIndexOf(".");
//        if (dotIndex != -1) {
//            String extension = input.substring(dotIndex + 1).toLowerCase();
//            Set extensions = loaderFactoriesByExtension.keySet();
//            if (extensions.contains(extension)) {
//                ImageLoaderFactory factory = loaderFactoriesByExtension.get(extension);
//                InputStream stream = ImageTools.createInputStream(input);
//                if (stream != null) {
//                    loader = factory.createImageLoader(stream);
//                    if (listener != null) {
//                        loader.addListener(listener);
//                    }
//                }
//            }
//        }
//
//        return loader;
//    }

    private static ImageLoader getLoaderBySignature(InputStream stream, ImageLoadListener listener) throws IOException {
        byte[] header = new byte[getMaxSignatureLength()];
        ImageTools.readFully(stream, header);

        for (final Entry<Signature, ImageLoaderFactory> factoryRegistration:
                 loaderFactoriesBySignature.entrySet()) {
            if (factoryRegistration.getKey().matches(header)) {
                InputStream headerStream = new ByteArrayInputStream(header);
                InputStream seqStream = new SequenceInputStream(headerStream, stream);
                ImageLoader loader = factoryRegistration.getValue().createImageLoader(seqStream);
                if (listener != null) {
                    loader.addListener(listener);
                }

                return loader;
            }
        }

        // not found
        return null;
    }

    private ImageStorage() {
    }
}
