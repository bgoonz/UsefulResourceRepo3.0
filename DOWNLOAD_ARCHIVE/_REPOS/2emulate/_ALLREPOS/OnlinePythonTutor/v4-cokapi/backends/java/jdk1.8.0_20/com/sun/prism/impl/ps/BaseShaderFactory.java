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

package com.sun.prism.impl.ps;

import com.sun.prism.impl.BaseResourceFactory;
import com.sun.prism.impl.shape.BasicEllipseRep;
import com.sun.prism.impl.shape.BasicRoundRectRep;
import com.sun.prism.impl.shape.BasicShapeRep;
import com.sun.prism.ps.ShaderFactory;
import com.sun.prism.shape.ShapeRep;
import com.sun.prism.impl.PrismSettings;

public abstract class BaseShaderFactory extends BaseResourceFactory
    implements ShaderFactory
{
    public ShapeRep createPathRep() {
        return PrismSettings.cacheComplexShapes ?
                new CachingShapeRep() : new BasicShapeRep();
    }

    public ShapeRep createRoundRectRep() {
        return PrismSettings.cacheSimpleShapes ?
            new CachingRoundRectRep() : new BasicRoundRectRep();
    }

    public ShapeRep createEllipseRep() {
        return PrismSettings.cacheSimpleShapes ?
            new CachingEllipseRep() : new BasicEllipseRep();
    }

    public ShapeRep createArcRep() {
        return PrismSettings.cacheComplexShapes ?
            new CachingShapeRep() : new BasicShapeRep();
    }
}
