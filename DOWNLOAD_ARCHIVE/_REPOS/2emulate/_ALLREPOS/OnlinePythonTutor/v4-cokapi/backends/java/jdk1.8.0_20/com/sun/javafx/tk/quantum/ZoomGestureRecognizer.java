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

package com.sun.javafx.tk.quantum;

import com.sun.glass.events.KeyEvent;
import com.sun.glass.events.TouchEvent;

import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.HashMap;
import java.util.Map;
import javafx.util.Duration;
import javafx.event.EventType;
import javafx.scene.input.ZoomEvent;
import javafx.animation.Animation;
import javafx.animation.Interpolator;
import javafx.animation.KeyFrame;
import javafx.animation.KeyValue;
import javafx.animation.Timeline;
import javafx.beans.property.DoubleProperty;
import javafx.beans.property.SimpleDoubleProperty;

class ZoomGestureRecognizer implements GestureRecognizer {
    // gesture will be activated if |zoomFactor - 1| > ZOOM_FACTOR_THRESHOLD
    private static double ZOOM_FACTOR_THRESHOLD = 0.1;
    private static boolean ZOOM_INERTIA_ENABLED = true;
    private static double MAX_ZOOMIN_VELOCITY = 3.0;
    private static double MAX_ZOOMOUT_VELOCITY = 0.3333;
    private static double ZOOM_INERTIA_MILLIS = 1500;
    static {
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            String s = System.getProperty("com.sun.javafx.gestures.zoom.threshold");
            if (s != null) {
                ZOOM_FACTOR_THRESHOLD = Double.valueOf(s);
            }
            s = System.getProperty("com.sun.javafx.gestures.zoom.inertia");
            if (s != null) {
                ZOOM_INERTIA_ENABLED = Boolean.valueOf(s);
            }
            return null;
        });
    }    

    private ViewScene scene;
    private Timeline inertiaTimeline = new Timeline();
    private DoubleProperty inertiaZoomVelocity = new SimpleDoubleProperty();
    private double initialInertiaZoomVelocity = 0;
    private double zoomStartTime = 0;
    private double lastTouchEventTime = 0;

    private ZoomRecognitionState state = ZoomRecognitionState.IDLE;

    private Map<Long, TouchPointTracker> trackers =
            new HashMap<Long, TouchPointTracker>();

    private int modifiers;
    private boolean direct;

    private int currentTouchCount = 0;
    private boolean touchPointsSetChanged;
    private boolean touchPointsPressed;
    
    private double centerX, centerY;
    private double centerAbsX, centerAbsY;
    private double currentDistance;
    private double distanceReference;
    private double zoomFactor = 1.0;
    private double totalZoomFactor = 1.0;
    double inertiaLastTime = 0;
    
    ZoomGestureRecognizer(final ViewScene scene) {
        this.scene = scene;
        inertiaZoomVelocity.addListener(valueModel -> {
            double currentTime = inertiaTimeline.getCurrentTime().toSeconds();
            double timePassed = currentTime - inertiaLastTime;
            inertiaLastTime = currentTime;
            zoomFactor = 1 + timePassed * (inertiaZoomVelocity.get() - 1);
            totalZoomFactor *= zoomFactor;

            //send inertia zoom event
            sendZoomEvent(true);
        });
    }

    @Override
    public void notifyBeginTouchEvent(long time, int modifiers, boolean isDirect,
            int touchEventCount) {
        params(modifiers, isDirect);
        touchPointsSetChanged = false;
        touchPointsPressed = false;
    }

    @Override
    public void notifyNextTouchEvent(long time, int type, long touchId,
                                     int x, int y, int xAbs, int yAbs) {
        switch(type) {
            case TouchEvent.TOUCH_PRESSED:
                touchPointsSetChanged = true;
                touchPointsPressed = true;
                touchPressed(touchId, time, x, y, xAbs, yAbs);
                break;
            case TouchEvent.TOUCH_STILL:
                break;
            case TouchEvent.TOUCH_MOVED:
                touchMoved(touchId, time, x, y, xAbs, yAbs);
                break;
            case TouchEvent.TOUCH_RELEASED:
                touchPointsSetChanged = true;
                touchReleased(touchId, time, x, y, xAbs, yAbs);
                break;
            default:
                throw new RuntimeException("Error in Zoom gesture recognition: "
                        + "unknown touch state: " + state);
        }
    }

    private void calculateCenter() {
        if (currentTouchCount <= 0) {
            throw new RuntimeException("Error in Zoom gesture recognition: "
                    + "touch count is zero!");
        }
        double totalX = 0.0;
        double totalY = 0.0;
        double totalAbsX = 0.0;
        double totalAbsY = 0.0;
        for (TouchPointTracker tracker : trackers.values()) {
            totalX += tracker.getX();
            totalY += tracker.getY();
            totalAbsX += tracker.getAbsX();
            totalAbsY += tracker.getAbsY();
        }      
        centerX = totalX / currentTouchCount;
        centerY = totalY / currentTouchCount;
        centerAbsX = totalAbsX / currentTouchCount;
        centerAbsY = totalAbsY / currentTouchCount;
    }

    private double calculateMaxDistance() {
        //calculate max square distance from a touch point to the center
        double maxSquareDist = 0.0;
        for (TouchPointTracker tracker : trackers.values()) {
            double deltaX = tracker.getAbsX() - centerAbsX;
            double deltaY = tracker.getAbsY() - centerAbsY;
            
            double squareDist = deltaX * deltaX + deltaY * deltaY;
            if (squareDist > maxSquareDist) {
                maxSquareDist = squareDist;
            }
        }      
        return Math.sqrt(maxSquareDist);
    }
    
    @Override
    public void notifyEndTouchEvent(long time) {
        lastTouchEventTime = time;
        if (currentTouchCount != trackers.size()) {
            throw new RuntimeException("Error in Zoom gesture recognition: "
                    + "touch count is wrong: " + currentTouchCount);
        }

        if (currentTouchCount == 0) {
            if (state == ZoomRecognitionState.ACTIVE) {
                sendZoomFinishedEvent();
            }
            if (ZOOM_INERTIA_ENABLED && (state == ZoomRecognitionState.PRE_INERTIA || state == ZoomRecognitionState.ACTIVE)) {
                double timeFromLastZoom = ((double)time - zoomStartTime) / 1000000;
                if (timeFromLastZoom < 300) {
                    state = ZoomRecognitionState.INERTIA;
                    // activate inertia
                    inertiaLastTime = 0;
                    if (initialInertiaZoomVelocity > MAX_ZOOMIN_VELOCITY) 
                        initialInertiaZoomVelocity = MAX_ZOOMIN_VELOCITY;
                    else if (initialInertiaZoomVelocity < MAX_ZOOMOUT_VELOCITY)
                        initialInertiaZoomVelocity = MAX_ZOOMOUT_VELOCITY;
                        
                    inertiaTimeline.getKeyFrames().setAll(
                        new KeyFrame(
                            Duration.millis(0),
                            new KeyValue(inertiaZoomVelocity, initialInertiaZoomVelocity, Interpolator.LINEAR)),
                        new KeyFrame(
                            Duration.millis(ZOOM_INERTIA_MILLIS * Math.abs(initialInertiaZoomVelocity - 1) / (MAX_ZOOMIN_VELOCITY - 1)),
                            event -> {
                                //stop inertia
                                reset();
                            },
                            new KeyValue(inertiaZoomVelocity, 1.0, Interpolator.LINEAR))
                        );
                    inertiaTimeline.playFromStart();
                } else {
                    reset();
                }
            }
        } else {
            // currentTouchCount >= 1
            if (touchPointsPressed && state == ZoomRecognitionState.INERTIA) {
                //Stop inertia
                inertiaTimeline.stop();
                reset();
            }

            if (currentTouchCount == 1) {
                if (state == ZoomRecognitionState.ACTIVE) {
                    sendZoomFinishedEvent();
                    if (ZOOM_INERTIA_ENABLED) {
                        //prepare for inertia
                        state = ZoomRecognitionState.PRE_INERTIA;
                    } else {
                        reset();
                    }
                }
            
            } else {
                // currentTouchCount >= 2
                if (state == ZoomRecognitionState.IDLE) {
                    state = ZoomRecognitionState.TRACKING;
                }
                
                calculateCenter();
                double currentDistance = calculateMaxDistance();
                    
                if (touchPointsSetChanged) {
                    //No zoom event. 
                    //Just update the distance reference. Keep the total zoomfactor
                    distanceReference = currentDistance;
                } else {
                    zoomFactor = currentDistance / distanceReference;
                    if (state == ZoomRecognitionState.TRACKING) {
                        if ( Math.abs(zoomFactor - 1) > ZOOM_FACTOR_THRESHOLD) {
                            state = ZoomRecognitionState.ACTIVE;
                            sendZoomStartedEvent();
                        }
                    }
                    if (state == ZoomRecognitionState.ACTIVE) {
                        totalZoomFactor *= zoomFactor;
                        sendZoomEvent(false);
                        distanceReference = currentDistance;
                        double timePassed = ((double)time - zoomStartTime) / 1000000000;
                        if (timePassed > 1e-4) {
                            initialInertiaZoomVelocity = (zoomFactor-1) / timePassed + 1;
                            zoomStartTime = time;
                        }
                    }
                }
            }
        }
    }
    
    private void sendZoomStartedEvent() {
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            if (scene.sceneListener != null) {
                scene.sceneListener.zoomEvent(ZoomEvent.ZOOM_STARTED,
                    1, 1,
                    centerX, centerY,
                    centerAbsX, centerAbsY,
                    (modifiers & KeyEvent.MODIFIER_SHIFT) != 0,
                    (modifiers & KeyEvent.MODIFIER_CONTROL) != 0,
                    (modifiers & KeyEvent.MODIFIER_ALT) != 0,
                    (modifiers & KeyEvent.MODIFIER_WINDOWS) != 0,
                    direct,
                    false /*inertia*/);
            }
            return null;
        }, scene.getAccessControlContext());
    }

    private void sendZoomEvent(boolean isInertia) {
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            if (scene.sceneListener != null) {
                scene.sceneListener.zoomEvent(ZoomEvent.ZOOM,
                    zoomFactor, totalZoomFactor,
                    centerX, centerY,
                    centerAbsX, centerAbsY,
                    (modifiers & KeyEvent.MODIFIER_SHIFT) != 0,
                    (modifiers & KeyEvent.MODIFIER_CONTROL) != 0,
                    (modifiers & KeyEvent.MODIFIER_ALT) != 0,
                    (modifiers & KeyEvent.MODIFIER_WINDOWS) != 0,
                    direct, isInertia);
            }
            return null;
        }, scene.getAccessControlContext());
    }

    private void sendZoomFinishedEvent() {
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            if (scene.sceneListener != null) {
                scene.sceneListener.zoomEvent(ZoomEvent.ZOOM_FINISHED,
                    1, totalZoomFactor,
                    centerX, centerY,
                    centerAbsX, centerAbsY,
                    (modifiers & KeyEvent.MODIFIER_SHIFT) != 0,
                    (modifiers & KeyEvent.MODIFIER_CONTROL) != 0,
                    (modifiers & KeyEvent.MODIFIER_ALT) != 0,
                    (modifiers & KeyEvent.MODIFIER_WINDOWS) != 0,
                    direct,
                    false /*inertia*/);
            }
            return null;
        }, scene.getAccessControlContext());
    }

    public void params(int modifiers, boolean direct) {
        this.modifiers = modifiers;
        this.direct = direct;
    }

    public void touchPressed(long id, long nanos, int x, int y, int xAbs, int yAbs) {
        currentTouchCount++;
        TouchPointTracker tracker = new TouchPointTracker();
        tracker.update(nanos, x, y, xAbs, yAbs);
        trackers.put(id, tracker);
    }

    public void touchReleased(long id, long nanos, int x, int y, int xAbs, int yAbs) {
        if (state != ZoomRecognitionState.FAILURE) {
            TouchPointTracker tracker = trackers.get(id);
            if (tracker == null) {
                // we don't know this ID, something went completely wrong
                state = ZoomRecognitionState.FAILURE;
                throw new RuntimeException("Error in Zoom gesture "
                        + "recognition: released unknown touch point");
            }
            trackers.remove(id);
        }
        currentTouchCount--;
    }

    public void touchMoved(long id, long nanos, int x, int y, int xAbs, int yAbs) {
        if (state == ZoomRecognitionState.FAILURE) {
            return;
        }

        TouchPointTracker tracker = trackers.get(id);
        if (tracker == null) {
            // we don't know this ID, something went completely wrong
            state = ZoomRecognitionState.FAILURE;
            throw new RuntimeException("Error in zoom gesture "
                    + "recognition: reported unknown touch point");
        }
        tracker.update(nanos, x, y, xAbs, yAbs);
    }

    void reset() {
        state = ZoomRecognitionState.IDLE;
        zoomFactor = 1.0;
        totalZoomFactor = 1.0;
    }

    private static class TouchPointTracker {
        double x, y;
        double absX, absY;

        public void update(long nanos, double x, double y, double absX, double absY) {
            this.x = x;
            this.y = y;
            this.absX = absX;
            this.absY = absY;
        }

        public double getX() {
            return x;
        }

        public double getY() {
            return y;
        }

        public double getAbsX() {
            return absX;
        }

        public double getAbsY() {
            return absY;
        }
    }

    private enum ZoomRecognitionState {
        IDLE,       // <2 touch points available
        TRACKING,   // 2+ touch points, distance is tracked
        ACTIVE,     // threshold accepted, gesture is started
        PRE_INERTIA,    // prepare for inertia
        INERTIA,        // inertia is active
        FAILURE
    }
}
