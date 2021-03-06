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

package javafx.scene;

import com.sun.javafx.collections.TrackableObservableList;
import com.sun.javafx.geom.BaseBounds;
import com.sun.javafx.geom.BoxBounds;
import com.sun.javafx.geom.transform.Affine3D;
import com.sun.javafx.geom.transform.BaseTransform;
import com.sun.javafx.jmx.MXNodeAlgorithm;
import com.sun.javafx.jmx.MXNodeAlgorithmContext;
import com.sun.javafx.scene.DirtyBits;
import com.sun.javafx.sg.prism.NGLightBase;
import com.sun.javafx.tk.Toolkit;
import javafx.application.ConditionalFeature;
import javafx.application.Platform;
import javafx.beans.InvalidationListener;
import javafx.beans.Observable;
import javafx.beans.property.BooleanProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.collections.ListChangeListener.Change;
import javafx.collections.ObservableList;
import javafx.scene.paint.Color;
import javafx.scene.shape.Shape3D;
import sun.util.logging.PlatformLogger;

/**
 * The {@code LightBase} class provides definitions of common properties for
 * objects that represent a form of Light source.  These properties
 * include:
 * <ul>
 * <li>The color that defines color of the light source.
 * </ul>
 *
 * Note that this is a conditional feature. See
 * {@link javafx.application.ConditionalFeature#SCENE3D ConditionalFeature.SCENE3D}
 * for more information.
 *
 * @since JavaFX 8.0
 */
public abstract class LightBase extends Node {

    private Affine3D localToSceneTx = new Affine3D();

    /**
     * Creates a new instance of {@code LightBase} class with a default Color.WHITE light source.
     */
    protected LightBase() {
        this(Color.WHITE);
    }

    /**
     * Creates a new instance of {@code LightBase} class using the specified color.
     *
     * @param color the color of the light source
     */
    protected LightBase(Color color) {
        if (!Platform.isSupported(ConditionalFeature.SCENE3D)) {
            String logname = LightBase.class.getName();
            PlatformLogger.getLogger(logname).warning("System can't support "
                                                      + "ConditionalFeature.SCENE3D");
        }
        
        setColor(color);
        this.localToSceneTransformProperty().addListener(observable -> impl_markDirty(DirtyBits.NODE_LIGHT_TRANSFORM));
    }

    /**
     * Specifies the color of light source.
     *
     * @defaultValue null
     */
    private ObjectProperty<Color> color;

    public final void setColor(Color value) {
        colorProperty().set(value);
    }

    public final Color getColor() {
        return color == null ? null : color.get();
    }

    public final ObjectProperty<Color> colorProperty() {
        if (color == null) {
            color = new SimpleObjectProperty<Color>(LightBase.this, "color") {
                @Override
                protected void invalidated() {
                    impl_markDirty(DirtyBits.NODE_LIGHT);
                }
            };
        }
        return color;
    }

    /**
     * Defines the light on or off.
     *
     * @defaultValue true
     */
    private BooleanProperty lightOn;

    public final void setLightOn(boolean value) {
        lightOnProperty().set(value);
    }

    public final boolean isLightOn() {
        return lightOn == null ? true : lightOn.get();
    }

    public final BooleanProperty lightOnProperty() {
        if (lightOn == null) {
            lightOn = new SimpleBooleanProperty(LightBase.this, "lightOn", true) {
                @Override
                protected void invalidated() {
                    impl_markDirty(DirtyBits.NODE_LIGHT);
                }
            };
        }
        return lightOn;
    }

    private ObservableList<Node> scope;

    /**
     * Gets the list of nodes that specifies the
     * hierarchical scope of this Light. If the scope list is empty,
     * the Light node has universe scope: all nodes under it's scene
     * are affected by it. If the scope list is non-empty, only those
     * 3D Shape nodes in the scope list and under the Group nodes in the
     * scope list are affected by this Light node.
     */
    public ObservableList<Node> getScope() {
        if (scope == null) {
            scope = new TrackableObservableList<Node>() {

                @Override
                protected void onChanged(Change<Node> c) {
                    impl_markDirty(DirtyBits.NODE_LIGHT_SCOPE);
                    while (c.next()) {
                        for (Node node : c.getRemoved()) {
                            // Update the removed nodes
                            if (node instanceof Parent || node instanceof Shape3D) {
                                markChildrenDirty(node);
                            }
                        }
                        for (Node node : c.getAddedSubList()) {
                            if (node instanceof Parent || node instanceof Shape3D) {
                                markChildrenDirty(node);
                            }
                        }
                    }
                }
            };
        }
        return scope;
    }

    @Override
    void scenesChanged(final Scene newScene, final SubScene newSubScene,
                       final Scene oldScene, final SubScene oldSubScene) {
        // This light is owned by the Scene/SubScene, and thus must change
        // accordingly. Note lights can owned by either a Scene or SubScene,
        // but not both.
        if (oldSubScene != null) {
            oldSubScene.removeLight(this);
        } else if (oldScene != null) {
            oldScene.removeLight(this);
        }
        if (newSubScene != null) {
            newSubScene.addLight(this);
        } else if (newScene != null) {
            newScene.addLight(this);
        }
    }

    private void markOwnerDirty() {
        // if the light is part of the scene/subScene, we will need to notify
        // the owner to mark the entire scene/subScene dirty.
        SubScene subScene = getSubScene();
        if (subScene != null) {
            subScene.markContentDirty();
        } else {
            Scene scene = getScene();
            if (scene != null) {
                scene.setNeedsRepaint();
            }
        }
    }

    private void markChildrenDirty(Node node) {
        if (node instanceof Shape3D) {
            // Dirty using a lightweight DirtyBits.NODE_DRAWMODE bit   
            ((Shape3D) node).impl_markDirty(DirtyBits.NODE_DRAWMODE);
        } else if (node instanceof Parent) {
            for (Node child : ((Parent) node).getChildren()) {
                markChildrenDirty(child);
            }
        }
    }

    @Override
    protected void impl_markDirty(DirtyBits dirtyBit) {
        super.impl_markDirty(dirtyBit);
        if ((scope == null) || getScope().isEmpty()) {
            // This light affect the entire scene/subScene
            markOwnerDirty();
        } else if (dirtyBit != DirtyBits.NODE_LIGHT_SCOPE) {
            // Skip NODE_LIGHT_SCOPE dirty since it is processed on scope change.
            ObservableList<Node> tmpScope = getScope();            
            for (int i = 0, max = tmpScope.size(); i < max; i++) {
                markChildrenDirty(tmpScope.get(i));
            }
        }
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    public void impl_updatePeer() {
        super.impl_updatePeer();
        NGLightBase peer = impl_getPeer();
        if (impl_isDirty(DirtyBits.NODE_LIGHT)) {
            peer.setColor((getColor() == null) ?
                    Toolkit.getPaintAccessor().getPlatformPaint(Color.WHITE)
                    : Toolkit.getPaintAccessor().getPlatformPaint(getColor()));
            peer.setLightOn(isLightOn());
        }

        if (impl_isDirty(DirtyBits.NODE_LIGHT_SCOPE)) {
            if (scope != null) {
                ObservableList<Node> tmpScope = getScope();
                if (tmpScope.isEmpty()) {
                    peer.setScope(null);
                } else {
                    Object ngList[] = new Object[tmpScope.size()];
                    for (int i = 0; i < tmpScope.size(); i++) {
                        Node n = tmpScope.get(i);
                        ngList[i] = n.impl_getPeer();
                    }
                    peer.setScope(ngList);
                }
            }
        }

        if (impl_isDirty(DirtyBits.NODE_LIGHT_TRANSFORM)) {
            localToSceneTx.setToIdentity();
            getLocalToSceneTransform().impl_apply(localToSceneTx);
            // TODO: 3D - For now, we are treating the scene as world. This may need to change
            // for the fixed eye position case.
            peer.setWorldTransform(localToSceneTx);
        }
    }

     /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    public BaseBounds impl_computeGeomBounds(BaseBounds bounds, BaseTransform tx) {
        // TODO: 3D - Check is this the right default
        return new BoxBounds();
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    protected boolean impl_computeContains(double localX, double localY) {
        // TODO: 3D - Check is this the right default
        return false;
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    public Object impl_processMXNode(MXNodeAlgorithm alg, MXNodeAlgorithmContext ctx) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
