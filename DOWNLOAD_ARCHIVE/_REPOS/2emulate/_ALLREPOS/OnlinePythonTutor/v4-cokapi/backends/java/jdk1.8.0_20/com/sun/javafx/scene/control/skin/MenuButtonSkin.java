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

package com.sun.javafx.scene.control.skin;

import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.scene.control.MenuButton;

import com.sun.javafx.scene.control.behavior.MenuButtonBehavior;

/**
 * Skin for MenuButton Control.
 */
public class MenuButtonSkin extends MenuButtonSkinBase<MenuButton, MenuButtonBehavior> {

    static final String AUTOHIDE = "autoHide";
    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a new MenuButtonSkin for the given MenuButton
     * 
     * @param menuButton the MenuButton
     */
    public MenuButtonSkin(final MenuButton menuButton) {
        super(menuButton, new MenuButtonBehavior(menuButton));
        // MenuButton's showing does not get updated when autoHide happens,
        // as that hide happens under the covers. So we add to the menuButton's
        // properties map to which the MenuButton can react and update accordingly..
        popup.setOnAutoHide(new EventHandler<Event>() {
            @Override public void handle(Event t) {
                MenuButton menuButton = (MenuButton)getSkinnable();
                // work around for the fact autohide happens twice
                // remove this check when that is fixed.
                if (!menuButton.getProperties().containsKey(AUTOHIDE)) {
                    menuButton.getProperties().put(AUTOHIDE, Boolean.TRUE);
                }
                }
        });
        // request focus on content when the popup is shown
        popup.setOnShown(event -> {
            ContextMenuContent cmContent = (ContextMenuContent)popup.getSkin().getNode();
            if (cmContent != null) cmContent.requestFocus();
        });

        if (menuButton.getOnAction() == null) {
            menuButton.setOnAction(e -> {
                menuButton.show();
            });
        }

        label.setLabelFor(menuButton);
    }
}
