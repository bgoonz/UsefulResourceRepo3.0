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

import com.sun.javafx.scene.traversal.ParentTraversalEngine;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.BooleanPropertyBase;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.ObjectPropertyBase;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.WritableValue;
import javafx.event.ActionEvent;
import javafx.geometry.Pos;
import javafx.scene.Node;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import javafx.css.PseudoClass;

import com.sun.javafx.scene.control.skin.ToggleButtonSkin;

import javafx.css.StyleableProperty;

/**
 * A {@code ToggleButton} is a specialized control which has the ability to be
 * selected. Typically a {@code ToggleButton} is rendered similarly to a Button.
 * However, they are two different types of Controls. A Button is a "command"
 * button which invokes a function when clicked. A {@code ToggleButton} on the
 * other hand is simply a control with a Boolean indicating whether it has been
 * selected.
 * <p>
 * {@code ToggleButton} can also be placed in groups. By default, a
 * {@code ToggleButton} is not in a group. When in groups, only one
 * {@code ToggleButton} at a time within that group can be selected. To put two
 * {@code ToggleButtons} in the same group, simply assign them both the same
 * value for {@link ToggleGroup}.
 * </p>
 * <p>
 * Unlike {@link RadioButton RadioButtons}, {@code ToggleButtons} in a
 * {@code ToggleGroup} do not attempt to force at least one selected
 * {@code ToggleButton} in the group. That is, if a {@code ToggleButton} is
 * selected, clicking on it will cause it to become unselected. With
 * {@code RadioButton}, clicking on the selected button in the group will have
 * no effect.
 * </p>
 *
 * <p>Example:</p>
 * <pre><code>
 * ToggleButton tb1 = new ToggleButton("toggle button 1");
 * ToggleButton tb2 = new ToggleButton("toggle button 2");
 * ToggleButton tb3 = new ToggleButton("toggle button 3");
 * ToggleGroup group = new ToggleGroup();
 * tb1.setToggleGroup(group);
 * tb2.setToggleGroup(group);
 * tb3.setToggleGroup(group);
 * </code></pre>
 *
 * <p>
 * MnemonicParsing is enabled by default for ToggleButton.
 * </p>
 * @since JavaFX 2.0
 */

// TODO Mention the semantics when binding "selected" on multiple toggle buttons
// which are all on the same toggle group, and how the selected state on the
// toggle group is affected or not in such a case.

 public class ToggleButton extends ButtonBase implements Toggle {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a toggle button with an empty string for its label.
     */
    public ToggleButton() {
        initialize();
    }

    /**
     * Creates a toggle button with the specified text as its label.
     *
     * @param text A text string for its label.
     */
    public ToggleButton(String text) {
        setText(text);
        initialize();
    }

    /**
     * Creates a toggle button with the specified text and icon for its label.
     *
     * @param text A text string for its label.
     * @param graphic the icon for its label.
     */
    public ToggleButton(String text, Node graphic) {
        setText(text);
        setGraphic(graphic);
        initialize();
    }

    private void initialize() {
        getStyleClass().setAll(DEFAULT_STYLE_CLASS);
        // alignment is styleable through css. Calling setAlignment
        // makes it look to css like the user set the value and css will not 
        // override. Initializing alignment by calling set on the 
        // CssMetaData ensures that css will be able to override the value.
        ((StyleableProperty<Pos>)(WritableValue<Pos>)alignmentProperty()).applyStyle(null, Pos.CENTER);
        setMnemonicParsing(true);     // enable mnemonic auto-parsing by default
    }
    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/
    /**
     * Indicates whether this toggle button is selected. This can be manipulated
     * programmatically.
     */
    private BooleanProperty selected;
    public final void setSelected(boolean value) {
        selectedProperty().set(value);
    }

    public final boolean isSelected() {
        return selected == null ? false : selected.get();
    }

    public final BooleanProperty selectedProperty() {
        if (selected == null) {
            selected = new BooleanPropertyBase() {
                @Override protected void invalidated() {
                    final boolean selected = get();
                    final ToggleGroup tg = getToggleGroup();
                    // Note: these changes need to be done before selectToggle/clearSelectedToggle since
                    // those operations change properties and can execute user code, possibly modifying selected property again
                    pseudoClassStateChanged(PSEUDO_CLASS_SELECTED, selected);
//                    accSendNotification(Attribute.SELECTED);
                    if (tg != null) {
                        if (selected) {
                            tg.selectToggle(ToggleButton.this);
                        } else if (tg.getSelectedToggle() == ToggleButton.this) {
                            tg.clearSelectedToggle();
                        }
                    }
                }

                @Override
                public Object getBean() {
                    return ToggleButton.this;
                }

                @Override
                public String getName() {
                    return "selected";
                }
            };
        }
        return selected;
    }
    /**
     * The {@link ToggleGroup} to which this {@code ToggleButton} belongs. A
     * {@code ToggleButton} can only be in one group at any one time. If the
     * group is changed, then the button is removed from the old group prior to
     * being added to the new group.
     */
    private ObjectProperty<ToggleGroup> toggleGroup;
    public final void setToggleGroup(ToggleGroup value) {
        toggleGroupProperty().set(value);
    }

    public final ToggleGroup getToggleGroup() {
        return toggleGroup == null ? null : toggleGroup.get();
    }

    public final ObjectProperty<ToggleGroup> toggleGroupProperty() {
        if (toggleGroup == null) {
            toggleGroup = new ObjectPropertyBase<ToggleGroup>() {                
                private ToggleGroup old;
                private ChangeListener<Toggle> listener = (o, oV, nV) ->
                    getImpl_traversalEngine().setOverriddenFocusTraversability(nV != null ? isSelected() : null);

                @Override protected void invalidated() {
                    final ToggleGroup tg = get();
                    if (tg != null && !tg.getToggles().contains(ToggleButton.this)) {
                        if (old != null) {
                            old.getToggles().remove(ToggleButton.this);
                        }
                        tg.getToggles().add(ToggleButton.this);
                        final ParentTraversalEngine parentTraversalEngine = new ParentTraversalEngine(ToggleButton.this);
                        setImpl_traversalEngine(parentTraversalEngine);
                        // If there's no toggle selected, do not override
                        parentTraversalEngine.setOverriddenFocusTraversability(tg.getSelectedToggle() != null ? isSelected() : null);
                        tg.selectedToggleProperty().addListener(listener);
                    } else if (tg == null) {
                        old.selectedToggleProperty().removeListener(listener);
                        old.getToggles().remove(ToggleButton.this);
                        setImpl_traversalEngine(null);
                    }

                    old = tg;
                }

                @Override
                public Object getBean() {
                    return ToggleButton.this;
                }

                @Override
                public String getName() {
                    return "toggleGroup";
                }
            };
        }
        return toggleGroup;
    }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override public void fire() {
        // TODO (aruiz): if (!isReadOnly(isSelected()) {
        if (!isDisabled()) {
            setSelected(!isSelected());
            fireEvent(new ActionEvent());
        }
    }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new ToggleButtonSkin(this);
    }


    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "toggle-button";
    private static final PseudoClass PSEUDO_CLASS_SELECTED =
            PseudoClass.getPseudoClass("selected");

     /**
      * Not everything uses the default value of false for alignment. 
      * This method provides a way to have them return the correct initial value.
      * @treatAsPrivate implementation detail
      */
    @Deprecated @Override
    protected Pos impl_cssGetAlignmentInitialValue() {
        return Pos.CENTER;
    }


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.TOGGLE_BUTTON;
//            case SELECTED: return isSelected();
//            default: return super.accGetAttribute(attribute, parameters); 
//        }
//    }
}
