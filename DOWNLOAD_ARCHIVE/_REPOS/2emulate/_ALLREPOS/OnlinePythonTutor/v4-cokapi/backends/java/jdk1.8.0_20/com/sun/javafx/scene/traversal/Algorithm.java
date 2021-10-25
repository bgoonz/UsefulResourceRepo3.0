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

import javafx.scene.Node;


public interface Algorithm {
    
    /**
     * Traverse from origin, in direction dir.
     * Return a the new target Node or null if no suitable target is found.
     */
    public Node select(Node owner, Direction dir, TraversalContext context);

    public Node selectFirst(TraversalContext context);

    public Node selectLast(TraversalContext context);
    
}
