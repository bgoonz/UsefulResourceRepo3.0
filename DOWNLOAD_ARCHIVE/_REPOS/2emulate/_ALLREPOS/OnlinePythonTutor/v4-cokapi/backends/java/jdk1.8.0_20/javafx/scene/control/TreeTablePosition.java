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
 * This class is used to represent a single row/column/cell in a TreeTableView.
 * This is used throughout the TreeTableView API to represent which rows/columns/cells
 * are currently selected, focused, being edited, etc. Note that this class is
 * immutable once it is created.
 *
 * <p>Because the TreeTableView can have different
 * {@link SelectionMode selection modes}, the row and column properties in
 * TablePosition can be 'disabled' to represent an entire row or column. This is
 * done by setting the unrequired property to -1 or null.
 *
 * @param <S> The type of the {@link TreeItem} instances contained within the 
 *      TreeTableView.
 * @param <T> The type of the items contained within the TreeTableColumn.
 * @see TreeTableView
 * @see TreeTableColumn
 * @since JavaFX 8.0
 */
public class TreeTablePosition<S,T> extends TablePositionBase<TreeTableColumn<S,T>> {
    
    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/  

    /**
     * Constructs a TreeTablePosition instance to represent the given row/column
     * position in the given TreeTableView instance. Both the TreeTableView and 
     * TreeTableColumn are referenced weakly in this class, so it is possible that
     * they will be null when their respective getters are called.
     * 
     * @param treeTableView The TreeTableView that this position is related to.
     * @param row The row that this TreeTablePosition is representing.
     * @param tableColumn The TreeTableColumn instance that this TreeTablePosition represents.
     */
    public TreeTablePosition(@NamedArg("treeTableView") TreeTableView<S> treeTableView, @NamedArg("row") int row, @NamedArg("tableColumn") TreeTableColumn<S,T> tableColumn) {
        super(row, tableColumn);
        this.controlRef = new WeakReference<>(treeTableView);
        this.treeItemRef = new WeakReference<>(treeTableView.getTreeItem(row));
    }
    
    
    
    /***************************************************************************
     *                                                                         *
     * Instance Variables                                                      *
     *                                                                         *
     **************************************************************************/

    private final WeakReference<TreeTableView<S>> controlRef;
    private final WeakReference<TreeItem<S>> treeItemRef;


    /***************************************************************************
     *                                                                         *
     * Public API                                                              *
     *                                                                         *
     **************************************************************************/
    
    /**
     * The column index that this TreeTablePosition represents in the TreeTableView. It
     * is -1 if the TreeTableView or TreeTableColumn instances are null.
     */
    @Override public int getColumn() {
        TreeTableView<S> tableView = getTreeTableView();
        TreeTableColumn<S,T> tableColumn = getTableColumn();
        return tableView == null || tableColumn == null ? -1 : 
                tableView.getVisibleLeafIndex(tableColumn);
    }
    
    /**
     * The TreeTableView that this TreeTablePosition is related to.
     */
    public final TreeTableView<S> getTreeTableView() {
        return controlRef.get();
    }
    
    @Override public final TreeTableColumn<S,T> getTableColumn() {
        // Forcing the return type to be TreeTableColumn<S,T>, not TableColumnBase<S,T>
        return super.getTableColumn();
    }

    /**
     * Returns the {@link TreeItem} that backs the {@link #getRow()} row}.
     */
    public final TreeItem<S> getTreeItem() {
        return treeItemRef.get();
    }
}
