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

package com.sun.media.jfxmediaimpl.platform.osx;

import com.sun.media.jfxmedia.Media;
import com.sun.media.jfxmedia.MediaPlayer;
import com.sun.media.jfxmedia.locator.Locator;
import com.sun.media.jfxmedia.logging.Logger;
import com.sun.media.jfxmediaimpl.HostUtils;
import com.sun.media.jfxmediaimpl.platform.Platform;

/**
 * Mac OS X Platform implementation.
 */
public final class OSXPlatform extends Platform {
    /**
     * The MIME types of all supported media.
     */
    private static final String[] CONTENT_TYPES = {
        "video/mp4",
        "audio/x-m4a",
        "video/x-m4v",
        "application/vnd.apple.mpegurl",
        "audio/mpegurl"
    };

    private static final class OSXPlatformInitializer {
        private static final OSXPlatform globalInstance = new OSXPlatform();
    }

    public static Platform getPlatformInstance() {
        return OSXPlatformInitializer.globalInstance;
    }

    private OSXPlatform() {
    }

    @Override
    public void preloadPlatform() {}

    /**
     * @return false if the platform cannot be loaded
     */
    @Override
    public boolean loadPlatform() {
        if (!HostUtils.isMacOSX()) {
            return false;
        }

        try {
            osxPlatformInit();
        } catch (UnsatisfiedLinkError ule) {
            if (Logger.canLog(Logger.DEBUG)) {
                Logger.logMsg(Logger.DEBUG, "Unable to load OSX platform.");
            }
//            MediaUtils.nativeError(OSXPlatform.class, MediaError.ERROR_MANAGER_ENGINEINIT_FAIL);
            return false;
        }
        return true;
    }

    @Override
    public String[] getSupportedContentTypes() {
        String[] contentTypesCopy = new String[CONTENT_TYPES.length];
        System.arraycopy(CONTENT_TYPES, 0, contentTypesCopy, 0, CONTENT_TYPES.length);
        return contentTypesCopy;
    }

    @Override
    public Media createMedia(Locator source) {
        return new OSXMedia(source);
    }

    @Override
    public Object prerollMediaPlayer(Locator source) {
        // attempt the actual player creation, then preroll here
        // on success we return a reference to the native player as the cookie
        return new OSXMediaPlayer(source);
    }

    @Override
    public MediaPlayer createMediaPlayer(Locator source, Object cookie) {
        if (cookie instanceof OSXMediaPlayer) {
            OSXMediaPlayer player = (OSXMediaPlayer)cookie;
            // do native initialization
            player.initializePlayer();
            return player;
        }
        return null;
    }

    private static native void osxPlatformInit();
}
