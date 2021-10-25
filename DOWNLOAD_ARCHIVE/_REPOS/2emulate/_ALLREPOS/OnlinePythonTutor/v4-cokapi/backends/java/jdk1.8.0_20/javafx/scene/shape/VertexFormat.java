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
package javafx.scene.shape;

/**
 * NOTE: Do not make this a public class for FX 8.0
 * 
 * A flexible Vertex Format Class used to describe the contents of vertices interleaved
 * in an associated single Face buffer.
 */
class VertexFormat {
    /*
     *  TODO: 1) Need to handle multiple of the same component such as texCoord in the future.
     *        2) Change from a list of constants to set of enums? 
     */

    // For internal use only
    private static final int POINT_ELEMENT_SIZE = 3;
    private static final int TEXCOORD_ELEMENT_SIZE = 2;
    private static final int FACE_ELEMENT_SIZE = 6;

    VertexFormat() {
    }

    int getPointElementSize() {
        return POINT_ELEMENT_SIZE;
    }

    int getTexCoordElementSize() {
        return TEXCOORD_ELEMENT_SIZE;
    }

    int getFaceElementSize() {
        return FACE_ELEMENT_SIZE;
    }

}
