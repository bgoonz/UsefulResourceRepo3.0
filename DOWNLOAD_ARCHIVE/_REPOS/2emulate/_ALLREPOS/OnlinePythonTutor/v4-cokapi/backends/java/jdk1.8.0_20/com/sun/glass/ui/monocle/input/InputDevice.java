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

package com.sun.glass.ui.monocle.input;

public interface InputDevice {

    public boolean isTouch();
    public boolean isMultiTouch();
    public boolean isRelative();
    public boolean is5Way();
    public boolean isFullKeyboard();

}
