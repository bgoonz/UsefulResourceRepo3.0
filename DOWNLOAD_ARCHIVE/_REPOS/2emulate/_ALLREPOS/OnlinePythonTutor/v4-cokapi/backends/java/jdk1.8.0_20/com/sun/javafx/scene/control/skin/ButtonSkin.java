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

import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ContextMenu;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyCodeCombination;

import com.sun.javafx.scene.control.behavior.ButtonBehavior;



/**
 * A Skin for command Buttons.
 */
public class ButtonSkin extends LabeledSkinBase<Button, ButtonBehavior<Button>> {

    public ButtonSkin(Button button) {
        super(button, new ButtonBehavior<Button>(button));

        // Register listeners
        registerChangeListener(button.defaultButtonProperty(), "DEFAULT_BUTTON");
        registerChangeListener(button.cancelButtonProperty(), "CANCEL_BUTTON");
        registerChangeListener(button.focusedProperty(), "FOCUSED");

        if (getSkinnable().isDefaultButton()) {
            /*
            ** were we already the defaultButton, before the listener was added?
            ** don't laugh, it can happen....
            */
            setDefaultButton(true);
        }

        if (getSkinnable().isCancelButton()) {
            /*
            ** were we already the defaultButton, before the listener was added?
            ** don't laugh, it can happen....
            */
            setCancelButton(true);
        }       

    }


    @Override protected void handleControlPropertyChanged(String p) {     
        super.handleControlPropertyChanged(p);
        if ("DEFAULT_BUTTON".equals(p)) {
            setDefaultButton(getSkinnable().isDefaultButton());
        }
        else if ("CANCEL_BUTTON".equals(p)) {
            setCancelButton(getSkinnable().isCancelButton());
        }
        else if ("FOCUSED".equals(p)) {
           if (!getSkinnable().isFocused()) {
                ContextMenu cm = getSkinnable().getContextMenu();
                if (cm != null) {
                    if (cm.isShowing()) {
                        cm.hide();
                        Utils.removeMnemonics(cm, getSkinnable().getScene());
                    }
                }
           }
        } else if ("PARENT".equals(p)) {
            if (getSkinnable().getParent() == null && getSkinnable().getScene() != null) {  
                if (getSkinnable().isDefaultButton()) {
                    getSkinnable().getScene().getAccelerators().remove(defaultAcceleratorKeyCodeCombination);
                }
                if (getSkinnable().isCancelButton()) {
                    getSkinnable().getScene().getAccelerators().remove(cancelAcceleratorKeyCodeCombination);
                }
            }
        }
    }

    Runnable defaultButtonRunnable = () -> {
        if (getSkinnable().getScene() != null && getSkinnable().impl_isTreeVisible() && !getSkinnable().isDisabled()) {
            getSkinnable().fire();
        }
    };

    Runnable cancelButtonRunnable = () -> {
        if (getSkinnable().getScene() != null && getSkinnable().impl_isTreeVisible() && !getSkinnable().isDisabled()) {
            getSkinnable().fire();
        }
    };

    private KeyCodeCombination defaultAcceleratorKeyCodeCombination;
    
    private void setDefaultButton(boolean value) {
        Scene scene = getSkinnable().getScene();
        if (scene != null) {
            KeyCode acceleratorCode = KeyCode.ENTER;
            defaultAcceleratorKeyCodeCombination = new KeyCodeCombination(acceleratorCode);

            Runnable oldDefault = scene.getAccelerators().get(defaultAcceleratorKeyCodeCombination);
            if (!value) {
                /**
                 * first check of there's a default button already
                 */
                if (defaultButtonRunnable.equals(oldDefault)) {
                    /**
                     * is it us?
                     */
                    scene.getAccelerators().remove(defaultAcceleratorKeyCodeCombination);
                }
            }
            else {
                if (!defaultButtonRunnable.equals(oldDefault)) {
                    scene.getAccelerators().remove(defaultAcceleratorKeyCodeCombination);
                    scene.getAccelerators().put(defaultAcceleratorKeyCodeCombination, defaultButtonRunnable);
                }
            }
        }
    }

    private KeyCodeCombination cancelAcceleratorKeyCodeCombination;

    private void setCancelButton(boolean value) {
        Scene scene = getSkinnable().getScene();
        if (scene != null) {
            KeyCode acceleratorCode = KeyCode.ESCAPE;
            cancelAcceleratorKeyCodeCombination = new KeyCodeCombination(acceleratorCode);
        
            Runnable oldCancel = scene.getAccelerators().get(cancelAcceleratorKeyCodeCombination);
            if (!value) {
                /**
                 * first check of there's a cancel button already
                 */
                if (cancelButtonRunnable.equals(oldCancel)) {
                    /**
                     * is it us?
                     */
                    scene.getAccelerators().remove(cancelAcceleratorKeyCodeCombination);
                }
            }
            else {
                if (!cancelButtonRunnable.equals(oldCancel)) {
                    scene.getAccelerators().remove(cancelAcceleratorKeyCodeCombination);
                    scene.getAccelerators().put(cancelAcceleratorKeyCodeCombination, cancelButtonRunnable);
                }
            }
        }
    }
}
