/*
 * Copyright (c) 2010, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.scene.control.skin;

import javafx.geometry.Orientation;
import javafx.geometry.Point2D;
//import javafx.scene.accessibility.Action;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import javafx.scene.control.ScrollBar;
import javafx.scene.input.MouseButton;
import javafx.scene.input.ScrollEvent;
import javafx.scene.layout.Region;
import javafx.scene.layout.StackPane;
import com.sun.javafx.Utils;
import com.sun.javafx.scene.control.behavior.ScrollBarBehavior;

public class ScrollBarSkin extends BehaviorSkinBase<ScrollBar, ScrollBarBehavior> {

    /***************************************************************************
     *                                                                         *
     * UI Subcomponents                                                        *
     *                                                                         *
     **************************************************************************/

    public final static int DEFAULT_LENGTH = 100;
    public final static int DEFAULT_WIDTH = 20;

    private StackPane thumb;
    private StackPane trackBackground;
    private StackPane track;
    private EndButton incButton;
    private EndButton decButton;

    private double trackLength;
    private double thumbLength;

    private double preDragThumbPos;
    private Point2D dragStart; // in the track's coord system

    private double trackPos;

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    public ScrollBarSkin(ScrollBar scrollbar) {
        super(scrollbar, new ScrollBarBehavior(scrollbar));
        initialize();
        getSkinnable().requestLayout();
        // Register listeners
        registerChangeListener(scrollbar.minProperty(), "MIN");
        registerChangeListener(scrollbar.maxProperty(), "MAX");
        registerChangeListener(scrollbar.valueProperty(), "VALUE");
        registerChangeListener(scrollbar.orientationProperty(), "ORIENTATION");
        registerChangeListener(scrollbar.visibleAmountProperty(), "VISIBLE_AMOUNT");
    }

    /**
     * Initializes the ScrollBarSkin. Creates the scene and sets up all the
     * bindings for the group.
     */
    private void initialize() {

        track = new StackPane();
        track.getStyleClass().setAll("track");

        trackBackground = new StackPane();
        trackBackground.getStyleClass().setAll("track-background");

        thumb = new StackPane() {
//            @Override
//            public Object accGetAttribute(Attribute attribute, Object... parameters) {
//                switch (attribute) {
//                    case ROLE: return Role.THUMB;
//                    case VALUE: return getSkinnable().getValue();
//                    case MAX_VALUE: {
//                        // This is required for mac-support, to convert from pixel to percent
//                        return getSkinnable().getMax();
//                    }
//                    default: return super.accGetAttribute(attribute, parameters);
//                }
//            }
//
//            @Override
//            public void accExecuteAction(Action action, Object... parameters) {
//                switch (action) {
//                    case MOVE: {
//                        // FIXME for now we just take the x/y values as value, rather than pixel value
//                        final ScrollBar scrollBar = getSkinnable();
//                        final Orientation o = scrollBar.getOrientation();
//                        double value = (double) (o == Orientation.VERTICAL ? parameters[1] : parameters[0]);
//                        scrollBar.setValue(scrollBar.getValue() + value);
//                        break;
//                    }
//                    default: super.accExecuteAction(action, parameters);
//                }
//            }
        };
        thumb.getStyleClass().setAll("thumb");


        if (!IS_TOUCH_SUPPORTED) {
            
            incButton = new EndButton("increment-button", "increment-arrow") {
//                @Override
//                public Object accGetAttribute(Attribute attribute, Object... parameters) {
//                    switch (attribute) {
//                        case ROLE: return Role.INCREMENT_BUTTON;
//                        default: return super.accGetAttribute(attribute, parameters);
//                    }
//                }
//
//                @Override
//                public void accExecuteAction(Action action, Object... parameters) {
//                    switch (action) {
//                        case FIRE: 
//                            getSkinnable().increment();
//                            break;
//                        default: super.accExecuteAction(action, parameters);
//                    }
//                }
            };
            incButton.setOnMousePressed(me -> {
                /*
                ** if the tracklenght isn't greater than do nothing....
                */
                if (!thumb.isVisible() || trackLength > thumbLength) {
                    getBehavior().incButtonPressed();
                }
                me.consume();
            });
            incButton.setOnMouseReleased(me -> {
                /*
                ** if the tracklenght isn't greater than do nothing....
                */
                if (!thumb.isVisible() || trackLength > thumbLength) {
                    getBehavior().incButtonReleased();
                }
                me.consume();
            });

            decButton = new EndButton("decrement-button", "decrement-arrow") {
//                @Override
//                public Object accGetAttribute(Attribute attribute, Object... parameters) {
//                    switch (attribute) {
//                        case ROLE: return Role.DECREMENT_BUTTON;
//                        default: return super.accGetAttribute(attribute, parameters);
//                    }
//                }
//
//                @Override
//                public void accExecuteAction(Action action, Object... parameters) {
//                    switch (action) {
//                        case FIRE:
//                            getSkinnable().decrement();
//                            break;
//                        default: super.accExecuteAction(action, parameters);
//                    }
//                }
            };
            decButton.setOnMousePressed(me -> {
                /*
                ** if the tracklenght isn't greater than do nothing....
                */
                if (!thumb.isVisible() || trackLength > thumbLength) {
                    getBehavior().decButtonPressed();
                }
                me.consume();
            });
            decButton.setOnMouseReleased(me -> {
                /*
                ** if the tracklenght isn't greater than do nothing....
                */
                if (!thumb.isVisible() || trackLength > thumbLength) {
                    getBehavior().decButtonReleased();
                }
                me.consume();
            });
        }


        track.setOnMousePressed(me -> {
            if (!thumb.isPressed() && me.getButton() == MouseButton.PRIMARY) {
                if (getSkinnable().getOrientation() == Orientation.VERTICAL) {
                    if (trackLength != 0) {
                        getBehavior().trackPress(me.getY() / trackLength);
                        me.consume();
                    }
                } else {
                    if (trackLength != 0) {
                        getBehavior().trackPress(me.getX() / trackLength);
                        me.consume();
                    }
                }
            }
        });

        track.setOnMouseReleased(me -> {
            getBehavior().trackRelease();
            me.consume();
        });

        thumb.setOnMousePressed(me -> {
            if (me.isSynthesized()) {
                // touch-screen events handled by Scroll handler
                me.consume();
                return;
            }
            /*
            ** if max isn't greater than min then there is nothing to do here
            */
            if (getSkinnable().getMax() > getSkinnable().getMin()) {
                dragStart = thumb.localToParent(me.getX(), me.getY());
                double clampedValue = Utils.clamp(getSkinnable().getMin(), getSkinnable().getValue(), getSkinnable().getMax());
                preDragThumbPos = (clampedValue - getSkinnable().getMin()) / (getSkinnable().getMax() - getSkinnable().getMin());
                me.consume();
            }
        });


        thumb.setOnMouseDragged(me -> {
            if (me.isSynthesized()) {
                // touch-screen events handled by Scroll handler
                me.consume();
                return;
            }
            /*
            ** if max isn't greater than min then there is nothing to do here
            */
            if (getSkinnable().getMax() > getSkinnable().getMin()) {
                /*
                ** if the tracklength isn't greater then do nothing....
                */
                if (trackLength > thumbLength) {
                    Point2D cur = thumb.localToParent(me.getX(), me.getY());
                    if (dragStart == null) {
                        // we're getting dragged without getting a mouse press
                        dragStart = thumb.localToParent(me.getX(), me.getY());
                    }
                    double dragPos = getSkinnable().getOrientation() == Orientation.VERTICAL ? cur.getY() - dragStart.getY(): cur.getX() - dragStart.getX();
                    getBehavior().thumbDragged(preDragThumbPos + dragPos / (trackLength - thumbLength));
                }

                me.consume();
            }
        });

        thumb.setOnScrollStarted(se -> {
            if (se.isDirect()) {
                /*
                ** if max isn't greater than min then there is nothing to do here
                */
                if (getSkinnable().getMax() > getSkinnable().getMin()) {
                    dragStart = thumb.localToParent(se.getX(), se.getY());
                    double clampedValue = Utils.clamp(getSkinnable().getMin(), getSkinnable().getValue(), getSkinnable().getMax());
                    preDragThumbPos = (clampedValue - getSkinnable().getMin()) / (getSkinnable().getMax() - getSkinnable().getMin());
                    se.consume();
                }
            }
        });

        thumb.setOnScroll(event -> {
            if (event.isDirect()) {
                /*
                ** if max isn't greater than min then there is nothing to do here
                */
                if (getSkinnable().getMax() > getSkinnable().getMin()) {
                    /*
                    ** if the tracklength isn't greater then do nothing....
                    */
                    if (trackLength > thumbLength) {
                        Point2D cur = thumb.localToParent(event.getX(), event.getY());
                        if (dragStart == null) {
                            // we're getting dragged without getting a mouse press
                            dragStart = thumb.localToParent(event.getX(), event.getY());
                        }
                        double dragPos = getSkinnable().getOrientation() == Orientation.VERTICAL ? cur.getY() - dragStart.getY(): cur.getX() - dragStart.getX();
                        getBehavior().thumbDragged(/*todo*/ preDragThumbPos + dragPos / (trackLength - thumbLength));
                    }

                    event.consume();
                    return;
                }
            }
        });


        getSkinnable().addEventHandler(ScrollEvent.SCROLL, event -> {
            /*
            ** if the tracklength isn't greater then do nothing....
            */
            if (trackLength > thumbLength) {

                double dx = event.getDeltaX();
                double dy = event.getDeltaY();

                /*
                ** in 2.0 a horizontal scrollbar would scroll on a vertical
                ** drag on a tracker-pad. We need to keep this behavior.
                */
                dx = (Math.abs(dx) < Math.abs(dy) ? dy : dx);

                /*
                ** we only consume an event that we've used.
                */
                ScrollBar sb = (ScrollBar) getSkinnable();

                double delta = (getSkinnable().getOrientation() == Orientation.VERTICAL ? dy : dx);

                /*
                ** RT-22941 - If this is either a touch or inertia scroll
                ** then we move to the position of the touch point.
                *
                * TODO: this fix causes RT-23406 ([ScrollBar, touch] Dragging scrollbar from the
                * track on touchscreen causes flickering)
                */
                if (event.isDirect()) {
                    if (trackLength > thumbLength) {
                        getBehavior().thumbDragged((getSkinnable().getOrientation() == Orientation.VERTICAL ? event.getY(): event.getX()) / trackLength);
                        event.consume();
                    }
                }
                else {
                    if (delta > 0.0 && sb.getValue() > sb.getMin()) {
                        sb.decrement();
                        event.consume();
                    } else if (delta < 0.0 && sb.getValue() < sb.getMax()) {
                        sb.increment();
                        event.consume();
                    }
                }
            }
        });

        getChildren().clear();
        if (!IS_TOUCH_SUPPORTED) {
            getChildren().addAll(trackBackground, incButton, decButton, track, thumb);
        }
        else {
            getChildren().addAll(track, thumb);
        }
    }



    @Override protected void handleControlPropertyChanged(String p) {
        super.handleControlPropertyChanged(p);
        if ("ORIENTATION".equals(p)) {
            getSkinnable().requestLayout();
        } else if ("MIN".equals(p) || "MAX".equals(p) || "VISIBLE_AMOUNT".equals(p)) {
            positionThumb();
            getSkinnable().requestLayout();
        } else if ("VALUE".equals(p)) {
            positionThumb();
        }
    }

    /***************************************************************************
     *                                                                         *
     * Layout                                                                  *
     *                                                                         *
     **************************************************************************/

    private static final double DEFAULT_EMBEDDED_SB_BREADTH = 8.0;

    /*
     * Gets the breadth of the scrollbar. The "breadth" is the distance
     * across the scrollbar, i.e. if vertical the width, otherwise the height.
     * On desktop this is determined by the greater of the breadths of the end-buttons.
     * Embedded doesn't have end-buttons, so currently we use a default breadth.
     * We should change this when we get width/height css properties.
     */
    double getBreadth() {
        if (!IS_TOUCH_SUPPORTED) {
            if (getSkinnable().getOrientation() == Orientation.VERTICAL) {
                return Math.max(decButton.prefWidth(-1), incButton.prefWidth(-1)) +snappedLeftInset()+snappedRightInset();
            } else {
                return Math.max(decButton.prefHeight(-1), incButton.prefHeight(-1)) +snappedTopInset()+snappedBottomInset();
            }
        }
        else {
            if (getSkinnable().getOrientation() == Orientation.VERTICAL) {
                return Math.max(DEFAULT_EMBEDDED_SB_BREADTH, DEFAULT_EMBEDDED_SB_BREADTH)+snappedLeftInset()+snappedRightInset();
            } else {
                return Math.max(DEFAULT_EMBEDDED_SB_BREADTH, DEFAULT_EMBEDDED_SB_BREADTH)+snappedTopInset()+snappedBottomInset();
            }
        }
    }

    double minThumbLength() {
        return 1.5f * getBreadth();
    }

    double minTrackLength() {
        return 2.0f * getBreadth();
    }

    /*
     * Minimum length is the length of the end buttons plus twice the
     * minimum thumb length, which should be enough for a reasonably-sized
     * track. Minimum breadth is determined by the breadths of the
     * end buttons.
     */
    @Override protected double computeMinWidth(double height, double topInset, double rightInset, double bottomInset, double leftInset) {
        if (getSkinnable().getOrientation() == Orientation.VERTICAL) {
            return getBreadth();
        } else {
            if (!IS_TOUCH_SUPPORTED) {
                return decButton.minWidth(-1) + incButton.minWidth(-1) + minTrackLength()+leftInset+rightInset;
            } else {
                return minTrackLength()+leftInset+rightInset;
            }
        }
    }

    @Override protected double computeMinHeight(double width, double topInset, double rightInset, double bottomInset, double leftInset) {
        if (getSkinnable().getOrientation() == Orientation.VERTICAL) {
            if (!IS_TOUCH_SUPPORTED) {
                return decButton.minHeight(-1) + incButton.minHeight(-1) + minTrackLength()+topInset+bottomInset;
            } else {
                return minTrackLength()+topInset+bottomInset;
            }
        } else {
            return getBreadth();
        }
    }

    /*
     * Preferred size. The breadth is determined by the breadth of
     * the end buttons. The length is a constant default length.
     * Usually applications or other components will either set a
     * specific length using LayoutInfo or will stretch the length
     * of the scrollbar to fit a container.
     */
    @Override protected double computePrefWidth(double height, double topInset, double rightInset, double bottomInset, double leftInset) {
        final ScrollBar s = getSkinnable();
        return s.getOrientation() == Orientation.VERTICAL ? getBreadth() : DEFAULT_LENGTH+leftInset+rightInset;
    }

    @Override protected double computePrefHeight(double height, double topInset, double rightInset, double bottomInset, double leftInset) {
        final ScrollBar s = getSkinnable();
        return s.getOrientation() == Orientation.VERTICAL ? DEFAULT_LENGTH+topInset+bottomInset : getBreadth();
    }

    @Override protected double computeMaxWidth(double height, double topInset, double rightInset, double bottomInset, double leftInset) {
        final ScrollBar s = getSkinnable();
        return s.getOrientation() == Orientation.VERTICAL ? s.prefWidth(-1) : Double.MAX_VALUE;
    }

    @Override protected double computeMaxHeight(double width, double topInset, double rightInset, double bottomInset, double leftInset) {
        final ScrollBar s = getSkinnable();
        return s.getOrientation() == Orientation.VERTICAL ? Double.MAX_VALUE : s.prefHeight(-1);
    }

    /**
     * Called when ever either min, max or value changes, so thumb's layoutX, Y is recomputed.
     */
    void positionThumb() {
        ScrollBar s = getSkinnable();
        double clampedValue = Utils.clamp(s.getMin(), s.getValue(), s.getMax());
        trackPos = (s.getMax() - s.getMin() > 0) ? ((trackLength - thumbLength) * (clampedValue - s.getMin()) / (s.getMax() - s.getMin())) : (0.0F);

        if (!IS_TOUCH_SUPPORTED) {
            if (s.getOrientation() == Orientation.VERTICAL) {
                trackPos += decButton.prefHeight(-1);
            } else {
                trackPos += decButton.prefWidth(-1);
            }
        }

        thumb.setTranslateX( snapPosition(s.getOrientation() == Orientation.VERTICAL ? snappedLeftInset() : trackPos + snappedLeftInset()));
        thumb.setTranslateY( snapPosition(s.getOrientation() == Orientation.VERTICAL ? trackPos + snappedTopInset() : snappedTopInset()));
    }

    @Override protected void layoutChildren(final double x, final double y,
            final double w, final double h) {
        
        final ScrollBar s = getSkinnable();
        
        /**
         * Compute the percentage length of thumb as (visibleAmount/range)
         * if max isn't greater than min then there is nothing to do here
         */
        double visiblePortion;
        if (s.getMax() > s.getMin()) {
            visiblePortion = s.getVisibleAmount()/(s.getMax() - s.getMin());
        }
        else {
            visiblePortion = 1.0;
        }

        if (s.getOrientation() == Orientation.VERTICAL) {
            if (!IS_TOUCH_SUPPORTED) {
                double decHeight = snapSize(decButton.prefHeight(-1));
                double incHeight = snapSize(incButton.prefHeight(-1));

                decButton.resize(w, decHeight);
                incButton.resize(w, incHeight);

                trackLength = snapSize(h - (decHeight + incHeight));
                thumbLength = snapSize(Utils.clamp(minThumbLength(), (trackLength * visiblePortion), trackLength));

                trackBackground.resizeRelocate(snapPosition(x), snapPosition(y), w, trackLength+decHeight+incHeight);
                decButton.relocate(snapPosition(x), snapPosition(y));
                incButton.relocate(snapPosition(x), snapPosition(y + h - incHeight));
                track.resizeRelocate(snapPosition(x), snapPosition(y + decHeight), w, trackLength);
                thumb.resize(snapSize(x >= 0 ? w : w + x), thumbLength); // Account for negative padding (see also RT-10719)
                positionThumb();
            }
            else {
                trackLength = snapSize(h);
                thumbLength = snapSize(Utils.clamp(minThumbLength(), (trackLength * visiblePortion), trackLength));

                track.resizeRelocate(snapPosition(x), snapPosition(y), w, trackLength);
                thumb.resize(snapSize(x >= 0 ? w : w + x), thumbLength); // Account for negative padding (see also RT-10719)
                positionThumb();
            }
        } else {
            if (!IS_TOUCH_SUPPORTED) {
                double decWidth = snapSize(decButton.prefWidth(-1));
                double incWidth = snapSize(incButton.prefWidth(-1));

                decButton.resize(decWidth, h);
                incButton.resize(incWidth, h);

                trackLength = snapSize(w - (decWidth + incWidth));
                thumbLength = snapSize(Utils.clamp(minThumbLength(), (trackLength * visiblePortion), trackLength));

                trackBackground.resizeRelocate(snapPosition(x), snapPosition(y), trackLength+decWidth+incWidth, h);
                decButton.relocate(snapPosition(x), snapPosition(y));
                incButton.relocate(snapPosition(x + w - incWidth), snapPosition(y));
                track.resizeRelocate(snapPosition(x + decWidth), snapPosition(y), trackLength, h);
                thumb.resize(thumbLength, snapSize(y >= 0 ? h : h + y)); // Account for negative padding (see also RT-10719)
                positionThumb();
            }
            else {
                trackLength = snapSize(w);
                thumbLength = snapSize(Utils.clamp(minThumbLength(), (trackLength * visiblePortion), trackLength));

                track.resizeRelocate(snapPosition(x), snapPosition(y), trackLength, h);
                thumb.resize(thumbLength, snapSize(y >= 0 ? h : h + y)); // Account for negative padding (see also RT-10719)
                positionThumb();
            }

            s.resize(snapSize(s.getWidth()), snapSize(s.getHeight()));
        }

        // things should be invisible only when well below minimum length
        if (s.getOrientation() == Orientation.VERTICAL && h >= (computeMinHeight(-1, (int)y , snappedRightInset(), snappedBottomInset(), (int)x) - (y+snappedBottomInset())) ||
            s.getOrientation() == Orientation.HORIZONTAL && w >= (computeMinWidth(-1, (int)y , snappedRightInset(), snappedBottomInset(), (int)x) - (x+snappedRightInset()))) {
            trackBackground.setVisible(true);
            track.setVisible(true);
            thumb.setVisible(true);
            if (!IS_TOUCH_SUPPORTED) {
                incButton.setVisible(true);
                decButton.setVisible(true);
            }
        }
        else {
            trackBackground.setVisible(false);
            track.setVisible(false);
            thumb.setVisible(false);

            if (!IS_TOUCH_SUPPORTED) {
                /*
                ** once the space is big enough for one button we 
                ** can look at drawing
                */
                if (h >= decButton.computeMinWidth(-1)) {
                    decButton.setVisible(true);
                }
                else {
                    decButton.setVisible(false);
                }
                if (h >= incButton.computeMinWidth(-1)) {
                    incButton.setVisible(true);
                }
                else {
                    incButton.setVisible(false);
                }
            }
        }
    }
    
    private static class EndButton extends Region {
        private Region arrow;

        private EndButton(String styleClass, String arrowStyleClass) {
            getStyleClass().setAll(styleClass);
            arrow = new Region();
            arrow.getStyleClass().setAll(arrowStyleClass);
            getChildren().setAll(arrow);
            requestLayout();
        }

        @Override protected void layoutChildren() {
            final double top = snappedTopInset();
            final double left = snappedLeftInset();
            final double bottom = snappedBottomInset();
            final double right = snappedRightInset();
            final double aw = snapSize(arrow.prefWidth(-1));
            final double ah = snapSize(arrow.prefHeight(-1));
            final double yPos = snapPosition((getHeight() - (top + bottom + ah)) / 2.0);
            final double xPos = snapPosition((getWidth() - (left + right + aw)) / 2.0);
            arrow.resizeRelocate(xPos + left, yPos + top, aw, ah);
        }

        @Override protected double computeMinHeight(double width) {
            return prefHeight(-1);
        }

        @Override protected double computeMinWidth(double height) {
            return prefWidth(-1);
        }

        @Override protected double computePrefWidth(double height) {
            final double left = snappedLeftInset();
            final double right = snappedRightInset();
            final double aw = snapSize(arrow.prefWidth(-1));
            return left + aw + right;
        }
        
        @Override protected double computePrefHeight(double width) {
            final double top = snappedTopInset();
            final double bottom = snappedBottomInset();
            final double ah = snapSize(arrow.prefHeight(-1));
            return top + ah + bottom;
        }
    }
}
