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

package com.sun.javafx.scene.control.behavior;

import javafx.beans.property.ReadOnlyBooleanProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;
import javafx.geometry.NodeOrientation;
import javafx.scene.control.Accordion;
import javafx.scene.control.FocusModel;
import javafx.scene.control.TitledPane;
import javafx.scene.input.KeyCode;
import javafx.scene.input.MouseEvent;
import java.util.ArrayList;
import java.util.List;


public class AccordionBehavior extends BehaviorBase<Accordion> {

    private AccordionFocusModel focusModel;
    
    public AccordionBehavior(Accordion accordion) {
        super(accordion, ACCORDION_BINDINGS);
        focusModel = new AccordionFocusModel(accordion);
    }

    @Override public void dispose() {
        focusModel.dispose();
        super.dispose();
    }

    /***************************************************************************
     *                                                                         *
     * Key event handling                                                      *
     *                                                                         *
     **************************************************************************/

    private static final String HOME = "Home";
    private static final String END = "End";
    private static final String PAGE_UP = "Page_Up";
    private static final String PAGE_DOWN = "Page_Down";
    private static final String CTRL_PAGE_UP = "Ctrl_Page_Up";
    private static final String CTRL_PAGE_DOWN = "Ctrl_Page_Down";
    private static final String CTRL_TAB = "Ctrl_Tab";
    private static final String CTRL_SHIFT_TAB = "Ctrl_Shift_Tab";

    protected static final List<KeyBinding> ACCORDION_BINDINGS = new ArrayList<KeyBinding>();
    static {
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.UP, "TraverseUp"));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.DOWN, "TraverseDown"));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.LEFT, "TraverseLeft"));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.RIGHT, "TraverseRight"));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.HOME, HOME));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.END, END));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.PAGE_UP, PAGE_UP));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.PAGE_DOWN, PAGE_DOWN));
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.PAGE_UP, CTRL_PAGE_UP).ctrl());
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.PAGE_DOWN, CTRL_PAGE_DOWN).ctrl());
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.TAB, CTRL_TAB).ctrl());
        ACCORDION_BINDINGS.add(new KeyBinding(KeyCode.TAB, CTRL_SHIFT_TAB).shift().ctrl());
    }

    @Override protected void callAction(String name) {   
        Accordion accordion = getControl();
        boolean rtl = (accordion.getEffectiveNodeOrientation() == NodeOrientation.RIGHT_TO_LEFT);

        if (("TraverseLeft".equals(name) && !rtl) ||
            ("TraverseRight".equals(name) && rtl) ||
            "TraverseUp".equals(name) || PAGE_UP.equals(name)) {

            if (focusModel.getFocusedIndex() != -1 && accordion.getPanes().get(focusModel.getFocusedIndex()).isFocused()) {
                focusModel.focusPrevious();
                int next = focusModel.getFocusedIndex();
                accordion.getPanes().get(next).requestFocus();
                if (PAGE_UP.equals(name)) {
                    accordion.getPanes().get(next).setExpanded(true);
                }
            }
        } else if (("TraverseRight".equals(name) && !rtl) || 
                   ("TraverseLeft".equals(name) && rtl) ||
                   "TraverseDown".equals(name) || PAGE_DOWN.equals(name)) {

            if (focusModel.getFocusedIndex() != -1 && accordion.getPanes().get(focusModel.getFocusedIndex()).isFocused()) {
                focusModel.focusNext();
                int next = focusModel.getFocusedIndex();
                accordion.getPanes().get(next).requestFocus();
                if (PAGE_DOWN.equals(name)) {
                    accordion.getPanes().get(next).setExpanded(true);
                }
            }            
        } else if (CTRL_TAB.equals(name) || CTRL_PAGE_DOWN.equals(name)) {
            focusModel.focusNext();
            if (focusModel.getFocusedIndex() != -1) {
                int next = focusModel.getFocusedIndex();
                accordion.getPanes().get(next).requestFocus();
                accordion.getPanes().get(next).setExpanded(true);
            }
        } else if (CTRL_SHIFT_TAB.equals(name) || CTRL_PAGE_UP.equals(name)) {
            focusModel.focusPrevious();
            if (focusModel.getFocusedIndex() != -1) {
                int next = focusModel.getFocusedIndex();            
                accordion.getPanes().get(next).requestFocus();
                accordion.getPanes().get(next).setExpanded(true);
            }
        } else if (HOME.equals(name)) {
            if (focusModel.getFocusedIndex() != -1 && accordion.getPanes().get(focusModel.getFocusedIndex()).isFocused()) {
                TitledPane tp = accordion.getPanes().get(0);
                tp.requestFocus();
                tp.setExpanded(!tp.isExpanded());
            }
        } else if (END.equals(name)) {
            if (focusModel.getFocusedIndex() != -1 && accordion.getPanes().get(focusModel.getFocusedIndex()).isFocused()) {
                TitledPane tp = accordion.getPanes().get(accordion.getPanes().size() - 1);
                tp.requestFocus();
                tp.setExpanded(!tp.isExpanded());
            }
        } else {
            super.callAction(name);
        }
    }


    /**
     * Mouse press over the background of the accordion
     * i.e. it missed all of the titled panes
     * select the last titled pane, or the accordion if
     * none present
     */
    public void mousePressed(MouseEvent e) {
        Accordion accordion = getControl();
        if (accordion.getPanes().size() > 0) {
            TitledPane lastTitledPane = accordion.getPanes().get(accordion.getPanes().size() - 1);
            lastTitledPane.requestFocus();
        }
        else {
            accordion.requestFocus();
        }
    }


    static class AccordionFocusModel extends FocusModel<TitledPane> {

        private final Accordion accordion;
        private final ChangeListener<Boolean> focusListener = new ChangeListener<Boolean>() {
            @Override
            public void changed(ObservableValue<? extends Boolean> observable, Boolean oldValue, Boolean newValue) {
                if (newValue) {
                    if (accordion.getExpandedPane() != null) {
                        accordion.getExpandedPane().requestFocus();
                    } else {
                        // TODO need to detect the focus direction
                        // to selected the first panel when TAB is pressed
                        // or select the last panel when SHIFT TAB is pressed.
                        accordion.getPanes().get(0).requestFocus();
                    }
                }
            }
        };
        private final ChangeListener<Boolean> paneFocusListener = new ChangeListener<Boolean>() {
            @Override public void changed(ObservableValue<? extends Boolean> observable, Boolean oldValue, Boolean newValue) {
                if (newValue) {
                    final ReadOnlyBooleanProperty focusedProperty = (ReadOnlyBooleanProperty) observable;
                    final TitledPane tp = (TitledPane) focusedProperty.getBean();
                    focus(accordion.getPanes().indexOf(tp));
                }
            }
        };
        private final ListChangeListener<TitledPane> panesListener = c -> {
            while (c.next()) {
                if (c.wasAdded()) {
                    for (final TitledPane tp: c.getAddedSubList()) {
                        tp.focusedProperty().addListener(paneFocusListener);
                    }
                } else if (c.wasRemoved()) {
                    for (final TitledPane tp: c.getAddedSubList()) {
                        tp.focusedProperty().removeListener(paneFocusListener);
                    }
                }
            }
        };
        
        public AccordionFocusModel(final Accordion accordion) {
            if (accordion == null) {
                throw new IllegalArgumentException("Accordion can not be null");
            }
            this.accordion = accordion;
            this.accordion.focusedProperty().addListener(focusListener);
            this.accordion.getPanes().addListener(panesListener);
            for (final TitledPane tp: this.accordion.getPanes()) {
                tp.focusedProperty().addListener(paneFocusListener);
            }
        }

        void dispose() {
            accordion.focusedProperty().removeListener(focusListener);
            accordion.getPanes().removeListener(panesListener);
            for (final TitledPane tp: this.accordion.getPanes()) {
                tp.focusedProperty().removeListener(paneFocusListener);
            }
        }

        @Override
        protected int getItemCount() {
            final ObservableList<TitledPane> panes = accordion.getPanes();
            return panes == null ? 0 : panes.size();
        }

        @Override
        protected TitledPane getModelItem(int row) {
            final ObservableList<TitledPane> panes = accordion.getPanes();
            if (panes == null) return null;
            if (row < 0) return null;
            return panes.get(row%panes.size());
        }

        @Override public void focusPrevious() {
            if (getFocusedIndex() <= 0) {
                focus(accordion.getPanes().size() - 1);
            } else {
                focus((getFocusedIndex() - 1)%accordion.getPanes().size());
            }
        }

        @Override public void focusNext() {
            if (getFocusedIndex() == -1) {
                focus(0);
            } else {
                focus((getFocusedIndex() + 1)%accordion.getPanes().size());
            }
        }
    }
}
