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

package com.sun.javafx.scene.control.skin;

import javafx.geometry.Orientation;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;

import com.sun.javafx.scene.control.behavior.ListCellBehavior;

public class ListCellSkin<T> extends CellSkinBase<ListCell<T>, ListCellBehavior<T>> {

    private double fixedCellSize;
    private boolean fixedCellSizeEnabled;

    public ListCellSkin(ListCell<T> control) {
        super(control, new ListCellBehavior<T>(control));

        this.fixedCellSize = control.getListView().getFixedCellSize();
        this.fixedCellSizeEnabled = fixedCellSize > 0;

        registerChangeListener(control.getListView().fixedCellSizeProperty(), "FIXED_CELL_SIZE");
    }

    @Override protected void handleControlPropertyChanged(String p) {
        super.handleControlPropertyChanged(p);
        if ("FIXED_CELL_SIZE".equals(p)) {
            this.fixedCellSize = getSkinnable().getListView().getFixedCellSize();
            this.fixedCellSizeEnabled = fixedCellSize > 0;
        }
    }
    
    @Override protected double computePrefWidth(double height, double topInset, double rightInset, double bottomInset, double leftInset) {
        double pref = super.computePrefWidth(height, topInset, rightInset, bottomInset, leftInset);
        ListView<T> listView = getSkinnable().getListView();
        return listView == null ? 0 :
            listView.getOrientation() == Orientation.VERTICAL ? pref : Math.max(pref, getCellSize());
    }
 
    @Override protected double computePrefHeight(double width, double topInset, double rightInset, double bottomInset, double leftInset) {
        if (fixedCellSizeEnabled) {
            return fixedCellSize;
        }

        // Added the comparison between the default cell size and the requested
        // cell size to prevent the issue identified in RT-19873.
        final double cellSize = getCellSize();
        final double prefHeight = cellSize == DEFAULT_CELL_SIZE ? super.computePrefHeight(width, topInset, rightInset, bottomInset, leftInset) : cellSize;
        return prefHeight;
    }

    @Override protected double computeMinHeight(double width, double topInset, double rightInset, double bottomInset, double leftInset) {
        if (fixedCellSizeEnabled) {
            return fixedCellSize;
        }

        return super.computeMinHeight(width, topInset, rightInset, bottomInset, leftInset);
    }

    @Override protected double computeMaxHeight(double width, double topInset, double rightInset, double bottomInset, double leftInset) {
        if (fixedCellSizeEnabled) {
            return fixedCellSize;
        }

        return super.computeMaxHeight(width, topInset, rightInset, bottomInset, leftInset);
    }
}
