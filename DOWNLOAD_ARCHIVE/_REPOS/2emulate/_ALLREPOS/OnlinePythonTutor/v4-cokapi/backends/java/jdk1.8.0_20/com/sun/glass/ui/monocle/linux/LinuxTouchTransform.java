/*
 * Copyright (c) 2014, Oracle and/or its affiliates. All rights reserved.
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
package com.sun.glass.ui.monocle.linux;

import com.sun.glass.ui.monocle.NativePlatformFactory;

import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.Arrays;

/**
 * Handles conversion between raw axis values received from Linux input devices
 * and screen pixel values.
 * By default input values are mapped form the device input range to the screen
 * dimensions. The device input range can be overriden in using system properties
 * of the form:
 *
 * monocle.input.PRODUCT_ID.KEY=VALUE
 *
 * PRODUCT_ID is the product descriptor received from udev
 * KEY is one of minX, minY, maxX, maxY or flipXY
 *
 * flipXY is a boolean value; the others are integers.
 */
public class LinuxTouchTransform {

    private LinuxInputDevice device;
    private int[] axes = new int[2];
    private double[] translates = new double[2];
    private double[] scalars = new double[2];
    private boolean flipXY;
    private int[] mins = new int[2];
    private int[] maxs = new int[2];

    LinuxTouchTransform(LinuxInputDevice device) {
        this.device = device;
        Arrays.fill(axes, -1);
        String product = device.getProduct();
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            flipXY = Boolean.getBoolean("monocle.input."
                                        + product + ".flipXY");
            return null;
        });
    }

    /** Gets the transformed pixel coordinate of the current event in the buffer
     *  provided.
     *
     * @param buffer A LinuxEventBuffer containing a raw event line
     * @return a transformed value in screen space
     */
    public int getValue(LinuxEventBuffer buffer) {
        int axis = buffer.getEventCode();
        int value = buffer.getEventValue();
        int i;
        for (i = 0; i < axes.length && axes[i] != -1; i++) {
            if (axes[i] == axis) {
                return transform(i, value);
            }
        }
        if (i == axes.length) {
            axes = Arrays.copyOf(axes, axes.length * 2);
            Arrays.fill(axes, i + 1, axes.length - 1, -1);
            translates = Arrays.copyOf(translates, translates.length * 2);
            scalars = Arrays.copyOf(scalars, scalars.length * 2);
            mins = Arrays.copyOf(mins, mins.length * 2);
            maxs = Arrays.copyOf(maxs, maxs.length * 2);
        }
        initTransform(axis, i);
        return transform(i, value);
    }

    /** Gets the transformed axis number of the current event in the buffer
     *  provided.
     *
     * @param buffer A LinuxEventBuffer containing a raw event line
     * @return an axis number (e.g. Input.ABS_X)
     */

    public int getAxis(LinuxEventBuffer buffer) {
        int axis = buffer.getEventCode();
        if (flipXY) {
            switch (axis) {
                case Input.ABS_X: return Input.ABS_Y;
                case Input.ABS_Y: return Input.ABS_X;
                case Input.ABS_MT_POSITION_X: return Input.ABS_MT_POSITION_Y;
                case Input.ABS_MT_POSITION_Y: return Input.ABS_MT_POSITION_X;
                default:
                    return axis;
            }
        } else {
            return axis;
        }
    }

    private void initTransform(int axis, int index) {
        double range;
        String axisName;
        switch (axis) {
            case Input.ABS_X:
            case Input.ABS_MT_POSITION_X:
                range = NativePlatformFactory.getNativePlatform()
                        .getScreen().getWidth();
                axisName = "X";
                break;
            case Input.ABS_Y:
            case Input.ABS_MT_POSITION_Y:
                range = NativePlatformFactory.getNativePlatform()
                        .getScreen().getHeight();
                axisName = "Y";
                break;
            default:
                // we don't know what to do with this range,
                // so don't transform it at all.
                translates[index] = 0.0;
                scalars[index] = 1.0;
                return;
        }
        AbsoluteInputCapabilities caps = device.getAbsoluteInputCapabilities(axis);
        String product = device.getProduct();
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            int minimum = Integer.getInteger(
                    "monocle.input." + product + ".min" + axisName,
                    caps.getMinimum());
            int maximum = Integer.getInteger(
                    "monocle.input." + product + ".max" + axisName,
                    caps.getMaximum());
            translates[index] = -minimum;
            scalars[index] = ((double) (range)) / (maximum - minimum);
            return null;
        });
    }

    private int transform(int index, int value) {
        return (int) Math.round((value + translates[index]) * scalars[index]);
    }

}
