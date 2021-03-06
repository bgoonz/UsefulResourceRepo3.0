/*
 * Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved.
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
package com.sun.glass.ui.monocle.util;

import java.util.Arrays;

/**
 * Mutable sorted set of int values, optimized for a small number of values. Not
 * thread-safe.
 */
public class IntSet {
    private int[] elements = new int[4];
    private int size = 0;

    public void addInt(int value) {
        int i = getIndex(value);
        if (i < 0) {
            int insertionPoint = -1 - i;
            if (size == elements.length) {
                elements = Arrays.copyOf(elements, size * 2);
            }
            if (insertionPoint != size) {
                System.arraycopy(elements, insertionPoint,
                                 elements, insertionPoint + 1,
                                 size - insertionPoint);
            }
            elements[insertionPoint] = value;
            size ++;
        }
    }

    public void removeInt(int value) {
        int i = getIndex(value);
        if (i >= 0) {
            if (i < size - 1) {
                System.arraycopy(elements, i + 1, elements, i, size - i - 1);
            }
            size --;
        }
    }

    public boolean containsInt(int value) {
        return getIndex(value) >= 0;
    }

    private int getIndex(int value) {
        int i;
        for (i = 0; i < size; i++) {
            if (elements[i] == value) {
                return i;
            } else if (elements[i] > value) {
                return -i - 1;
            }
        }
        return -i - 1;
    }

    public int get(int index) {
        return elements[index];
    }

    /** Adds to the set "dest" values that in this set but are not in the set
     * "compared". */
    public void difference(IntSet dest, IntSet compared) {
        int i = 0;
        int j = 0;
        while (i < size && j < compared.size) {
            int a = elements[i];
            int b = compared.elements[j];
            if (a < b) {
                // our set has a value that is not in "compared"
                dest.addInt(a);
                i ++;
            } else if (a > b) {
                // "compared" has a value that is not in our set.
                j ++;
            } else {
                // the sets match at this index.
                i ++;
                j ++;
            }
        }
        // anything left in our set is part of the delta and belongs in "dest".
        while (i < size) {
            dest.addInt(elements[i]);
            i ++;
        }
    }

    public void clear() {
        size = 0;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    /** Copies the contents of this set to the target set. */
    public void copyTo(IntSet target) {
        if (target.elements.length < size) {
            target.elements = Arrays.copyOf(elements, elements.length);
        } else {
            System.arraycopy(elements, 0, target.elements, 0, size);
        }
        target.size = size;
    }

    public boolean equals(IntSet set) {
        if (set.size == size) {
            for (int i = 0; i < size; i++) {
                if (set.elements[i] != elements[i]) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public boolean equals(Object o) {
        if (o instanceof IntSet) {
            return equals((IntSet) o);
        } else {
            return false;
        }
    }

    public String toString() {
        StringBuffer sb = new StringBuffer("IntSet[");
        for (int i = 0; i < size; i++) {
            sb.append(elements[i]);
            if (i < size - 1) {
                sb.append(",");
            }
        }
        sb.append("]");
        return sb.toString();
    }

}
