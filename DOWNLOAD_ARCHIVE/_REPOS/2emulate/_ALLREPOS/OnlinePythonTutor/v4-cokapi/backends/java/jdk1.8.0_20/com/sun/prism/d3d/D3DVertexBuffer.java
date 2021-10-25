/*
 * Copyright (c) 2009, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.prism.d3d;

import com.sun.prism.impl.VertexBuffer;

class D3DVertexBuffer extends VertexBuffer {

    private final long contextHandle;

    D3DVertexBuffer(long context, int maxQuads) {
        super(maxQuads);
        this.contextHandle = context;
    }

    @Override
    protected void drawQuads(int numVertices) {
        int res = nDrawIndexedQuads(contextHandle, coordArray, colorArray, numVertices);
        D3DContext.validate(res);
    }

    @Override
    protected void drawTriangles(int numTriangles, float fData[], byte cData[]) {
        nDrawTriangleList(contextHandle, fData, cData, numTriangles);
    }

    private static native int nDrawIndexedQuads(long pCtx,
            float coords[], byte colors[], int numVertices);

    private static native int nDrawTriangleList(long pCtx,
            float coords[], byte colors[], int numTriangles);

}
