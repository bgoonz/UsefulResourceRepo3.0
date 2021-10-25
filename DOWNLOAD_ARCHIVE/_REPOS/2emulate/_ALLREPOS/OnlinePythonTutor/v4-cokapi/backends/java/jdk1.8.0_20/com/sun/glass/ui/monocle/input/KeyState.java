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

package com.sun.glass.ui.monocle.input;

import com.sun.glass.events.KeyEvent;
import com.sun.glass.ui.monocle.MonocleWindow;
import com.sun.glass.ui.monocle.MonocleWindowManager;
import com.sun.glass.ui.monocle.util.IntSet;

public class KeyState {

    private IntSet keysPressed = new IntSet();
    private MonocleWindow window;
    private int modifiers;

    public void clear() {
        keysPressed.clear();
        modifiers = 0;
    }

    public void pressKey(int virtualKeyCode) {
        keysPressed.addInt(virtualKeyCode);
        modifiers |= getModifier(virtualKeyCode);
    }

    public void releaseKey(int virtualKeyCode) {
        keysPressed.removeInt(virtualKeyCode);
        modifiers &= ~getModifier(virtualKeyCode);
    }

    public void copyTo(KeyState target) {
        keysPressed.copyTo(target.keysPressed);
        target.window = window;
        target.modifiers = modifiers;
    }

    public IntSet getKeysPressed() {
        return keysPressed;
    }

    /** Returns the Glass window on which this event state is located . */
    MonocleWindow getWindow(boolean recalculateCache) {
        if (window == null || recalculateCache) {
            window = (MonocleWindow)
                    MonocleWindowManager.getInstance().getFocusedWindow();
        }
        return window;
    }

    private static int getModifier(int virtualKeyCode) {
        switch (virtualKeyCode) {
            case KeyEvent.VK_SHIFT: return KeyEvent.MODIFIER_SHIFT;
            case KeyEvent.VK_CONTROL: return KeyEvent.MODIFIER_CONTROL;
            case KeyEvent.VK_ALT: return KeyEvent.MODIFIER_ALT;
            case KeyEvent.VK_COMMAND: return KeyEvent.MODIFIER_COMMAND;
            case KeyEvent.VK_WINDOWS: return KeyEvent.MODIFIER_WINDOWS;
            default: return KeyEvent.MODIFIER_NONE;
        }
    }

    public int getModifiers() {
        return modifiers;
    }

    public boolean isShiftPressed() {
        return (modifiers & KeyEvent.MODIFIER_SHIFT) != 0;
    }

    public boolean isControlPressed() {
        return (modifiers & KeyEvent.MODIFIER_CONTROL) != 0;
    }

    public String toString() {
        return "KeyState[modifiers=" + modifiers + ",keys=" + keysPressed + "]";
    }

}
