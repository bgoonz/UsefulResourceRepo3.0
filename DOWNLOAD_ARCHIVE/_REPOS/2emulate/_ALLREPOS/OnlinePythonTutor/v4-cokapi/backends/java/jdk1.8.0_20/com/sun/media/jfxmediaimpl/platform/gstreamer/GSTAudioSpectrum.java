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

import com.sun.media.jfxmedia.effects.AudioSpectrum;

final class GSTAudioSpectrum implements AudioSpectrum {
    private static float[] EMPTY_FLOAT_ARRAY  = new float[0];
    public static final int      DEFAULT_THRESHOLD = -60;
    public static final int      DEFAULT_BANDS = 128;
    public static final double   DEFAULT_INTERVAL = 0.1;

    /**
     * Handle to the native media player.
     */
    private long refMedia;

    private float[] magnitudes = EMPTY_FLOAT_ARRAY;
    private float[] phases = EMPTY_FLOAT_ARRAY;

    //**************************************************************************
    //***** Constructors
    //**************************************************************************

    /**
     * Constructor.
     * @param refNativePlayer A reference to the native player.
     */
    GSTAudioSpectrum(long refMedia) {
        if (refMedia == 0) {
            throw new IllegalArgumentException("Invalid native media reference");
        }

        this.refMedia = refMedia;
        setBandCount(DEFAULT_BANDS);
    }

    //**************************************************************************
    //***** Public functions
    //**************************************************************************
    public boolean getEnabled() {
        return gstGetEnabled(refMedia);
    }

    public void setEnabled(boolean enabled) {
        gstSetEnabled(refMedia, enabled);
    }

    public int getBandCount() {
        // just return the current size of one of the band arrays
        return phases.length;
    }

    public void setBandCount(int bands) {
        if (bands > 1) {
            magnitudes = new float[bands];
            for (int i = 0; i < magnitudes.length; i++) {
                magnitudes[i] = Float.NEGATIVE_INFINITY;
            }

            phases = new float[bands];
            gstSetBands(refMedia, bands, magnitudes, phases);
        } else {
            magnitudes = EMPTY_FLOAT_ARRAY;
            phases = EMPTY_FLOAT_ARRAY;

            throw new IllegalArgumentException("Number of bands must at least be 2");
        }
    }

    public double getInterval() {
        return gstGetInterval(refMedia);
    }

    public void setInterval(double interval) {
        if (interval * GSTMediaPlayer.ONE_SECOND >= 1) {
            gstSetInterval(refMedia, interval);
        } else {
            throw new IllegalArgumentException("Interval can't be less that 1 nanosecond");
        }
    }

    public int getSensitivityThreshold() {
        return gstGetThreshold(refMedia);
    }

    public void setSensitivityThreshold(int threshold) {
        if (threshold <= 0) {
            gstSetThreshold(refMedia, threshold);
        } else {
            throw new IllegalArgumentException(String.format("Sensitivity threshold must be less than 0: %d", threshold));
        }
    }

    public float[] getMagnitudes(float[] mag) {
        int size = magnitudes.length;
        if(mag == null || mag.length < size) {
            mag = new float[size];
        }
        System.arraycopy(magnitudes, 0, mag, 0, size);
        return mag;
    }

    public float[] getPhases(float[] phs) {
        int size = phases.length;
        if(phs == null || phs.length < size) {
            phs = new float[size];
        }
        System.arraycopy(phases, 0, phs, 0, size);
        return phs;
    }

    //**************************************************************************
    //***** JNI functions
    //**************************************************************************
    private native boolean gstGetEnabled(long refMedia);
    private native void    gstSetEnabled(long refMedia, boolean enable);
    private native void    gstSetBands(long refMedia, int bands, float[] magnitudes, float[] phases);
    private native double  gstGetInterval(long refMedia);
    private native void    gstSetInterval(long refMedia, double interval);
    private native int     gstGetThreshold(long refMedia);
    private native void    gstSetThreshold(long refMedia, int threshold);
}
