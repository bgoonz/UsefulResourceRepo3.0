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

import javafx.scene.control.SplitMenuButton;
import javafx.scene.input.MouseEvent;

import com.sun.javafx.scene.control.behavior.SplitMenuButtonBehavior;

/**
 * Skin for SplitMenuButton Control.
 */
public class SplitMenuButtonSkin extends MenuButtonSkinBase<SplitMenuButton, SplitMenuButtonBehavior> {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/
    
    /**
     * Creates a new SplitMenuButtonSkin for the given SplitMenu.
     * 
     * @param splitMenuButton the SplitMenuButton
     */
    public SplitMenuButtonSkin(final SplitMenuButton splitMenuButton) {
        super(splitMenuButton, new SplitMenuButtonBehavior(splitMenuButton));

        /*
         * The arrow button is the only thing that acts like a MenuButton on
         * this control.
         */
        behaveLikeButton = true;
        // TODO: do we need to consume all mouse events?
        // they only bubble to the skin which consumes them by default
        arrowButton.addEventHandler(MouseEvent.ANY, event -> {
            event.consume();
        });
        arrowButton.setOnMousePressed(e -> {
            getBehavior().mousePressed(e, false);
            e.consume();
        });
        arrowButton.setOnMouseReleased(e -> {
            getBehavior().mouseReleased(e, false);
            e.consume();
        });

        label.setLabelFor(splitMenuButton);
    }
}
