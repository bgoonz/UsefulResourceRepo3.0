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

package com.sun.prism.impl.shape;

import com.sun.javafx.geom.RectBounds;
import com.sun.javafx.geom.Shape;
import com.sun.javafx.geom.transform.BaseTransform;
import com.sun.prism.BasicStroke;
import com.sun.prism.impl.PrismSettings;

public class ShapeUtil {

    private static final ShapeRasterizer shapeRasterizer;
    private static final ShapeRasterizer textRasterizer;
    static {
        if (PrismSettings.doNativePisces) {
            shapeRasterizer = new NativePiscesRasterizer();
        } else {
            shapeRasterizer = new OpenPiscesRasterizer();
        }

        if (PrismSettings.doPiscesText || PrismSettings.doOpenPiscesText) {
            textRasterizer = shapeRasterizer;
        } else {
            textRasterizer = null;
        }
    }

    public static MaskData rasterizeShape(Shape shape,
                                          BasicStroke stroke,
                                          RectBounds xformBounds,
                                          BaseTransform xform,
                                          boolean close)
    {
        return shapeRasterizer.getMaskData(shape, stroke, xformBounds, xform, close);
    }

    public static MaskData rasterizeGlyphOutline(Shape shape) {
        return textRasterizer.
            getMaskData(shape, null, null, BaseTransform.IDENTITY_TRANSFORM, true);
    }

    /**
     * Private constructor to prevent instantiation.
     */
    private ShapeUtil() {
    }
}
