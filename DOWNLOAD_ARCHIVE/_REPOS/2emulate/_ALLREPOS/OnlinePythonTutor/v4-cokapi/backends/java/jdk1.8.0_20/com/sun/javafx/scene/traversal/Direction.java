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

package com.sun.javafx.scene.traversal;

import javafx.geometry.NodeOrientation;

public enum Direction {
    
    UP(false),
    DOWN(true),
    LEFT(false),
    RIGHT(true),
    NEXT(true),
    NEXT_IN_LINE(true), // Like NEXT, but does not traverse into the current parent
    PREVIOUS(false);
    private final boolean forward;

    Direction(boolean forward) {
        this.forward = forward;
    }

    public boolean isForward() {
        return forward;
    }
}
