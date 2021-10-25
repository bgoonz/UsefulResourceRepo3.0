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

package com.sun.javafx.scene.accessibility;

import com.sun.glass.ui.PlatformAccessible;
import com.sun.glass.ui.Application;

/**
 * Experimental API - Do not use (will be removed).
 *
 * @treatAsPrivate
 */
public abstract class Accessible {

    private PlatformAccessible delegate;

    public Accessible() {
        delegate = Application.GetApplication().createAccessible(this);
    }

    public final void dispose() {
        if (delegate != null) {
            delegate.dispose();
            delegate = null;
        }
    }

    /**
     * @treatAsPrivate implementation detail
     * @deprecated This is an internal API that is not intended
     * for use and will be removed in the next version
     */
    public final PlatformAccessible impl_getDelegate() {
        return delegate;
    }

    /**
     * This method is called by the AT to request the value for the given attribute.
     *
     * @see Attribute
     * @param attribute the requested attribute
     * @param parameters optional list of parameters
     * @return the value for the requested attribute
     */
    public Object getAttribute(Attribute attribute, Object... parameters) {
        return null;
    }

    /**
     * This method is called by the AT to indicate the accessible to execute
     * the given action.
     *
     * @see Action
     * @param action the action to execute
     * @param parameters optional list of parameters
     */
    public void executeAction(Action action, Object... parameters) {
    }

    /**
     * This method is called by Accessible to notify the AT that
     * the value for the given attribute has changed.
     *
     * @see Attribute
     * @param notification the attribute which value has changed
     */
    public void sendNotification(Attribute notification) {
        if (delegate != null) {
            delegate.sendNotification(notification);
        }
    }
}
