/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.media.jfxmediaimpl;

import com.sun.media.jfxmedia.MediaException;
import com.sun.media.jfxmedia.control.VideoDataBuffer;
import com.sun.media.jfxmedia.control.VideoFormat;
import java.nio.ByteBuffer;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Native implementation of VideoDataBuffer
 */
final class NativeVideoBuffer implements VideoDataBuffer {
    private long nativePeer;
    private AtomicInteger holdCount;
    private NativeVideoBuffer cachedBGRARep;

    private static native void nativeDisposeBuffer(long handle);

    private native double nativeGetTimestamp(long handle);
    private native ByteBuffer nativeGetBuffer(long handle);
    private native long nativeGetFrameNumber(long handle);
    private native int nativeGetWidth(long handle);
    private native int nativeGetHeight(long handle);
    private native int nativeGetEncodedWidth(long handle);
    private native int nativeGetEncodedHeight(long handle);
    private native int nativeGetFormat(long handle); // returns FORMAT_TYPE_XXX constant
    private native boolean nativeHasAlpha(long handle);
    private native int nativeGetPlaneCount(long handle);
    private native int[] nativeGetPlaneOffsets(long handle);
    private native int[] nativeGetPlaneStrides(long handle);
    private native long nativeConvertToFormat(long handle, int formatType);
    private native void nativeSetDirty(long handle);

    // This causes methods to throw an NPE if the native handle is invalid
    private static final boolean DEBUG_DISPOSED_BUFFERS = false;
    private static final VideoBufferDisposer disposer = new VideoBufferDisposer();

    public static NativeVideoBuffer createVideoBuffer(long nativePeer) {
        NativeVideoBuffer buffer = new NativeVideoBuffer(nativePeer);
        MediaDisposer.addResourceDisposer(buffer, (Long)nativePeer, disposer);
        return buffer;
    }

    private NativeVideoBuffer(long nativePeer) {
        holdCount = new AtomicInteger(1);
        this.nativePeer = nativePeer;
    }

    /* Call this when we hand this frame off to a renderer */
    public void holdFrame() {
        if (0 != nativePeer) {
            holdCount.incrementAndGet();
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
    }

    /* Call this when the renderer is done with the frame so that it may be reused */
    public void releaseFrame() {
        if (0 != nativePeer) {
            if (holdCount.decrementAndGet() <= 0) {
                // release our cached rep if it's there
                if (null != cachedBGRARep) {
                    cachedBGRARep.releaseFrame();
                    cachedBGRARep = null;
                }

                // last reference released, dispose and clear our native handle
                MediaDisposer.removeResourceDisposer((Long)nativePeer);
                nativeDisposeBuffer(nativePeer);
                nativePeer = 0;
            }
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
    }

    public double getTimestamp() {
        if (0 != nativePeer) {
            return nativeGetTimestamp(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0.0;
    }

    public ByteBuffer getBuffer() {
        if (0 != nativePeer) {
            ByteBuffer buffer = nativeGetBuffer(nativePeer);
            // HACK: For some reason NewDirectByteBuffer keeps setting BIG_ENDIAN
            buffer.order(java.nio.ByteOrder.nativeOrder());
            return buffer;
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return null;
    }

    public long getFrameNumber() {
        if (0 != nativePeer) {
            return nativeGetFrameNumber(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int getWidth() {
        if (0 != nativePeer) {
            return nativeGetWidth(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int getHeight() {
        if (0 != nativePeer) {
            return nativeGetHeight(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int getEncodedWidth() {
        if (0 != nativePeer) {
            return nativeGetEncodedWidth(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int getEncodedHeight() {
        if (0 != nativePeer) {
            return nativeGetEncodedHeight(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public VideoFormat getFormat() {
        if (0 != nativePeer) {
            int formatType = nativeGetFormat(nativePeer);
            return VideoFormat.formatForType(formatType);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return null;
    }

    public boolean hasAlpha() {
        if (0 != nativePeer) {
            return nativeHasAlpha(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return false;
    }

    public int getPlaneCount() {
        if (0 != nativePeer) {
            return nativeGetPlaneCount(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int getOffsetForPlane(int planeIndex) {
        if (0 != nativePeer) {
            int[] offsets = nativeGetPlaneOffsets(nativePeer);
            return offsets[planeIndex];
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int[] getPlaneOffsets() {
        if (0 != nativePeer) {
            return nativeGetPlaneOffsets(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return null;
    }

    public int getStrideForPlane(int planeIndex) {
        if (0 != nativePeer) {
            int[] strides = nativeGetPlaneStrides(nativePeer);
            return strides[planeIndex];
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return 0;
    }

    public int[] getPlaneStrides() {
        if (0 != nativePeer) {
            return nativeGetPlaneStrides(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return null;
    }

    public VideoDataBuffer convertToFormat(VideoFormat newFormat) {
        if (0 != nativePeer) {
            // see if we have a converted frame already, if we do bump the hold count and return it instead
            if (newFormat == VideoFormat.BGRA_PRE && null != cachedBGRARep) {
                cachedBGRARep.holdFrame();
                return cachedBGRARep;
            }

            long newFrame = nativeConvertToFormat(nativePeer, newFormat.getNativeType());
            if (0 != newFrame) {
                NativeVideoBuffer frame = createVideoBuffer(newFrame);
                if (newFormat == VideoFormat.BGRA_PRE) {
                    frame.holdFrame(); // we need to keep one reference around so it doesn't disappear
                    cachedBGRARep = frame;
                }
                return frame;
            } else {
                throw new UnsupportedOperationException("Conversion from "+getFormat()+" to "+newFormat+" is not supported.");
            }
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
        return null;
    }

    public void setDirty() {
        if (0 != nativePeer) {
            nativeSetDirty(nativePeer);
        } else if (DEBUG_DISPOSED_BUFFERS) {
            throw new NullPointerException("method called on disposed NativeVideoBuffer");
        }
    }

    private static class VideoBufferDisposer implements MediaDisposer.ResourceDisposer {
        public void disposeResource(Object resource) {
            // resource is Long containing the native handle
            if (resource instanceof Long) {
                nativeDisposeBuffer(((Long)resource).longValue());
            }
        }
    }

    @Override
    public String toString() {
        if (DEBUG_DISPOSED_BUFFERS) {
            return "[NativeVideoBuffer peer="+Long.toHexString(nativePeer)+", format="+getFormat()+", size=("+getWidth()+","+getHeight()+"), timestamp="+getTimestamp()+", retain count "+holdCount.get()+"]";
        }
        return "[NativeVideoBuffer peer="+Long.toHexString(nativePeer)+", format="+getFormat()+", size=("+getWidth()+","+getHeight()+"), timestamp="+getTimestamp()+"]";
    }
}
