/*
 * Copyright (c) 2009, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.robot;

import javafx.scene.Scene;

import com.sun.javafx.robot.impl.BaseFXRobot;

public class FXRobotFactory {
    /**
     * Creates FXRobot instance which controls given scene.
     *
     */
    public static FXRobot createRobot(Scene scene) {
        return new BaseFXRobot(scene);
    }
}
