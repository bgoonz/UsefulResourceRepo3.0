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
package com.sun.glass.ui.mac;

import com.sun.glass.ui.Pixels;
import com.sun.glass.ui.View;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.util.Map;

/**
 * MacOSX platform implementation class for View.
 */
final class MacView extends View {
    
    private native static void _initIDs();
    static {
        _initIDs();
        multiClickTime = _getMultiClickTime_impl();
        multiClickMaxX = _getMultiClickMaxX_impl();
        multiClickMaxY = _getMultiClickMaxY_impl();
    }

    // Constants
    private static final long multiClickTime;
    private static final int multiClickMaxX, multiClickMaxY;

    private native static long _getMultiClickTime_impl();
    private native static int _getMultiClickMaxX_impl();
    private native static int _getMultiClickMaxY_impl();

    static long getMultiClickTime_impl() {
        return multiClickTime;
    }

    static int getMultiClickMaxX_impl() {
        return multiClickMaxX;
    }

    static int getMultiClickMaxY_impl() {
        return multiClickMaxY;
    }
 
    @Override native protected long _create(Map caps);
    @Override native protected int _getX(long ptr);
    @Override native protected int _getY(long ptr);
    @Override native protected void _setParent(long ptr, long parentPtr);
    @Override native protected boolean _close(long ptr);
    @Override native protected void _scheduleRepaint(long ptr);
    @Override native protected void _begin(long ptr);
    @Override native protected void _end(long ptr);
    @Override native protected boolean _enterFullscreen(long ptr, boolean animate, boolean keepRatio, boolean hideCursor);
    @Override native protected void _exitFullscreen(long ptr, boolean animate);
    @Override native protected void _enableInputMethodEvents(long ptr, boolean enable);
    
    @Override protected void _uploadPixels(long ptr, Pixels pixels) {
        Buffer data = pixels.getPixels();
        if (data.isDirect() == true) {
            _uploadPixelsDirect(ptr, data, pixels.getWidth(), pixels.getHeight());
        } else if (data.hasArray() == true) {
            if (pixels.getBytesPerComponent() == 1) {
                ByteBuffer bytes = (ByteBuffer)data;
                _uploadPixelsByteArray(ptr, bytes.array(), bytes.arrayOffset(), pixels.getWidth(), pixels.getHeight());
            } else {
                IntBuffer ints = (IntBuffer)data;
                _uploadPixelsIntArray(ptr, ints.array(), ints.arrayOffset(), pixels.getWidth(), pixels.getHeight());
            }
        } else {
            // gznote: what are the circumstances under which this can happen?
            _uploadPixelsDirect(ptr, pixels.asByteBuffer(), pixels.getWidth(), pixels.getHeight());
        }
    }
    native void _uploadPixelsDirect(long viewPtr, Buffer pixels, int width, int height);
    native void _uploadPixelsByteArray(long viewPtr, byte[] pixels, int offset, int width, int height);
    native void _uploadPixelsIntArray(long viewPtr, int[] pixels, int offset, int width, int height);
    
    @Override protected long _getNativeView(long ptr) {
        return ptr;
    }
    
    native protected long _getNativeLayer(long ptr);
    public long getNativeLayer() {
        return _getNativeLayer(getNativeView());
    }
    
    native protected int _getNativeRemoteLayerId(long ptr, String serverName);
    @Override public int getNativeRemoteLayerId(String serverName) {
        // used when run inside plugin
        return _getNativeRemoteLayerId(getNativeLayer(), serverName);
    }

    native protected void _hostRemoteLayerId(long ptr, int nativeLayerId);
    public void hostRemoteLayerId(int nativeLayerId) {
        // used when run inside plugin
        _hostRemoteLayerId(getNativeLayer(), nativeLayerId);
    }
    
    protected void notifyInputMethodMac(String str, int attrib, int length, int cursor) {
        byte atts[] = new byte[1];
        atts[0] = (byte) attrib;
        int attBounds[] = new int[2];
        attBounds[0] = 0;
        attBounds[1] = length;
        if(attrib == 4) {
            // attrib == 4 means we are going to commit changes, so commitLength should be non-zero
            notifyInputMethod(str, null, attBounds, atts, length, cursor, 0);
        } else {
            // all other cases = just an update, update preview text but do not commit it
            notifyInputMethod(str, null, attBounds, atts, 0, cursor, 0);
        }
    }
}

