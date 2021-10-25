/*
 * Copyright (c) 2010, 2014, Oracle and/or its affiliates. All rights reserved.
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

import com.sun.glass.ui.monocle.input.InputDeviceRegistry;

public abstract class NativePlatform {

    private static InputDeviceRegistry inputDeviceRegistry;
    protected final RunnableProcessor runnableProcessor;
    private NativeCursor cursor;
    private NativeScreen screen;
    protected AcceleratedScreen accScreen;

    protected NativePlatform() {
        runnableProcessor = new RunnableProcessor();
    }

    protected void shutdown() {
        runnableProcessor.shutdown();
        if (cursor != null) {
            cursor.shutdown();
        }
        if (screen != null) {
            screen.shutdown();
        }
    }

    public RunnableProcessor getRunnableProcessor() {
        return runnableProcessor;
    }

    public synchronized InputDeviceRegistry getInputDeviceRegistry() {
        if (inputDeviceRegistry == null) {
            inputDeviceRegistry = createInputDeviceRegistry();
        }
        return inputDeviceRegistry;
    }

    protected abstract InputDeviceRegistry createInputDeviceRegistry();

    protected abstract NativeCursor createCursor();

    public synchronized NativeCursor getCursor() {
        if (cursor == null) {
            cursor = createCursor();
        }
        return cursor;
    }

    protected abstract NativeScreen createScreen();

    public synchronized NativeScreen getScreen() {
        if (screen == null) {
            screen = createScreen();
        }
        return screen;
    }

    public synchronized AcceleratedScreen getAcceleratedScreen(int[] attributes)
            throws GLException, UnsatisfiedLinkError {
        if (accScreen == null) {
            accScreen = new AcceleratedScreen(attributes);
        }
        return accScreen;
    }

}
