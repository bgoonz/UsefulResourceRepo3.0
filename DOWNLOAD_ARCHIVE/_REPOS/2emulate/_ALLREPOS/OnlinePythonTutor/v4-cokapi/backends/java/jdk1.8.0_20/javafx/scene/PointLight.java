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

package javafx.scene;

import com.sun.javafx.sg.prism.NGNode;
import com.sun.javafx.sg.prism.NGPointLight;
import javafx.scene.paint.Color;

/**
 * Defines a point light source object. A light source that has a
 * fixed point in space and radiates light equally in all directions
 * away from itself.
 *
 * @since JavaFX 8.0
 */
public class PointLight extends LightBase {
    /**
     * Creates a new instance of {@code PointLight} class with a default Color.WHITE light source.
     */
    public PointLight() {
        super();
    }

    /**
     * Creates a new instance of {@code PointLight} class using the specified color.
     *
     * @param color the color of the light source
     */
    public PointLight(Color color) {
        super(color);
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    protected NGNode impl_createPeer() {
        return new NGPointLight();
    }
}
