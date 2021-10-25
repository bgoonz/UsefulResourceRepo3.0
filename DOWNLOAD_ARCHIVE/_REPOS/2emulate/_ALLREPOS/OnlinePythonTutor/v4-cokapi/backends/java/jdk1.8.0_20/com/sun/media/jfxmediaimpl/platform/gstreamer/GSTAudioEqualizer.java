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

package com.sun.media.jfxmediaimpl.platform.gstreamer;

import com.sun.media.jfxmedia.effects.AudioEqualizer;
import com.sun.media.jfxmedia.effects.EqualizerBand;

final class GSTAudioEqualizer implements AudioEqualizer {
    /**
     * Handle to the native media player.
     */
    private long refMedia;

    //**************************************************************************
    //***** Constructors
    //**************************************************************************

    /**
     * Constructor.
     * @param refNativePlayer A reference to the native player.
     */
    GSTAudioEqualizer(long refMedia) {
        if (refMedia == 0) {
            throw new IllegalArgumentException("Invalid native media reference");
        }

        this.refMedia = refMedia;
    }

    //**************************************************************************
    //***** Public functions
    //**************************************************************************

    public boolean getEnabled() {
        return gstGetEnabled(refMedia);
    }

    public void setEnabled(boolean enable) {
        gstSetEnabled(refMedia, enable);
    }

    public EqualizerBand addBand(double centerFrequency, double bandwidth, double gain) {
        return (gstGetNumBands(refMedia) >= MAX_NUM_BANDS &&
                gain >= EqualizerBand.MIN_GAIN && gain <= EqualizerBand.MAX_GAIN) ?
                null : gstAddBand(refMedia, centerFrequency, bandwidth, gain);
    }

    public boolean removeBand(double centerFrequency) {
        return (centerFrequency > 0) ? gstRemoveBand(refMedia, centerFrequency) : false;
    }

    //**************************************************************************
    //***** JNI functions
    //**************************************************************************
    private native boolean gstGetEnabled(long refMedia);
    private native void gstSetEnabled(long refMedia, boolean enable);
    private native int gstGetNumBands(long refMedia);
    private native EqualizerBand gstAddBand(long refMedia,
                                               double centerFrequency, double bandwidth,
                                               double gain);
    private native boolean gstRemoveBand(long refMedia,
                                            double centerFrequency);
}
