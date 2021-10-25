/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
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

import javafx.scene.control.PasswordField;

import com.sun.javafx.scene.text.HitInfo;


/**
 * Password field behavior.
 */
public class PasswordFieldBehavior extends TextFieldBehavior {

    public PasswordFieldBehavior(PasswordField passwordField) {
        super(passwordField);
    }

    // RT-18711 & RT-18854: Stub out word based navigation and editing
    // for security reasons.
    protected void deletePreviousWord() { }
    protected void deleteNextWord() { }
    protected void selectPreviousWord() { }
    protected void selectNextWord() { }
    protected void previousWord() { }
    protected void nextWord() { }
    protected void selectWord() {
        getControl().selectAll();
    }
    protected void mouseDoubleClick(HitInfo hit) {
        getControl().selectAll();
    }

}
