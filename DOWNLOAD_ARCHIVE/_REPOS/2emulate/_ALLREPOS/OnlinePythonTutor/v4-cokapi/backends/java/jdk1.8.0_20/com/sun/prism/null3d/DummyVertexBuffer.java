/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.prism.null3d;

import com.sun.prism.impl.VertexBuffer;

class DummyVertexBuffer extends VertexBuffer {

    DummyVertexBuffer(int maxQuads) {
        super(maxQuads);
    }

    protected void drawQuads(int numVertices) { }

    protected void drawTriangles(int numTriangles, float fData[], byte cData[]) { }

}
