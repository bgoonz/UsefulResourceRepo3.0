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
package com.sun.glass.ui.win;

import com.sun.glass.ui.*;
import com.sun.glass.ui.CommonDialogs.ExtensionFilter;
import com.sun.glass.ui.CommonDialogs.FileChooserResult;
import com.sun.glass.utils.NativeLibLoader;

import java.io.File;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.List;

import com.sun.javafx.scene.accessibility.Accessible;

final class WinApplication extends Application implements InvokeLaterDispatcher.InvokeLaterSubmitter {

    private static native void initIDs();
    static {
        // This loading of msvcr100.dll (VS2010) is required when run with Java 6
        // since it was build with VS2003 and doesn't include msvcr100.dll in it's JRE.
        // Note: See README-builds.html on MSVC requirement: VS2010 is required.
        AccessController.doPrivileged(new PrivilegedAction<Void>() {
            public Void run() {
                verbose = Boolean.getBoolean("javafx.verbose");
                try {
                    NativeLibLoader.loadLibrary("msvcr100");
                } catch (Throwable t) {
                    if (verbose) {
                        System.err.println("Error: failed to load msvcr100.dll : " + t);
                    }
                }
                Application.loadNativeLibrary();
                return null;
            }
        });
        initIDs();
    }

    private final InvokeLaterDispatcher invokeLaterDispatcher;
    WinApplication() {
        boolean isEventThread = AccessController
                .doPrivileged((PrivilegedAction<Boolean>) () -> Boolean.getBoolean("javafx.embed.isEventThread"));
        if (!isEventThread) {
            invokeLaterDispatcher = new InvokeLaterDispatcher(this);
            invokeLaterDispatcher.start();
        } else {
            invokeLaterDispatcher = null;
        }
    }

    private static boolean verbose;

    // returng toolkit window HWND
    private native long _init();
    private native void _setClassLoader(ClassLoader classLoader);
    private native void _runLoop(Runnable launchable);
    private native void _terminateLoop();

    @Override
    protected void runLoop(final Runnable launchable) {
        boolean isEventThread = AccessController
            .doPrivileged((PrivilegedAction<Boolean>) () -> Boolean.getBoolean("javafx.embed.isEventThread"));

        ClassLoader classLoader = WinApplication.class.getClassLoader();
        _setClassLoader(classLoader);

        if (isEventThread) {
            _init();
            setEventThread(Thread.currentThread());
            launchable.run();
            return;
        }
        final Thread toolkitThread =
            AccessController.doPrivileged((PrivilegedAction<Thread>) () -> new Thread(() -> {
                _init();
                _runLoop(launchable);
            }, "WindowsNativeRunloopThread"));
        setEventThread(toolkitThread);
        toolkitThread.start();
    }

    @Override protected void finishTerminating() {
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

    native private Object _enterNestedEventLoopImpl();
    native private void _leaveNestedEventLoopImpl(Object retValue);

    @Override protected Object _enterNestedEventLoop() {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.notifyEnteringNestedEventLoop();
        }
        try {
            return _enterNestedEventLoopImpl();
        } finally {
            if (invokeLaterDispatcher != null) {
                invokeLaterDispatcher.notifyLeftNestedEventLoop();
            }
        }
    }

    @Override protected void _leaveNestedEventLoop(Object retValue) {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.notifyLeavingNestedEventLoop();
        }
        _leaveNestedEventLoopImpl(retValue);
    }

    // FACTORY METHODS

    @Override public Window createWindow(Window owner, Screen screen, int styleMask) {
        return new WinWindow(owner, screen, styleMask);
    }

    @Override public Window createWindow(long parent) {
        return new WinChildWindow(parent);
    }

    @Override public View createView() {
        return new WinView();
    }

    @Override public Cursor createCursor(int type) {
        return new WinCursor(type);
    }

    @Override public Cursor createCursor(int x, int y, Pixels pixels) {
        return new WinCursor(x, y, pixels);
    }

    @Override protected void staticCursor_setVisible(boolean visible) {
        WinCursor.setVisible_impl(visible);
    }

    @Override protected Size staticCursor_getBestSize(int width, int height) {
        return WinCursor.getBestSize_impl(width, height);
    }

    @Override public Pixels createPixels(int width, int height, ByteBuffer data) {
        return new WinPixels(width, height, data);
    }

    @Override public Pixels createPixels(int width, int height, IntBuffer data) {
        return new WinPixels(width, height, data);
    }

    @Override
    public Pixels createPixels(int width, int height, IntBuffer data, float scale) {
        return new WinPixels(width, height, data, scale);
    }

    @Override protected int staticPixels_getNativeFormat() {
        return WinPixels.getNativeFormat_impl();
    }

    @Override public Robot createRobot() {
        return new WinRobot();
    }

    @Override protected double staticScreen_getVideoRefreshPeriod() {
        return 0.0;     // indicate millisecond resolution
    }

    @Override native protected Screen[] staticScreen_getScreens();
    
    @Override public Timer createTimer(Runnable runnable) {
        return new WinTimer(runnable);
    }

    @Override protected int staticTimer_getMinPeriod() {
        return WinTimer.getMinPeriod_impl();
    }

    @Override protected int staticTimer_getMaxPeriod() {
        return WinTimer.getMaxPeriod_impl();
    }

    @Override public PlatformAccessible createAccessible(Accessible accessible) {
        return WinAccessible.createAccessible(accessible);
    }

    @Override protected FileChooserResult staticCommonDialogs_showFileChooser(Window owner, String folder, String filename, String title, int type,
                                             boolean multipleMode, ExtensionFilter[] extensionFilters, int defaultFilterIndex) {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.notifyEnteringNestedEventLoop();
        }
        return WinCommonDialogs.showFileChooser_impl(owner, folder, filename, title, type, multipleMode, extensionFilters, defaultFilterIndex);
    }

    @Override protected File staticCommonDialogs_showFolderChooser(Window owner, String folder, String title) {
        if (invokeLaterDispatcher != null) {
            invokeLaterDispatcher.notifyEnteringNestedEventLoop();
        }
        return WinCommonDialogs.showFolderChooser_impl(owner, folder, title);
    }

    @Override protected long staticView_getMultiClickTime() {
        return WinView.getMultiClickTime_impl();
    }

    @Override protected int staticView_getMultiClickMaxX() {
        return WinView.getMultiClickMaxX_impl();
    }

    @Override protected int staticView_getMultiClickMaxY() {
        return WinView.getMultiClickMaxY_impl();
    }
    
    @Override native protected void _invokeAndWait(Runnable runnable);

    native private void _submitForLaterInvocation(Runnable r);
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

    private native String _getHighContrastTheme();
    @Override public String getHighContrastTheme() {
    	checkEventThread();
        return _getHighContrastTheme();
    }
 
    @Override
    protected boolean _supportsInputMethods() {
        return true;
    }

    @Override
    protected boolean _supportsTransparentWindows() {
        return true;
    }

    @Override native protected boolean _supportsUnifiedWindows();
    
    public String getDataDirectory() {
        checkEventThread();
        String baseDirectory = AccessController.doPrivileged((PrivilegedAction<String>) () -> System.getenv("APPDATA"));
        if (baseDirectory == null || baseDirectory.length() == 0) {
            return super.getDataDirectory();
        }
        return baseDirectory + File.separator + name + File.separator;
    }

    @Override
    protected native int _getKeyCodeForChar(char c);
}
