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

package com.sun.glass.ui.monocle.x11;

import com.sun.glass.ui.monocle.util.C;
import com.sun.glass.utils.NativeLibLoader;

public class X {

    static {
        NativeLibLoader.loadLibrary("glass_monocle_x11");
    }

    static final long None = 0l;
    static final int CopyFromParent = 0;
    static final int InputOutput = 1;

    static final long ButtonPressMask = 1l << 2;
    static final long ButtonReleaseMask = 1l << 3;
    static final long PointerMotionMask = 1l << 6;
    static final long SubstructureRedirectMask = 1l << 19;
    static final long SubstructureNotifyMask = 1l << 20;

    static final long CWOverrideRedirect = 1l << 9;
    static final long CWEventMask = 1l << 11;
    static final long CWCursorMask = 1l << 14;

    static final int ButtonPress = 4;
    static final int ButtonRelease = 5;
    static final int MotionNotify = 6;

    static final int Button1 = 1;
    static final int Button2 = 2;
    static final int Button3 = 3;
    static final int Button4 = 4;
    static final int Button5 = 5;

    static final long _NET_WM_STATE_REMOVE = 0;
    static final long _NET_WM_STATE_ADD = 1;
    static final long _NET_WM_STATE_TOGGLE = 2;

    static final long GrabModeSync = 0l;
    static final long GrabModeAsync = 1l;

    static final long CurrentTime = 0l;

    static class XSetWindowAttributes extends C.Structure {
        @Override
        public native int sizeof();
        static native void setEventMask(long p, long mask);
        static native void setCursor(long p, long cursor);
        static native void setOverrideRedirect(long p, boolean override);
    }

    static class XEvent extends C.Structure {
        XEvent(long p) {
            super(p);
        }
        XEvent() {
            super();
        }
        @Override
        public native int sizeof();
        static native int getType(long p);
        static native long getWindow(long p);
        static native void setWindow(long p, long window);
    }

    static class XButtonEvent extends XEvent {
        XButtonEvent(XEvent event) {
            super(event.p);
        }
        static native int getButton(long p);
    }

    static class XMotionEvent extends XEvent {
        XMotionEvent(XEvent event) {
            super(event.p);
        }
        static native int getX(long p);
        static native int getY(long p);
    }

    static class XClientMessageEvent extends XEvent {
        XClientMessageEvent(XEvent event) {
            super(event.p);
        }
        static native void setMessageType(long p, long atom);
        static native void setFormat(long p, long format);
        static native void setDataLong(long p, int index, long element);
    }

    static class XDisplay extends C.Structure {
        XDisplay(long p) {
            super(p);
        }
        public native int sizeof();
    }

    static native long XOpenDisplay(String displayName);
    static native long DefaultScreenOfDisplay(long display);
    static native long RootWindowOfScreen(long screen);
    static native int WidthOfScreen(long screen);
    static native int HeightOfScreen(long screen);
    static native long XCreateWindow(
            long display, long parent,
            int x, int y, int width, int height,
            int borderWidth, int depth, int windowClass,
            long visual, long valueMask,
            long attributes);
    static native void XMapWindow(long display, long window);
    static native void XStoreName(long display, long window, String name);
    static native void XSync(long display, boolean flush);
    static native void XGetGeometry(long display, long window,
                                    long[] root,
                                    int[] x, int[] y,
                                    int[] width, int[] height,
                                    int[] borderWidth, int[] depth);
    static native void XNextEvent(long display, long xevent);
    static native long XInternAtom(long display, String atomName, boolean onlyIfExists);
    static native void XSendEvent(long display, long window, boolean propagate,
                                  long mask, long event);
    static native void XGrabKeyboard(long display, long window,
                                     boolean ownerEvents,
                                     long pointerMode,
                                     long keyboardMode,
                                     long time);

}
