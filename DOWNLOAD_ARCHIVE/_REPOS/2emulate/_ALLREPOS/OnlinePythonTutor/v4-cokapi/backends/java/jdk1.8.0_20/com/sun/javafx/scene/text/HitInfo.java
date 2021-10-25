/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.scene.text;

/**
 * Represents the hit information in a Text node.
 */
public class HitInfo {

    /**
     * The index of the character which this hit information refers to.
     */
    private int charIndex;
    public int getCharIndex() { return charIndex; }
    public void setCharIndex(int charIndex) { this.charIndex = charIndex; }

    /**
     * Indicates whether the hit is on the leading edge of the character.
     * If it is false, it represents the trailing edge.
     */
    private boolean leading;
    public boolean isLeading() { return leading; }
    public void setLeading(boolean leading) { this.leading = leading; }

    /**
     * Returns the index of the insertion position.
     */
    public int getInsertionIndex() {
        return leading ? charIndex : charIndex + 1;
    }

    @Override public String toString() {
        return "charIndex: " + charIndex + ", isLeading: " + leading;
    }
}
