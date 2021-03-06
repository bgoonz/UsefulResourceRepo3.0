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
package com.sun.prism.impl;

import com.sun.javafx.geom.Quat4f;
import com.sun.javafx.geom.Vec2f;
import com.sun.javafx.geom.Vec3f;
import static com.sun.prism.impl.BaseMesh.FACE_MEMBERS_SIZE;

/**************************************************************************
 *                                                                        *
 * Temporary state, used to reduce the occurrence of temporary garbage    *
 * while computing things such as Quat, Normal, Tangent or Bitangent.     *
 * Since these operations happen extremely often and must be very fast,   *
 * we need to reduce the load on the garbage collector.                   *
 *                                                                        *
 *************************************************************************/
final class MeshTempState {
    /**
     * Temporary Vec3fs used by MeshUtil and BaseMesh to compute/adjust normals.
     */
    final Vec3f vec3f1 = new Vec3f();
    final Vec3f vec3f2 = new Vec3f();
    final Vec3f vec3f3 = new Vec3f();
    final Vec3f vec3f4 = new Vec3f();
    final Vec3f vec3f5 = new Vec3f();
    final Vec3f vec3f6 = new Vec3f();

    /**
     * Temporary Vec2fs used by MeshUtil to fix tangent space.
     */
    final Vec2f vec2f1 = new Vec2f();
    final Vec2f vec2f2 = new Vec2f();    

    /**
     * Temporary variables used by BaseMesh to compute TBN.
     */
    final int smFace[] = new int[FACE_MEMBERS_SIZE];
    final int triVerts[] = new int[3];
    final Vec3f triPoints[] = new Vec3f[3];
    final Vec2f triTexCoords[] = new Vec2f[3];
    final Vec3f norm[] = new Vec3f[3];

    /**
     * A temporary 3 by 3 float matrix used by BaseMesh to compute quat.
     */
    final float matrix[][] = new float[3][3];
    /**
     * A temporary float array used by BaseMesh to compute quat.
     */
    final float vector[] = new float[3];
    /**
     * A temporary Quat4f used by BaseMesh to build quat.
     */
    final Quat4f quat = new Quat4f();

    /**
     * A temporary MeshVertex array for all possible vertices.
     * Length: nFaces * 3
     */
    MeshVertex[] pool;

    /**
     * A temporary MeshVertex array
     * Length: nVerts
     */
    MeshVertex[] pVertex;

    /**
     * A temporary int indexBuffer array
     * Length: nFaces * 3
     */
    int[] indexBuffer;
    
    /**
     * A temporary short indexBuffer array
     * Length: nFaces * 3
     */
    short[] indexBufferShort;

    /**
     * A temporary vertexBuffer array
     * Length: nNewVerts * VERTEX_SIZE
     */
    float[] vertexBuffer;

    private static final ThreadLocal<MeshTempState> tempStateRef =
            new ThreadLocal<MeshTempState>() {
                @Override
                protected MeshTempState initialValue() {
                    return new MeshTempState();
                }
            };

    private MeshTempState() {
        for (int i = 0; i < 3; i++) {
            norm[i] = new Vec3f();
        }
    }

    static MeshTempState getInstance() {
        return tempStateRef.get();
    }
}

