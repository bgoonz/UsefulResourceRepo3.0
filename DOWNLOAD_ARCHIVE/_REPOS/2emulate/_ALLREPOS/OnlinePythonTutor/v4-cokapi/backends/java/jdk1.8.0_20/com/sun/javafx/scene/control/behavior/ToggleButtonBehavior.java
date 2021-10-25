package com.sun.javafx.scene.control.behavior;
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

import com.sun.javafx.scene.control.skin.Utils;
import javafx.collections.ObservableList;
import javafx.geometry.NodeOrientation;
import javafx.scene.Node;
import javafx.scene.control.Control;
import javafx.scene.control.Toggle;
import javafx.scene.control.ToggleButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.input.KeyCode;

import java.util.ArrayList;
import java.util.List;

public class ToggleButtonBehavior<C extends ToggleButton> extends ButtonBehavior<C>{

    public ToggleButtonBehavior(C button) {
        super(button, TOGGLE_BUTTON_BINDINGS);
    }

    /**
     * The key bindings for the ToggleButton. Sets up the keys to open the menu.
     */
    protected static final List<KeyBinding> TOGGLE_BUTTON_BINDINGS = new ArrayList<>();
    static {
        TOGGLE_BUTTON_BINDINGS.addAll(BUTTON_BINDINGS);
        TOGGLE_BUTTON_BINDINGS.add(new KeyBinding(KeyCode.RIGHT, "ToggleNext-Right"));
        TOGGLE_BUTTON_BINDINGS.add(new KeyBinding(KeyCode.LEFT, "TogglePrevious-Left"));
        TOGGLE_BUTTON_BINDINGS.add(new KeyBinding(KeyCode.DOWN, "ToggleNext-Down"));
        TOGGLE_BUTTON_BINDINGS.add(new KeyBinding(KeyCode.UP, "TogglePrevious-Up"));
    }

    @Override
    protected void callAction(String name) {
        ToggleButton toggleButton = getControl();
        final ToggleGroup toggleGroup = toggleButton.getToggleGroup();
        // A ToggleButton does not have to be in a group.
        if (toggleGroup == null) {
            super.callAction(name);
            return;
        }
        ObservableList<Toggle> toggles = toggleGroup.getToggles();
        final int currentToggleIdx = toggles.indexOf(toggleButton);

        switch (name) {
            case "ToggleNext-Right":
            case "ToggleNext-Down":
            case "TogglePrevious-Left":
            case "TogglePrevious-Up":
                boolean traversingToNext = traversingToNext(name, toggleButton.getEffectiveNodeOrientation());
                if (Utils.isTwoLevelFocus()) {
                    super.callAction(toggleToTraverseAction(name));
                } else if (traversingToNext) {
                    int nextToggleIndex = currentToggleIdx;
                    Toggle toggle = null;
                    while (++nextToggleIndex < toggles.size() && (toggle = toggles.get(nextToggleIndex)) instanceof Node &&
                            ((Node)toggle).isDisabled());
                    if (nextToggleIndex == toggles.size()) {
                        super.callAction(toggleToTraverseAction(name));
                    } else {
                        toggleGroup.selectToggle(toggle);
                        ((Control)toggle).requestFocus();
                    }
                } else {
                    int prevToggleIndex = currentToggleIdx;
                    Toggle toggle = null;
                    while (--prevToggleIndex >= 0 && (toggle = toggles.get(prevToggleIndex)) instanceof Node &&
                            ((Node)toggle).isDisabled());
                    if (prevToggleIndex < 0) {
                        super.callAction(toggleToTraverseAction(name));
                    } else {
                        toggleGroup.selectToggle(toggle);
                        ((Control)toggle).requestFocus();
                    }
                }
        }
    }

    private boolean traversingToNext(String name, NodeOrientation effectiveNodeOrientation) {
        boolean rtl = effectiveNodeOrientation == NodeOrientation.RIGHT_TO_LEFT;
        switch (name) {
            case "ToggleNext-Right":
                return rtl ? false : true;
            case "ToggleNext-Down":
                return true;
            case "TogglePrevious-Left":
                return rtl ? true : false;
            case "TogglePrevious-Up":
                return false;
            default:
                throw new IllegalArgumentException("Not a toggle action");
        }
    }

    private String toggleToTraverseAction(String name) {
        switch (name) {
            case "ToggleNext-Right":
                return TRAVERSE_RIGHT;
            case "ToggleNext-Down":
                return TRAVERSE_DOWN;
            case "TogglePrevious-Left":
                return TRAVERSE_LEFT;
            case "TogglePrevious-Up":
                return TRAVERSE_UP;
            default:
                throw new IllegalArgumentException("Not a toggle action");
        }
    }
}
