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

package com.sun.pisces;

public final class NativeSurface extends AbstractSurface {

    public NativeSurface(int dataType, int width, int height) {
        super(width, height);
        switch (dataType) {
            case RendererBase.TYPE_INT_ARGB:
                break;
            default:
                throw new IllegalArgumentException("Data type not supported "
                        + " for " + NativeSurface.class.getName());
        }
        
        initialize(dataType, width, height);
    }

    private native void initialize(int dataType, int width, int height);
}
