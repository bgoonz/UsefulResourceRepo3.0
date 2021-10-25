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
package com.sun.glass.ui.swt;

import com.sun.glass.ui.*;

import java.nio.IntBuffer;

import org.eclipse.swt.*;
import org.eclipse.swt.graphics.*;
import org.eclipse.swt.widgets.*;

final class SWTRobot extends Robot {

    @Override protected void _create() {
    }

    @Override protected void _destroy() {
    }

    @Override protected void _keyPress(int code) {
        Event event = new Event();
        event.type = SWT.KeyDown;
        event.character = (char) SWTApplication.getSWTKeyCode(code);
        Display.getDefault().post(event);
    }
    
    @Override protected void _keyRelease(int code) {
        Event event = new Event();
        event.type = SWT.KeyUp;
        event.character = (char) SWTApplication.getSWTKeyCode(code);
        Display.getDefault().post(event);
    }

    @Override protected void _mouseMove(int x, int y) {
        Event event = new Event();
        event.type = SWT.MouseMove;
        event.x = x;
        event.y = y;
        Display.getDefault().post(event);
    }

    @Override protected void _mousePress(int buttons) {
        Event event = new Event();
        event.type = SWT.MouseDown;
        if (buttons == Robot.MOUSE_LEFT_BTN) event.button = 1;
        if (buttons == Robot.MOUSE_MIDDLE_BTN) event.button = 2;
        if (buttons == Robot.MOUSE_RIGHT_BTN) event.button = 3;
        Display.getDefault().post(event);
    }

    @Override protected void _mouseRelease(int buttons) {
        Event event = new Event();
        event.type = SWT.MouseUp;
        if (buttons == Robot.MOUSE_LEFT_BTN) event.button = 1;
        if (buttons == Robot.MOUSE_MIDDLE_BTN) event.button = 2;
        if (buttons == Robot.MOUSE_RIGHT_BTN) event.button = 3;
        Display.getDefault().post(event);
    }

    @Override protected void _mouseWheel(int wheelAmt) {
        Event event = new Event();
        event.type = SWT.MouseVerticalWheel;
        //TODO - not tested, determine correct value for robot wheel
        event.count = wheelAmt;
        Display.getDefault().post(event);
    }

    @Override protected int _getMouseX() {
        //TODO - write native version that avoids thread check
        return Display.getDefault().getCursorLocation().x;
    }

    @Override protected int _getMouseY() {
        //TODO - write native version that avoids thread check
        return Display.getDefault().getCursorLocation().y;
    }

    @Override protected int _getPixelColor(int x, int y) {
        Display display = Display.getDefault();
        GC gc = new GC(display);
        final Image image = new Image(display, 1, 1);
        gc.copyArea(image, x, y);
        gc.dispose();
        ImageData imageData = image.getImageData();
        return imageData.getPixel(x, y);
    }
    
    private void _getScreenCapture(int x, int y, int width, int height, int[] data) {
//        Display display = Display.getDefault();
//        GC gc = new GC(display);
//        final Image image = new Image(display, display.getBounds());
//        gc.copyArea(image, 0, 0);
//        gc.dispose();
//        ImageData imageData = image.getImageData();
        //TODO - put bits into data
    }
    @Override protected Pixels _getScreenCapture(int x, int y, int width, int height, boolean isHiDPI) {
        int data[] = new int[width * height];
        _getScreenCapture(x, y, width, height, data);
        return Application.GetApplication().createPixels(width, height, IntBuffer.wrap(data));
    }
}

