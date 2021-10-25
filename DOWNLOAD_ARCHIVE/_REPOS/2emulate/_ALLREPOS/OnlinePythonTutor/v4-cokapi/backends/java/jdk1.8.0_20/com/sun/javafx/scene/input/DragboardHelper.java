/*
 * Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.scene.input;

import javafx.scene.input.Dragboard;

/**
 * Used to access internal methods of Dragboard.
 */
public class DragboardHelper {
    private static DragboardAccessor dragboardAccessor;

    static {
        forceInit(Dragboard.class);
    }

    private DragboardHelper() {
    }

    public static void setDataAccessRestriction(Dragboard dragboard,
            boolean restricted) {
        dragboardAccessor.setDataAccessRestriction(dragboard, restricted);
    }

    public static void setDragboardAccessor(final DragboardAccessor newAccessor) {
        if (dragboardAccessor != null) {
            throw new IllegalStateException();
        }

        dragboardAccessor = newAccessor;
    }

    public interface DragboardAccessor {
        void setDataAccessRestriction(Dragboard dragboard, boolean restricted);
    }

    private static void forceInit(final Class<?> classToInit) {
        try {
            Class.forName(classToInit.getName(), true,
                          classToInit.getClassLoader());
        } catch (final ClassNotFoundException e) {
            throw new AssertionError(e);  // Can't happen
        }
    }
}
