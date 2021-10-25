/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.scene.control.behavior;

import javafx.scene.control.MenuButton;
import java.util.ArrayList;
import java.util.List;
import static javafx.scene.input.KeyCode.ENTER;
import static javafx.scene.input.KeyCode.SPACE;
import static javafx.scene.input.KeyEvent.KEY_PRESSED;

/**
 * Behavior for MenuButton.
 */
public class MenuButtonBehavior extends MenuButtonBehaviorBase<MenuButton> {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a new MenuButtonBehavior for the given MenuButton.
     *
     * @param menuButton the MenuButton
     */
    public MenuButtonBehavior(final MenuButton menuButton) {
        super(menuButton, MENU_BUTTON_BINDINGS);
    }

    /***************************************************************************
     *                                                                         *
     * Key event handling                                                      *
     *                                                                         *
     **************************************************************************/

    /**
     * The key bindings for the MenuButton. Sets up the keys to open the menu.
     */
    protected static final List<KeyBinding> MENU_BUTTON_BINDINGS = new ArrayList<KeyBinding>();
    static {
        MENU_BUTTON_BINDINGS.addAll(BASE_MENU_BUTTON_BINDINGS);
        MENU_BUTTON_BINDINGS.add(new KeyBinding(SPACE, KEY_PRESSED, OPEN_ACTION));
        MENU_BUTTON_BINDINGS.add(new KeyBinding(ENTER, KEY_PRESSED, OPEN_ACTION));
    }
}
