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

import javafx.event.ActionEvent;
//import javafx.scene.accessibility.Action;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import com.sun.javafx.scene.control.skin.SplitMenuButtonSkin;

/**
 * The SplitMenuButton, like the {@link MenuButton} is closely associated with
 * the concept of selecting a {@link MenuItem} from a menu. Unlike {@link MenuButton},
 * the SplitMenuButton is broken into two pieces, the "action" area and the
 * "menu open" area.
 * <p>
 * If the user clicks in the action area, the SplitMenuButton will act similarly
 * to a {@link javafx.scene.control.Button Button}, firing whatever is
 * associated with the {@link #onAction} property.
 * <p>
 * The menu open area of the control will show a menu if clicked. When the user
 * selects an item from the menu, it is executed.
 * <p>
 * Note that the SplitMenuButton does not automatically assign whatever was last
 * selected in the menu to be the action should the action region be clicked.
 *
 * <p>Example:</p>
 * <pre>
 * SplitMenuButton m = new SplitMenuButton();
 * m.setText("Shutdown");
 * m.getItems().addAll(new MenuItem("Logout"), new MenuItem("Sleep"));
 * m.setOnAction(new EventHandler<ActionEvent>() {
 *     &#064;Override public void handle(ActionEvent e) {
 *         System.out.println("Shutdown");
 *     }
 * });
 * </pre>
 * <p>
 * 
 * <p>
 * MnemonicParsing is enabled by default for SplitMenuButton.
 * </p>
 *
 * @see MenuItem
 * @see Menu
 * @since JavaFX 2.0
 */

public class SplitMenuButton extends MenuButton {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a new empty split menu button. Use {@link #setText(String)},
     * {@link #setGraphic(Node)} and {@link #getItems()} to set the content.
     */
    public SplitMenuButton() {
        this((MenuItem[])null);
    }

    /**
     * Creates a new split menu button with the given list of menu items.
     *
     * @param items The items to show within this button's menu
     */
    public SplitMenuButton(MenuItem... items) {
        if (items != null) {
            getItems().addAll(items);
        }

        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        setMnemonicParsing(true);     // enable mnemonic auto-parsing by default
    }

    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/
    /**
     * Call the action when button is pressed.
     */
    @Override public void fire() {
        if (!isDisabled()) {
            fireEvent(new ActionEvent());
        }
    }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new SplitMenuButtonSkin(this);
    }

    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "split-menu-button";

    // SplitMenuButton adds no new CSS keys.

    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.SPLIT_MENU_BUTTON;
//            case EXPANDED: return isShowing();
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
//
//    /** @treatAsPrivate */
//    @Override public void accExecuteAction(Action action, Object... parameters) {
//        switch (action) {
//            case FIRE:
//                fire();
//                break;
//            case EXPAND:
//                show();
//                break;
//            case COLLAPSE:
//                hide();
//                break;
//            default: super.accExecuteAction(action);
//        }
//    }

}
