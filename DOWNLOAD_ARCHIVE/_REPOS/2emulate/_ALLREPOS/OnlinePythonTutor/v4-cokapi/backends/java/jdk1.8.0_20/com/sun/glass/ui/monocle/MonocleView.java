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

import com.sun.glass.events.ViewEvent;
import com.sun.glass.ui.Pixels;
import com.sun.glass.ui.View;
import com.sun.glass.ui.Window;

import java.nio.Buffer;
import java.util.Map;

public final class MonocleView extends View {

    MonocleView() {
    }

    private boolean cursorVisibility;
    private boolean resetCursorVisibility = false;

    // Constants
    private static long multiClickTime =  500;
    private static int multiClickMaxX = 20;
    private static int multiClickMaxY = 20;

    // view variables
    private int x;
    private int y;

    protected static long _getMultiClickTime() {
        return multiClickTime;
    }

    protected static int _getMultiClickMaxX() {
        return multiClickMaxX;
    }

    protected static int _getMultiClickMaxY() {
        return multiClickMaxY;
    }

    @Override
    protected void _enableInputMethodEvents(long ptr, boolean enable) {
    }

    @Override
    protected long _getNativeView(long ptr) {
        return ptr;
    }

    @Override
    protected int _getX(long ptr) {
        return x;
    }

    @Override
    protected int _getY(long ptr) {
        return y;
    }



    @Override
    protected void _scheduleRepaint(long ptr) {
    }



    @Override protected void _uploadPixels(long nativeViewPtr, Pixels pixels) {
        if (getWindow() != null) {
            NativeScreen screen =
                    NativePlatformFactory.getNativePlatform().getScreen();
            Window window = getWindow();
            screen.uploadPixels(pixels.getPixels(),
                                x + window.getX(), y + window.getY(),
                                pixels.getWidth(), pixels.getHeight(),
                                window.getAlpha());
        }
    }

    /**
     * Events
     */

    @Override
    public void notifyKey(int type, int keyCode, char[] keyChars,
                          int modifiers) {
        super.notifyKey(type, keyCode, keyChars, modifiers);
    }

    @Override
    public void notifyMouse(int type, int button,
                            int x, int y, int xAbs, int yAbs, int modifiers,
                            boolean isPopupTrigger, boolean isSynthesized) {
        super.notifyMouse(type, button, x, y, xAbs, yAbs, modifiers,
                          isPopupTrigger,
                          isSynthesized);
    }

    @Override
    public void notifyScroll(int x, int y, int xAbs, int yAbs,
                             double deltaX, double deltaY, int modifiers,
                             int lines, int chars,
                             int defaultLines, int defaultChars,
                             double xMultiplier, double yMultiplier) {
        super.notifyScroll(x, y, xAbs, yAbs, deltaX, deltaY,
                           modifiers, lines, chars,
                           defaultLines, defaultChars, xMultiplier,
                           yMultiplier);
    }

    protected void notifyRepaint() {
        super.notifyRepaint(x, y, getWidth(), getHeight());
    }

    @Override
    protected void notifyResize(int width, int height) {
        super.notifyResize(width, height);
    }

    @Override
    protected void notifyView(int viewEvent) {
        super.notifyView(viewEvent);
    }

    //DnD
    @Override
    public int notifyDragEnter(int x, int y, int absx, int absy, int recommendedDropAction) {
        return super.notifyDragEnter(x, y, absx, absy, recommendedDropAction);
    }

    @Override
    public void notifyDragLeave() {
        super.notifyDragLeave();
    }

    @Override
    public int notifyDragDrop(int x, int y, int absx, int absy, int recommendedDropAction) {
        return super.notifyDragDrop(x, y, absx, absy, recommendedDropAction);
    }

    @Override
    public int notifyDragOver(int x, int y, int absx, int absy, int recommendedDropAction) {
        return super.notifyDragOver(x, y, absx, absy, recommendedDropAction);
    }

    @Override
    public void notifyDragEnd(int performedAction) {
        super.notifyDragEnd(performedAction);
    }

    //Menu event - i.e context menu hint (usually mouse right click) 
    @Override
    protected void notifyMenu(int x, int y, int xAbs, int yAbs, boolean isKeyboardTrigger) {
        super.notifyMenu(x, y, xAbs, yAbs, isKeyboardTrigger);
    }

    @Override
    protected long _create(Map caps) {
        return 1l;
    }

    @Override
    protected void _setParent(long ptr, long parentPtr) {
    }

    @Override
    protected boolean _close(long ptr) {
        return true;
    }

    @Override
    protected boolean _enterFullscreen(long ptr, boolean animate,
                                       boolean keepRatio,
                                       boolean hideCursor) {
        MonocleWindowManager wm = MonocleWindowManager.getInstance();
        MonocleWindow focusedWindow = wm.getFocusedWindow();
        focusedWindow.setFullScreen(true);
        if (hideCursor) {
            resetCursorVisibility = true;
            NativeCursor nativeCursor =
                NativePlatformFactory.getNativePlatform().getCursor();
            cursorVisibility = nativeCursor.getVisiblity();
            nativeCursor.setVisibility(false);
        }
        return true;
    }

    @Override
    protected void _exitFullscreen(long ptr, boolean animate) {
        MonocleWindowManager wm = MonocleWindowManager.getInstance();
        MonocleWindow focusedWindow = wm.getFocusedWindow();
        focusedWindow.setFullScreen(false);
        if (resetCursorVisibility) {
            resetCursorVisibility = false;
            NativeCursor nativeCursor =
                    NativePlatformFactory.getNativePlatform().getCursor();
            nativeCursor.setVisibility(cursorVisibility);
        }
    }

    @Override
    public String toString() {
        return "MonocleView["
                + x + "," + y
                + "+" + getWidth() + "x" + getHeight()
                + "]";
    }

    /**
    * Assuming this is used to lock the surface for painting
    */
    @Override
    protected void _begin(long ptr) {
    }

    /**
     * Assuming this is used to unlock the surface after painting is
     * done
     */
    @Override
    protected  void _end(long ptr) {
    }
}
