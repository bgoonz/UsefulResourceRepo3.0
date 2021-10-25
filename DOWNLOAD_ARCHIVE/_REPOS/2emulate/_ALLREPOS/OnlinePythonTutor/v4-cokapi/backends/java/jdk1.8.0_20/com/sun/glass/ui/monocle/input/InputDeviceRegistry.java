/*
 * Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.glass.ui.monocle.input;

import javafx.collections.FXCollections;
import javafx.collections.ObservableSet;

public class InputDeviceRegistry {
    protected ObservableSet<InputDevice> devices =
            FXCollections.observableSet();

    public ObservableSet<InputDevice> getInputDevices() {
        return devices;
    }

}
