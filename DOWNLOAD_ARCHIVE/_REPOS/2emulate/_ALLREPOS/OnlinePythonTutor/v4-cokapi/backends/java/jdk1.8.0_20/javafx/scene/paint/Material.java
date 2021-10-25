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

package javafx.scene.paint;

import com.sun.javafx.sg.prism.NGPhongMaterial;
import javafx.application.ConditionalFeature;
import javafx.application.Platform;
import javafx.beans.property.BooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;
import sun.util.logging.PlatformLogger;

/**
 * Base class for representing the material of a 3D surface.
 * 
 * Note that this is a conditional feature. See
 * {@link javafx.application.ConditionalFeature#SCENE3D ConditionalFeature.SCENE3D}
 * for more information.
 *
 * @since JavaFX 8.0
 */
public abstract class Material {
    /*
     *     Material (including Shaders and Textures)
     Material is not Paint
     PhongMaterial maybe the first and only material in FX8 (see 3D conceptual implementation for details)
     Bump map: Normal Map and Height Map -- We may generate a Normal Map when given a Height Map
     Displacement map? Not in FX8 -- May do Parallex correction mapping to improve quality at performance cost
     Support auto generated Mipmap
     No plan to support Multi-texture
     */

    protected Material() {
        if (!Platform.isSupported(ConditionalFeature.SCENE3D)) {
            String logname = Material.class.getName();
            PlatformLogger.getLogger(logname).warning("System can't support "
                                                      + "ConditionalFeature.SCENE3D");
        }
    }
    
    // Material isn't a Node. It can't use the standard dirtyBits pattern that is 
    // in Node
    private final BooleanProperty dirty = new SimpleBooleanProperty(true);

    final boolean isDirty() {
        return dirty.getValue();
    }

    void setDirty(boolean value) {
        dirty.setValue(value);
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    public final BooleanProperty impl_dirtyProperty() {
        return dirty;
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    abstract public void impl_updatePG();

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    abstract public NGPhongMaterial impl_getNGMaterial();
}
