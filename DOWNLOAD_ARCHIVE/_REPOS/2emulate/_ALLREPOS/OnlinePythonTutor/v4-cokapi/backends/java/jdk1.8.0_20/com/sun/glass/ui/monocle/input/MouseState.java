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

package com.sun.glass.ui.monocle.input;

import com.sun.glass.events.KeyEvent;
import com.sun.glass.events.MouseEvent;
import com.sun.glass.ui.monocle.MonocleWindow;
import com.sun.glass.ui.monocle.MonocleWindowManager;
import com.sun.glass.ui.monocle.util.IntSet;

public class MouseState {

    public static final int WHEEL_NONE = 0;
    public static final int WHEEL_UP = 1;
    public static final int WHEEL_DOWN = -1 ;

    private int x;
    private int y;
    private int wheel;
    private MonocleWindow window;

    private IntSet buttonsPressed = new IntSet();

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getWheel() {
        return wheel;
    }

    public void setWheel(int wheel) {
        this.wheel = wheel;
    }

    public void pressButton(int button) {
        buttonsPressed.addInt(button);
    }

    public void releaseButton(int button) {
        buttonsPressed.removeInt(button);
    }

    /** Returns the Glass window on which this event state is located . */
    MonocleWindow getWindow(boolean recalculateCache) {
        if (window == null || recalculateCache) {
            window = (MonocleWindow)
                    MonocleWindowManager.getInstance().getWindowForLocation(x, y);
        }
        return window;
    }

    /** Returns the Glass button ID used for this state. */
    int getButton() {
        return buttonsPressed.isEmpty()
               ? MouseEvent.BUTTON_NONE
               : buttonsPressed.get(0);
    }

    /** Returns the Glass event modifiers for this state */
    int getModifiers() {
        int modifiers = KeyEvent.MODIFIER_NONE;
        for (int i = 0; i < buttonsPressed.size(); i++) {
            switch(buttonsPressed.get(i)) {
                case MouseEvent.BUTTON_LEFT:
                    modifiers |= KeyEvent.MODIFIER_BUTTON_PRIMARY;
                    break;
                case MouseEvent.BUTTON_OTHER:
                    modifiers |= KeyEvent.MODIFIER_BUTTON_MIDDLE;
                    break;
                case MouseEvent.BUTTON_RIGHT:
                    modifiers |= KeyEvent.MODIFIER_BUTTON_SECONDARY;
                    break;
            }
        }
        return modifiers;
    }

    public void copyTo(MouseState target) {
        target.x = x;
        target.y = y;
        target.wheel = wheel;
        buttonsPressed.copyTo(target.buttonsPressed);
        target.window = window;
    }

    public IntSet getButtonsPressed() {
        return buttonsPressed;
    }

    public String toString() {
        return "MouseState[x="
                + x + ",y=" + y
                + ",wheel=" + wheel
                + ",buttonsPressed=" + buttonsPressed + "]";
    }

    /** Finds out whether two non-null states are identical in everything but
     * their coordinates
     *
     * @param ms the MouseState to compare to
     */
    public boolean canBeFoldedWith(MouseState ms) {
        return ms.buttonsPressed.equals(buttonsPressed) && ms.wheel == wheel;
    }

}
