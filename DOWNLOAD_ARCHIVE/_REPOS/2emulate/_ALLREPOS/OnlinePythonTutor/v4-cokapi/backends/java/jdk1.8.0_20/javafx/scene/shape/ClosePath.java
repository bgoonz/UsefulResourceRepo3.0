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

package javafx.scene.shape;

import com.sun.javafx.geom.Path2D;
import com.sun.javafx.sg.prism.NGPath;

/**
 * A path element which closes the current path.   
 *
 * <p>For more information on path elements see the {@link Path} and 
 * {@link PathElement} classes.
 * @since JavaFX 2.0
 */    
public class ClosePath extends PathElement {
    
    /**
     * {@inheritDoc}
     */        
    @Override 
    void addTo(NGPath pgPath) {
        pgPath.addClosePath();
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override public void impl_addTo(Path2D path) {
        path.closePath();
    }

    /**
     * Returns a string representation of this {@code ArcTo} object.
     * @return a string representation of this {@code ArcTo} object.
     */
    @Override
    public String toString() {
        return "ClosePath";
    }
}
