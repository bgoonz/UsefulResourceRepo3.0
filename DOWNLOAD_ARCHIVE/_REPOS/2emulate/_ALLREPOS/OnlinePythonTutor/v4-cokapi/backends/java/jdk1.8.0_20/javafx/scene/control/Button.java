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

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.BooleanPropertyBase;
import javafx.event.ActionEvent;
import javafx.scene.Node;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;

import javafx.css.PseudoClass;
import com.sun.javafx.scene.control.skin.ButtonSkin;

/**
 * <p>A simple button control.  The button control can contain
 * text and/or a graphic.  A button control has three different modes</p>
 * <ul>
 * <li> Normal: A normal push button. </li>
 * <li> Default: A default Button is the button that receives a keyboard VK_ENTER press, if no other node in the scene consumes it.</li>
 * <li> Cancel: A Cancel Button is the button that receives a keyboard VK_ESC press, if no other node in the scene consumes it.</li>
 * </ul>
 *
 * <p>When a button is pressed and released a {@link ActionEvent} is sent.
 * Your application can perform some action based on this event by implementing an
 * {@link javafx.event.EventHandler} to process the {@link ActionEvent}.  Buttons can also respond to
 * mouse events by implementing an {@link javafx.event.EventHandler} to process the {@link javafx.scene.input.MouseEvent}
 * </p>
 *
 * <p>
 * MnemonicParsing is enabled by default for Button.
 * </p>
 *
 * <p>Example:
 * <pre><code>Button button = new Button("Click Me");</code></pre>
 * @since JavaFX 2.0
 */
public class Button extends ButtonBase {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a button with an empty string for its label.
     */
    public Button() {
        initialize();
    }

    /**
     * Creates a button with the specified text as its label.
     *
     * @param text A text string for its label.
     */
    public Button(String text) {
        super(text);
        initialize();
    }

    /**
     * Creates a button with the specified text and icon for its label.
     *
     * @param text A text string for its label.
     * @param graphic the icon for its label.
     */
    public Button(String text, Node graphic) {
        super(text, graphic);
        initialize();
    }

    private void initialize() {
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        setMnemonicParsing(true);     // enable mnemonic auto-parsing by default
    }

    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/

    /**
     * A default Button is the button that receives
     * a keyboard VK_ENTER press, if no other node in the scene consumes it.
     */
    private BooleanProperty defaultButton;
    public final void setDefaultButton(boolean value) {
        defaultButtonProperty().set(value);
    }
    public final boolean isDefaultButton() {
        return defaultButton == null ? false : defaultButton.get();
    }

    public final BooleanProperty defaultButtonProperty() {
        if (defaultButton == null) {
            defaultButton = new BooleanPropertyBase(false) {
                @Override protected void invalidated() {
                    pseudoClassStateChanged(PSEUDO_CLASS_DEFAULT, get());
                }

                @Override
                public Object getBean() {
                    return Button.this;
                }

                @Override
                public String getName() {
                    return "defaultButton";
                }
            };
        }
        return defaultButton;
    }


    /**
     * A Cancel Button is the button that receives
     * a keyboard VK_ESC press, if no other node in the scene consumes it.
     */
    private BooleanProperty cancelButton;
    public final void setCancelButton(boolean value) {
        cancelButtonProperty().set(value);
    }
    public final boolean isCancelButton() {
        return cancelButton == null ? false : cancelButton.get();
    }

    public final BooleanProperty cancelButtonProperty() {
        if (cancelButton == null) {
            cancelButton = new BooleanPropertyBase(false) {
                @Override protected void invalidated() {
                    pseudoClassStateChanged(PSEUDO_CLASS_CANCEL, get());
                }

                @Override
                public Object getBean() {
                    return Button.this;
                }

                @Override
                public String getName() {
                    return "cancelButton";
                }
            };
        }
        return cancelButton;
    }


    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override public void fire() {
        if (!isDisabled()) {
            fireEvent(new ActionEvent());
        }
    }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new ButtonSkin(this);
    }


    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    /**
     * Initialize the style class to 'button'.
     *
     * This is the selector class from which CSS can be used to style
     * this control.
     */
    private static final String DEFAULT_STYLE_CLASS = "button";

    private static final PseudoClass PSEUDO_CLASS_DEFAULT
            = PseudoClass.getPseudoClass("default");
    private static final PseudoClass PSEUDO_CLASS_CANCEL
            = PseudoClass.getPseudoClass("cancel");


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.BUTTON;
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
