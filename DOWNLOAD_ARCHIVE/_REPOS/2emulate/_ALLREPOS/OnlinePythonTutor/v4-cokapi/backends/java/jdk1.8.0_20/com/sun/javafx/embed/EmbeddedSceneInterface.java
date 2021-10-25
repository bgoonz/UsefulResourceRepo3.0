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

package com.sun.javafx.embed;

import java.nio.IntBuffer;

import com.sun.javafx.scene.traversal.Direction;
import javafx.collections.ObservableList;
import javafx.event.EventType;
import javafx.scene.input.InputMethodEvent;
import javafx.scene.input.InputMethodRequests;
import javafx.scene.input.InputMethodTextRun;

/**
 * An interface for embedded FX scene peer. It is used by HostInterface
 * object to send various notifications to the scene, for example, when
 * an input event is received in the host application and should be
 * forwarded to FX.
 *
 */
public interface EmbeddedSceneInterface {

    /*
     * A notification about the embedded container is resized.
     */
    public void setSize(int width, int height);
    
    /*
     * A notification about the scale factor is changed.
     */
    public void setPixelScaleFactor(float scale);

    /*
     * A request to fetch all the FX scene pixels into a offscreen buffer.
     */
    public boolean getPixels(IntBuffer dest, int width, int height);

    /*
     * A notification about mouse event received by host container.
     */
    public void mouseEvent(int type, int button,
                           boolean primaryBtnDown, boolean middleBtnDown, boolean secondaryBtnDown,
                           int x, int y, int xAbs, int yAbs,
                           boolean shift, boolean ctrl, boolean alt, boolean meta,
                           int wheelRotation, boolean popupTrigger);
    /*
     * A notification about key event received by host container.
     */
    public void keyEvent(int type, int key, char[] chars, int modifiers);
    
    /*
     * A notification about menu event received by host container.
     */
    public void menuEvent(int x, int y, int xAbs, int yAbs, boolean isKeyboardTrigger);
    
    public boolean traverseOut(Direction dir);

    public void setDragStartListener(HostDragStartListener l);

    public EmbeddedSceneDTInterface createDropTarget();

    public void inputMethodEvent(EventType<InputMethodEvent> type,
                                 ObservableList<InputMethodTextRun> composed, String committed,
                                 int caretPosition);

    public InputMethodRequests getInputMethodRequests();
}
