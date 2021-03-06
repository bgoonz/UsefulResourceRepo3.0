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

package javafx.scene.control;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javafx.beans.InvalidationListener;
import javafx.beans.property.IntegerProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.ObjectPropertyBase;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.WritableValue;
import javafx.css.CssMetaData;
import javafx.css.StyleableIntegerProperty;
import javafx.css.StyleableObjectProperty;
import javafx.css.StyleableProperty;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;

import com.sun.javafx.binding.ExpressionHelper;
import com.sun.javafx.css.converters.EnumConverter;
import com.sun.javafx.css.converters.SizeConverter;
import com.sun.javafx.scene.control.skin.TextFieldSkin;

import javafx.css.Styleable;


/**
 * Text input component that allows a user to enter a single line of
 * unformatted text. Unlike in previous releases of JavaFX, support for multi-line
 * input is not available as part of the TextField control, however this is 
 * the sole-purpose of the {@link TextArea} control. Additionally, if you want
 * a form of rich-text editing, there is also the
 * {@link javafx.scene.web.HTMLEditor HTMLEditor} control.
 * 
 * <p>TextField supports the notion of showing {@link #promptTextProperty() prompt text}
 * to the user when there is no {@link #textProperty() text} already in the 
 * TextField (either via the user, or set programmatically). This is a useful
 * way of informing the user as to what is expected in the text field, without
 * having to resort to {@link Tooltip tooltips} or on-screen {@link Label labels}.
 * 
 * @see TextArea
 * @since JavaFX 2.0
 */
public class TextField extends TextInputControl {
    // Text field content
    private static final class TextFieldContent implements Content {
        private ExpressionHelper<String> helper = null;
        private StringBuilder characters = new StringBuilder();

        @Override public String get(int start, int end) {
            return characters.substring(start, end);
        }

        @Override public void insert(int index, String text, boolean notifyListeners) {
            text = TextInputControl.filterInput(text, true, true);
            if (!text.isEmpty()) {
                characters.insert(index, text);
                if (notifyListeners) {
                    ExpressionHelper.fireValueChangedEvent(helper);
                }
            }
        }

        @Override public void delete(int start, int end, boolean notifyListeners) {
            if (end > start) {
                characters.delete(start, end);
                if (notifyListeners) {
                    ExpressionHelper.fireValueChangedEvent(helper);
                }
            }
        }

        @Override public int length() {
            return characters.length();
        }

        @Override public String get() {
            return characters.toString();
        }

        @Override public void addListener(ChangeListener<? super String> changeListener) {
            helper = ExpressionHelper.addListener(helper, this, changeListener);
        }

        @Override public void removeListener(ChangeListener<? super String> changeListener) {
            helper = ExpressionHelper.removeListener(helper, changeListener);
        }

        @Override public String getValue() {
            return get();
        }

        @Override public void addListener(InvalidationListener listener) {
            helper = ExpressionHelper.addListener(helper, this, listener);
        }

        @Override public void removeListener(InvalidationListener listener) {
            helper = ExpressionHelper.removeListener(helper, listener);
        }
    }

    /**
     * The default value for {@link #prefColumnCount}.
     */
    public static final int DEFAULT_PREF_COLUMN_COUNT = 12;

    /**
     * Creates a {@code TextField} with empty text content.
     */
    public TextField() {
        this("");
    }

    /**
     * Creates a {@code TextField} with initial text content.
     *
     * @param text A string for text content.
     */
    public TextField(String text) {
        super(new TextFieldContent());
        getStyleClass().add("text-field");
        setText(text);
    }

    /**
     * Returns the character sequence backing the text field's content.
     */
    public CharSequence getCharacters() {
        return ((TextFieldContent)getContent()).characters;
    }


    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/

    /**
     * The preferred number of text columns. This is used for
     * calculating the {@code TextField}'s preferred width.
     */
    private IntegerProperty prefColumnCount = new StyleableIntegerProperty(DEFAULT_PREF_COLUMN_COUNT) {

        private int oldValue = get();
        
        @Override
        protected void invalidated() {
            int value = get();
            if (value < 0) {
                if (isBound()) {
                    unbind();
                }
                set(oldValue);
                throw new IllegalArgumentException("value cannot be negative.");
            }
            oldValue = value;
        }
        
        @Override public CssMetaData<TextField,Number> getCssMetaData() {
            return StyleableProperties.PREF_COLUMN_COUNT;
        }

        @Override
        public Object getBean() {
            return TextField.this;
        }

        @Override
        public String getName() {
            return "prefColumnCount";
        }
    };
    public final IntegerProperty prefColumnCountProperty() { return prefColumnCount; }
    public final int getPrefColumnCount() { return prefColumnCount.getValue(); }
    public final void setPrefColumnCount(int value) { prefColumnCount.setValue(value); }


    /**
     * The action handler associated with this text field, or
     * <tt>null</tt> if no action handler is assigned.
     *
     * The action handler is normally called when the user types the ENTER key.
     */
    private ObjectProperty<EventHandler<ActionEvent>> onAction = new ObjectPropertyBase<EventHandler<ActionEvent>>() {
        @Override
        protected void invalidated() {
            setEventHandler(ActionEvent.ACTION, get());
        }

        @Override
        public Object getBean() {
            return TextField.this;
        }

        @Override
        public String getName() {
            return "onAction";
        }
    };
    public final ObjectProperty<EventHandler<ActionEvent>> onActionProperty() { return onAction; }
    public final EventHandler<ActionEvent> getOnAction() { return onActionProperty().get(); }
    public final void setOnAction(EventHandler<ActionEvent> value) { onActionProperty().set(value); }

    /**
     * Specifies how the text should be aligned when there is empty
     * space within the TextField.
     * @since JavaFX 2.1
     */
    public final ObjectProperty<Pos> alignmentProperty() {
        if (alignment == null) {
            alignment = new StyleableObjectProperty<Pos>(Pos.CENTER_LEFT) {

                @Override public CssMetaData<TextField,Pos> getCssMetaData() {
                    return StyleableProperties.ALIGNMENT;
                }

                @Override public Object getBean() {
                    return TextField.this;
                }

                @Override public String getName() {
                    return "alignment";
                }
            };
        }
        return alignment;
    }
    private ObjectProperty<Pos> alignment;
    public final void setAlignment(Pos value) { alignmentProperty().set(value); }
    public final Pos getAlignment() { return alignment == null ? Pos.CENTER_LEFT : alignment.get(); }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new TextFieldSkin(this);
    }

    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

     /**
      * @treatAsPrivate implementation detail
      */
    private static class StyleableProperties {
        private static final CssMetaData<TextField, Pos> ALIGNMENT =
            new CssMetaData<TextField, Pos>("-fx-alignment",
                new EnumConverter<Pos>(Pos.class), Pos.CENTER_LEFT ) {

            @Override public boolean isSettable(TextField n) {
                return (n.alignment == null || !n.alignment.isBound());
            }

            @Override public StyleableProperty<Pos> getStyleableProperty(TextField n) {
                return (StyleableProperty<Pos>)(WritableValue<Pos>)n.alignmentProperty();
            }
        };

        private static final CssMetaData<TextField,Number> PREF_COLUMN_COUNT =
            new CssMetaData<TextField,Number>("-fx-pref-column-count",
                SizeConverter.getInstance(), DEFAULT_PREF_COLUMN_COUNT) {

            @Override
            public boolean isSettable(TextField n) {
                return n.prefColumnCount == null || !n.prefColumnCount.isBound();
            }

            @Override
            public StyleableProperty<Number> getStyleableProperty(TextField n) {
                return (StyleableProperty<Number>)(WritableValue<Number>)n.prefColumnCountProperty();
            }
        };

        private static final List<CssMetaData<? extends Styleable, ?>> STYLEABLES;
        static {
            final List<CssMetaData<? extends Styleable, ?>> styleables =
                new ArrayList<CssMetaData<? extends Styleable, ?>>(TextInputControl.getClassCssMetaData());
            styleables.add(ALIGNMENT);
            styleables.add(PREF_COLUMN_COUNT);
            STYLEABLES = Collections.unmodifiableList(styleables);
        }
    }

    /**
     * @return The CssMetaData associated with this class, which may include the
     * CssMetaData of its super classes.
     * @since JavaFX 8.0
     */
    public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
        return StyleableProperties.STYLEABLES;
    }

    /**
     * {@inheritDoc}
     * @since JavaFX 8.0
     */
    @Override
    public List<CssMetaData<? extends Styleable, ?>> getControlCssMetaData() {
        return getClassCssMetaData();
    }


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.TEXT_FIELD;
//            case BOUNDS_FOR_RANGE: //Skin
//            case OFFSET_AT_POINT: //Skin
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
