/*
 * Copyright (c) 2012, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.glass.ui.monocle;

import com.sun.glass.events.WindowEvent;
import com.sun.glass.ui.Window;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class MonocleWindowManager {

    private static MonocleWindowManager instance = new MonocleWindowManager();

    /** The window stack. Windows are in Z-order, from back to front. */
    private MonocleWindow[] windows = new MonocleWindow[0];
    private int nextID = 1;

    private MonocleWindow focusedWindow = null;

    private MonocleWindowManager() {
        //singleton
    }

    public static MonocleWindowManager getInstance() {
        return instance;
    }

    private int getWindowIndex(MonocleWindow window) {
        for (int i = 0; i < windows.length; i++) {
            // Any two MonocleWindow objects represent different windows, so
            // equality can be determined by reference comparison.
            if (windows[i] == window) {
                return i;
            }
        }
        return -1;
    }
    public void toBack(MonocleWindow window) {
        int index = getWindowIndex(window);
        if (index != 0 && index != -1) {
            System.arraycopy(windows, 0, windows, 1, index);
            windows[0] = window;
        }
    }

    public void toFront(MonocleWindow window) {
        int index = getWindowIndex(window);
        if (index != windows.length - 1 && index != -1) {
            System.arraycopy(windows, index + 1, windows, index,
                             windows.length - index - 1);
            windows[windows.length - 1] = window;
        }
    }

    public int addWindow(MonocleWindow window) {
        int index = getWindowIndex(window);
        if (index == -1) {
            windows = Arrays.copyOf(windows, windows.length + 1);
            windows[windows.length - 1] = window;
        }
        return nextID++;

    }

    public boolean closeWindow(MonocleWindow window) {
        int index = getWindowIndex(window);
        if (index != -1) {
            System.arraycopy(windows, index + 1, windows, index,
                             windows.length - index - 1);
            windows = Arrays.copyOf(windows, windows.length - 1);
        }
        List<MonocleWindow> windowsToNotify = new ArrayList<MonocleWindow>();
        for (MonocleWindow otherWindow : windows) {
            if (otherWindow.getOwner() == window) {
                windowsToNotify.add(otherWindow);
            }
        }
        for (int i = 0; i < windowsToNotify.size(); i++) {
            windowsToNotify.get(i).notifyClose();
        }
        window.notifyDestroy();
        return true;

    }

    public boolean minimizeWindow(MonocleWindow window) {
        return true;
    }

    public boolean maximizeWindow(MonocleWindow window) {
        return true;
    }

    public boolean requestFocus(MonocleWindow window) {
        int index = getWindowIndex(window);
        if (index != -1) {
            focusedWindow = window;
            window.notifyFocus(WindowEvent.FOCUS_GAINED);
            return true;
        } else {
            return false;
        }
    }

    public boolean grabFocus(MonocleWindow window) {
        return true;
    }

    public void ungrabFocus(MonocleWindow window) {

    }

    public MonocleWindow getWindowForLocation(int x, int y) {
        for (int i = windows.length - 1; i >=0 ; i--) {
            MonocleWindow w = windows[i];
            if (x >= w.getX() && y >= w.getY()
                   && x < w.getX() + w.getWidth()
                   && y < w.getY() + w.getHeight()
                   && w.isEnabled()) {
                return w;
            }
        }
        return null;
    }

    public void notifyFocusDisabled(MonocleWindow window) {
        if (window != null) {
            window._notifyFocusDisabled();
        }
    }
    
    public MonocleWindow getFocusedWindow() {
        return focusedWindow;
    }

    public void repaintAll() {
        for (int i = 0; i < windows.length; i++) {
            ((MonocleView)(windows[i].getView())).notifyRepaint();
        }
    }

}
