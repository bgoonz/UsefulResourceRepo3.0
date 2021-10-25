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

package com.sun.javafx.scene;

import javafx.scene.Camera;
import javafx.scene.SubScene;

/**
 * Used to access internal methods of SubScene.
 */
public class SubSceneHelper {
    private static SubSceneAccessor subSceneAccessor;

    static {
        forceInit(SubScene.class);
    }

    private SubSceneHelper() {
    }

    public static boolean isDepthBuffer(SubScene subScene) {
        return subSceneAccessor.isDepthBuffer(subScene);
    }

    public static Camera getEffectiveCamera(SubScene subScene) {
        return subSceneAccessor.getEffectiveCamera(subScene);
    }

    public static void setSubSceneAccessor(final SubSceneAccessor newAccessor) {
        if (subSceneAccessor != null) {
            throw new IllegalStateException();
        }

        subSceneAccessor = newAccessor;
    }

    public interface SubSceneAccessor {
        boolean isDepthBuffer(SubScene subScene);
        Camera getEffectiveCamera(SubScene subScene);
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
