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

import javafx.css.PseudoClass;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.ObjectPropertyBase;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.geometry.Side;
import javafx.scene.Node;
//import javafx.scene.accessibility.Action;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import com.sun.javafx.scene.control.skin.MenuButtonSkin;
import javafx.beans.property.ReadOnlyBooleanProperty;
import javafx.beans.property.ReadOnlyBooleanWrapper;

/**
 * MenuButton is a button which, when clicked or pressed, will show a
 * {@link ContextMenu}. A MenuButton shares a very similar API to the {@link Menu}
 * control, insofar that you set the items that should be shown in the
 * {@link #items} ObservableList, and there is a {@link #text} property to specify the
 * label shown within the MenuButton.
 * <p>
 * As mentioned, like the Menu API itself, you'll find an {@link #items} ObservableList
 * within which you can provide anything that extends from {@link MenuItem}.
 * There are several useful subclasses of {@link MenuItem} including
 * {@link RadioMenuItem}, {@link CheckMenuItem}, {@link Menu},
 * {@link SeparatorMenuItem} and {@link CustomMenuItem}.
 * <p>
 * A MenuButton can be set to show its menu on any side of the button. This is
 * specified using the {@link #popupSideProperty() popupSide} property. By default
 * the menu appears below the button. However, regardless of the popupSide specified,
 * if there is not enough room, the {@link ContextMenu} will be
 * smartly repositioned, most probably to be on the opposite side of the 
 * MenuButton.
 *
 * <p>Example:</p>
 * <pre>
 * MenuButton m = new MenuButton("Eats");
 * m.getItems().addAll(new MenuItem("Burger"), new MenuItem("Hot Dog"));
 * </pre>
 * 
 * <p>
 * MnemonicParsing is enabled by default for MenuButton.
 * </p>
 *
 * @see MenuItem
 * @see Menu
 * @see SplitMenuButton
 * @since JavaFX 2.0
 */
public class MenuButton extends ButtonBase {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a new empty menu button. Use {@link #setText(String)},
     * {@link #setGraphic(Node)} and {@link #getItems()} to set the content.
     */
    public MenuButton() {
        this(null, null);
    }

    /**
     * Creates a new empty menu button with the given text to display on the
     * menu. Use {@link #setGraphic(Node)} and {@link #getItems()} to set the
     * content.
     * 
     * @param text the text to display on the menu button
     */
    public MenuButton(String text) {
        this(text, null);
    }

    /**
     * Creates a new empty menu button with the given text and graphic to
     * display on the menu. Use {@link #getItems()} to set the content.
     * 
     * @param text the text to display on the menu button
     * @param graphic the graphic to display on the menu button
     */
    public MenuButton(String text, Node graphic) {
        if (text != null) {
            setText(text);
        }
        if (graphic != null) {
            setGraphic(graphic);
        }
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        setMnemonicParsing(true);     // enable mnemonic auto-parsing by default
        // the default value for popupSide = Side.BOTTOM therefor
        // PSEUDO_CLASS_OPENVERTICALLY should be set from the start.
        pseudoClassStateChanged(PSEUDO_CLASS_OPENVERTICALLY, true);
    }

    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/
    private final ObservableList<MenuItem> items = FXCollections.<MenuItem>observableArrayList();

    /**
     * The items to show within this buttons menu. If this ObservableList is modified
     * at runtime, the Menu will update as expected.
     * <p>
     * Commonly used controls include including {@code MenuItem}, 
     * {@code CheckMenuItem}, {@code RadioMenuItem},
     * and of course {@code Menu}, which if added to a menu, will become a sub
     * menu. {@link SeparatorMenuItem} is another commonly used Node in the Menu's items
     * ObservableList.
     */
    public final ObservableList<MenuItem> getItems() {
        return items;
    }

    // --- Showing
    /**
     * Indicates whether the {@link ContextMenu} is currently visible.
     */
    private ReadOnlyBooleanWrapper showing = new ReadOnlyBooleanWrapper(this, "showing", false) {
        @Override protected void invalidated() {
            pseudoClassStateChanged(PSEUDO_CLASS_SHOWING, get());
            super.invalidated();
        }
    };
    private void setShowing(boolean value) { showing.set(value); }
    public final boolean isShowing() { return showing.get(); }
    public final ReadOnlyBooleanProperty showingProperty() { return showing.getReadOnlyProperty(); }
    
    

    /**
     * Indicates on which side the {@link ContextMenu} should open in
     * relation to the MenuButton. Menu items are generally laid
     * out vertically in either case.
     * For example, if the menu button were in a vertical toolbar on the left
     * edge of the application, you might change {@link #popupSide} to {@code Side.RIGHT} so that
     * the popup will appear to the right of the MenuButton.
     *
     * @defaultValue {@code Side.BOTTOM}
     */
    // TODO expose via CSS
    private ObjectProperty<Side> popupSide;

    public final void setPopupSide(Side value) {
        popupSideProperty().set(value);
    }

    public final Side getPopupSide() {
        return popupSide == null ? Side.BOTTOM : popupSide.get();
    }

    public final ObjectProperty<Side> popupSideProperty() {
        if (popupSide == null) {
            popupSide = new ObjectPropertyBase<Side>(Side.BOTTOM) {
                @Override protected void invalidated() {
                    final Side side = get();
                    final boolean active = (side == Side.TOP) || (side == Side.BOTTOM);
                    pseudoClassStateChanged(PSEUDO_CLASS_OPENVERTICALLY, active);
                }

                @Override
                public Object getBean() {
                    return MenuButton.this;
                }

                @Override
                public String getName() {
                    return "popupSide";
                }
            };
        }
        return popupSide;
    }

    /***************************************************************************
     *                                                                         *
     * Control methods                                                         *
     *                                                                         *
     **************************************************************************/

    /**
     * Shows the {@link ContextMenu}, assuming this MenuButton is not disabled.
     * 
     * @see #isDisabled()
     * @see #isShowing()
     */
    public void show() {
        // TODO: isBound check is probably unnecessary here
        if (!isDisabled() && !showing.isBound()) {
            setShowing(true);
        }
    }

    /**
     * Hides the {@link ContextMenu}.
     * 
     * @see #isShowing()
     */
    public void hide() {
        // TODO: isBound check is probably unnecessary here
        if (!showing.isBound()) {
            setShowing(false);
        }
    }

    /**
     * This has no impact.
     */
    @Override
    public void fire() {
        if (!isDisabled()) {
            fireEvent(new ActionEvent());
        }
    }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new MenuButtonSkin(this);
    }

    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "menu-button";
    private static final PseudoClass PSEUDO_CLASS_OPENVERTICALLY = 
            PseudoClass.getPseudoClass("openvertically");
    private static final PseudoClass PSEUDO_CLASS_SHOWING = 
            PseudoClass.getPseudoClass("showing");

    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.MENU_BUTTON;
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
//
//    /** @treatAsPrivate */
//    @Override public void accExecuteAction(Action action, Object... parameters) {
//        switch (action) {
//            case FIRE:
//                if (isShowing()) {
//                    hide();
//                } else {
//                    show();
//                }
//                break;
//            default: super.accExecuteAction(action);
//        }
//    }
}
