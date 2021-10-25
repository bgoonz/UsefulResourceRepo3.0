/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.application;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.security.AccessController;
import java.security.PrivilegedActionException;
import java.security.PrivilegedExceptionAction;
import javafx.application.Application;
import netscape.javascript.JSObject;


public abstract class HostServicesDelegate {

    private static Method getInstanceMeth = null;

    public static HostServicesDelegate getInstance(final Application app) {
        // Call into the deploy code to get the delegate class
        HostServicesDelegate instance = null;
        try {
            instance = AccessController.doPrivileged(
                    (PrivilegedExceptionAction<HostServicesDelegate>) () -> {
                        if (getInstanceMeth == null) {
                            try {
                                final String factoryClassName =
                                        "com.sun.deploy.uitoolkit.impl.fx.HostServicesFactory";

                                Class factoryClass = Class.forName(factoryClassName,
                                        true,
                                        HostServicesDelegate.class.getClassLoader());
                                getInstanceMeth = factoryClass.getMethod(
                                        "getInstance", Application.class);
                            } catch (Exception ex) {
                                ex.printStackTrace();
                                return null;
                            }
                        }
                        return (HostServicesDelegate)
                                getInstanceMeth.invoke(null, app);
                    }
            );
        } catch (PrivilegedActionException pae) {
            System.err.println(pae.getException().toString());
            return null;
        }

        return instance;
    }

    protected HostServicesDelegate() {
    }

    public abstract String getCodeBase();

    public abstract String getDocumentBase();

    public abstract void showDocument(String uri);

    public abstract JSObject getWebContext();
}
