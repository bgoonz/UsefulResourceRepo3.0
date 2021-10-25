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

import javafx.scene.control.TableCell;

import com.sun.javafx.scene.control.behavior.TableCellBehavior;
import javafx.beans.property.BooleanProperty;
import javafx.beans.property.ReadOnlyDoubleProperty;
import javafx.scene.control.TableColumn;

/**
 */
public class TableCellSkin<S,T> extends TableCellSkinBase<TableCell<S,T>, TableCellBehavior<S,T>> {
    
    private final TableColumn<S,T> tableColumn;
    
    public TableCellSkin(TableCell<S,T> tableCell) {
        super(tableCell, new TableCellBehavior<S,T>(tableCell));
        
        this.tableColumn = tableCell.getTableColumn();
        
        super.init(tableCell);
    }

    @Override protected BooleanProperty columnVisibleProperty() {
        return tableColumn.visibleProperty();
    }

    @Override protected ReadOnlyDoubleProperty columnWidthProperty() {
        return tableColumn.widthProperty();
    }
}
