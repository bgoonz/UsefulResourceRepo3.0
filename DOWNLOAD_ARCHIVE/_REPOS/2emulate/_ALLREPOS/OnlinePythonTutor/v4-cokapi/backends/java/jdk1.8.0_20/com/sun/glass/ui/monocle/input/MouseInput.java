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

import com.sun.glass.events.MouseEvent;
import com.sun.glass.ui.Application;
import com.sun.glass.ui.Clipboard;
import com.sun.glass.ui.View;
import com.sun.glass.ui.monocle.MonocleApplication;
import com.sun.glass.ui.monocle.MonocleSettings;
import com.sun.glass.ui.monocle.MonocleTrace;
import com.sun.glass.ui.monocle.MonocleView;
import com.sun.glass.ui.monocle.MonocleWindow;
import com.sun.glass.ui.monocle.MonocleWindowManager;
import com.sun.glass.ui.monocle.NativePlatformFactory;
import com.sun.glass.ui.monocle.NativeScreen;
import com.sun.glass.ui.monocle.RunnableProcessor;
import com.sun.glass.ui.monocle.util.IntSet;

import java.util.BitSet;

/**
 * Processes mouse input events based on changes to mouse state. Not
 * thread-safe.
 */
public class MouseInput {
    private static MouseInput instance = new MouseInput();

    private MouseState state = new MouseState();
    private IntSet buttons = new IntSet();

    /** Are we currently processing drag and drop? */
    private boolean dragInProgress = false;
    /** What button started the drag operation? */
    private int dragButton = MouseEvent.BUTTON_NONE;
    /** On what View is the drag operation currently over? */
    private MonocleView dragView = null;
    /** What drag actions have been performed? */
    private BitSet dragActions = new BitSet();
    private static final int DRAG_ENTER = 1;
    private static final int DRAG_LEAVE = 2;
    private static final int DRAG_OVER = 3;
    private static final int DRAG_DROP = 4;

    public static MouseInput getInstance() {
        return instance;
    }

    public void getState(MouseState result) {
        state.copyTo(result);
    }

    public void setState(MouseState newState, boolean synthesized) {
        if (MonocleSettings.settings.traceEvents) {
            MonocleTrace.traceEvent("Set %s", newState);
        }
        // Restrict new state coordinates to screen bounds
        NativeScreen screen = NativePlatformFactory.getNativePlatform().getScreen();
        int x = Math.max(0, Math.min(newState.getX(), screen.getWidth() - 1));
        int y = Math.max(0, Math.min(newState.getY(), screen.getHeight() - 1));
        newState.setX(x);
        newState.setY(y);
        // Get the cached window for the old state and compute the window for
        // the new state
        MonocleWindow oldWindow = state.getWindow(false);
        boolean recalculateWindow = state.getButtonsPressed().isEmpty();
        MonocleWindow window = newState.getWindow(recalculateWindow);
        MonocleView view = (window == null) ? null : (MonocleView) window.getView();
        // send exit event
        if (oldWindow != window && oldWindow != null) {
            if (!oldWindow.isEnabled()) {
                //send focus disabled event
                RunnableProcessor.runLater(() -> {
                    MonocleWindowManager.getInstance().notifyFocusDisabled(oldWindow);
                });

            } else {
                MonocleView oldView = (MonocleView) oldWindow.getView();
                if (oldView != null) {
                    // send exit event
                    int modifiers = state.getModifiers(); // TODO: include key modifiers
                    int button = state.getButton();
                    boolean isPopupTrigger = false; // TODO
                    int oldX = state.getX();
                    int oldY = state.getY();
                    int oldRelX = oldX - oldWindow.getX();
                    int oldRelY = oldY - oldWindow.getY();
                    try {
                        postMouseEvent(oldView, MouseEvent.EXIT, button,
                                       oldRelX, oldRelY, oldX, oldY,
                                       modifiers, isPopupTrigger, synthesized);
                    } catch (RuntimeException e) {
                        Application.reportException(e);
                    }
                }
            }
        }
        boolean newAbsoluteLocation = state.getX() != x || state.getY() != y;
        if (newAbsoluteLocation) {
            NativePlatformFactory.getNativePlatform()
                    .getCursor().setLocation(x, y);
        }
        if (view == null) {
            newState.copyTo(state);
            return;
        }

        if (window != null && !window.isEnabled()) {
            newState.copyTo(state);
            //send focus disabled event
            RunnableProcessor.runLater(() -> {
                MonocleWindowManager.getInstance().notifyFocusDisabled(window);
            });
            return;
        }

        int relX = x - window.getX();
        int relY = y - window.getY();
        // send enter event
        if (oldWindow != window && view != null) {
            int modifiers = state.getModifiers(); // TODO: include key modifiers
            int button = state.getButton();
            boolean isPopupTrigger = false; // TODO
            postMouseEvent(view, MouseEvent.ENTER, button,
                           relX, relY, x, y,
                           modifiers, isPopupTrigger, synthesized);
        }
        // send motion events
        if (oldWindow != window | newAbsoluteLocation) {
            boolean isDrag = !state.getButtonsPressed().isEmpty();
            int eventType = isDrag ? MouseEvent.DRAG : MouseEvent.MOVE;
            int modifiers = state.getModifiers(); // TODO: include key modifiers
            int button = state.getButton();
            boolean isPopupTrigger = false; // TODO
            postMouseEvent(view, eventType, button,
                           relX, relY, x, y,
                           modifiers, isPopupTrigger, synthesized);
        }

        // send press events
        newState.getButtonsPressed().difference(buttons, state.getButtonsPressed());
        if (!buttons.isEmpty()) {
            MouseState pressState = new MouseState();
            state.copyTo(pressState);
            for (int i = 0; i < buttons.size(); i++) {
                int button = buttons.get(i);
                pressState.pressButton(button);
                // send press event
                boolean isPopupTrigger = false; // TODO
                postMouseEvent(view, MouseEvent.DOWN, button,
                               relX, relY, x, y,
                               pressState.getModifiers(), isPopupTrigger,
                               synthesized);
            }
        }
        buttons.clear();
        // send release events
        state.getButtonsPressed().difference(buttons,
                                             newState.getButtonsPressed());
        if (!buttons.isEmpty()) {
            MouseState releaseState = new MouseState();
            state.copyTo(releaseState);
            for (int i = 0; i < buttons.size(); i++) {
                int button = buttons.get(i);
                releaseState.releaseButton(button);
                // send release event
                boolean isPopupTrigger = false; // TODO
                postMouseEvent(view, MouseEvent.UP, button,
                               relX, relY, x, y,
                               releaseState.getModifiers(), isPopupTrigger,
                               synthesized);
            }
        }
        buttons.clear();
        // send scroll events
        if (newState.getWheel() != state.getWheel()) {
            double dY;
            switch (newState.getWheel()) {
                case MouseState.WHEEL_DOWN: dY = -1.0; break;
                case MouseState.WHEEL_UP: dY = 1.0; break;
                default: dY = 0.0; break;
            }
            if (dY != 0.0) {
                int modifiers = newState.getModifiers();
                RunnableProcessor.runLater(() -> {
                    view.notifyScroll(relX, relY, x, y, 0.0, dY,
                                      modifiers, 1, 0, 0, 0, 1.0, 1.0);

                });
            }
        }
        newState.copyTo(state);
    }

    private void postMouseEvent(MonocleView view, int eventType, int button,
                                int relX, int relY, int x, int y,
                                int modifiers, boolean isPopupTrigger, boolean synthesized) {
        RunnableProcessor.runLater(() -> {
            notifyMouse(view, eventType, button,
                        relX, relY, x, y,
                        modifiers, isPopupTrigger, synthesized);
        });
    }

    private void notifyMouse(MonocleView view, int eventType, int button,
                             int relX, int relY, int x, int y,
                             int modifiers, boolean isPopupTrigger, boolean synthesized) {
        switch (eventType) {
            case MouseEvent.DOWN: {
                if (dragButton == MouseEvent.BUTTON_NONE) {
                    dragButton = button;
                }
                break;
            }
            case MouseEvent.UP: {
                if (dragButton == button) {
                    dragButton = MouseEvent.BUTTON_NONE;
                    if (dragInProgress) {
                        try {
                            view.notifyDragDrop(relX, relY, x, y,
                                                Clipboard.ACTION_COPY_OR_MOVE);
                        } catch (RuntimeException e) {
                            Application.reportException(e);
                        }
                        try {
                            view.notifyDragEnd(Clipboard.ACTION_COPY_OR_MOVE);
                        } catch (RuntimeException e) {
                            Application.reportException(e);
                        }
                        ((MonocleApplication) Application.GetApplication()).leaveDndEventLoop();
                        dragActions.clear();
                        dragView = null;
                        dragInProgress = false;
                    }
                }
                break;
            }
            case MouseEvent.DRAG: {
                if (dragButton != MouseEvent.BUTTON_NONE) {
                    if (dragInProgress) {
                        if (dragView == view && dragActions.isEmpty()) {
                            // first drag notification
                            try {
                                view.notifyDragEnter(relX, relY, x, y,
                                                     Clipboard.ACTION_COPY_OR_MOVE);
                            } catch (RuntimeException e) {
                                Application.reportException(e);
                            }
                            dragActions.set(DRAG_ENTER);
                        } else if (dragView == view && dragActions.get(DRAG_ENTER)) {
                            try {
                                view.notifyDragOver(relX, relY, x, y,
                                                    Clipboard.ACTION_COPY_OR_MOVE);
                            } catch (RuntimeException e) {
                                Application.reportException(e);
                            }
                            dragActions.set(DRAG_OVER);
                        } else if (dragView != view) {
                            if (dragView != null) {
                                try {
                                    dragView.notifyDragLeave();
                                } catch (RuntimeException e) {
                                    Application.reportException(e);
                                }
                            }
                            try {
                                view.notifyDragEnter(relX, relY, x, y,
                                                     Clipboard.ACTION_COPY_OR_MOVE);
                            } catch (RuntimeException e) {
                                Application.reportException(e);
                            }
                            dragActions.clear();
                            dragActions.set(DRAG_ENTER);
                            dragView = view;
                        }
                        return; // consume event
                    } else {
                        if (dragView == null) {
                            dragView = view;
                        }
                    }
                }
                break;
            }
        }
        view.notifyMouse(eventType, button,
                         relX, relY, x, y,
                         modifiers, isPopupTrigger,
                         synthesized);
    }

    public void notifyDragStart() {
        dragInProgress = true;
    }

}
