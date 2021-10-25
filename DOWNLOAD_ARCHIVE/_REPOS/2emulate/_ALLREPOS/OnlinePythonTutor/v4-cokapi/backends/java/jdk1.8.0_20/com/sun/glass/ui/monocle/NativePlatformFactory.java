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

package com.sun.glass.ui.monocle;

import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.Locale;

public abstract class NativePlatformFactory {

    protected abstract boolean matches();

    protected abstract NativePlatform createNativePlatform();

    private static NativePlatform platform;
    public static synchronized NativePlatform getNativePlatform() {
        if (platform == null) {
            String platformFactoryProperty =
                    AccessController.doPrivileged((PrivilegedAction<String>) () -> System.getProperty("monocle.platform",
                                              "MX6,OMAP,Dispman,X11,Linux,Headless"));
            String[] platformFactories = platformFactoryProperty.split(",");
            for (int i = 0; i < platformFactories.length; i++) {
                String factoryName = platformFactories[i].trim();
                String factoryClassName;
                if (factoryName.contains(".")) {
                    factoryClassName = factoryName;
                } else {
                    factoryClassName = "com.sun.glass.ui.monocle."
                        + factoryName.toLowerCase(Locale.ROOT)
                        + "." + factoryName + "PlatformFactory";
                }
                if (MonocleSettings.settings.tracePlatformConfig) {
                    MonocleTrace.traceConfig("Trying platform %s with class %s",
                                             factoryName, factoryClassName);
                }
                try {
                    NativePlatformFactory npf = (NativePlatformFactory)
                            Class.forName(factoryClassName)
                            .newInstance();
                    if (npf.matches()) {
                        platform = npf.createNativePlatform();
                        if (MonocleSettings.settings.tracePlatformConfig) {
                            MonocleTrace.traceConfig("Matched %s", factoryName);
                        }
                        return platform;
                    }
                } catch (Exception e) {
                    if (MonocleSettings.settings.tracePlatformConfig) {
                        MonocleTrace.traceConfig("Failed to create platform %s",
                                                 factoryClassName);
                    }
                    e.printStackTrace();
                }
            }
            throw new UnsupportedOperationException(
                    "Cannot load a native platform from: '"
                    + platformFactoryProperty + "'");
        }
        return platform;
    }

}
