/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
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

import javafx.scene.Parent;

public final class ParentTraversalEngine extends TraversalEngine{

    private final Parent root;
    private Boolean overridenTraversability;

    public ParentTraversalEngine(Parent root, Algorithm algorithm) {
        super(algorithm);
        this.root = root;
    }

    public ParentTraversalEngine(Parent root) {
        super();
        this.root = root;
    }

    /**
     * @param value overridden value or null for default value
     */
    public void setOverriddenFocusTraversability(Boolean value) {
        overridenTraversability = value;
    }

    @Override
    protected Parent getRoot() {
        return root;
    }

    public boolean isParentTraversable() {
        // This means the traversability can be overriden only for traversable root.
        // If user explicitly disabled traversability, we don't set it back to true
        return overridenTraversability != null ? root.isFocusTraversable() && overridenTraversability : root.isFocusTraversable();
    }

}
