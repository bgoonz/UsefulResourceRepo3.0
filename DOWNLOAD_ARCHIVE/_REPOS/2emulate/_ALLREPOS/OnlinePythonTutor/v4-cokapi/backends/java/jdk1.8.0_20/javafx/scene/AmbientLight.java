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

import com.sun.javafx.sg.prism.NGAmbientLight;
import com.sun.javafx.sg.prism.NGNode;
import javafx.scene.paint.Color;

/**
 * Defines an ambient light source object. Ambient light is a light source
 * that seems to come from all directions.
 *
 * @since JavaFX 8.0
 */
public class AmbientLight extends LightBase {
    /**
     * Creates a new instance of {@code AmbientLight} class with a default Color.WHITE light source.
     */
    public AmbientLight() {
        super();
    }

    /**
     * Creates a new instance of {@code AmbientLight} class using the specified color.
     *
     * @param color the color of the light source
     */
    public AmbientLight(Color color) {
        super(color);
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    protected NGNode impl_createPeer() {
        return new NGAmbientLight();
    }
}
