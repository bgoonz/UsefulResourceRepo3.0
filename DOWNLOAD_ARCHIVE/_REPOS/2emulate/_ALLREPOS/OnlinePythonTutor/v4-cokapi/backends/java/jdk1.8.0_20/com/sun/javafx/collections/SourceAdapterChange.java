/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.collections;

import java.util.List;
import javafx.collections.ListChangeListener;
import javafx.collections.ListChangeListener.Change;
import javafx.collections.ObservableList;

public class SourceAdapterChange<E> extends ListChangeListener.Change<E> {
    private final Change<? extends E> change;

    public SourceAdapterChange(ObservableList<E> list, Change<? extends E> change) {
        super(list);
        this.change = change;
    }

    @Override
    public boolean next() {
        return change.next();
    }

    @Override
    public void reset() {
        change.reset();
    }

    @Override
    public int getTo() {
        return change.getTo();
    }

    @Override
    public List<E> getRemoved() {
        return (List<E>) change.getRemoved();
    }

    @Override
    public int getFrom() {
        return change.getFrom();
    }

    @Override
    public int getPermutation(int i) {
        return change.getPermutation(i);
    }

    @Override
    protected int[] getPermutation() {
        return null; // Not used
    }

    @Override
    public boolean wasPermutated() {
        return change.wasPermutated();
    }

    @Override
    public String toString() {
        return change.toString();
    }

}
