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
package com.sun.glass.ui.gtk;

import com.sun.glass.ui.Application;
import com.sun.glass.ui.CommonDialogs.ExtensionFilter;
import com.sun.glass.ui.CommonDialogs.FileChooserResult;
import com.sun.glass.ui.Cursor;
import com.sun.glass.ui.InvokeLaterDispatcher;
import com.sun.glass.ui.Pixels;
import com.sun.glass.ui.Robot;
import com.sun.glass.ui.Screen;
import com.sun.glass.ui.Size;
import com.sun.glass.ui.Timer;
import com.sun.glass.ui.View;
import com.sun.glass.ui.Window;

import java.io.File;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.Map;
import java.util.concurrent.CountDownLatch;

final class GtkApplication extends Application implements InvokeLaterDispatcher.InvokeLaterSubmitter {

    static {
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            Application.loadNativeLibrary();
            return null;
        });
    }

    public static  int screen = -1;
    public static  long display = 0;
    public static  long visualID = 0;

    private final InvokeLaterDispatcher invokeLaterDispatcher;

    GtkApplication() {
        boolean isEventThread = AccessController
                .doPrivileged((PrivilegedAction<Boolean>) () -> Boolean.getBoolean("javafx.embed.isEventThread"));
        if (!isEventThread) {
            invokeLaterDispatcher = new InvokeLaterDispatcher(this);
            invokeLaterDispatcher.start();
        } else {
            invokeLaterDispatcher = null;
        }
    }

    private void initDisplay() {
        Map ds = getDeviceDetails();
        if (ds != null) {
            Object value;
            value = ds.get("XDisplay");
            if (value != null) {
                display = (Long)value;
            }
            value = ds.get("XVisualID");
            if (value != null) {
                visualID = (Long)value;
            }
            value = ds.get("XScreenID");
            if (value != null) {
                screen = (Integer)value;
            }
        }
    }

    private void init() {
        initDisplay();
        long eventProc = 0;
        Map map = getDeviceDetails();
        if (map != null) {
            Long result = (Long) map.get("javafx.embed.eventProc");
            eventProc = result == null ? 0 : result;
        }

        final boolean disableGrab = AccessController.doPrivileged((PrivilegedAction<Boolean>) () -> Boolean.getBoolean("sun.awt.disablegrab") ||
               Boolean.getBoolean("glass.disableGrab"));

        _init(eventProc, disableGrab);
    }

    @Override
    protected void runLoop(final Runnable launchable) {
        final boolean isEventThread = AccessController
            .doPrivileged((PrivilegedAction<Boolean>) () -> Boolean.getBoolean("javafx.embed.isEventThread"));
        
        if (isEventThread) {
            init();
            setEventThread(Thread.currentThread());
            launchable.run();
            return;
        }
        
        final boolean noErrorTrap = AccessController
            .doPrivileged((PrivilegedAction<Boolean>) () -> Boolean.getBoolean("glass.noErrorTrap"));
        
        final Thread toolkitThread =
            AccessController.doPrivileged((PrivilegedAction<Thread>) () -> new Thread(() -> {
                init();
                _runLoop(launchable, noErrorTrap);
            }, "GtkNativeMainLoopThread"));
        setEventThread(toolkitThread);
        toolkitThread.start();
    }
    
    @Override 
    protected void finishTerminating() {
        final Thread toolkitThread = getEventThread();
        if (toolkitThread != null) {
            _terminateLoop();
            setEventThread(null);
        }
        super.finishTerminating();
    }

    @Override public boolean shouldUpdateWindow() {
        return true;
    }

    private native void _terminateLoop();
    
    private native void _init(long eventProc, boolean disableGrab);
    
    private native void _runLoop(Runnable launchable, boolean noErrorTrap);

    @Override
    protected void _invokeAndWait(final Runnable runnable) {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.invokeAndWait(runnable);
        } else {
            final CountDownLatch latch = new CountDownLatch(1);
            submitForLaterInvocation(() -> {
                if (runnable != null) runnable.run();
                latch.countDown();
            });
            try {
                latch.await();
            } catch (InterruptedException e) {
                //FAIL SILENTLY
            }
        }
    }

    private native void _submitForLaterInvocation(Runnable r);
    // InvokeLaterDispatcher.InvokeLaterSubmitter
    @Override public void submitForLaterInvocation(Runnable r) {
        _submitForLaterInvocation(r);
    }

    @Override protected void _invokeLater(Runnable runnable) {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.invokeLater(runnable);
        } else {
            submitForLaterInvocation(runnable);
        }
    }

    private Object eventLoopExitEnterPassValue;

    private native void enterNestedEventLoopImpl();

    private native void leaveNestedEventLoopImpl();

    @Override
    protected Object _enterNestedEventLoop() {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.notifyEnteringNestedEventLoop();
        }
        try {
            enterNestedEventLoopImpl();
            final Object retValue = eventLoopExitEnterPassValue;
            eventLoopExitEnterPassValue = null;
            return retValue;
        } finally {
            if (invokeLaterDispatcher != null) {
                invokeLaterDispatcher.notifyLeftNestedEventLoop();
            }
        }
    }

    @Override
    protected void _leaveNestedEventLoop(Object retValue) {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.notifyLeavingNestedEventLoop();
        }
        eventLoopExitEnterPassValue = retValue;
        leaveNestedEventLoopImpl();
    }

    @Override
    public Window createWindow(Window owner, Screen screen, int styleMask) {
        return new GtkWindow(owner, screen, styleMask);
    }

    @Override
    public Window createWindow(long parent) {
        return new GtkChildWindow(parent);
    }

    @Override
    public View createView() {
        return new GtkView();
    }

    @Override
    public Cursor createCursor(int type) {
        return new GtkCursor(type);
    }

    @Override
    public Cursor createCursor(int x, int y, Pixels pixels) {
        return new GtkCursor(x, y, pixels);
    }

    @Override
    protected void staticCursor_setVisible(boolean visible) {
    }

    @Override
    protected Size staticCursor_getBestSize(int width, int height) {
        return GtkCursor._getBestSize(width, height);
    }

    @Override
    public Pixels createPixels(int width, int height, ByteBuffer data) {
        return new GtkPixels(width, height, data);
    }

    @Override
    public Pixels createPixels(int width, int height, IntBuffer data) {
        return new GtkPixels(width, height, data);
    }

    @Override
    public Pixels createPixels(int width, int height, IntBuffer data, float scale) {
        return new GtkPixels(width, height, data, scale);
    }

    @Override
    protected int staticPixels_getNativeFormat() {
        return Pixels.Format.BYTE_BGRA_PRE; // TODO
    }

    @Override
    public Robot createRobot() {
        return new GtkRobot();
    }

    @Override
    public Timer createTimer(Runnable runnable) {
        return new GtkTimer(runnable);
    }

    @Override
    protected native int staticTimer_getMinPeriod();

    @Override
    protected native int staticTimer_getMaxPeriod();

    @Override protected double staticScreen_getVideoRefreshPeriod() {
        return 0.0;     // indicate millisecond resolution
    }

    @Override native protected Screen[] staticScreen_getScreens();

    @Override
    protected FileChooserResult staticCommonDialogs_showFileChooser(
            Window owner, String folder, String filename, String title,
            int type, boolean multipleMode, ExtensionFilter[] extensionFilters, int defaultFilterIndex) {

        return GtkCommonDialogs.showFileChooser(owner, folder, filename, title,
                type, multipleMode, extensionFilters, defaultFilterIndex);
    }

    @Override
    protected File staticCommonDialogs_showFolderChooser(Window owner, String folder, String title) {
        return GtkCommonDialogs.showFolderChooser(owner, folder, title);
    }

    @Override
    protected native long staticView_getMultiClickTime();

    @Override
    protected native int staticView_getMultiClickMaxX();

    @Override
    protected native int staticView_getMultiClickMaxY();

    @Override
    protected boolean _supportsInputMethods() {
        return true;
    }

    @Override
    protected native boolean _supportsTransparentWindows();

    @Override protected boolean _supportsUnifiedWindows() {
        return false;
    }

    @Override
    protected native int _getKeyCodeForChar(char c);

}
