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

package javafx.scene.control;

import java.lang.ref.WeakReference;
import javafx.beans.NamedArg;

/**
 * This class is used to represent a single row/column/cell in a TableView.
 * This is used throughout the TableView API to represent which rows/columns/cells
 * are currently selected, focused, being edited, etc. Note that this class is
 * immutable once it is created.
 *
 * <p>Because the TableView can have different
 * {@link SelectionMode selection modes}, the row and column properties in
 * TablePosition can be 'disabled' to represent an entire row or column. This is
 * done by setting the unrequired property to -1 or null.
 *
 * @param <S> The type of the items contained within the TableView (i.e. the same
 *      generic type as the S in TableView&lt;S&gt;).
 * @param <T> The type of the items contained within the TableColumn.
 * @see TableView
 * @see TableColumn
 * @since JavaFX 2.0
 */
public class TablePosition<S,T> extends TablePositionBase<TableColumn<S,T>> {
    
    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/  

    /**
     * Constructs a TablePosition instance to represent the given row/column
     * position in the given TableView instance. Both the TableView and 
     * TableColumn are referenced weakly in this class, so it is possible that
     * they will be null when their respective getters are called.
     * 
     * @param tableView The TableView that this position is related to.
     * @param row The row that this TablePosition is representing.
     * @param tableColumn The TableColumn instance that this TablePosition represents.
     */
    public TablePosition(@NamedArg("tableView") TableView<S> tableView, @NamedArg("row") int row, @NamedArg("tableColumn") TableColumn<S,T> tableColumn) {
        super(row, tableColumn);
        this.controlRef = new WeakReference<>(tableView);
        this.itemRef = new WeakReference<>(
                row >= 0 && row < tableView.getItems().size() ? tableView.getItems().get(row) : null);
    }
    
    
    
    /***************************************************************************
     *                                                                         *
     * Instance Variables                                                      *
     *                                                                         *
     **************************************************************************/

    private final WeakReference<TableView<S>> controlRef;
    private final WeakReference<S> itemRef;


    /***************************************************************************
     *                                                                         *
     * Public API                                                              *
     *                                                                         *
     **************************************************************************/
    
    /**
     * The column index that this TablePosition represents in the TableView. It
     * is -1 if the TableView or TableColumn instances are null.
     */
    @Override public int getColumn() {
        TableView<S> tableView = getTableView();
        TableColumn<S,T> tableColumn = getTableColumn();
        return tableView == null || tableColumn == null ? -1 : 
                tableView.getVisibleLeafIndex(tableColumn);
    }
    
    /**
     * The TableView that this TablePosition is related to.
     */
    public final TableView<S> getTableView() {
        return controlRef.get();
    }
    
    /** {@inheritDoc} */
    @Override public final TableColumn<S,T> getTableColumn() {
        // Forcing the return type to be TableColumn<S,T>, not TableColumnBase<S,T>
        return super.getTableColumn();
    }

    /**
     * Returns the item that backs the {@link #getRow()} row}, at the point
     * in time when this TablePosition was created.
     */
    final S getItem() {
        return itemRef == null ? null : itemRef.get();
    }

    /**
     * Returns a string representation of this {@code TablePosition} object.
     * @return a string representation of this {@code TablePosition} object.
     */ 
    @Override public String toString() {
        return "TablePosition [ row: " + getRow() + ", column: " + getTableColumn() + ", "
                + "tableView: " + getTableView() + " ]";
    }
}
