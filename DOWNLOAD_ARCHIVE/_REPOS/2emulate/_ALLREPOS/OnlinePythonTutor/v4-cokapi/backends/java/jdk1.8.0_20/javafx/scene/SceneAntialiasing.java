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

/**
 * The JavaFX {@code SceneAntialiasing} class specifies the level of
 * anti-aliasing desired. Scene anti-aliasing is primarily used when rendering
 * 3D primitives, which are otherwise rendered aliased.
 * <p>
 * Note: In order for {@code SceneAntialiasing} to have an affect, the underlying
 * system must support:
 * {@link javafx.application.ConditionalFeature#SCENE3D ConditionalFeature.SCENE3D}
 * and anti-aliasing.
 * </p>
 * @since JavaFX 8.0
 */
public final class SceneAntialiasing {
    /**
     * Disables anti-aliasing
     */
    public static final SceneAntialiasing DISABLED = new SceneAntialiasing("DISABLED");
    /*
     * Enables anti-aliasing optimizing for performance over quality
     */
//    public static final SceneAntialiasing FASTEST  = new SceneAntialiasing("FASTEST");
    /**
     * Enables anti-aliasing optimizing for a balance of quality and performance
     */
    public static final SceneAntialiasing BALANCED = new SceneAntialiasing("BALANCED");
    /*
     * Enables anti-aliasing optimizing for quality over performance
     */
//    public static final SceneAntialiasing NICEST   = new SceneAntialiasing("NICEST");

    private final String val;

    private SceneAntialiasing(String value) {
        val = value;
    }

    @Override
    public String toString() {
        return val;
    }
}
