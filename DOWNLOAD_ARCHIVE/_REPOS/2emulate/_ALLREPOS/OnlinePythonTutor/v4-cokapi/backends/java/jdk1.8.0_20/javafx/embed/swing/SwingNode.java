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

package javafx.embed.swing;

import javafx.beans.InvalidationListener;
import javafx.beans.Observable;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.EventHandler;
import javafx.event.EventType;
import javafx.geometry.Point2D;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyEvent;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;
import javafx.scene.input.ScrollEvent;
import javafx.stage.Screen;
import javafx.stage.Window;
import javax.swing.JComponent;
import java.awt.AWTEvent;
import java.awt.Component;
import java.awt.Cursor;
import java.awt.EventQueue;
import java.awt.Toolkit;
import java.awt.event.InputEvent;
import java.awt.event.MouseWheelEvent;
import java.awt.event.WindowEvent;
import java.awt.event.WindowFocusListener;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.IntBuffer;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.locks.ReentrantLock;
import com.sun.javafx.geom.BaseBounds;
import com.sun.javafx.geom.transform.BaseTransform;
import com.sun.javafx.jmx.MXNodeAlgorithm;
import com.sun.javafx.jmx.MXNodeAlgorithmContext;
import com.sun.javafx.scene.DirtyBits;
import com.sun.javafx.sg.prism.NGExternalNode;
import com.sun.javafx.sg.prism.NGNode;
import com.sun.javafx.stage.FocusUngrabEvent;
import com.sun.javafx.stage.ScreenHelper;
import com.sun.javafx.stage.WindowHelper;
import com.sun.javafx.PlatformUtil;
import sun.awt.UngrabEvent;
import sun.awt.LightweightFrame;
import sun.swing.JLightweightFrame;
import sun.swing.LightweightContent;

/**
 * This class is used to embed a Swing content into a JavaFX application.
 * The content to be displayed is specified with the {@link #setContent} method
 * that accepts an instance of Swing {@code JComponent}. The hierarchy of components
 * contained in the {@code JComponent} instance should not contain any heavyweight
 * components, otherwise {@code SwingNode} may fail to paint it. The content gets
 * repainted automatically. All the input and focus events are forwarded to the
 * {@code JComponent} instance transparently to the developer.
 * <p>
 * Here is a typical pattern which demonstrates how {@code SwingNode} can be used:
 * <pre>
 *     public class SwingFx extends Application {
 *
 *         &#064;Override
 *         public void start(Stage stage) {
 *             final SwingNode swingNode = new SwingNode();
 *             createAndSetSwingContent(swingNode);
 *
 *             StackPane pane = new StackPane();
 *             pane.getChildren().add(swingNode);
 *
 *             stage.setScene(new Scene(pane, 100, 50));
 *             stage.show();
 *         }
 *
 *         private void createAndSetSwingContent(final SwingNode swingNode) {
 *             SwingUtilities.invokeLater(new Runnable() {
 *                 &#064;Override
 *                 public void run() {
 *                     swingNode.setContent(new JButton("Click me!"));
 *                 }
 *             });
 *         }
 * 
 *         public static void main(String[] args) {
 *             launch(args);
 *         }
 *     }
 * </pre>
 * @since JavaFX 8.0
 */
public class SwingNode extends Node {

    private double width;
    private double height;
    
    private double prefWidth;
    private double prefHeight;
    private double maxWidth;
    private double maxHeight;
    private double minWidth;
    private double minHeight;

    private volatile JComponent content;
    private volatile JLightweightFrame lwFrame;

    private volatile NGExternalNode peer;

    private final ReentrantLock paintLock = new ReentrantLock();

    private boolean skipBackwardUnrgabNotification;
    private boolean grabbed; // lwframe initiated grab
    
    private volatile int scale = 1;

    /**
     * Constructs a new instance of {@code SwingNode}.
     */
    public SwingNode() {
        setFocusTraversable(true);
        setEventHandler(MouseEvent.ANY, new SwingMouseEventHandler());
        setEventHandler(KeyEvent.ANY, new SwingKeyEventHandler());
        setEventHandler(ScrollEvent.SCROLL, new SwingScrollEventHandler());

        focusedProperty().addListener((observable, oldValue, newValue) -> {
             activateLwFrame(newValue);
        });

        //Workaround for RT-34170
        javafx.scene.text.Font.getFamilies();
    }

    /**
     * Attaches a {@code JComponent} instance to display in this {@code SwingNode}.
     * <p>
     * The method can be called either on the JavaFX Application thread or the Event Dispatch thread.
     * Note however, that access to a Swing component must occur from the Event Dispatch thread
     * according to the Swing threading restrictions.
     *
     * @param content a Swing component to display in this {@code SwingNode}
     *
     * @see java.awt.EventQueue#isDispatchThread()
     * @see javafx.application.Platform#isFxApplicationThread()
     */
    public void setContent(final JComponent content) {
        this.content = content;

        SwingFXUtils.runOnEDT(() -> {
            setContentImpl(content);
        });
    }

    /**
     * Returns the {@code JComponent} instance attached to this {@code SwingNode}.
     * <p>
     * The method can be called either on the JavaFX Application thread or the Event Dispatch thread.
     * Note however, that access to a Swing component must occur from the Event Dispatch thread
     * according to the Swing threading restrictions.
     *
     * @see java.awt.EventQueue#isDispatchThread()
     * @see javafx.application.Platform#isFxApplicationThread()
     *
     * @return the Swing component attached to this {@code SwingNode}
     */
    public JComponent getContent() {
        return content;
    }

    private static final class OptionalMethod<T> {
        private final Method method;

        public OptionalMethod(Class<T> cls, String name, Class<?>... args) {
            Method m;
            try {
                m = cls.getMethod(name, args);
            } catch (NoSuchMethodException ignored) {
                // This means we're running with older JDK, simply skip the call
                m = null;
            } catch (Throwable ex) {
                throw new RuntimeException("Error when calling " + cls.getName() + ".getMethod('" + name + "').", ex);
            }
            method = m;
        }

        public boolean isSupported() {
            return method != null;
        }

        public Object invoke(T object, Object... args) {
            if (method != null) {
                try {
                    return method.invoke(object, args);
                } catch (Throwable ex) {
                    throw new RuntimeException("Error when calling " + object.getClass().getName() + "." + method.getName() + "().", ex);
                }
            } else {
                return null;
            }
        }
    }

    /**
     * Calls JLightweightFrame.notifyDisplayChanged.
     * Must be called on EDT only.
     */
    private static final OptionalMethod<JLightweightFrame> jlfNotifyDisplayChanged =
        new OptionalMethod<>(JLightweightFrame.class, "notifyDisplayChanged", Integer.TYPE);
    
    /*
     * Called on EDT
     */
    private void setContentImpl(JComponent content) {
        if (lwFrame != null) {
            lwFrame.dispose();
            lwFrame = null;
        }
        if (content != null) {
            lwFrame = new JLightweightFrame();

            lwFrame.addWindowFocusListener(new WindowFocusListener() {
                @Override
                public void windowGainedFocus(WindowEvent e) {
                    SwingFXUtils.runOnFxThread(() -> {
                        SwingNode.this.requestFocus();
                    });
                }
                @Override
                public void windowLostFocus(WindowEvent e) {
                    SwingFXUtils.runOnFxThread(() -> {
                        ungrabFocus(true);
                    });
                }
            });

            jlfNotifyDisplayChanged.invoke(lwFrame, Math.round(scale));
            lwFrame.setContent(new SwingNodeContent(content));
            lwFrame.setSize((int)width, (int)height);
            lwFrame.setVisible(true);

            SwingFXUtils.runOnFxThread(() -> {
                locateLwFrame(); // initialize location

                if (focusedProperty().get()) {
                    activateLwFrame(true);
                }
            });
        }
    }

    private List<Runnable> peerRequests = new ArrayList<>();

    /*
     * Called on EDT
     */
    void setImageBuffer(final int[] data,
                        final int x, final int y,
                        final int w, final int h,
                        final int linestride,
                        final int scale)
    {
        Runnable r = () -> {
            peer.setImageBuffer(IntBuffer.wrap(data), x, y, w, h, linestride, scale);
        };
        if (peer != null) {
            SwingFXUtils.runOnFxThread(r);
        } else {
            peerRequests.clear();
            peerRequests.add(r);
        }
    }

    /*
     * Called on EDT
     */
    void setImageBounds(final int x, final int y, final int w, final int h) {
        Runnable r = () -> {
            peer.setImageBounds(x, y, w, h);
        };
        if (peer != null) {
            SwingFXUtils.runOnFxThread(r);
        } else {
            peerRequests.add(r);
        }
    }

    /*
     * Called on EDT
     */
    void repaintDirtyRegion(final int dirtyX, final int dirtyY, final int dirtyWidth, final int dirtyHeight) {
        Runnable r = () -> {
            peer.repaintDirtyRegion(dirtyX, dirtyY, dirtyWidth, dirtyHeight);
            impl_markDirty(DirtyBits.NODE_CONTENTS);
        };
        if (peer != null) {
            SwingFXUtils.runOnFxThread(r);
        } else {
            peerRequests.add(r);
        }
    }

    @Override public boolean isResizable() {
        return true;
    }

    /**
     * Invoked by the {@code SwingNode}'s parent during layout to set the {@code SwingNode}'s
     * width and height. <b>Applications should not invoke this method directly</b>.
     * If an application needs to directly set the size of the {@code SwingNode}, it should
     * set the Swing component's minimum/preferred/maximum size constraints which will
     * be propagated correspondingly to the {@code SwingNode} and it's parent will honor those
     * settings during layout.
     *
     * @param width the target layout bounds width
     * @param height the target layout bounds height
     */    
    @Override public void resize(final double width, final double height) {
        super.resize(width, height);
        if (width != this.width || height != this.height) {
            this.width = width;
            this.height = height;
            impl_geomChanged();
            impl_markDirty(DirtyBits.NODE_GEOMETRY);
            SwingFXUtils.runOnEDT(() -> {
                if (lwFrame != null) {
                    lwFrame.setSize((int) width, (int) height);
                }
            });
        }
    }

    /**
     * Returns the {@code SwingNode}'s preferred width for use in layout calculations.
     * This value corresponds to the preferred width of the Swing component.
     * 
     * @return the preferred width that the node should be resized to during layout
     */
    @Override
    public double prefWidth(double height) {
        return prefWidth;
    }

    /**
     * Returns the {@code SwingNode}'s preferred height for use in layout calculations.
     * This value corresponds to the preferred height of the Swing component.
     * 
     * @return the preferred height that the node should be resized to during layout
     */
    @Override
    public double prefHeight(double width) {
        return prefHeight;
    }
    
    /**
     * Returns the {@code SwingNode}'s maximum width for use in layout calculations.
     * This value corresponds to the maximum width of the Swing component.
     * 
     * @return the maximum width that the node should be resized to during layout
     */
    @Override public double maxWidth(double height) {
        return maxWidth;
    }
    
    /**
     * Returns the {@code SwingNode}'s maximum height for use in layout calculations.
     * This value corresponds to the maximum height of the Swing component.
     * 
     * @return the maximum height that the node should be resized to during layout
     */    
    @Override public double maxHeight(double width) {
        return maxHeight;
    }
    
    /**
     * Returns the {@code SwingNode}'s minimum width for use in layout calculations.
     * This value corresponds to the minimum width of the Swing component.
     * 
     * @return the minimum width that the node should be resized to during layout
     */    
    @Override public double minWidth(double height) {
        return minWidth;
    }

    /**
     * Returns the {@code SwingNode}'s minimum height for use in layout calculations.
     * This value corresponds to the minimum height of the Swing component.
     * 
     * @return the minimum height that the node should be resized to during layout
     */    
    @Override public double minHeight(double width) {
        return minHeight;
    }

    @Override
    protected boolean impl_computeContains(double localX, double localY) {
        return true;
    }

    private final InvalidationListener locationListener = observable -> {
        locateLwFrame();
    };

    private final ChangeListener<Screen> screenListener = (observable, oldValue, newValue) -> {
        SwingNode.this.scale = Math.round(ScreenHelper.getScreenAccessor().getScale(newValue));
        setLwFrameScale(SwingNode.this.scale);
    };

    private final EventHandler<FocusUngrabEvent> ungrabHandler = event -> {
        if (!skipBackwardUnrgabNotification) {
            AccessController.doPrivileged(new PostEventAction(new UngrabEvent(lwFrame)));
        }
    };

    private final ChangeListener<Boolean> windowVisibleListener = (observable, oldValue, newValue) -> {
        if (!newValue) {
            disposeLwFrame();
        } else {
            setContent(content);
        }
    };

    private final ChangeListener<Window> sceneWindowListener = (observable, oldValue, newValue) -> {
        if (oldValue != null) {
            removeWindowListeners(oldValue);
        }
        if (newValue != null) {
            addWindowListeners(newValue);
        }
    };

    private void removeSceneListeners(Scene scene) {
        Window window = scene.getWindow();
        if (window != null) {
            removeWindowListeners(window);
        }
        scene.windowProperty().removeListener(sceneWindowListener);
    }

    private void addSceneListeners(final Scene scene) {
        Window window = scene.getWindow();
        if (window != null) {
            addWindowListeners(window);
        }
        scene.windowProperty().addListener(sceneWindowListener);                
    }

    private void addWindowListeners(final Window window) {
        window.xProperty().addListener(locationListener);
        window.yProperty().addListener(locationListener);
        window.addEventHandler(FocusUngrabEvent.FOCUS_UNGRAB, ungrabHandler);
        window.showingProperty().addListener(windowVisibleListener);
        WindowHelper.getWindowAccessor().screenProperty(window).addListener(screenListener);
        
        this.scale = Math.round(ScreenHelper.getScreenAccessor().getScale(
                    WindowHelper.getWindowAccessor().screenProperty(window).get()));
        setLwFrameScale(this.scale);
    }

    private void removeWindowListeners(final Window window) {
        window.xProperty().removeListener(locationListener);
        window.yProperty().removeListener(locationListener);
        window.removeEventHandler(FocusUngrabEvent.FOCUS_UNGRAB, ungrabHandler);
        window.showingProperty().removeListener(windowVisibleListener);
        WindowHelper.getWindowAccessor().screenProperty(window).removeListener(screenListener);
    }

    @Override
    protected NGNode impl_createPeer() {
        peer = new NGExternalNode();
        peer.setLock(paintLock);
        for (Runnable request : peerRequests) {
            request.run();
        }
        peerRequests = null;

        if (getScene() != null) {
            addSceneListeners(getScene());
        }

        sceneProperty().addListener((observable, oldValue, newValue) -> {
            if (oldValue != null) {
                // Removed from scene
                removeSceneListeners(oldValue);
                disposeLwFrame();
            }
            if (newValue != null) {
                // Added to another scene
                if (content != null && lwFrame == null) {
                    setContent(content);
                }
                addSceneListeners(newValue);
            }
        });

        impl_treeVisibleProperty().addListener((observable, oldValue, newValue) -> {
            setLwFrameVisible(newValue);
        });

        return peer;
    }

    @Override
    public void impl_updatePeer() {
        super.impl_updatePeer();

        if (impl_isDirty(DirtyBits.NODE_VISIBLE)
                || impl_isDirty(DirtyBits.NODE_BOUNDS)) {
            locateLwFrame(); // initialize location
        }
        if (impl_isDirty(DirtyBits.NODE_CONTENTS)) {
            peer.markContentDirty();
        }
    }

    /**
     * Calls JLightweightFrame.setHostBounds.
     * Must be called on EDT only.
     */
    private static final OptionalMethod<JLightweightFrame> jlfSetHostBounds =
        new OptionalMethod<>(JLightweightFrame.class, "setHostBounds",
                Integer.TYPE, Integer.TYPE, Integer.TYPE, Integer.TYPE);

    private void locateLwFrame() {
        if (getScene() == null
                || lwFrame == null
                || getScene().getWindow() == null
                || !getScene().getWindow().isShowing()) {
            // Not initialized yet. Skip the update to set the real values later
            return;
        }
        final Point2D loc = localToScene(0, 0);
        final int windowX = (int)getScene().getWindow().getX();
        final int windowY = (int)getScene().getWindow().getY();
        final int windowW = (int)getScene().getWindow().getWidth();
        final int windowH = (int)getScene().getWindow().getHeight();
        final int sceneX = (int)getScene().getX();
        final int sceneY = (int)getScene().getY();

        SwingFXUtils.runOnEDT(() -> {
            if (lwFrame != null) {
                lwFrame.setLocation(windowX + sceneX + (int) loc.getX(),
                    windowY + sceneY + (int) loc.getY());
                jlfSetHostBounds.invoke(lwFrame, windowX, windowY,
                    windowW, windowH);
            }
        });
    }

    private void activateLwFrame(final boolean activate) {
        if (lwFrame == null) {
            return;
        }
        SwingFXUtils.runOnEDT(() -> {
            if (lwFrame != null) {
                lwFrame.emulateActivation(activate);
            }
        });
    }

    private void disposeLwFrame() {
        if (lwFrame == null) {
            return;
        }
        SwingFXUtils.runOnEDT(() -> {
            if (lwFrame != null) {
                lwFrame.dispose();
                lwFrame = null;
            }
        });
    }

    private void setLwFrameVisible(final boolean visible) {
        if (lwFrame == null) {
            return;
        }
        SwingFXUtils.runOnEDT(() -> {
            if (lwFrame != null) {
                lwFrame.setVisible(visible);
            }
        });
    }
    
    private void setLwFrameScale(final int scale) {
        if (lwFrame == null) {
            return;
        }
        SwingFXUtils.runOnEDT(new Runnable() {
            @Override
            public void run() {
                if (lwFrame != null) {
                    jlfNotifyDisplayChanged.invoke(lwFrame, scale);
                }
            }
        });        
    }

    @Override
    public BaseBounds impl_computeGeomBounds(BaseBounds bounds, BaseTransform tx) {
        bounds.deriveWithNewBounds(0, 0, 0, (float)width, (float)height, 0);
        tx.transform(bounds, bounds);
        return bounds;
    }

    @Override
    public Object impl_processMXNode(MXNodeAlgorithm alg, MXNodeAlgorithmContext ctx) {
        return alg.processLeafNode(this, ctx);
    }

    private class SwingNodeContent implements LightweightContent {
        private JComponent comp;
        public SwingNodeContent(JComponent comp) {
            this.comp = comp;
        }
        @Override
        public JComponent getComponent() {
            return comp;
        }
        @Override
        public void paintLock() {
            paintLock.lock();
        }
        @Override
        public void paintUnlock() {
            paintLock.unlock();
        }

        // Note: we skip @Override annotation and implement both pre-hiDPI and post-hiDPI versions
        // of the method for compatibility.
        public void imageBufferReset(int[] data, int x, int y, int width, int height, int linestride) {
            imageBufferReset(data, x, y, width, height, linestride, 1);
        }
        public void imageBufferReset(int[] data, int x, int y, int width, int height, int linestride, int scale) {
            SwingNode.this.setImageBuffer(data, x, y, width, height, linestride, scale);
        }
        @Override
        public void imageReshaped(int x, int y, int width, int height) {
            SwingNode.this.setImageBounds(x, y, width, height);
        }
        @Override
        public void imageUpdated(int dirtyX, int dirtyY, int dirtyWidth, int dirtyHeight) {
            SwingNode.this.repaintDirtyRegion(dirtyX, dirtyY, dirtyWidth, dirtyHeight);
        }
        @Override
        public void focusGrabbed() {
            SwingFXUtils.runOnFxThread(() -> {
                // On X11 grab is limited to a single XDisplay connection,
                // so we can't delegate it to another GUI toolkit.
                if (PlatformUtil.isLinux()) return;

                if (getScene() != null &&
                        getScene().getWindow() != null &&
                        getScene().getWindow().impl_getPeer() != null) {
                    getScene().getWindow().impl_getPeer().grabFocus();
                    grabbed = true;
                }
            });
        }
        @Override
        public void focusUngrabbed() {
            SwingFXUtils.runOnFxThread(() -> {
                ungrabFocus(false);
            });
        }
        @Override
        public void preferredSizeChanged(final int width, final int height) {
            SwingFXUtils.runOnFxThread(() -> {
                SwingNode.this.prefWidth = width;
                SwingNode.this.prefHeight = height;
                SwingNode.this.impl_notifyLayoutBoundsChanged();
            });
        }
        @Override
        public void maximumSizeChanged(final int width, final int height) {
            SwingFXUtils.runOnFxThread(() -> {
                SwingNode.this.maxWidth = width;
                SwingNode.this.maxHeight = height;
                SwingNode.this.impl_notifyLayoutBoundsChanged();
            });
        }
        @Override
        public void minimumSizeChanged(final int width, final int height) {
            SwingFXUtils.runOnFxThread(() -> {
                SwingNode.this.minWidth = width;
                SwingNode.this.minHeight = height;
                SwingNode.this.impl_notifyLayoutBoundsChanged();
            });
        }

        public void setCursor(Cursor cursor) {
            SwingFXUtils.runOnFxThread(() -> {
                SwingNode.this.setCursor(SwingCursors.embedCursorToCursor(cursor));
            });
        }
    }

    private void ungrabFocus(boolean postUngrabEvent) {
        // On X11 grab is limited to a single XDisplay connection,
        // so we can't delegate it to another GUI toolkit.
        if (PlatformUtil.isLinux()) return;

        if (grabbed &&
            getScene() != null &&
            getScene().getWindow() != null &&
            getScene().getWindow().impl_getPeer() != null)
        {
            skipBackwardUnrgabNotification = !postUngrabEvent;
            getScene().getWindow().impl_getPeer().ungrabFocus();
            skipBackwardUnrgabNotification = false;
            grabbed = false;
        }
    }

    private class PostEventAction implements PrivilegedAction<Void> {
        private AWTEvent event;
        public PostEventAction(AWTEvent event) {
            this.event = event;
        }
        @Override
        public Void run() {
            EventQueue eq = Toolkit.getDefaultToolkit().getSystemEventQueue();
            eq.postEvent(event);
            return null;
        }
    }

    private class SwingMouseEventHandler implements EventHandler<MouseEvent> {
        private final Set<MouseButton> mouseClickedAllowed = new HashSet<>();

        @Override
        public void handle(MouseEvent event) {
            JLightweightFrame frame = lwFrame;
            if (frame == null) {
                return;
            }
            int swingID = SwingEvents.fxMouseEventTypeToMouseID(event);
            if (swingID < 0) {
                return;
            }

            // Prevent ancestors of the SwingNode from stealing the focus
            event.consume();

            final EventType<?> type = event.getEventType();
            if (type == MouseEvent.MOUSE_PRESSED) {
                mouseClickedAllowed.add(event.getButton());
            } else if (type == MouseEvent.MOUSE_RELEASED) {
                // RELEASED comes before CLICKED, so we don't remove the button from the set
                //mouseClickedAllowed.remove(event.getButton());
            } else if (type == MouseEvent.MOUSE_DRAGGED) {
                // This is what AWT/Swing do
                mouseClickedAllowed.clear();
            } else if (type == MouseEvent.MOUSE_CLICKED) {
                if (event.getClickCount() == 1 && !mouseClickedAllowed.contains(event.getButton())) {
                    // RT-34610: In FX, CLICKED events are generated even after dragging the mouse pointer
                    // Note that this is only relevant for single clicks. Double clicks use a smudge factor.
                    return;
                }
                mouseClickedAllowed.remove(event.getButton());
            }
            int swingModifiers = SwingEvents.fxMouseModsToMouseMods(event);
            boolean swingPopupTrigger = event.isPopupTrigger();
            int swingButton = SwingEvents.fxMouseButtonToMouseButton(event);
            long swingWhen = System.currentTimeMillis();
            java.awt.event.MouseEvent mouseEvent =
                    new java.awt.event.MouseEvent(
                        frame, swingID, swingWhen, swingModifiers,
                        (int)event.getX(), (int)event.getY(), (int)event.getScreenX(), (int)event.getSceneY(),
                        event.getClickCount(), swingPopupTrigger, swingButton);
            AccessController.doPrivileged(new PostEventAction(mouseEvent));
        }
    }

    private class SwingScrollEventHandler implements EventHandler<ScrollEvent> {
        @Override
        public void handle(ScrollEvent event) {
            JLightweightFrame frame = lwFrame;
            if (frame == null) {
                return;
            }

            int swingModifiers = SwingEvents.fxScrollModsToMouseWheelMods(event);
            final boolean isShift = (swingModifiers & InputEvent.SHIFT_DOWN_MASK) != 0;

            // Vertical scroll.
            if (!isShift && event.getDeltaY() != 0.0) {
                sendMouseWheelEvent(frame, (int)event.getX(), (int)event.getY(),
                        swingModifiers, event.getDeltaY() / event.getMultiplierY());
            }
            // Horizontal scroll or shirt+vertical scroll.
            final double delta = isShift && event.getDeltaY() != 0.0
                                  ? event.getDeltaY() / event.getMultiplierY()
                                  : event.getDeltaX() / event.getMultiplierX();
            if (delta != 0.0) {
                swingModifiers |= InputEvent.SHIFT_DOWN_MASK;
                sendMouseWheelEvent(frame, (int)event.getX(), (int)event.getY(),
                        swingModifiers, delta);
            }
        }

        private void sendMouseWheelEvent(Component source, int x, int y, int swingModifiers, double delta) {
            int wheelRotation = (int) delta;
            int signum = (int) Math.signum(delta);
            if (signum * delta < 1) {
                wheelRotation = signum;
            }
            MouseWheelEvent mouseWheelEvent =
                    new MouseWheelEvent(source, java.awt.event.MouseEvent.MOUSE_WHEEL,
                            System.currentTimeMillis(), swingModifiers, x, y, 0, 0,
                            0, false, MouseWheelEvent.WHEEL_UNIT_SCROLL, 1 , -wheelRotation);
            AccessController.doPrivileged(new PostEventAction(mouseWheelEvent));
        }
    }

    private class SwingKeyEventHandler implements EventHandler<KeyEvent> {
        @Override
        public void handle(KeyEvent event) {
            JLightweightFrame frame = lwFrame;
            if (frame == null) {
                return;
            }
            if (event.getCharacter().isEmpty()) {
                // TODO: should we post an "empty" character?
                return;
            }
            // Don't let Arrows, Tab, Shift+Tab traverse focus out.
            if (event.getCode() == KeyCode.LEFT  ||
                event.getCode() == KeyCode.RIGHT ||
                event.getCode() == KeyCode.UP ||
                event.getCode() == KeyCode.DOWN ||
                event.getCode() == KeyCode.TAB)
            {
                event.consume();
            }

            int swingID = SwingEvents.fxKeyEventTypeToKeyID(event);
            if (swingID < 0) {
                return;
            }
            int swingModifiers = SwingEvents.fxKeyModsToKeyMods(event);
            int swingKeyCode = event.getCode().impl_getCode();
            char swingChar = event.getCharacter().charAt(0);

            // A workaround. Some swing L&F's process mnemonics on KEY_PRESSED,
            // for which swing provides a keychar. Extracting it from the text.
            if (event.getEventType() == javafx.scene.input.KeyEvent.KEY_PRESSED) {
                String text = event.getText();
                if (text.length() == 1) {
                    swingChar = text.charAt(0);
                }
            }
            long swingWhen = System.currentTimeMillis();
            java.awt.event.KeyEvent keyEvent = new java.awt.event.KeyEvent(
                    frame, swingID, swingWhen, swingModifiers,
                    swingKeyCode, swingChar);
            AccessController.doPrivileged(new PostEventAction(keyEvent));
        }
    }
}
