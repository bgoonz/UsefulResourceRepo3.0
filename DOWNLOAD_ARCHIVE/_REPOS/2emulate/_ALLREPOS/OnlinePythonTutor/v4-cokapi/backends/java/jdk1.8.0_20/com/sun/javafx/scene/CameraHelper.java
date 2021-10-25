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

import javafx.geometry.Point2D;
import javafx.geometry.Point3D;
import javafx.scene.Camera;
import javafx.scene.Node;

/**
 * Used to access internal methods of Camera.
 */
public class CameraHelper {
    private static CameraAccessor cameraAccessor;

    static {
        forceInit(Camera.class);
    }

    private CameraHelper() {
    }

    public static Point2D project(Camera camera, Point3D p) {
        return cameraAccessor.project(camera, p);
    }

    public static Point2D pickNodeXYPlane(Camera camera, Node node, double x, double y) {
        return cameraAccessor.pickNodeXYPlane(camera, node, x, y);
    }

    public static Point3D pickProjectPlane(Camera camera, double x, double y) {
        return cameraAccessor.pickProjectPlane(camera, x, y);
    }

    public static void setCameraAccessor(final CameraAccessor newAccessor) {
        if (cameraAccessor != null) {
            throw new IllegalStateException();
        }

        cameraAccessor = newAccessor;
    }

    public interface CameraAccessor {
        Point2D project(Camera camera, Point3D p);
        Point2D pickNodeXYPlane(Camera camera, Node node, double x, double y);
        Point3D pickProjectPlane(Camera camera, double x, double y);
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
