/*
 * Copyright (c) 2012, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.glass.ui.monocle;

import com.sun.glass.ui.Application;
import com.sun.glass.ui.Clipboard;
import com.sun.glass.ui.SystemClipboard;
import com.sun.glass.ui.monocle.input.MouseInput;

import java.util.HashMap;

final class MonocleDnDClipboard extends SystemClipboard {

    public MonocleDnDClipboard() {
        super(Clipboard.DND);
    }

    @Override
    protected boolean isOwner() {
        return true;
    }

    /**
     * Here the magic happens.
     * When this method is called all input events should be grabbed and
     * appropriate drag notifications should be sent instead of regular input
     * events
     */
    @Override
    protected  void pushToSystem(HashMap<String, Object> cacheData, int supportedActions) {
        MouseInput.getInstance().notifyDragStart();
        ((MonocleApplication) Application.GetApplication()).enterDnDEventLoop();
        actionPerformed(Clipboard.ACTION_COPY_OR_MOVE);
    }

    @Override
    protected void pushTargetActionToSystem(int actionDone) {
    }

    @Override
    protected Object popFromSystem(String mimeType) {
        return null;
    }

    @Override
    protected int supportedSourceActionsFromSystem() {
        return Clipboard.ACTION_COPY_OR_MOVE;
    }

    @Override
    protected String[] mimesFromSystem() {
        return new String[0];
    }

}
