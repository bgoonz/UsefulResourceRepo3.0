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

package com.sun.javafx.css.converters;

import com.sun.javafx.css.StyleConverterImpl;
import javafx.css.ParsedValue;
import javafx.css.StyleConverter;
import javafx.scene.text.Font;

public final class BooleanConverter extends StyleConverterImpl<String, Boolean> {

    // lazy, thread-safe instatiation
    private static class Holder {
        static final BooleanConverter INSTANCE = new BooleanConverter();
    }

    public static StyleConverter<String, Boolean> getInstance() {
        return Holder.INSTANCE;
    }

    private BooleanConverter() {
        super();
    }

    @Override
    public Boolean convert(ParsedValue<String, Boolean> value, Font not_used) {
        String str = value.getValue();
        return Boolean.valueOf(str);
    }

    @Override
    public String toString() {
        return "BooleanConverter";
    }
}
