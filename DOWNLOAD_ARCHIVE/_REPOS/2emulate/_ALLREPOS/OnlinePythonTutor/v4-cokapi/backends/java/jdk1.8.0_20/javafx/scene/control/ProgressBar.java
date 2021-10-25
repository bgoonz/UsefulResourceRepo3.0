/*
 * Copyright (c) 2010, 2014, Oracle and/or its affiliates. All rights reserved.
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

package javafx.scene.control;

import com.sun.javafx.scene.control.skin.ProgressBarSkin;

import javafx.beans.value.WritableValue;
import javafx.css.StyleableProperty;
//import javafx.scene.accessibility.Attribute;
import javafx.geometry.Orientation;

/**
 * A specialization of the ProgressIndicator which is represented as a
 * horizontal bar.
 * <p>
 * ProgressBar sets focusTraversable to false.
 * </p>
 *
 * <p>
 * This first example creates a ProgressBar with an indeterminate value :
 * <pre><code>
 * import javafx.scene.control.ProgressBar;
 * 
 * ProgressBar p1 = new ProgressBar();
 * </code></pre>
 * <p>
 * This next example creates a ProgressBar which is 25% complete :
 * <pre><code>
 * import javafx.scene.control.ProgressBar;
 * ProgressBar p2 = new ProgressBar();
 * p2.setProgress(0.25F);
 * </code></pre>
 *
 * Implementation of ProgressBar According to JavaFX UI Control API Specification
 * @since JavaFX 2.0
 */
public class ProgressBar extends ProgressIndicator {


    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a new indeterminate ProgressBar.
     */
    public ProgressBar() {
        this(INDETERMINATE_PROGRESS);
    }

    /**
     * Creates a new ProgressBar with the given progress value.
     */
    public ProgressBar(double progress) {
        // focusTraversable is styleable through css. Calling setFocusTraversable
        // makes it look to css like the user set the value and css will not 
        // override. Initializing focusTraversable by calling set on the 
        // CssMetaData ensures that css will be able to override the value.
        ((StyleableProperty<Boolean>)(WritableValue<Boolean>)focusTraversableProperty()).applyStyle(null, Boolean.FALSE);
        setProgress(progress);
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
    }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new ProgressBarSkin(this);
    }

    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    /**
     * Initialize the style class to 'progress-bar'.
     *
     * This is the selector class from which CSS can be used to style
     * this control.
     */
    private static final String DEFAULT_STYLE_CLASS = "progress-bar";
        
    /**
      * Most Controls return true for focusTraversable, so Control overrides
      * this method to return true, but ProgressBar returns false for
      * focusTraversable's initial value; hence the override of the override. 
      * This method is called from CSS code to get the correct initial value.
      * @treatAsPrivate implementation detail
      */
    @Deprecated @Override
    protected /*do not make final*/ Boolean impl_cssGetFocusTraversableInitialValue() {
        return Boolean.FALSE;
    }


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ORIENTATION: return Orientation.HORIZONTAL;
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
