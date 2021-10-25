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

package com.sun.javafx.scene.control.skin;


import java.util.ArrayList;
import java.util.List;

import javafx.beans.property.DoubleProperty;
//import javafx.scene.accessibility.Attribute;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TablePosition;
import javafx.scene.control.TableRow;
import javafx.scene.control.TableView;

import com.sun.javafx.scene.control.behavior.CellBehaviorBase;
import com.sun.javafx.scene.control.behavior.TableRowBehavior;

import javafx.beans.property.ObjectProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.Node;
import javafx.scene.control.Control;
import javafx.scene.control.TableColumnBase;
import javafx.scene.control.TableView.TableViewFocusModel;

/**
 */
public class TableRowSkin<T> extends TableRowSkinBase<T, TableRow<T>, CellBehaviorBase<TableRow<T>>, TableCell<T,?>> {

    private TableView<T> tableView;
    private TableViewSkin<T> tableViewSkin;
    
    public TableRowSkin(TableRow<T> tableRow) {
        super(tableRow, new TableRowBehavior<T>(tableRow));
        
        this.tableView = tableRow.getTableView();
        updateTableViewSkin();
        
        super.init(tableRow);

        registerChangeListener(tableRow.tableViewProperty(), "TABLE_VIEW");
    }

    @Override protected void handleControlPropertyChanged(String p) {
        super.handleControlPropertyChanged(p);
        if ("TABLE_VIEW".equals(p)) {
            updateTableViewSkin();
            
            for (int i = 0, max = cells.size(); i < max; i++) {
                Node n = cells.get(i);
                if (n instanceof TableCell) {
                    ((TableCell)n).updateTableView(getSkinnable().getTableView());
                }
            }
            
            this.tableView = getSkinnable().getTableView();
        }
    }
    
    @Override protected TableCell<T, ?> getCell(TableColumnBase tcb) {
        TableColumn tableColumn = (TableColumn<T,?>) tcb;
        TableCell cell = (TableCell) tableColumn.getCellFactory().call(tableColumn);

        // we set it's TableColumn, TableView and TableRow
        cell.updateTableColumn(tableColumn);
        cell.updateTableView(tableColumn.getTableView());
        cell.updateTableRow(getSkinnable());
        
        return cell;
    }

    @Override protected ObservableList<TableColumn<T, ?>> getVisibleLeafColumns() {
        return tableView.getVisibleLeafColumns();
    }

    @Override protected void updateCell(TableCell<T, ?> cell, TableRow<T> row) {
        cell.updateTableRow(row);
    }

    @Override protected DoubleProperty fixedCellSizeProperty() {
        return tableView.fixedCellSizeProperty();
    }

    @Override protected boolean isColumnPartiallyOrFullyVisible(TableColumnBase tc) {
        return tableViewSkin == null ? false : tableViewSkin.isColumnPartiallyOrFullyVisible((TableColumn)tc);
    }

    @Override protected TableColumn<T, ?> getTableColumnBase(TableCell<T, ?> cell) {
        return cell.getTableColumn();
    }

    @Override protected ObjectProperty<Node> graphicProperty() {
        return null;
    }

    @Override protected Control getVirtualFlowOwner() {
        return getSkinnable().getTableView();
    }
    
    private void updateTableViewSkin() {
        TableView<T> tableView = getSkinnable().getTableView();
        if (tableView.getSkin() instanceof TableViewSkin) {
            tableViewSkin = (TableViewSkin)tableView.getSkin();
        }
    }

//    @Override
//    protected Object accGetAttribute(Attribute attribute,
//                                     Object... parameters) {
//        switch (attribute) {
//            case SELECTED_CELLS: {
//                // FIXME this could be optimised to iterate over cellsMap only
//                // (selectedCells could be big, cellsMap is much smaller)
//                List<Node> selection = new ArrayList<>();
//                int index = getSkinnable().getIndex();
//                for (TablePosition pos : tableView.getSelectionModel().getSelectedCells()) {
//                    if (pos.getRow() == index) {
//                        TableColumn column = pos.getTableColumn();
//                        if (column == null) {
//                            /* This is the row-based case */
//                            column = tableView.getVisibleLeafColumn(0);
//                        }
//                        TableCell cell = cellsMap.get(column);
//                        if (cell != null) selection.add(cell);
//                    }
//                    return FXCollections.observableArrayList(selection);
//                }
//            }
//            case CELL_AT_ROW_COLUMN: {
//                int colIndex = (Integer)parameters[1];
//                TableColumn column = tableView.getVisibleLeafColumn(colIndex);
//                return cellsMap.get(column);
//            }
//            case FOCUS_ITEM: {
//                TableViewFocusModel<T> fm = tableView.getFocusModel();
//                TablePosition focusedCell = fm.getFocusedCell();
//                TableColumn column = focusedCell.getTableColumn();
//                if (column == null) {
//                    /* This is the row-based case */
//                    column = tableView.getVisibleLeafColumn(0);
//                }
//                return cellsMap.get(column);
//            }
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }

}
