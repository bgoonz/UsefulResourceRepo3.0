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

import javafx.scene.Node;
import javafx.scene.SubScene;

/**
 * Used to access internal methods of Node.
 */
public class NodeHelper {
    private static NodeAccessor nodeAccessor;

    static {
        forceInit(Node.class);
    }

    private NodeHelper() {
    }

    public static void layoutNodeForPrinting(Node node) {
        nodeAccessor.layoutNodeForPrinting(node);
    }

    public static boolean isDerivedDepthTest(Node node) {
        return nodeAccessor.isDerivedDepthTest(node);
    };

    public static SubScene getSubScene(Node node) {
        return nodeAccessor.getSubScene(node);
    };


    public static void setNodeAccessor(final NodeAccessor newAccessor) {
        if (nodeAccessor != null) {
            throw new IllegalStateException();
        }

        nodeAccessor = newAccessor;
    }

    public static NodeAccessor getNodeAccessor() {
        if (nodeAccessor == null) {
            throw new IllegalStateException();
        }

        return nodeAccessor;
    }

    public interface NodeAccessor {
        void layoutNodeForPrinting(Node node);
        boolean isDerivedDepthTest(Node node);
        SubScene getSubScene(Node node);
        void setLabeledBy(Node node, Node labeledBy);
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
