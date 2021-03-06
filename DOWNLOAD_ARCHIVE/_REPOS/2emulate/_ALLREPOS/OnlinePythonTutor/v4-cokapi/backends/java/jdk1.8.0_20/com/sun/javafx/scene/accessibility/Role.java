/*
 * Copyright (c) 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.scene.accessibility;

/**
 * Experimental API - Do not use (will be removed).
 *
 * @treatAsPrivate
 */
public enum Role {

    /**
     * Button
     * Attributes: TITLE
     * Actions: FIRE
     */
    BUTTON,

    /**
     * CheckBox.
     * Attributes: TITLE, SELECTED, INDETERMINATE
     * Actions: FIRE
     */
    CHECKBOX,

    /**
     * ComboBox.
     * Attributed:
     * Actions:
     */
    COMBOBOX,

    /**
     * ContextMenu.
     * Attributed:
     * Actions:
     */
    CONTEXT_MENU,

    /**
     * DatePicker.
     * Attributed: DATE, TITLE
     * Actions:
     */
    DATE_PICKER,

    /**
     * Decrement button
     *
     */
    DECREMENT_BUTTON,

    /**
     * Used by TreeView / TreeTableView to represent the arrow to the side of branches
     * Attributes: (none)
     * Actions: Fire
     */
    DISCLOSURE_NODE,

    /**
     * Header.
     * Attributes: TITLE
     * Actions: (none)
     */
    HEADER,

    /**
     * Hyperlink
     * Attributes: TITLE
     * Actions: FIRE
     */
    HYPERLINK,

    /**
     * Increment button
     *
     */
    INCREMENT_BUTTON,

    /**
     * Image
     * Attributes: TITLE
     * Actions: (none)
     */
    IMAGE,

    /**
     * ListView
     * Attributes: ROW_AT_INDEX, ROW_COUNT, SELECTED_ROWS, MULTIPLE_SELECTION,
     *             VERTICAL_SCROLLBAR, HORIZONTAL_SCROLLBAR
     * Actions: SCROLL_TO_INDEX
     */
    LIST_VIEW,

    /**
     * List Item
     * Attributes: TITLE, INDEX, SELECTED
     * Actions: SELECT, ADD_TO_SELECTION, REMOVE_FROM_SELECTION
     */
    LIST_ITEM,

    /**
     * Menu Bar.
     * Attributed:
     * Actions:
     */
    MENU_BAR,

    /**
     * Menu Button.
     * Attributed: TITLE.
     * Actions: FIRE.
     */
    MENU_BUTTON,

    /**
     * Menu Item.
     * Attributed: MENU_ITEM_TYPE, SELECTED, ACCELERATOR, TITLE
     * Actions: FIRE
     */
    MENU_ITEM,

    /**
     * Node
     * Attributes: PARENT, ROLE, SCENE, BOUNDS, ENABLED, FOCUS, VISIBLE, LABELED_BY
     * Actions: (none)
     */
    NODE,

    /**
     * Page in a Pagination control
     * Attributes: TITLE, Selected
     * Actions: SELECT
     */
    PAGE,

    /**
     * Pagination
     * Attributes: PAGES, SELECTED_PAGE
     * Actions: (none)
     */
    PAGINATION,

    /**
     * Parent
     * Attributes: CHILDREN
     * Actions: (none)
     */
    PARENT,

    /**
     * Password Field
     * Attributes: (none)
     * Actions: (none)
     */
    PASSWORD_FIELD,

    /**
     * ProgressIndicator
     * Attributes: VALUE, MAX_VALUE, MIN_VALUE, INDETERMINATE
     * Actions: (none)
     */
    PROGRESS_INDICATOR,

    /**
     * RadioButton
     * Attributes: TITLE, SELECTED
     * Actions: FIRE
     */
    RADIO_BUTTON,

    /**
     * Slider
     * Attributes: VALUE, MAX_VALUE, MIN_VALUE, ORIENTATION
     * Actions: INCREMENT, DECREMENT, SET_VALUE
     */
    SLIDER,

    /**
     * Text
     * Attributes: TITLE, SELECTION_START, SELECTION_SET
     * Actions: SET_TITLE
     */
    TEXT,

    /**
     * Text Area
     * Attributes: TITLE, SELECTION_START, SELECTION_SET
     * Actions: SET_TITLE
     */
    TEXT_AREA,

    /**
     * Text Field
     * Attributes: TITLE, SELECTION_START, SELECTION_SET
     * Actions: SET_TITLE
     */
    TEXT_FIELD,

    /**
     * ToggleButton
     * Attributes: TITLE, SELECTED
     * Action: FIRE
     */
    TOGGLE_BUTTON,
    
    /**
     * Tooltip
     * Attributes: (none)
     * Action: (none)
     */
    TOOLTIP,

    /**
     * ScrollBar
     * Attributes: VALUE, MAX_VALUE, MIN_VALUE, ORIENTATION
     * Actions: BLOCK_INCREMENT, INCREMENT, DECREMENT, BLOCK_DECREMENT, SET_VALUE
     */
    SCROLL_BAR,

    /**
     * ScrollPane
     * Attributes: CONTENTS, HORIZONTAL_SCROLLBAR, VERTICAL_SCROLLBAR
     * Actions: (none)
     */
    SCROLL_PANE,

    /**
     * SplitMenuButton
     * Attributes: TITLE, EXPANDED.
     * Actions: FIRE, EXPAND, COLLAPSE.
     */
    SPLIT_MENU_BUTTON,

    /**
     * Tab
     * Attributes: TITLE, SELECTED
     * Actions: SELECT
     */
    TAB_ITEM,

    /**
     * TabPane
     * Attributes: TABS, SELECTED_TAB
     * Actions: (none)
     */
    TAB_PANE,

    /**
     * Table Cell
     * Attributes: TITLE, ROW_INDEX, COLUMN_INDEX, SELECTED
     * Actions: SELECT, ADD_TO_SELECTION, REMOVE_FROM_SELECTION
     */
    TABLE_CELL,

    /**
     * Table Column
     * Attributes: TITLE, INDEX
     * Actions: (none)
     */
    TABLE_COLUMN,

    /**
     * Table Row
     * Attributes: TITLE, INDEX
     * Actions: (none)
     */
    TABLE_ROW,

    /**
     * Table View
     * Attributes: ROW_COUNT, COLUMN_COUNT, SELECTED_CELLS, CELL_AT_ROWCOLUMN, MULTIPLE_SELECTION,
     *             VERTICAL_SCROLLBAR, HORIZONTAL_SCROLLBAR
     * Attributes for header support: COLUMN_AT_INDEX, HEADER
     * Actions: SCROLL_TO_INDEX
     */
    TABLE_VIEW,

    /**
     *
     * Actions: MOVE
     */
    THUMB,

    /**
     * TitledPane
     * Attributes: TITLE, EXPANDED
     * Actions: EXPAND, COLLAPSE
     */
    TITLED_PANE,

    /**
     * Toolbar
     * Attributes: OVERFLOW_BUTTON
     * Actions: (none)
     */
    TOOLBAR,

    /**
     * Used by TreeView
     * Attributes: TITLE, INDEX, SELECTED, EXPANDED, LEAF,
     *             TREE_ITEM_COUNT, TREE_ITEM_AT_INDEX, TREE_ITEM_PARENT,
     *             DISCLOSURE_LEVEL
     * Actions: SELECT, ADD_TO_SELECTION, REMOVE_FROM_SELECTION, EXPAND, COLLAPSE
     */
    TREE_ITEM,

    /**
     * TreeTable Cell
     * Attributes: TITLE, ROW_INDEX, COLUMN_INDEX, SELECTED
     * Actions: SELECT, ADD_TO_SELECTION, REMOVE_FROM_SELECTION
     */
    TREE_TABLE_CELL,

    /**
     * Used by TreeTableView
     * Attributes: TITLE, INDEX, SELECTED, EXPANDED, LEAF,
     *             TREE_ITEM_COUNT, TREE_ITEM_AT_INDEX,TREE_ITEM_PARENT,
     *             DISCLOSURE_LEVEL
     * Actions: SELECT, ADD_TO_SELECTION, REMOVE_FROM_SELECTION, EXPAND, COLLAPSE
     */
    TREE_TABLE_ITEM,

    /**
     * Table View
     * Attributes: ROW_COUNT, TREE_ITEM_AT_INDEX, COLUMN_COUNT,
     *             SELECTED_CELLS, CELL_AT_ROWCOLUMN, MULTIPLE_SELECTION,
     *             VERTICAL_SCROLLBAR, HORIZONTAL_SCROLLBAR
     * Attributes for header support: COLUMN_AT_INDEX, HEADER
     * Actions: SCROLL_TO_INDEX
     */
    TREE_TABLE_VIEW,

    /**
     * TreeView
     * Attributes: ROW_COUNT, TREE_ITEM_AT_INDEX, SELECTED_ROWS, MULTIPLE_SELECTION,
     *             VERTICAL_SCROLLBAR, HORIZONTAL_SCROLLBAR
     * Actions: SCROLL_TO_INDEX
     */
    TREE_VIEW,
}
