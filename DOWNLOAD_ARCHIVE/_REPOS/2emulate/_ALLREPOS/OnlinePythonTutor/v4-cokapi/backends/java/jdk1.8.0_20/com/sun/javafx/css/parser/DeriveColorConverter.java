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

package com.sun.javafx.css.parser;

import com.sun.javafx.css.Size;
import com.sun.javafx.css.StyleConverterImpl;
import javafx.css.ParsedValue;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;

/**
 * Derive a Color from a Color and a brightness value
 */
public final class DeriveColorConverter extends StyleConverterImpl<ParsedValue[], Color> {

    // lazy, thread-safe instatiation
    private static class Holder {
        static final DeriveColorConverter INSTANCE = new DeriveColorConverter();
    }

    public static DeriveColorConverter getInstance() {
        return Holder.INSTANCE;
    }

    private DeriveColorConverter() {
        super();
    }

    @Override
    public Color convert(ParsedValue<ParsedValue[], Color> value, Font font) {
        ParsedValue[] values = value.getValue();
        final Color color = (Color) values[0].convert(font);
        final Size brightness = (Size) values[1].convert(font);
        return com.sun.javafx.Utils.deriveColor(color, brightness.pixels(font));
    }

    @Override
    public String toString() {
        return "DeriveColorConverter";
    }
}
