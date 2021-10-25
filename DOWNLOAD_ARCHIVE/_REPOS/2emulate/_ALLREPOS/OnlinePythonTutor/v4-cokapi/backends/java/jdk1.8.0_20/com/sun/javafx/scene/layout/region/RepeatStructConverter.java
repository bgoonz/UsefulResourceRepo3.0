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

package com.sun.javafx.scene.layout.region;

import com.sun.javafx.css.converters.EnumConverter;
import javafx.css.ParsedValue;
import com.sun.javafx.css.StyleConverterImpl;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.text.Font;

/**
 */
public final class RepeatStructConverter extends StyleConverterImpl<ParsedValue<String, BackgroundRepeat>[][], RepeatStruct[]> {

    private static final RepeatStructConverter REPEAT_STRUCT_CONVERTER =
            new RepeatStructConverter();

    public static RepeatStructConverter getInstance() {
        return REPEAT_STRUCT_CONVERTER;
    }

    private RepeatStructConverter() {
        super();
        repeatConverter = new EnumConverter<BackgroundRepeat>(BackgroundRepeat.class);
    }

    private final EnumConverter<BackgroundRepeat> repeatConverter;

    @Override
    public RepeatStruct[] convert(ParsedValue<ParsedValue<String, BackgroundRepeat>[][], RepeatStruct[]> value, Font font) {
        final ParsedValue<String, BackgroundRepeat>[][] layers = value.getValue();
        final RepeatStruct[] backgroundRepeat = new RepeatStruct[layers.length];
        for (int l = 0; l < layers.length; l++) {
            final ParsedValue<String, BackgroundRepeat>[] repeats = layers[l];
            final BackgroundRepeat horizontal = repeatConverter.convert(repeats[0],null);
            final BackgroundRepeat vertical = repeatConverter.convert(repeats[1],null);
            backgroundRepeat[l] = new RepeatStruct(horizontal, vertical);
        }
        return backgroundRepeat;
    }

    /**
     * @inheritDoc
     */
    @Override public String toString() {
        return "RepeatStructConverter";
    }
}
