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
public enum Action {

    /**
     * Selects the node whilst retaining all other selection in the container
     * (assuming that the container supports multiple selection).
     */
    ADD_TO_SELECTION,

    /**
     * Decrements the node (if it support BLOCK_DECREMENT) by its larger block decrement
     * value. A smaller decrement can be performed by using {@link #DECREMENT}.
     */
    BLOCK_DECREMENT,

    /**
     * Increments the node (if it support BLOCK_INCREMENT) by its larger block increment
     * value. A smaller increment can be performed by using {@link #INCREMENT}.
     */
    BLOCK_INCREMENT,

    COLLAPSE,

    /**
     * Decrements the node (if it support DECREMENT) by its smaller unit decrement
     * value. A larger decrement can be performed by using {@link #BLOCK_DECREMENT}.
     */
    DECREMENT,

    EXPAND,

    FIRE,

    /**
     * Increments the node (if it support INCREMENT) by its smaller unit increment
     * value. A larger increment can be performed by using {@link #BLOCK_INCREMENT}.
     */
    INCREMENT,

    /**
     * Moves the node (if it supports MOVE) by the provided x and y coordinates.
     * Parameter: Double, Double
     */
    MOVE,

    /**
     * Deselects the node whilst retaining all other selection in the container.
     */
    REMOVE_FROM_SELECTION,

    /**
     * Requests that the given integer index is shown, if possible, by the
     * container (e.g. ListView).
     * Parameter: Integer
     */
    SCROLL_TO_INDEX,

    /**
     * Selects the node, clearing out all other selection in the container.
     */
    SELECT,

    /**
     * Sets the tile for a node.
     * Parameter: String
     */
    SET_TITLE,

    /**
     * Sets the value for a node.
     * Parameter: Double
     */
    SET_VALUE,

    /**
     * Request the receiver to show its menu.
     */
    SHOW_MENU,
}
