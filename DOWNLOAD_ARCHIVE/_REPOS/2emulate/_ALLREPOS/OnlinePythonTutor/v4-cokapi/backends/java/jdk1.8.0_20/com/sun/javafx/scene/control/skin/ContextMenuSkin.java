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
import javafx.scene.Node;
//import javafx.scene.accessibility.Attribute;
import javafx.scene.control.ContextMenu;
import javafx.scene.control.Menu;
import javafx.scene.control.Skin;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.Region;
import javafx.stage.WindowEvent;
import com.sun.javafx.scene.control.behavior.TwoLevelFocusPopupBehavior;

/**
 * Default Skin implementation for PopupMenu. Several controls use PopupMenu in
 * order to display items in a drop down. It deals mostly with show hide logic for
 * Popup based controls, and specifically in this case for PopupMenu. This is
 * explained in the superclass {@link PopupControlSkin}.
 * <p>
 * Region/css based skin implementation for PopupMenu is the {@link PopupMenuContent}
 * class.
 */
public class ContextMenuSkin implements Skin<ContextMenu> {

    /* need to hold a reference to popupMenu here because getSkinnable() deliberately
     * returns null in PopupControlSkin. */
    private ContextMenu popupMenu;
    
    private final Region root;
    private TwoLevelFocusPopupBehavior tlFocus;
    
    // Fix for RT-18247
    private final EventHandler<KeyEvent> keyListener = new EventHandler<KeyEvent>() {
        @Override public void handle(KeyEvent event) {
            if (event.getEventType() != KeyEvent.KEY_PRESSED) return;
            
            // We only care if the root container still has focus
            if (! root.isFocused()) return;
            
            final KeyCode code = event.getCode();
            switch (code) {
                case ENTER: 
                case SPACE: popupMenu.hide(); return;
                default:    return;
            }
        }
    };

    /***/
    public ContextMenuSkin(final ContextMenu popupMenu) {
        this.popupMenu = popupMenu;
        
        // When a contextMenu is shown, requestFocus on its content to enable
        // keyboard navigation.
        popupMenu.addEventHandler(Menu.ON_SHOWN, new EventHandler<Event>() {
            @Override public void handle(Event event) {
                Node cmContent = popupMenu.getSkin().getNode();
                if (cmContent != null) {
                    cmContent.requestFocus();
                    if (cmContent instanceof ContextMenuContent) {
                        Node accMenu = ((ContextMenuContent)cmContent).getItemsContainer();
//                        accMenu.accSendNotification(Attribute.VISIBLE);
                    }
                }
                
                root.addEventHandler(KeyEvent.KEY_PRESSED, keyListener);
            }
        });
        popupMenu.addEventHandler(Menu.ON_HIDDEN, new EventHandler<Event>() {
            @Override public void handle(Event event) {
                Node cmContent = popupMenu.getSkin().getNode();
                if (cmContent != null) cmContent.requestFocus();
                
                root.removeEventHandler(KeyEvent.KEY_PRESSED, keyListener);
            }
        });

        // For accessibility Menu.ON_HIDING does not work because isShowing is true
        // during the event, Menu.ON_HIDDEN does not work because the Window (in glass)
        // has already being disposed. The fix is to use WINDOW_HIDING (WINDOW_HIDDEN).
        popupMenu.addEventFilter(WindowEvent.WINDOW_HIDING, new EventHandler<Event>() {
            @Override public void handle(Event event) {
                Node cmContent = popupMenu.getSkin().getNode();
                if (cmContent instanceof ContextMenuContent) {
                    Node accMenu = ((ContextMenuContent)cmContent).getItemsContainer();
//                    accMenu.accSendNotification(Attribute.VISIBLE);
                }
            }
        });

        if (BehaviorSkinBase.IS_TOUCH_SUPPORTED &&
            popupMenu.getStyleClass().contains("text-input-context-menu")) {
            root = new EmbeddedTextContextMenuContent(popupMenu);
        } else {
            root = new ContextMenuContent(popupMenu);
        }
        root.idProperty().bind(popupMenu.idProperty());
        root.styleProperty().bind(popupMenu.styleProperty());
        root.getStyleClass().addAll(popupMenu.getStyleClass()); // TODO needs to handle updates

        // Only add this if we're on an embedded platform that supports 5-button navigation
        if (Utils.isTwoLevelFocus()) {
            tlFocus = new TwoLevelFocusPopupBehavior(popupMenu); // needs to be last.
        }
    }

    @Override public ContextMenu getSkinnable() {
        return popupMenu;
    }

    @Override public Node getNode() {
        return root;
    }

    @Override public void dispose() {
        root.idProperty().unbind();
        root.styleProperty().unbind();
        if (tlFocus != null) tlFocus.dispose();
    }
}
