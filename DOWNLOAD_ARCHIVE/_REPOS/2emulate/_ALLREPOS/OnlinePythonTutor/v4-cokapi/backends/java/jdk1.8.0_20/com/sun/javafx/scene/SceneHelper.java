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

package com.sun.javafx.scene;

import javafx.scene.Camera;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;

/**
 * Used to access internal scene methods.
 */
public final class SceneHelper {
    private static SceneAccessor sceneAccessor;

    static {
        forceInit(Scene.class);
    }

    private SceneHelper() {
    }

    public static void setPaused(final boolean paused) {
        sceneAccessor.setPaused(paused);
    }

    public static void parentEffectiveOrientationInvalidated(
            final Scene scene) {
        sceneAccessor.parentEffectiveOrientationInvalidated(scene);
    }

    public static Camera getEffectiveCamera(final Scene scene) {
        return sceneAccessor.getEffectiveCamera(scene);
    }

    public static Scene createPopupScene(final Parent root) {
        return sceneAccessor.createPopupScene(root);
    }

    public static void setSceneAccessor(final SceneAccessor newAccessor) {
        if (sceneAccessor != null) {
            throw new IllegalStateException();
        }

        sceneAccessor = newAccessor;
    }

    public static SceneAccessor getSceneAccessor() {
        if (sceneAccessor == null) throw new IllegalStateException();
        return sceneAccessor;
    }

    public interface SceneAccessor {
        void setPaused(boolean paused);

        void parentEffectiveOrientationInvalidated(Scene scene);

        Camera getEffectiveCamera(Scene scene);

        Scene createPopupScene(Parent root);

        void setTransientFocusContainer(Scene scene, Node node);
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
