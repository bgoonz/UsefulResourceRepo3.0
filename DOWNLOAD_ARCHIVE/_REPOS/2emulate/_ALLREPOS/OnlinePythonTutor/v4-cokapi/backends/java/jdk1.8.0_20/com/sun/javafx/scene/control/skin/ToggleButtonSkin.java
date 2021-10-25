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

import com.sun.javafx.scene.control.behavior.ToggleButtonBehavior;
import javafx.scene.control.ToggleButton;

public class ToggleButtonSkin extends LabeledSkinBase<ToggleButton, ToggleButtonBehavior<ToggleButton>> {

    public ToggleButtonSkin(ToggleButton toggleButton) {
        super(toggleButton, new ToggleButtonBehavior<>(toggleButton));
    }
}
