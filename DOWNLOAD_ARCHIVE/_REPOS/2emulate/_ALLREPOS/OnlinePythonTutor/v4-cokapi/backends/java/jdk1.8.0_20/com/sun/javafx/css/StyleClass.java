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
package com.sun.javafx.css;

/**
 * 
 */
final class StyleClass {


    StyleClass(String styleClassName, int index) {
        this.styleClassName = styleClassName;
        this.index = index;
    }

    /** @return the style-class */
    public String getStyleClassName() {
        return styleClassName;
    }

    /** @return the style-class */
    @Override public String toString() {
        return styleClassName;
    }

    public int getIndex() {
       return index;
    }

    private final String styleClassName;

    // index of this StyleClass in styleClasses list.
    private final int index;
   
}
