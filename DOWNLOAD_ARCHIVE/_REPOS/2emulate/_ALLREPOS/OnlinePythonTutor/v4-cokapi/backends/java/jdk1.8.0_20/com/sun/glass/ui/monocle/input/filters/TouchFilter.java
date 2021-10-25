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

package com.sun.glass.ui.monocle.input.filters;

import com.sun.glass.ui.monocle.input.TouchState;

/**
 * A TouchFilter processes and modifies TouchStates before sending touch events
 */
public interface TouchFilter {

    /**
     * The priority value of a filter that is applied before IDs are assigned to
     * points
     */
    public static final int PRIORITY_PRE_ID = 100;

    /**
     * The priority value of the filter that applies IDs to points
     */
    public static final int PRIORITY_ID = 0;

    /**
     * The priority value of a filter that is applied after IDs are assigned to
     * points
     */
    public static final int PRIORITY_POST_ID = -100;

    /**
     * Filters a touch state
     *
     * @param state The new state to be filtered or modified
     * @return true if the state is consumed, in which case no further
     * processing will be done on this touch state and no events will be sent.
     */
    public boolean filter(TouchState state);

    /**
     * Flushes this filter's state. If this filter wants to send any additional
     * events it should fill in the provided state object.
     *
     * @param state a TouchState object to be filled in by the filter
     * @return true if the filter put data into the state
     */
    public boolean flush(TouchState state);

    /**
     * Gets the priority of this touch filter. Touch filters are applied in
     * order, sorting first by their priority and then by the order in which
     * they were requested. Higher priority numbers are applied first.
     */
    public int getPriority();

}
