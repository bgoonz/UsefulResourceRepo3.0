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

package javafx.scene.control;

import javafx.geometry.Pos;

import com.sun.javafx.scene.control.skin.RadioButtonSkin;

import javafx.beans.value.WritableValue;
import javafx.css.StyleableProperty;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;

/**
 * <p>RadioButtons create a series of items where only one item can be
 * selected.  RadioButtons are a specialized {@link ToggleButton}.
 * When a RadioButton is pressed and released a {@link javafx.event.ActionEvent}
 * is sent. Your application can perform some action based
 * on this event by implementing an {@link javafx.event.EventHandler} to
 * process the {@link javafx.event.ActionEvent}.</p>
 * 
 * <p>
 * Only one RadioButton can be selected when placed in a {@link ToggleGroup}.
 * Clicking on a selected RadioButton will have no effect.  A RadioButton that is not
 * in a ToggleGroup can be selected and unselected.  By default a RadioButton is
 * not in a ToggleGroup.  Calling {@code ToggleGroup.getSelectedToggle()}
 * will return you the RadioButton that has been selected.
 * </p>
 *
 * <pre>
 * <code>
 *    ToggleGroup group = new ToggleGroup();
 *    RadioButton button1 = new RadioButton("select first");
 *    button1.setToggleGroup(group);
 *    button1.setSelected(true);
 *    RadioButton button2 = new RadioButton("select second");
 *    button2.setToggleGroup(group);
 * </code>
 * </pre>
 * @since JavaFX 2.0
 */
 public class RadioButton extends ToggleButton {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a radio button with an empty string for its label.
     */
    public RadioButton() {
        initialize();
    }

    /**
     * Creates a radio button with the specified text as its label.
     *
     * @param text A text string for its label.
     */
    public RadioButton(String text) {
        setText(text);
        initialize();
    }

    private void initialize() {
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        // alignment is styleable through css. Calling setAlignment
        // makes it look to css like the user set the value and css will not 
        // override. Initializing alignment by calling set on the 
        // CssMetaData ensures that css will be able to override the value.
        ((StyleableProperty<Pos>)(WritableValue<Pos>)alignmentProperty()).applyStyle(null, Pos.CENTER_LEFT);
    }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /**
     * Toggles the state of the radio button if and only if the RadioButton
     * has not already selected or is not part of a {@link ToggleGroup}.
     */
    @Override public void fire() {
        // we don't toggle from selected to not selected if part of a group
        if (getToggleGroup() == null || !isSelected()) {
            super.fire();
        }
    }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new RadioButtonSkin(this);
    }


    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "radio-button";

    /**
      * Labeled return CENTER_LEFT for alignment, but ToggleButton returns
      * CENTER. RadioButton also returns CENTER_LEFT so we have to override
      * the override in ToggleButton. 
      * @treatAsPrivate implementation detail
      */
    @Deprecated @Override
    protected Pos impl_cssGetAlignmentInitialValue() {
        return Pos.CENTER_LEFT;
    }


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.RADIO_BUTTON;
//            case SELECTED: return isSelected();
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
