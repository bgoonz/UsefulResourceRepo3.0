/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.stage;

import javafx.scene.Scene;
import javafx.stage.Window;

import com.sun.javafx.embed.HostInterface;
import com.sun.javafx.tk.Toolkit;

/**
 * User: Artem
 * Date: Dec 21, 2010
 * Time: 4:30:56 PM
 */
public class EmbeddedWindow extends Window {

    private HostInterface host;

    public EmbeddedWindow(HostInterface host) {
        this.host = host;
    }

    /**
     * Specify the scene to be used on this stage.
     */
    @Override public final void setScene(Scene value) {
        super.setScene(value);
    }

    /**
     * Specify the scene to be used on this stage.
     */
    @Override public final void show() {
        super.show();
    }

    @Override
    protected void impl_visibleChanging(boolean visible) {
        super.impl_visibleChanging(visible);
        Toolkit toolkit = Toolkit.getToolkit();
        if (visible && (impl_peer == null)) {
            // Setup the peer
            impl_peer = toolkit.createTKEmbeddedStage(host, WindowHelper.getAccessControlContext(this));
            peerListener = new WindowPeerListener(this);
        }
    }

}
