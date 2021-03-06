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

package com.sun.javafx.scene.control.behavior;

import javafx.scene.control.Cell;
import javafx.scene.control.Control;
import javafx.scene.control.FocusModel;
import javafx.scene.control.IndexedCell;
import javafx.scene.control.MultipleSelectionModel;
import javafx.scene.control.SelectionMode;
import javafx.scene.input.ContextMenuEvent;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;

import java.util.ArrayList;
import java.util.List;

/**
 * Behaviors for standard cells types. Simply defines methods that subclasses
 * implement so that CellSkinBase has API to call.
 */
public abstract class CellBehaviorBase<T extends Cell> extends BehaviorBase<T> {


    /***************************************************************************
     *                                                                         *
     * Private static implementation                                           *
     *                                                                         *
     **************************************************************************/

    private static final String ANCHOR_PROPERTY_KEY = "anchor";

    public static <T> T getAnchor(Control control, T defaultResponse) {
        return hasAnchor(control) ?
                (T) control.getProperties().get(ANCHOR_PROPERTY_KEY) :
                defaultResponse;
    }

    public static <T> void setAnchor(Control control, T anchor) {
        if (control != null && anchor == null) {
            removeAnchor(control);
        } else {
            control.getProperties().put(ANCHOR_PROPERTY_KEY, anchor);
        }
    }

    public static boolean hasAnchor(Control control) {
        return control.getProperties().get(ANCHOR_PROPERTY_KEY) != null;
    }

    public static void removeAnchor(Control control) {
        control.getProperties().remove(ANCHOR_PROPERTY_KEY);
    }



    /***************************************************************************
     *                                                                         *
     * Private fields                                                          *
     *                                                                         *
     **************************************************************************/

    // To support touch devices, we have to slightly modify this behavior, such
    // that selection only happens on mouse release, if only minimal dragging
    // has occurred.
    private boolean latePress = false;



    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    public CellBehaviorBase(T control, List<KeyBinding> bindings) {
        super(control, bindings);
    }


    protected abstract Control getCellContainer(); // e.g. ListView
    protected abstract MultipleSelectionModel<?> getSelectionModel();
    protected abstract FocusModel<?> getFocusModel();
    protected abstract void edit(T cell);
    protected boolean handleDisclosureNode(double x, double y) {
        return false;
    }
    protected boolean isClickPositionValid(final double x, final double y) {
        return true;
    }


    /***************************************************************************
     *                                                                         *
     * Public API                                                              *
     *                                                                         *
     **************************************************************************/

    protected int getIndex() {
        return getControl() instanceof IndexedCell ? ((IndexedCell<?>)getControl()).getIndex() : -1;
    }

    @Override public void mousePressed(MouseEvent e) {
        if (e.isSynthesized()) {
            latePress = true;
        } else {
            latePress  = isSelected();
            if (!latePress) {
                doSelect(e.getX(), e.getY(), e.getButton(), e.getClickCount(),
                        e.isShiftDown(), e.isShortcutDown());
            }
        }
    }

    @Override public void mouseReleased(MouseEvent e) {
        if (latePress) {
            latePress = false;
            doSelect(e.getX(), e.getY(), e.getButton(), e.getClickCount(),
                    e.isShiftDown(), e.isShortcutDown());
        }
    }

    @Override public void mouseDragged(MouseEvent e) {
        latePress = false;
    }

    @Override public void contextMenuRequested(ContextMenuEvent e) {
        doSelect(e.getX(), e.getY(), MouseButton.SECONDARY, 1, false, false);
    }



    /***************************************************************************
     *                                                                         *
     * Private implementation                                                  *
     *                                                                         *
     **************************************************************************/

    protected void doSelect(final double x, final double y, final MouseButton button,
                            final int clickCount, final boolean shiftDown, final boolean shortcutDown) {
        // we update the cell to point to the new tree node
        final T cell = getControl();

        final Control cellContainer = getCellContainer();

        // If the mouse event is not contained within this TreeCell, then
        // we don't want to react to it.
        if (cell.isEmpty() || ! cell.contains(x, y)) {
            return;
        }

        final int index = getIndex();
        boolean selected = cell.isSelected();
        MultipleSelectionModel<?> sm = getSelectionModel();
        if (sm == null) return;

        FocusModel<?> fm = getFocusModel();
        if (fm == null) return;

        // if the user has clicked on the disclosure node, we do nothing other
        // than expand/collapse the tree item (if applicable). We do not do editing!
        if (handleDisclosureNode(x,y)) {
            return;
        }

        // we only care about clicks in certain places (depending on the subclass)
        if (! isClickPositionValid(x, y)) return;

        // if shift is down, and we don't already have the initial focus index
        // recorded, we record the focus index now so that subsequent shift+clicks
        // result in the correct selection occuring (whilst the focus index moves
        // about).
        if (shiftDown) {
            if (! hasAnchor(cellContainer)) {
                setAnchor(cellContainer, fm.getFocusedIndex());
            }
        } else {
            removeAnchor(cellContainer);
        }

        if (button == MouseButton.PRIMARY || (button == MouseButton.SECONDARY && !selected)) {
            if (sm.getSelectionMode() == SelectionMode.SINGLE) {
                simpleSelect(button, clickCount, shortcutDown);
            } else {
                if (shortcutDown) {
                    if (selected) {
                        // we remove this row from the current selection
                        sm.clearSelection(index);
                        fm.focus(index);
                    } else {
                        // We add this row to the current selection
                        sm.select(index);
                    }
                } else if (shiftDown && clickCount == 1) {
                    // we add all rows between the current selection focus and
                    // this row (inclusive) to the current selection.
                    final int focusedIndex = getAnchor(cellContainer, fm.getFocusedIndex());

                    selectRows(focusedIndex, index);

                    fm.focus(index);
                } else {
                    simpleSelect(button, clickCount, shortcutDown);
                }
            }
        }
    }

    protected void simpleSelect(MouseButton button, int clickCount, boolean shortcutDown) {
        final int index = getIndex();
        MultipleSelectionModel<?> sm = getSelectionModel();
        boolean isAlreadySelected = sm.isSelected(index);

        if (isAlreadySelected && shortcutDown) {
            sm.clearSelection(index);
            getFocusModel().focus(index);
            isAlreadySelected = false;
        } else {
            sm.clearAndSelect(index);
        }

        handleClicks(button, clickCount, isAlreadySelected);
    }

    protected void handleClicks(MouseButton button, int clickCount, boolean isAlreadySelected) {
        // handle editing, which only occurs with the primary mouse button
        if (button == MouseButton.PRIMARY) {
            if (clickCount == 1 && isAlreadySelected) {
                edit(getControl());
            } else if (clickCount == 1) {
                // cancel editing
                edit(null);
            } else if (clickCount == 2 && getControl().isEditable()) {
                edit(getControl());
            }
        }
    }

    void selectRows(int focusedIndex, int index) {
        final boolean asc = focusedIndex < index;

        // and then determine all row and columns which must be selected
        int minRow = Math.min(focusedIndex, index);
        int maxRow = Math.max(focusedIndex, index);

        // To prevent RT-32119, we make a copy of the selected indices
        // list first, so that we are not iterating and modifying it
        // concurrently.
        List<Integer> selectedIndices = new ArrayList<>(getSelectionModel().getSelectedIndices());
        for (int i = 0, max = selectedIndices.size(); i < max; i++) {
            int selectedIndex = selectedIndices.get(i);
            if (selectedIndex < minRow || selectedIndex > maxRow) {
                getSelectionModel().clearSelection(selectedIndex);
            }
        }

        if (minRow == maxRow) {
            // RT-32560: This prevents the anchor 'sticking' in
            // the wrong place when a range is selected and then
            // selection goes back to the anchor position.
            // (Refer to the video in RT-32560 for more detail).
            getSelectionModel().select(minRow);
        } else {
            // RT-21444: We need to put the range in the correct
            // order or else the last selected row will not be the
            // last item in the selectedItems list of the selection
            // model,
            if (asc) {
                getSelectionModel().selectRange(minRow, maxRow + 1);
            } else {
                getSelectionModel().selectRange(maxRow, minRow - 1);
            }
        }
    }

    protected boolean isSelected() {
        return getControl().isSelected();
    }
}
