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

package com.sun.media.jfxmediaimpl.platform;

import com.sun.media.jfxmedia.Media;
import com.sun.media.jfxmedia.MediaPlayer;
import com.sun.media.jfxmedia.MetadataParser;
import com.sun.media.jfxmedia.locator.Locator;

/**
 * JFXMedia platform interface.
 */
public abstract class Platform {
    /*
     * Get an instance of the platform.
     */
    public static Platform getPlatformInstance() {
        throw new UnsupportedOperationException("Invalid platform class.");
    }

    /*
     * Loading stages
     * preloadPlatform gives the platform a chance to load or check dependencies
     * before the main jfxmedia library is loaded. Then loadPlatform is called
     * after jfxmedia library is loaded in case the platform has further
     * dependencies.
     */
    public void preloadPlatform() {}

    /**
     * @return false if the platform cannot be loaded
     */
    public boolean loadPlatform() {
        return false;
    }

    public boolean canPlayContentType(String contentType) {
        String[] contentTypes = getSupportedContentTypes();
        if (contentTypes != null) {
            for (String type : contentTypes) {
                if (type.equalsIgnoreCase(contentType)) {
                    return true;
                }
            }
        }
        return false;
    }

    // NB: This method returns only content which can actually be PLAYED. It
    // does not account for metadata being able to be parsed without the media
    // being able to be played.
    public String[] getSupportedContentTypes() {
        return null;
    }

    // XXX javadoc
    public MetadataParser createMetadataParser(Locator source) {
        return null;
    }

    public abstract Media createMedia(Locator source);

    /**
     * Prepare for playing the specified media. If the media stream is unsupported
     * return null so other platforms may be used, otherwise return an Object
     * that gets passed to createMediaPlayer to create the actual player.
     */
    public abstract Object prerollMediaPlayer(Locator source);
    public abstract MediaPlayer createMediaPlayer(Locator source, Object cookie);
}
