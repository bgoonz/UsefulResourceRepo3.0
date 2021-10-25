/*
 * Copyright (c) 2010, 2014, Oracle and/or its affiliates. All rights reserved.
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

package javafx.css;

import com.sun.javafx.css.converters.FontConverter;
import com.sun.javafx.css.converters.SizeConverter;
import com.sun.javafx.css.converters.StringConverter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javafx.scene.text.Font;
import javafx.scene.text.FontPosture;
import javafx.scene.text.FontWeight;

/**
 * An partial implementation of CssMetaData for Font properties which
 * includes the font sub-properties: weight, style, family and size.
 * @param S The type of Styleable
 * @since JavaFX 8.0
 */
public abstract class FontCssMetaData<S extends Styleable> extends CssMetaData<S, Font> {

    /**
     * The property name is concatenated with &quot;-weight&quot;,
     * &quot;-style&quot;, &quot;-family&quot; and &quot;-size&quot; to
     * create the sub-properties. For example,
     * {@code new FontCssMetaData<Text>("-fx-font", Font.getDefault());}
     * will create a CssMetaData for &quot;-fx-font&quot; with
     * sub-properties: &quot;-fx-font-weight&quot;,
     * &quot;-fx-font-style&quot;, &quot;-fx-font-family&quot;
     * and &quot;-fx-font-size&quot;
     * @param property
     * @param initial
     */
    /**
     * The property name is concatenated with &quot;-weight&quot;,
     * &quot;-style&quot;, &quot;-family&quot; and &quot;-size&quot; to
     * create the sub-properties. For example,
     * {@code new FontCssMetaData<Text>("-fx-font", Font.getDefault());}
     * will create a CssMetaData for &quot;-fx-font&quot; with
     * sub-properties: &quot;-fx-font-weight&quot;,
     * &quot;-fx-font-style&quot;, &quot;-fx-font-family&quot;
     * and &quot;-fx-font-size&quot;
     * @param property
     * @param initial
     */
    public FontCssMetaData(String property, Font initial) {
        super(property, FontConverter.getInstance(), initial, true, createSubProperties(property, initial));
    }

    private static <S extends Styleable> List<CssMetaData<? extends Styleable, ?>> createSubProperties(String property, Font initial) {
        
        final List<CssMetaData<S, ?>> subProperties = 
                new ArrayList<>();
        
        final Font defaultFont = initial != null ? initial : Font.getDefault();
        
        final CssMetaData<S, String> FAMILY = 
                new CssMetaData<S, String>(property.concat("-family"), 
                StringConverter.getInstance(), defaultFont.getFamily(), true) {
            @Override
            public boolean isSettable(S styleable) {
                return false;
            }

            @Override
            public StyleableProperty<String> getStyleableProperty(S styleable) {
                return null;
            }
        };
        subProperties.add(FAMILY);
        
        final CssMetaData<S, Number> SIZE = 
                new CssMetaData<S, Number>(property.concat("-size"), 
                SizeConverter.getInstance(), defaultFont.getSize(), true) {
            @Override
            public boolean isSettable(S styleable) {
                return false;
            }

            @Override
            public StyleableProperty<Number> getStyleableProperty(S styleable) {
                return null;
            }
        };
        subProperties.add(SIZE);
        
        final CssMetaData<S, FontPosture> STYLE = 
                new CssMetaData<S, FontPosture>(property.concat("-style"), 
                FontConverter.FontStyleConverter.getInstance(), FontPosture.REGULAR, true) {
            @Override
            public boolean isSettable(S styleable) {
                return false;
            }

            @Override
            public StyleableProperty<FontPosture> getStyleableProperty(S styleable) {
                return null;
            }
        };
        subProperties.add(STYLE);
        
        final CssMetaData<S, FontWeight> WEIGHT = 
                new CssMetaData<S, FontWeight>(property.concat("-weight"), 
                FontConverter.FontWeightConverter.getInstance(), FontWeight.NORMAL, true) {
            @Override
            public boolean isSettable(S styleable) {
                return false;
            }

            @Override
            public StyleableProperty<FontWeight> getStyleableProperty(S styleable) {
                return null;
            }
        };
        subProperties.add(WEIGHT);
        
        return Collections.<CssMetaData<? extends Styleable, ?>>unmodifiableList(subProperties);
    }
    
}
