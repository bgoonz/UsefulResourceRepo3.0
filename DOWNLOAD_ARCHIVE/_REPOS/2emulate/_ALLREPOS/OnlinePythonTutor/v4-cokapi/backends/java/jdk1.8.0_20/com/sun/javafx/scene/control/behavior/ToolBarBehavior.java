/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
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

import javafx.scene.control.ToolBar;
import javafx.scene.input.KeyCode;
import java.util.ArrayList;
import java.util.List;

/**
 * A Behavior implementation for ToolBars.
 *
 */
public class ToolBarBehavior extends BehaviorBase<ToolBar> {

    public ToolBarBehavior(ToolBar toolbar) {        
        super(toolbar, TOOLBAR_BINDINGS);
    }
    
    /***************************************************************************
     *                                                                         *
     * Key event handling                                                      *
     *                                                                         *
     **************************************************************************/
    
    private static final String CTRL_F5 = "Ctrl_F5";
    
    protected static final List<KeyBinding> TOOLBAR_BINDINGS = new ArrayList<KeyBinding>();
    static {
        TOOLBAR_BINDINGS.add(new KeyBinding(KeyCode.F5, CTRL_F5).ctrl());    
    }
    
    @Override protected void callAction(String name) {
        if (CTRL_F5.equals(name)) {
            ToolBar toolbar = getControl();
            if (!toolbar.getItems().isEmpty()) {
                toolbar.getItems().get(0).requestFocus();
            }
        } else {
            super.callAction(name);
        }
    }
}

