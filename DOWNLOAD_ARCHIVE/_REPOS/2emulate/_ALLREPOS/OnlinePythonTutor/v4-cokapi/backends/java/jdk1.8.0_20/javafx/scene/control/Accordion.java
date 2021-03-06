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

import javafx.beans.property.ObjectProperty;
import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;

import com.sun.javafx.collections.TrackableObservableList;
import com.sun.javafx.scene.control.skin.AccordionSkin;

import javafx.beans.property.ObjectPropertyBase;
import javafx.beans.value.WritableValue;
import javafx.css.StyleableProperty;

/**
 * <p>An accordion is a group of {@link TitledPane TitlePanes}.  Only one TitledPane can be opened at
 * a time.</p>
 *
 * <p>The {@link TitledPane} content in an accordion can be any {@link javafx.scene.Node} such as UI controls or groups
 * of nodes added to a layout container.</p>
 *
 * <p>It is not recommended to set the MinHeight, PrefHeight, or MaxHeight
 * for this control.  Unexpected behavior will occur because the
 * Accordion's height changes when a TitledPane is opened or closed.</p>
 *
 * <p>
 * Accordion sets focusTraversable to false.
 * </p>
 *
 * <p>Example:
 * <pre><code>
 * TitledPane t1 = new TitledPane("T1", new Button("B1"));
 * TitledPane t2 = new TitledPane("T2", new Button("B2"));
 * TitledPane t3 = new TitledPane("T3", new Button("B3"));
 * Accordion accordion = new Accordion();
 * accordion.getPanes().addAll(t1, t2, t3);</code></pre>
 * @since JavaFX 2.0
 */
public class Accordion extends Control {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a new Accordion with no TitledPanes.
     */
    public Accordion() {
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        // focusTraversable is styleable through css. Calling setFocusTraversable
        // makes it look to css like the user set the value and css will not 
        // override. Initializing focusTraversable by calling applyStyle with null
        // StyleOrigin ensures that css will be able to override the value.
        ((StyleableProperty<Boolean>)(WritableValue<Boolean>)focusTraversableProperty()).applyStyle(null, Boolean.FALSE);
    }

    /***************************************************************************
     *                                                                         *
     * Instance Variables                                                      *
     *                                                                         *
     **************************************************************************/

    // The ObservableList of TitlePanes to use in this Accordion.
    private final ObservableList<TitledPane> panes = new TrackableObservableList<TitledPane>() {
        @Override protected void onChanged(ListChangeListener.Change<TitledPane> c) {
            // If one of the removed panes was the expandedPane, then clear
            // the expandedPane property. This can only be done if expandedPane
            // is not bound (if it is bound, we just have to accept the
            // potential error condition and allow the skin to handle it).
            while (c.next()) {
                if (c.wasRemoved() && !expandedPane.isBound()) {
                    for (TitledPane pane : c.getRemoved()) {
                        if (!c.getAddedSubList().contains(pane) && getExpandedPane() == pane) {
                            setExpandedPane(null);
                            break; // There can be only one, so no point continuing iteration
                        }
                    }
                }
            }
        }
    };

    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/

    // --- Expanded Pane
    private ObjectProperty<TitledPane> expandedPane = new ObjectPropertyBase<TitledPane>() {

        private TitledPane oldValue;
        
        @Override
        protected void invalidated() {
            final TitledPane value = get();
            if (value != null) {
                value.setExpanded(true);
            } else {
                if (oldValue != null) {
                    oldValue.setExpanded(false);
                }
            }
            oldValue = value;
        }

        @Override
        public String getName() {
            return "expandedPane";
        }

        @Override
        public Object getBean() {
            return Accordion.this;
        }
        
    };

    /**
     * <p>The expanded {@link TitledPane} that is currently visible. While it is technically
     * possible to set the expanded pane to a value that is not in {@link #getPanes},
     * doing so will be treated by the skin as if expandedPane is null. If a pane
     * is set as the expanded pane, and is subsequently removed from {@link #getPanes},
     * then expanded pane will be set to null, if possible. (This will not be possible
     * if you have manually bound the expanded pane to some value, for example).
     * </p>
     */
    public final void setExpandedPane(TitledPane value) { expandedPaneProperty().set(value); }

    /**
     * Gets the expanded TitledPane in the Accordion.  If the expanded pane has been
     * removed or there is no expanded TitledPane {@code null} is returned.
     *
     * @return The expanded TitledPane in the Accordion.
     */
    public final TitledPane getExpandedPane() { return expandedPane.get(); }

    /**
     * The expanded TitledPane in the Accordion.
     *
     * @return The expanded TitledPane in the Accordion.
     */
    public final ObjectProperty<TitledPane> expandedPaneProperty() { return expandedPane; }

    /***************************************************************************
     *                                                                         *
     * Public API                                                              *
     *                                                                         *
     **************************************************************************/

    /**
     * Gets the list of {@link TitledPane} in this Accordion.  Changing this ObservableList
     * will immediately result in the Accordion updating to display
     * the new contents of this ObservableList.
     *
     * @return The list of TitledPane in this Accordion.
     */
    public final ObservableList<TitledPane> getPanes() { return panes; }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new AccordionSkin(this);
    }

    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "accordion";

    /**
      * Most Controls return true for focusTraversable, so Control overrides
      * this method to return true, but Accordion returns false for
      * focusTraversable's initial value; hence the override of the override. 
      * This method is called from CSS code to get the correct initial value.
      * @treatAsPrivate implementation detail
      */
    @Deprecated @Override
    protected /*do not make final*/ Boolean impl_cssGetFocusTraversableInitialValue() {
        return Boolean.FALSE;
    }

}
