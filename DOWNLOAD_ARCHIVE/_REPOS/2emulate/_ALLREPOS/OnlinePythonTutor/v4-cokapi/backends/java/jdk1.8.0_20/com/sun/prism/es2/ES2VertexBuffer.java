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

package com.sun.prism.es2;

import com.sun.prism.impl.VertexBuffer;

class ES2VertexBuffer extends VertexBuffer {
    private GLContext glCtx;

    ES2VertexBuffer(int maxQuads) {
        super(maxQuads);
    }

    /**
     * Enables vertex attributes and arrays for the given GL instance.  This
     * state is per-GLContext and currently does not change for the life of
     * the ES2VertexBuffer, so it is best to call this just once after the
     * creation of each GLContext (i.e., for each ES2ContextState).  This
     * is made possible by using the same attribute-name-to-index-value
     * binding for all ES2Shaders, meaning that positionAttr always maps to 0,
     * colorAttr always maps to 1, and so on.  That way we can set up the
     * vertex attribute pointers just once, and they will be automatically
     * bound as needed each time glUseProgram() is called.
     */

    protected static final int BYTES_PER_FLOAT = 4;

    void disableVertexAttributes(GLContext glCtx) {
        this.glCtx = glCtx;

        glCtx.disableVertexAttributes();
    }

    void enableVertexAttributes(GLContext glCtx) {
        this.glCtx = glCtx;

        glCtx.enableVertexAttributes();
    }

    @Override
    protected void drawQuads(int numVertices) {
        glCtx.drawIndexedQuads(coordArray, colorArray, numVertices);
    }

    @Override
    protected void drawTriangles(int numTriangles, float fData[], byte cData[]) {
        glCtx.drawTriangleList(numTriangles, fData, cData);
    }

    // protected void flush(int numVertices) { glCtx.drawTriangleArrays(0, numVertices); }

    public static short [] getQuadIndices16bit(int numQuads) {
        short data[] = new short[numQuads * 6];

        for (int i = 0; i != numQuads; ++i) {
            int vtx = i * 4;
            int idx = i * 6;
            data[idx+0] = (short) (vtx+0);
            data[idx+1] = (short) (vtx+1);
            data[idx+2] = (short) (vtx+2);

            data[idx+3] = (short) (vtx+2);
            data[idx+4] = (short) (vtx+1);
            data[idx+5] = (short) (vtx+3);
        }

        return data;
    }

    public int genQuadsIndexBuffer(int numQuads) {
        if (numQuads * 6 > 0x10000)
            throw new IllegalArgumentException("vertex indices overflow");

        return glCtx.createIndexBuffer16(getQuadIndices16bit(numQuads));
    }

}
