/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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

/**
 * A tri-state boolean used with KeyBinding.
 */
public enum OptionalBoolean {
    TRUE,
    FALSE,
    ANY;

    public boolean equals(boolean b) {
        if (this == ANY) return true;
        if (b && this == TRUE) return true;
        if (!b && this == FALSE) return true;
        return false;
    }
}
