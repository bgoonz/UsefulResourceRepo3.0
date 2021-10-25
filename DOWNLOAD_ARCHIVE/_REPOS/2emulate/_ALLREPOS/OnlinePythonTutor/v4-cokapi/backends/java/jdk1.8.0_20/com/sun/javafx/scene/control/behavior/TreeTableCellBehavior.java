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

import javafx.scene.Node;
import javafx.scene.control.TableColumnBase;
import javafx.scene.control.TablePositionBase;
import javafx.scene.control.TreeItem;
import javafx.scene.control.TreeTableCell;
import javafx.scene.control.TreeTableColumn;
import javafx.scene.control.TreeTableView;
import javafx.scene.input.MouseButton;

/**
 */
public class TreeTableCellBehavior<S,T> extends TableCellBehaviorBase<TreeItem<S>, T, TreeTableColumn<S, ?>, TreeTableCell<S,T>> {
    
    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/    

    public TreeTableCellBehavior(TreeTableCell<S,T> control) {
        super(control);
    }
    
    
    
    /***************************************************************************
     *                                                                         *
     * Implement TableCellBehaviorBase Abstract API                            *
     *                                                                         *
     **************************************************************************/          

    /** @{@inheritDoc} */
    @Override protected TreeTableView<S> getCellContainer() {
        return getControl().getTreeTableView();
    }

    /** @{@inheritDoc} */
    @Override protected TreeTableColumn<S,T> getTableColumn() {
        return getControl().getTableColumn();
    }

    /** @{@inheritDoc} */
    @Override protected int getItemCount() {
        return getCellContainer().getExpandedItemCount();
    }

    /** @{@inheritDoc} */
    @Override protected TreeTableView.TreeTableViewSelectionModel<S> getSelectionModel() {
        return getCellContainer().getSelectionModel();
    }

    /** @{@inheritDoc} */
    @Override protected TreeTableView.TreeTableViewFocusModel<S> getFocusModel() {
        return getCellContainer().getFocusModel();
    }

    /** @{@inheritDoc} */
    @Override protected TablePositionBase getFocusedCell() {
        return getCellContainer().getFocusModel().getFocusedCell();
    }

    /** @{@inheritDoc} */
    @Override protected boolean isTableRowSelected() {
        return getControl().getTreeTableRow().isSelected();
    }

    /** @{@inheritDoc} */
    @Override protected int getVisibleLeafIndex(TableColumnBase tc) {
        return getCellContainer().getVisibleLeafIndex(null);
    }

    /** @{@inheritDoc} */
    @Override protected void focus(int row, TableColumnBase tc) {
        getFocusModel().focus(row, (TreeTableColumn)tc);
    }

    /** @{@inheritDoc} */
    @Override protected void edit(TreeTableCell<S,T> cell) {
        if (cell == null) {
            getCellContainer().edit(-1, null);
        } else {
            getCellContainer().edit(cell.getIndex(), cell.getTableColumn());
        }
    }

    @Override protected boolean handleDisclosureNode(double x, double y) {
        final TreeItem<S> treeItem = getControl().getTreeTableRow().getTreeItem();

        final TreeTableView<S> treeTableView = getControl().getTreeTableView();
        final TreeTableColumn<S,T> column = getTableColumn();
        final TreeTableColumn<S,?> treeColumn = treeTableView.getTreeColumn() == null ?
                treeTableView.getVisibleLeafColumn(0) : treeTableView.getTreeColumn();

        if (column == treeColumn) {
            final Node disclosureNode = getControl().getTreeTableRow().getDisclosureNode();
            if (disclosureNode != null) {
                if (disclosureNode.getBoundsInParent().contains(x, y)) {
                    if (treeItem != null) {
                        treeItem.setExpanded(!treeItem.isExpanded());
                    }
                    return true;
                }
            }
        }
        return false;
    }
    
    @Override
    protected void handleClicks(MouseButton button, int clickCount, boolean isAlreadySelected) {
        // handle editing, which only occurs with the primary mouse button
        TreeItem<S> treeItem = getControl().getTreeTableRow().getTreeItem();
        if (button == MouseButton.PRIMARY) {
            if (clickCount == 1 && isAlreadySelected) {
                edit(getControl());
            } else if (clickCount == 1) {
                // cancel editing
                edit(null);
            } else if (clickCount == 2 && treeItem.isLeaf()) {
                // attempt to edit
                edit(getControl());
            } else if (clickCount % 2 == 0) {
                // try to expand/collapse branch tree item
                treeItem.setExpanded(! treeItem.isExpanded());
            }
        }
    }
}
