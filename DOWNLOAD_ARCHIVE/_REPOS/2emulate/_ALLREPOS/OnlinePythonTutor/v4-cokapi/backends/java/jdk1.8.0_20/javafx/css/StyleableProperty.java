/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
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

package javafx.css;

import javafx.beans.value.WritableValue;

/**
 * StyleableProperty allows a {@link javafx.beans.property} to be styled from
 * CSS. 
 * <p>This interface allows coordination between CSS 
 * processing and a <code>javafx.beans.property</code>. The implementation
 * ensure that the priority for setting the value is, in increasing order
 * and assuming equal importance:
 * <ol>
 * <li>a style from a user agent stylesheet in 
 * {@link javafx.application.Application#setUserAgentStylesheet(java.lang.String)}</li>
 * <li>value set from code, for example calling {@link javafx.scene.Node#setOpacity(double)}</li>
 * <li>a style from an author stylesheet in {@link javafx.scene.Scene#getStylesheets()}
 * or {@link javafx.scene.Parent#getStylesheets()}</li>
 * <li>a style from {@link javafx.scene.Node#setStyle(java.lang.String)}</li>
 * </ol>
 * @since JavaFX 8.0
 */
public interface StyleableProperty<T> extends WritableValue<T> {
    
    /** 
     * This method is called from CSS code to set the value of the property. 
     */
    void applyStyle(StyleOrigin origin, T value);
        
    /**
     * Tells the origin of the value of the property. This is needed to 
     * determine whether or not CSS can override the value.
     */
    StyleOrigin getStyleOrigin();
    
    /**
     * Reflect back the CssMetaData that corresponds to this 
     * <code>javafx.beans.property.StyleableProperty</code>
     */
    CssMetaData<? extends Styleable, T> getCssMetaData();
       
}
