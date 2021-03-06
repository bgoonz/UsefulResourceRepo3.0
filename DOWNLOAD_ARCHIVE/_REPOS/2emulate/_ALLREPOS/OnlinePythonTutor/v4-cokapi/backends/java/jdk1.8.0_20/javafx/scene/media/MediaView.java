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

package javafx.scene.media;

import com.sun.javafx.geom.BaseBounds;
import com.sun.javafx.geom.transform.Affine3D;
import com.sun.javafx.geom.transform.BaseTransform;
import com.sun.javafx.jmx.MXNodeAlgorithm;
import com.sun.javafx.jmx.MXNodeAlgorithmContext;
import com.sun.javafx.scene.DirtyBits;
import com.sun.javafx.sg.prism.MediaFrameTracker;
import com.sun.javafx.sg.prism.NGNode;
import com.sun.javafx.tk.Toolkit;
import com.sun.media.jfxmediaimpl.HostUtils;
import com.sun.media.jfxmediaimpl.platform.ios.IOSMediaPlayer;
import javafx.application.Platform;
import javafx.beans.InvalidationListener;
import javafx.beans.Observable;
import javafx.beans.property.*;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableObjectValue;
import javafx.beans.value.ObservableValue;
import javafx.collections.ObservableMap;
import javafx.event.EventHandler;
import javafx.geometry.NodeOrientation;
import javafx.geometry.Rectangle2D;
import javafx.scene.Node;
import javafx.scene.Parent;

/**
 * A {@link Node} that provides a view of {@link Media} being played by a
 * {@link MediaPlayer}.
 *
 * <p>The following code snippet provides a simple example of an
 * {@link javafx.application.Application#start(javafx.stage.Stage) Application.start()}
 * method which displays a video:
 * <code><pre>
 * public void start(Stage stage) {
 *     // Create and set the Scene.
 *     Scene scene = new Scene(new Group(), 540, 209);
 *     stage.setScene(scene);
 *
 *     // Name and display the Stage.
 *     stage.setTitle("Hello Media");
 *     stage.show();
 *
 *     // Create the media source.
 *     String source = getParameters().getRaw().get(0);
 *     Media media = new Media(source);
 *
 *     // Create the player and set to play automatically.
 *     MediaPlayer mediaPlayer = new MediaPlayer(media);
 *     mediaPlayer.setAutoPlay(true);
 *
 *     // Create the view and add it to the Scene.
 *     MediaView mediaView = new MediaView(mediaPlayer);
 *     ((Group) scene.getRoot()).getChildren().add(mediaView);
 * }
 * </pre></code>
 * The foregoing code will display the video as:
 * <br/>
 * <br/>
 * <img src="doc-files/mediaview.png" alt="Hello Media"/>
 * </p>
 * @since JavaFX 2.0
 */
public class MediaView extends Node {
    /**
     * The name of the property in the {@link ObservableMap} returned by
     * {@link #getProperties()}. This value must also be defined as a JVM
     * command line definition for the frame rate to be added to the properties.
     */
    private static final String VIDEO_FRAME_RATE_PROPERTY_NAME = "jfxmedia.decodedVideoFPS";

    private static final String DEFAULT_STYLE_CLASS = "media-view";

    /**
     * Inner class used to convert a <code>MediaPlayer</code> error into a
     * <code>Bean</code> event.
     */
    private class MediaErrorInvalidationListener implements InvalidationListener {

        @Override public void invalidated(Observable value) {
            ObservableObjectValue<MediaException> errorProperty = (ObservableObjectValue<MediaException>)value;
            fireEvent(new MediaErrorEvent(getMediaPlayer(), getMediaView(), errorProperty.get()));
        }
    }

    /** Listener which converts <code>MediaPlayer</code> errors to events. */
    private InvalidationListener errorListener = new MediaErrorInvalidationListener();

    /** Listener which causes the geometry to be updated when the media dimension changes. */
    private InvalidationListener mediaDimensionListener = value -> {
        impl_markDirty(DirtyBits.NODE_VIEWPORT);
        impl_geomChanged();
    };

    /** Listener for decoded frame rate. */
    private com.sun.media.jfxmedia.events.VideoFrameRateListener decodedFrameRateListener;
    private boolean registerVideoFrameRateListener = false;

    /** Creates a decoded frame rate listener. Will return <code>null</code> if
     * the security manager does not permit retrieve system properties or if
     * VIDEO_FRAME_RATE_PROPERTY_NAME is not set to "true."
     */
    private com.sun.media.jfxmedia.events.VideoFrameRateListener createVideoFrameRateListener() {
        String listenerProp = null;
        try {
            listenerProp = System.getProperty(VIDEO_FRAME_RATE_PROPERTY_NAME);
        } catch (Throwable t) {
        }

        if (listenerProp == null || !Boolean.getBoolean(VIDEO_FRAME_RATE_PROPERTY_NAME)) {
            return null;
        } else {
            return videoFrameRate -> {
                Platform.runLater(() -> {
                    ObservableMap props = getProperties();
                    props.put(VIDEO_FRAME_RATE_PROPERTY_NAME, videoFrameRate);
                });
            };
        }
    }

    /***************************************** iOS specific stuff ***************************/

    private /*volatile*/ boolean mediaPlayerReady;
    
    private ChangeListener<Parent> parentListener;
    private ChangeListener<Boolean> treeVisibleListener;
    private ChangeListener<Number> opacityListener;
    
    private void createListeners() {
        parentListener = (ov2, oldParent, newParent) -> {
            updateOverlayVisibility();
        };
        
        treeVisibleListener = (ov1, oldVisible, newVisible) -> {
            updateOverlayVisibility();
        };
        
        opacityListener = (ov, oldOpacity, newOpacity) -> {
            updateOverlayOpacity();
        };
    }
    
    private IOSMediaPlayer getIOSPlayer() {
        return (IOSMediaPlayer) getMediaPlayer().retrieveJfxPlayer();
    }
    
    private boolean determineVisibility() {
        return (getParent() != null && isVisible());
    }
    
    private synchronized void updateOverlayVisibility() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayVisible(determineVisibility());
        }
    }
    
    private synchronized void updateOverlayOpacity() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayOpacity(getOpacity());
        }
    }
    
    private synchronized void updateOverlayX() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayX(getX());
        }
    }
    
    private synchronized void updateOverlayY() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayY(getY());
        }
    }
    
    private synchronized void updateOverlayWidth() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayWidth(getFitWidth());
        }
    }

    private synchronized void updateOverlayHeight() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayHeight(getFitHeight());
        }
    }
    
    private synchronized void updateOverlayPreserveRatio() {
        if (mediaPlayerReady) {
            getIOSPlayer().setOverlayPreserveRatio(isPreserveRatio());
        }
    }
    
    private static Affine3D calculateNodeToSceneTransform(Node node) {
        final Affine3D transform = new Affine3D();
        do {
            transform.preConcatenate(node.impl_getLeafTransform());
            node = node.getParent();
        } while (node != null);
        
        return transform;
    }
    
    private void updateOverlayTransformDirectly() {
        final Affine3D trans = MediaView.calculateNodeToSceneTransform(this);
        getIOSPlayer().setOverlayTransform(
                trans.getMxx(), trans.getMxy(), trans.getMxz(), trans.getMxt(),
                trans.getMyx(), trans.getMyy(), trans.getMyz(), trans.getMyt(),
                trans.getMzx(), trans.getMzy(), trans.getMzz(), trans.getMzt());
    }
    
    private synchronized void updateOverlayTransform() {
        if (mediaPlayerReady) {
            updateOverlayTransformDirectly();
        }
    }
    
    private void updateIOSOverlay() {
        getIOSPlayer().setOverlayX(getX());
        getIOSPlayer().setOverlayY(getY());
        getIOSPlayer().setOverlayPreserveRatio(isPreserveRatio());
        getIOSPlayer().setOverlayWidth(getFitWidth());
        getIOSPlayer().setOverlayHeight(getFitHeight());
        getIOSPlayer().setOverlayOpacity(getOpacity());
        getIOSPlayer().setOverlayVisible(determineVisibility());
        updateOverlayTransformDirectly();
    }
    
    @Override
    public void impl_transformsChanged() {
        super.impl_transformsChanged();
        if (HostUtils.isIOS()) {
            updateOverlayTransform();
        }
    }
    
    /******************************************* End of iOS specific stuff ***************************/
    
    /**
     * @return reference to MediaView
     */
    private MediaView getMediaView() {
        return this;
    }

    /**
     * Creates a <code>MediaView</code> instance with no associated
     * {@link MediaPlayer}.
     */
    public MediaView() {
        getStyleClass().add(DEFAULT_STYLE_CLASS);
        setSmooth(Toolkit.getToolkit().getDefaultImageSmooth());
        decodedFrameRateListener = createVideoFrameRateListener();
        setNodeOrientation(NodeOrientation.LEFT_TO_RIGHT);
        if (HostUtils.isIOS()) {
            createListeners();
            parentProperty().addListener(parentListener);
            impl_treeVisibleProperty().addListener(treeVisibleListener);
            opacityProperty().addListener(opacityListener);
        }
    }

    /**
     * Creates a <code>MediaView</code> instance associated with the specified
     * {@link MediaPlayer}. Equivalent to
     * <pre><code>
     * MediaPlayer player; // initialization omitted
     * MediaView view = new MediaView();
     * view.setPlayer(player);
     * </code></pre>
     *
     * @param mediaPlayer the {@link MediaPlayer} the playback of which is to be
     * viewed via this class.
     */
    public MediaView(MediaPlayer mediaPlayer) {
        this();
        setNodeOrientation(NodeOrientation.LEFT_TO_RIGHT);
        setMediaPlayer(mediaPlayer);
    }
    /**
     * The <code>mediaPlayer</code> whose output will be handled by this view.
     *
     * Setting this value does not affect the status of the <code>MediaPlayer</code>,
     * e.g., if the <code>MediaPlayer</code> was playing prior to setting
     * <code>mediaPlayer</code> then it will continue playing.
     *
     * @see MediaException
     * @see MediaPlayer
     */
    private ObjectProperty<MediaPlayer> mediaPlayer;

    /**
     * Sets the <code>MediaPlayer</code> whose output will be handled by this view.
     * @param value the associated <code>MediaPlayer</code>.
     */
    public final void setMediaPlayer (MediaPlayer value) {
        mediaPlayerProperty().set(value);
    }

    /**
     * Retrieves the <code>MediaPlayer</code> whose output is being handled by
     * this view.
     * @return the associated <code>MediaPlayer</code>.
     */
    public final MediaPlayer getMediaPlayer() {
        return mediaPlayer == null ? null : mediaPlayer.get();
    }

    public final ObjectProperty<MediaPlayer> mediaPlayerProperty() {
        if (mediaPlayer == null) {
            mediaPlayer = new ObjectPropertyBase<MediaPlayer>() {
                MediaPlayer oldValue = null;
                @Override protected void invalidated() {
                    if (oldValue != null) {
                        Media media = oldValue.getMedia();
                        if (media != null) {
                            media.widthProperty().removeListener(mediaDimensionListener);
                            media.heightProperty().removeListener(mediaDimensionListener);
                        }
                        if (decodedFrameRateListener != null && getMediaPlayer().retrieveJfxPlayer() != null) {
                            getMediaPlayer().retrieveJfxPlayer().getVideoRenderControl().removeVideoFrameRateListener(decodedFrameRateListener);
                        }
                        oldValue.errorProperty().removeListener(errorListener);
                        oldValue.removeView(getMediaView());
                    }

                    //Uncomment the line below to print whether media is using Prism or Swing frame handler.
                    //System.err.println(getPGMediaView().getClass().getName());
                    //Uncomment the line below to print whether media is using Prism or Swing frame handler.
                    //System.err.println(getPGMediaView().getClass().getName());
                    MediaPlayer newValue = get();
                    if (newValue != null) {
                        newValue.addView(getMediaView());
                        newValue.errorProperty().addListener(errorListener);
                        if (decodedFrameRateListener != null && getMediaPlayer().retrieveJfxPlayer() != null) {
                            getMediaPlayer().retrieveJfxPlayer().getVideoRenderControl().addVideoFrameRateListener(decodedFrameRateListener);
                        } else if (decodedFrameRateListener != null) {
                            registerVideoFrameRateListener = true;
                        }
                        Media media = newValue.getMedia();
                        if (media != null) {
                            media.widthProperty().addListener(mediaDimensionListener);
                            media.heightProperty().addListener(mediaDimensionListener);
                        }
                    }
                    impl_markDirty(DirtyBits.MEDIAVIEW_MEDIA);
                    impl_geomChanged();
                    oldValue = newValue;
                }
                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "mediaPlayer";
                }
            };
        }
        return mediaPlayer;
    }
    /**
     * Event handler to be invoked whenever an error occurs on this
     * <code>MediaView</code>.
     *
     * @see MediaErrorEvent
     */
    private ObjectProperty<EventHandler<MediaErrorEvent>> onError;

    /**
     * Sets the error event handler.
     * @param value the error event handler.
     */
    public final void setOnError(EventHandler<MediaErrorEvent> value) {
        onErrorProperty().set( value);
    }

    /**
     * Retrieves the error event handler.
     * @return the error event handler.
     */
    public final EventHandler<MediaErrorEvent> getOnError() {
        return onError == null ? null : onError.get();
    }

    public final ObjectProperty<EventHandler<MediaErrorEvent>> onErrorProperty() {
        if (onError == null) {
            onError = new ObjectPropertyBase<EventHandler<MediaErrorEvent>>() {

                @Override
                protected void invalidated() {
                    setEventHandler(MediaErrorEvent.MEDIA_ERROR, get());
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "onError";
                }
            };
        }
        return onError;
    }
    /**
     * Whether to preserve the aspect ratio (width / height) of the media when
     * scaling it to fit the node. If the aspect ratio is not preserved, the
     * media will be stretched or sheared in both dimensions to fit the
     * dimensions of the node. The default value is <code>true</code>.
     */
    private BooleanProperty preserveRatio;

    /**
     * Sets whether to preserve the media aspect ratio when scaling.
     * @param value whether to preserve the media aspect ratio.
     */
    public final void setPreserveRatio(boolean value) {
        preserveRatioProperty().set(value);
    };

    /**
     * Returns whether the media aspect ratio is preserved when scaling.
     * @return whether the media aspect ratio is preserved.
     */
    public final boolean isPreserveRatio() {
        return preserveRatio == null ? true : preserveRatio.get();
    }

    public final BooleanProperty preserveRatioProperty() {
        if (preserveRatio == null) {
            preserveRatio = new BooleanPropertyBase(true) {

                @Override
                protected void invalidated() {
                    if (HostUtils.isIOS()) {
                        updateOverlayPreserveRatio();
                    }
                    else {
                        impl_markDirty(DirtyBits.NODE_VIEWPORT);
                        impl_geomChanged();
                    }
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "preserveRatio";
                }
            };
        }
        return preserveRatio;
    }
    /**
     * If set to <code>true</code> a better quality filtering
     * algorithm will be used when scaling this video to fit within the
     * bounding box provided by <code>fitWidth</code> and <code>fitHeight</code> or
     * when transforming.
     *
     * If set to <code>false</code> a faster but lesser quality filtering
     * will be used.
     *
     * The default value depends on platform configuration.
     */
    private BooleanProperty smooth;

    /**
     * Sets whether to smooth the media when scaling.
     * @param value whether to smooth the media.
     */
    public final void setSmooth(boolean value) {
        smoothProperty().set(value);
    }

    /**
     * Returns whether to smooth the media when scaling.
     * @return whether to smooth the media
     */
    public final boolean isSmooth() {
        return smooth == null ? false : smooth.get();
    }

    public final BooleanProperty smoothProperty() {
        if (smooth == null) {
            smooth = new BooleanPropertyBase() {

                @Override
                protected void invalidated() {
                    impl_markDirty(DirtyBits.NODE_SMOOTH);
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "smooth";
                }
            };
        }
        return smooth;
    }
    // PENDING_DOC_REVIEW
    /**
     * Defines the current x coordinate of the <code>MediaView</code> origin.
     */
    private DoubleProperty x;

    /**
     * Sets the x coordinate of the <code>MediaView</code> origin.
     * @param value the x coordinate of the origin of the view.
     */
    public final void setX(double value) {
        xProperty().set(value);
    }

    /**
     * Retrieves the x coordinate of the <code>MediaView</code> origin.
     * @return the x coordinate of the origin of the view.
     */
    public final double getX() {
        return x == null ? 0.0 : x.get();
    }

    public final DoubleProperty xProperty() {
        if (x == null) {
            x = new DoublePropertyBase() {

                @Override
                protected void invalidated() {
                    if (HostUtils.isIOS()) {
                        updateOverlayX();
                    }
                    else {
                        impl_markDirty(DirtyBits.NODE_GEOMETRY);
                        impl_geomChanged();
                    }
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "x";
                }
            };
        }
        return x;
    }
    // PENDING_DOC_REVIEW
    /**
     * Defines the current y coordinate of the <code>MediaView</code> origin.
     */
    private DoubleProperty y;

    /**
     * Sets the y coordinate of the <code>MediaView</code> origin.
     * @param value the y coordinate of the origin of the view.
     */
    public final void setY(double value) {
        yProperty().set(value);
    }

    /**
     * Retrieves the y coordinate of the <code>MediaView</code> origin.
     * @return the y coordinate of the origin of the view.
     */
    public final double getY() {
        return y == null ? 0.0 : y.get();
    }

    public final DoubleProperty yProperty() {
        if (y == null) {
            y = new DoublePropertyBase() {

                @Override
                protected void invalidated() {
                    if (HostUtils.isIOS()) {
                        updateOverlayY();
                    }
                    else {
                        impl_markDirty(DirtyBits.NODE_GEOMETRY);
                        impl_geomChanged();
                    }
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "y";
                }
            };
        }
        return y;
    }
    // PENDING_DOC_REVIEW
    /**
     * Determines the width of the bounding box within which the source media is
     * resized as necessary to fit. If <code>value &le; 0</code>, then the width
     * of the bounding box will be set to the natural width of the media, but
     * <code>fitWidth</code> will be set to the supplied parameter, even if
     * non-positive.<p/>
     * See {@link #preserveRatioProperty preserveRatio} for information on interaction
     * between media views <code>fitWidth</code>, <code>fitHeight</code> and
     * <code>preserveRatio</code> attributes.
     */
    private DoubleProperty fitWidth;

    /**
     * Sets the width of the bounding box of the resized media.
     * @param value the width of the resized media.
     */
    public final void setFitWidth(double value) {
        fitWidthProperty().set(value);
    }

    /**
     * Retrieves the width of the bounding box of the resized media.
     * @return the height of the resized media.
     */
    public final double getFitWidth() {
        return fitWidth == null ? 0.0 : fitWidth.get();
    }

    public final DoubleProperty fitWidthProperty() {
        if (fitWidth == null) {
            fitWidth = new DoublePropertyBase() {

                @Override
                protected void invalidated() {
                    if (HostUtils.isIOS()) {
                        updateOverlayWidth();
                    }
                    else {
                        impl_markDirty(DirtyBits.NODE_VIEWPORT);
                        impl_geomChanged();
                    }
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "fitWidth";
                }
            };
        }
        return fitWidth;
    }
    // PENDING_DOC_REVIEW
    /**
     * Determines the height of the bounding box within which the source media is
     * resized as necessary to fit. If <code>value &le; 0</code>, then the height
     * of the bounding box will be set to the natural height of the media, but
     * <code>fitHeight</code> will be set to the supplied parameter, even if
     * non-positive.<p/>
     * See {@link #preserveRatioProperty preserveRatio} for information on interaction
     * between media views <code>fitWidth</code>, <code>fitHeight</code> and
     * <code>preserveRatio</code> attributes.
     */
    private DoubleProperty fitHeight;

    /**
     * Sets the height of the bounding box of the resized media.
     * @param value the height of the resized media.
     */
    public final void setFitHeight(double value) {
        fitHeightProperty().set(value);
    };

    /**
     * Retrieves the height of the bounding box of the resized media.
     * @return the height of the resized media.
     */
    public final double getFitHeight() {
        return fitHeight == null ? 0.0 : fitHeight.get();
    }

    public final DoubleProperty fitHeightProperty() {
        if (fitHeight == null) {
            fitHeight = new DoublePropertyBase() {

                @Override
                protected void invalidated() {
                    if (HostUtils.isIOS()) {
                        updateOverlayHeight();
                    }
                    else {
                        impl_markDirty(DirtyBits.NODE_VIEWPORT);
                        impl_geomChanged();
                    }
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "fitHeight";
                }
            };
        }
        return fitHeight;
    }
    // PENDING_DOC_REVIEW
    /**
     * Specifies a rectangular viewport into the media frame.
     * The viewport is a rectangle specified in the coordinates of the media frame.
     * The resulting bounds prior to scaling will
     * be the size of the viewport. The displayed image will include the
     * intersection of the frame and the viewport. The viewport can exceed the
     * size of the frame, but only the intersection will be displayed.
     * Setting <code>viewport</code> to null will clear the viewport.
     */
    private ObjectProperty<Rectangle2D> viewport;

    /**
     * Sets the rectangular viewport into the media frame.
     * @param value the rectangular viewport.
     */
    public final void setViewport(Rectangle2D value) {
        viewportProperty().set(value);
    };

    /**
     * Retrieves the rectangular viewport into the media frame.
     * @return the rectangular viewport.
     */
    public final Rectangle2D getViewport() {
        return viewport == null ? null : viewport.get();
    }

    public final ObjectProperty<Rectangle2D> viewportProperty() {
        if (viewport == null) {
            viewport = new ObjectPropertyBase<Rectangle2D>() {

                @Override
                protected void invalidated() {
                    impl_markDirty(DirtyBits.NODE_VIEWPORT);
                    impl_geomChanged();
                }

                @Override
                public Object getBean() {
                    return MediaView.this;
                }

                @Override
                public String getName() {
                    return "viewport";
                }
            };
        }
        return viewport;
    }

    void notifyMediaChange() {
        MediaPlayer player = getMediaPlayer();
        if (player != null) {
            final NGMediaView peer = impl_getPeer();
            peer.setMediaProvider(player);
        }

        impl_markDirty(DirtyBits.MEDIAVIEW_MEDIA);
        impl_geomChanged();
    }

    void notifyMediaSizeChange() {
        impl_markDirty(DirtyBits.NODE_VIEWPORT);
        impl_geomChanged();
    }

    void notifyMediaFrameUpdated() {
        decodedFrameCount++;
        impl_markDirty(DirtyBits.NODE_CONTENTS);
    }
    
    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    protected NGNode impl_createPeer() {
        NGMediaView peer = new NGMediaView();
        // this has to be done on the main toolkit thread...
        peer.setFrameTracker(new MediaViewFrameTracker());
        return peer;
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    public BaseBounds impl_computeGeomBounds(BaseBounds bounds, BaseTransform tx) {

        // need to figure out the width/height to use for computing bounds
        Media media = (getMediaPlayer() == null) ? null : getMediaPlayer().getMedia();
        double w = media != null ? media.getWidth()  : 0; // if media is null, width will be 0
        double h = media != null ? media.getHeight() : 0; // if media is null, height will be 0
        double newW = getFitWidth();
        double newH = getFitHeight();
        final double vw = getViewport() != null ? getViewport().getWidth()  : 0; // if viewport is null, width will be 0
        final double vh = getViewport() != null ? getViewport().getHeight() : 0; // if viewport is null, height will be 0

        if (vw > 0 && vh > 0) {
            w = vw;
            h = vh;
        }

        if (getFitWidth() <= 0.0 && getFitHeight() <= 0.0) {
            newW = w;
            newH = h;
        } else if (isPreserveRatio()) {
            if (getFitWidth() <= 0.0) {
                newW = h > 0 ? w * (getFitHeight() / h) : 0.0F;
                newH = getFitHeight();
            } else if (getFitHeight() <= 0.0) {
                newW = getFitWidth();
                newH = w > 0 ? h * (getFitWidth() / w) : 0.0F;
            } else {
                if (w == 0.0) w = getFitWidth();
                if (h == 0.0) h = getFitHeight();
                double scale = Math.min(getFitWidth() / w, getFitHeight() / h);
                newW = w * scale;
                newH = h * scale;
            }
        } else if (getFitHeight() <= 0.0) {
            newH = h;
        } else if (getFitWidth() <= 0.0) {
            newW = w;
        }
        if (newH < 1.0F) {
            newH = 1.0F;
        }
        if (newW < 1.0F) {
            newW = 1.0F;
        }

        w = newW;
        h = newH;

        // if the w or h are non-positive, then there is no size
        // for the media view
        if (w <= 0 || h <= 0) {
            return bounds.makeEmpty();
        }
        bounds = bounds.deriveWithNewBounds((float)getX(), (float)getY(), 0.0f,
                (float)(getX()+w), (float)(getY()+h), 0.0f);
        bounds = tx.transform(bounds, bounds);
        return bounds;
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    protected boolean impl_computeContains(double localX, double localY) {
        // Currently this is simply a local bounds test which is already tested
        // by the caller (Node.contains()).
        return true;
    }

    void updateViewport() {

        if (getMediaPlayer() == null) {
            return;
        }

        final NGMediaView peer = impl_getPeer();
        if (getViewport() != null) {
            peer.setViewport((float)getFitWidth(), (float)getFitHeight(),
                             (float)getViewport().getMinX(), (float)getViewport().getMinY(),
                             (float)getViewport().getWidth(), (float)getViewport().getHeight(),
                             isPreserveRatio());
        } else {
            peer.setViewport((float)getFitWidth(), (float)getFitHeight(),
                             0.0F, 0.0F, 0.0F, 0.0F,
                             isPreserveRatio());
        }
    }


    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    @Override
    public void impl_updatePeer() {
        super.impl_updatePeer();

        final NGMediaView peer = impl_getPeer();
        if (impl_isDirty(DirtyBits.NODE_GEOMETRY)) {
            peer.setX((float)getX());
            peer.setY((float)getY());
        }
        if (impl_isDirty(DirtyBits.NODE_SMOOTH)) {
            peer.setSmooth(isSmooth());
        }
        if (impl_isDirty(DirtyBits.NODE_VIEWPORT)) {
            updateViewport();
        }
        if (impl_isDirty(DirtyBits.NODE_CONTENTS)) {
            peer.renderNextFrame();
        }
        if (impl_isDirty(DirtyBits.MEDIAVIEW_MEDIA)) {
            MediaPlayer player = getMediaPlayer();
            if (player != null) {
                peer.setMediaProvider(player);
                updateViewport();
            } else {
                peer.setMediaProvider(null);
            }
        }
    }

    
    private int decodedFrameCount;
    private int renderedFrameCount;
    
    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    public void impl_perfReset() {
        decodedFrameCount = 0;
        renderedFrameCount = 0;
    }
    
    /**
     * @return number of frames that have been submitted for rendering
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    public int impl_perfGetDecodedFrameCount() {
        return decodedFrameCount;
    }
    
    /**
     * @return number of frames that have been rendered
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    public int impl_perfGetRenderedFrameCount() {
        return renderedFrameCount;
    }
    
    private class MediaViewFrameTracker implements MediaFrameTracker {
        @Override
        public void incrementDecodedFrameCount(int count) {
            decodedFrameCount += count;
        }

        @Override
        public void incrementRenderedFrameCount(int count) {
            renderedFrameCount += count;
        }
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended for use and will be removed in the next version
     */
    @Deprecated
    public Object impl_processMXNode(MXNodeAlgorithm alg, MXNodeAlgorithmContext ctx) {
        return alg.processLeafNode(this, ctx);
    }

    /**
     * Called by MediaPlayer when it becomes ready
     */
    void _mediaPlayerOnReady() {
        if (decodedFrameRateListener != null && getMediaPlayer().retrieveJfxPlayer() != null && registerVideoFrameRateListener) {
            getMediaPlayer().retrieveJfxPlayer().getVideoRenderControl().addVideoFrameRateListener(decodedFrameRateListener);
            registerVideoFrameRateListener = false;
        }
        if (HostUtils.isIOS()) {
            synchronized (this) {
                updateIOSOverlay();
                mediaPlayerReady = true;
            }
        }
    }
}
