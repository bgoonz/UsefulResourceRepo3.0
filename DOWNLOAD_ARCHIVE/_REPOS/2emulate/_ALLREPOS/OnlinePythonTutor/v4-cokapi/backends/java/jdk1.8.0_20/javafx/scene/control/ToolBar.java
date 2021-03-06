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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javafx.beans.DefaultProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.value.WritableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.geometry.Orientation;
import javafx.scene.Node;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import javafx.css.StyleableObjectProperty;
import javafx.css.CssMetaData;
import javafx.css.PseudoClass;

import com.sun.javafx.css.converters.EnumConverter;
import com.sun.javafx.scene.control.skin.ToolBarSkin;

import javafx.css.Styleable;
import javafx.css.StyleableProperty;

/**
 * <p>
 * A ToolBar is a control which displays items horizontally
 * or vertically. The most common items to place within a {@code ToolBar}
 * are {@link Button Buttons}, {@link ToggleButton ToggleButtons} and
 * {@link Separator Separators}, but you are not restricted to just these, and
 * can insert any {@link Node} into them.
 * </p>
 *
 * <p>If there are too many items to fit in the ToolBar an overflow button will appear.
 * The overflow button allows you to select items that are not currently visible in the toolbar.
 * </p>
 * <p>
 * ToolBar sets focusTraversable to false.
 * </p>
 *
 * <p>
 * Example of a horizontal ToolBar with eight buttons separated with two vertical separators.
 * </p>
 * <pre><code>
 * ToolBar toolBar = new ToolBar(
 *     new Button("New"),
 *     new Button("Open"),
 *     new Button("Save"),
 *     new Separator(true),
 *     new Button("Clean"),
 *     new Button("Compile"),
 *     new Button("Run"),
 *     new Separator(true),
 *     new Button("Debug"),
 *     new Button("Profile")
 * );
 * </code></pre>
 *
 * @since JavaFX 2.0
 */
@DefaultProperty("items")
public class ToolBar extends Control {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates an empty tool bar.
     */
    public ToolBar() {
        initialize();
    }

    /**
     * Creates a tool bar populated with the specified nodes. None of the items
     * can be null.
     *
     * @param items the items to add
     */
    public ToolBar(Node... items) {
        initialize();
        this.items.addAll(items);
    }

    private void initialize() {
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        // focusTraversable is styleable through css. Calling setFocusTraversable
        // makes it look to css like the user set the value and css will not 
        // override. Initializing focusTraversable by calling set on the 
        // CssMetaData ensures that css will be able to override the value.
        ((StyleableProperty<Boolean>)(WritableValue<Boolean>)focusTraversableProperty()).applyStyle(null, Boolean.FALSE);
        
        // initialize css pseudo-class state
        pseudoClassStateChanged(HORIZONTAL_PSEUDOCLASS_STATE, true);
        
    }

    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/

    /**
     * The items contained in the {@code ToolBar}. Typical use case for a
     * {@code ToolBar} suggest that the most common items to place within it
     * are {@link Button Buttons}, {@link ToggleButton ToggleButtons}, and  {@link Separator Separators},
     * but you are not restricted to just these, and can insert any {@link Node}.
     * The items added must not be null.
     */
    public final ObservableList<Node> getItems() { return items; }

    private final ObservableList<Node> items = FXCollections.<Node>observableArrayList();

    /**
     * The orientation of the {@code ToolBar} - this can either be horizontal
     * or vertical.
     */
    private ObjectProperty<Orientation> orientation;
    public final void setOrientation(Orientation value) {
        orientationProperty().set(value);
    };
    public final Orientation getOrientation() {
        return orientation == null ? Orientation.HORIZONTAL : orientation.get();
    }
    public final ObjectProperty<Orientation> orientationProperty() {
        if (orientation == null) {
            orientation = new StyleableObjectProperty<Orientation>(Orientation.HORIZONTAL) {
                @Override public void invalidated() {
                    final boolean isVertical = (get() == Orientation.VERTICAL);
                    pseudoClassStateChanged(VERTICAL_PSEUDOCLASS_STATE,    isVertical);
                    pseudoClassStateChanged(HORIZONTAL_PSEUDOCLASS_STATE, !isVertical);
                }

                @Override
                public Object getBean() {
                    return ToolBar.this;
                }

                @Override
                public String getName() {
                    return "orientation";
                }

                @Override
                public CssMetaData<ToolBar,Orientation> getCssMetaData() {
                    return StyleableProperties.ORIENTATION;
                }
            };
        }
        return orientation;
    }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new ToolBarSkin(this);
    }

    /***************************************************************************
     *                                                                         *
     *                         Stylesheet Handling                             *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "tool-bar";

    private static class StyleableProperties {
        private static final CssMetaData<ToolBar,Orientation> ORIENTATION = 
                new CssMetaData<ToolBar,Orientation>("-fx-orientation",
                new EnumConverter<Orientation>(Orientation.class), 
                Orientation.HORIZONTAL) {

            @Override
            public Orientation getInitialValue(ToolBar node) {
                // A vertical ToolBar should remain vertical 
                return node.getOrientation();
            }
            
            @Override
            public boolean isSettable(ToolBar n) {
                return n.orientation == null || !n.orientation.isBound();
            }

            @Override
            public StyleableProperty<Orientation> getStyleableProperty(ToolBar n) {
                return (StyleableProperty<Orientation>)(WritableValue<Orientation>)n.orientationProperty();
            }
        };

        private static final List<CssMetaData<? extends Styleable, ?>> STYLEABLES;
        static {
            final List<CssMetaData<? extends Styleable, ?>> styleables =
                new ArrayList<CssMetaData<? extends Styleable, ?>>(Control.getClassCssMetaData());
            styleables.add(ORIENTATION);
            STYLEABLES = Collections.unmodifiableList(styleables);
        }
    }

    /**
     * @return The CssMetaData associated with this class, which may include the
     * CssMetaData of its super classes.
     * @since JavaFX 8.0
     */
    public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
        return StyleableProperties.STYLEABLES;
    }

    /**
     * {@inheritDoc}
     * @since JavaFX 8.0
     */
    @Override
    public List<CssMetaData<? extends Styleable, ?>> getControlCssMetaData() {
        return getClassCssMetaData();
    }

    private static final PseudoClass VERTICAL_PSEUDOCLASS_STATE = PseudoClass.getPseudoClass("vertical");
    private static final PseudoClass HORIZONTAL_PSEUDOCLASS_STATE = PseudoClass.getPseudoClass("horizontal");

    /**
      * Most Controls return true for focusTraversable, so Control overrides
      * this method to return true, but ToolBar returns false for
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
//            case ROLE: return Role.TOOLBAR;
//            case OVERFLOW_BUTTON: //Skin
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
