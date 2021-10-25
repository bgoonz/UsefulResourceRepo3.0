/*
 * Copyright (c) 2008, 2013, Oracle and/or its affiliates. All rights reserved.
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

/**
 * Defines the end cap style of a {@code Shape}.
 * @since JavaFX 2.0
 */
public enum StrokeLineCap {

    /**
     * Ends unclosed subpaths and dash segments with a square projection 
     * that extends beyond the end of the segment to a distance 
     * equal to half of the line width.
     *
     * <p>
     * <img src="doc-files/strokelinecap-square.png"/>
     * </p>
     */
    SQUARE,

    /**
     * Ends unclosed subpaths and dash segments with no added decoration.
     *
     * <p>
     * <img src="doc-files/strokelinecap-butt.png"/>
     * </p>
     */
    BUTT,

    /**
     * Ends unclosed subpaths and dash segments with a round decoration 
     * that has a radius equal to half of the width of the pen.
     *
     * <p>
     * <img src="doc-files/strokelinecap-round.png"/>
     * </p>
     */
    ROUND
}
