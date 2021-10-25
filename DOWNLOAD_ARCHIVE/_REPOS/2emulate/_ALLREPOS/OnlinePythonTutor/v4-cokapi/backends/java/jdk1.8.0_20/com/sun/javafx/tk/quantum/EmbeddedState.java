/*
 * Copyright (c) 2013, Oracle and/or its affiliates. All rights reserved.
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

import java.nio.IntBuffer;
import java.util.concurrent.atomic.AtomicInteger;

import com.sun.glass.ui.Pixels;

/**
 * EmbeddedState is intended to provide for a shadow copy the View/Scene state
 * similar to the shadow Graph, providing a static snapshot until the Scene 
 * is rendered.  EmbeddedState captures state that is specific to embedding.
 */
final class EmbeddedState extends SceneState {

    public EmbeddedState(GlassScene vs) {
        super(vs);
    }

    /**
     * Put the pixels on the screen.
     * 
     * @param pixels - the pixels to draw
     * @param uploadCount - the number of uploads (can be null)
     */
    public void uploadPixels(Pixels pixels, AtomicInteger uploadCount) {
        if (isValid()) {
            EmbeddedScene escene = (EmbeddedScene) scene;
            // Pixels are always stored in an IntBuffer for uploading
            escene.uploadPixels(pixels);
            if (uploadCount != null) {
                uploadCount.decrementAndGet();
            }
        }
    }

    /**
     * Drawing can occur when there is an embedded scene that has a host.
     *
     * @return true if drawing can occur; false otherwise
     *
     * May be called on any thread.
     */
    public boolean isValid() {
        EmbeddedScene escene = (EmbeddedScene) scene;
        return escene != null && getWidth() > 0 && getHeight() > 0;
    }

    /** Updates the state of this object based on the current state of its
     * nativeWindow.
     *
     * May only be called from the event thread.
     */
    public void update() {
        super.update();
        if (scene != null) {
            // These variables and others from the super class need be kept up to date to
            // minimize rendering.  For now, claim that the embedded scene is always visible
            // and not minimized so that rendering can occur
            isWindowVisible = true;
            isWindowMinimized = false;
        }
    }
}
