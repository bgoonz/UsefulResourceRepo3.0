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

package com.sun.scenario.effect.impl.prism;

import com.sun.prism.Graphics;
import com.sun.prism.RTTexture;
import com.sun.scenario.effect.FilterContext;
import com.sun.scenario.effect.Filterable;
import com.sun.scenario.effect.impl.Renderer;

public abstract class PrDrawable extends PrTexture<RTTexture> implements Filterable {
    
    public static PrDrawable create(FilterContext fctx, RTTexture rtt) {
        return ((PrRenderer) Renderer.getRenderer(fctx)).createDrawable(rtt);
    }

    protected PrDrawable(RTTexture rtt) {
        super(rtt);
    }

    public float getPixelScale() {
        return 1.0f;
    }

    @Override public int getMaxContentWidth() {
        return ((RTTexture)getTextureObject()).getMaxContentWidth();
    }
    
    @Override public int getMaxContentHeight() {
        return ((RTTexture)getTextureObject()).getMaxContentHeight();
    }
    
    @Override public void setContentWidth(int contentW) {
        ((RTTexture)getTextureObject()).setContentWidth(contentW);
    }

    @Override public void setContentHeight(int contentH) {
        ((RTTexture)getTextureObject()).setContentHeight(contentH);
    }
 
    public abstract Graphics createGraphics();

    public void clear() {
        Graphics g = createGraphics();
        g.clear();
    }
}
