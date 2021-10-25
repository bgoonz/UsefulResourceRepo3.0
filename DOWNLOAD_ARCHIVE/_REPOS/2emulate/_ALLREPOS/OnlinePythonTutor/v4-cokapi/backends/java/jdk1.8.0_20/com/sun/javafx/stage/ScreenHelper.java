/*
 * Copyright (c) 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.stage;

import javafx.stage.Screen;

/**
 * Utility class used for accessing certain implementation-specific
 * runtime functionality.
 */
public final class ScreenHelper {

    private static ScreenAccessor screenAccessor;

    public static interface ScreenAccessor {
        public float getScale(Screen screen);
    }

    public static void setScreenAccessor(ScreenAccessor a) {
        if (screenAccessor != null) {
            throw new IllegalStateException();
        }
        screenAccessor = a;
    }

    public static ScreenAccessor getScreenAccessor() {
        return screenAccessor;
    }
}
