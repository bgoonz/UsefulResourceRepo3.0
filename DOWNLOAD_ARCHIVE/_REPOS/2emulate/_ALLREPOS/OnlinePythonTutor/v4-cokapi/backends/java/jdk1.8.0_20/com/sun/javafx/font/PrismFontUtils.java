/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.font;

import com.sun.javafx.geom.transform.BaseTransform;

public class PrismFontUtils {

    private PrismFontUtils() {
    }

    static Metrics getFontMetrics(PGFont font) {
        FontStrike strike = font.getStrike(BaseTransform.IDENTITY_TRANSFORM,
                                           FontResource.AA_GREYSCALE);
        return strike.getMetrics();
    }

    static double computeStringWidth(PGFont font, String string) {
        if (string == null || string.equals("")) return 0;
        FontStrike strike = font.getStrike(BaseTransform.IDENTITY_TRANSFORM,
                                           FontResource.AA_GREYSCALE);
        double width = 0f;
        for (int i = 0; i < string.length(); i++) {
            width += strike.getCharAdvance(string.charAt(i));
        }
        return width;
    }
}
