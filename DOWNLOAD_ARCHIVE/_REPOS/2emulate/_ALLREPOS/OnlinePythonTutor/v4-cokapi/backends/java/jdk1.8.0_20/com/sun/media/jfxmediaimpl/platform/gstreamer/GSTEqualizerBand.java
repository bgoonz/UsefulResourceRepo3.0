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

import com.sun.media.jfxmedia.effects.EqualizerBand;

final class GSTEqualizerBand implements EqualizerBand {

    private long bandRef; // Native band backend

    private native double gstGetCenterFrequency(long bandRef);
    private native void   gstSetCenterFrequency(long bandRef, double centerFrequency);
    private native double gstGetBandwidth(long bandRef);
    private native void   gstSetBandwidth(long bandRef, double bandwidth);
    private native double gstGetGain(long bandRef);
    private native void   gstSetGain(long bandRef, double gain);

    private GSTEqualizerBand(long bandRef) {
        if (bandRef != 0) {
            this.bandRef = bandRef;
        } else {
            throw new IllegalArgumentException("bandRef == 0");
        }
    }

    public double getCenterFrequency() {
        return gstGetCenterFrequency(bandRef);
    }

    public void setCenterFrequency(double centerFrequency) {
        gstSetCenterFrequency(bandRef, centerFrequency);
    }

    public double getBandwidth() {
        return gstGetBandwidth(bandRef);
    }

    public void setBandwidth(double bandwidth) {
        gstSetBandwidth(bandRef, bandwidth);
    }

    public double getGain() {
        return gstGetGain(bandRef);
    }

    public void setGain(double gain) {
        if (gain >= MIN_GAIN && gain <= MAX_GAIN) {
            gstSetGain(bandRef, gain);
        }
    }
}
