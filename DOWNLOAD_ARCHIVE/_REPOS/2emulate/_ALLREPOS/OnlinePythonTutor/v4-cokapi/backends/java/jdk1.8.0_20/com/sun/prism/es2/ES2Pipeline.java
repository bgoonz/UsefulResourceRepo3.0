/*
 * Copyright (c) 2009, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.prism.es2;

import com.sun.glass.ui.Screen;
import com.sun.glass.utils.NativeLibLoader;
import com.sun.prism.GraphicsPipeline;
import com.sun.prism.ResourceFactory;
import com.sun.prism.impl.PrismSettings;
import com.sun.javafx.PlatformUtil;
import java.util.List;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.HashMap;

public class ES2Pipeline extends GraphicsPipeline {

    public static final GLFactory glFactory;
    public static final GLPixelFormat.Attributes
            pixelFormatAttributes = new GLPixelFormat.Attributes();
    static final boolean antiAliasingSupported;
    private static boolean es2Enabled;
    private static boolean isEglfb = false;

    static {
        AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
            String libName = "prism_es2";

            String eglType = PlatformUtil.getEmbeddedType();
            if ("eglfb".equals(eglType)) {
                isEglfb = true;
                libName = "prism_es2_eglfb";
            }
            else if ("monocle".equals(eglType)) {
                isEglfb = true;
                libName = "prism_es2_monocle";
            }
            else if ("eglx11".equals(eglType))
                libName = "prism_es2_eglx11";

            if (PrismSettings.verbose) {
                System.out.println("Loading ES2 native library ... " + libName);
            }
            NativeLibLoader.loadLibrary(libName);
            if (PrismSettings.verbose) {
                System.out.println("\tsucceeded.");
            }
            return null;
        });

        // Initialize the prism-es2 pipe and a handler of it
        glFactory = GLFactory.getFactory();

        creator = Thread.currentThread();

        if (glFactory != null) {
            es2Enabled = glFactory.initialize(PrismSettings.class,
                    pixelFormatAttributes);
        } else {
            es2Enabled = false;
        }

        if (es2Enabled) {
            theInstance = new ES2Pipeline();
            factories = new ES2ResourceFactory[glFactory.getAdapterCount()];
        } else {
            theInstance = null;
        }

        antiAliasingSupported = (glFactory.isGLExtensionSupported("GL_ARB_multisample"));
    }
    private static Thread creator;
    private static final ES2Pipeline theInstance;
    private static ES2ResourceFactory factories[];

    public static ES2Pipeline getInstance() {
        return theInstance;
    }

    @Override
    public boolean init() {
        if (es2Enabled) {
            HashMap devDetails = new HashMap();
            glFactory.updateDeviceDetails(devDetails);
            setDeviceDetails(devDetails);
            if (!PrismSettings.forceGPU) {
                es2Enabled = glFactory.isGLGPUQualify();
                if (PrismSettings.verbose) {
                    if (!es2Enabled) {
                        System.err.println("Failed Graphics Hardware Qualifier check."
                                + "\nSystem GPU doesn't meet the es2 pipe requirement");
                    }
                }
            }
        } else if (PrismSettings.verbose) {
            System.err.println("Failed to initialize ES2 backend: ");
        }
        return es2Enabled;
    }

    private static ES2ResourceFactory getES2ResourceFactory(int adapterOrdinal,
            Screen screen) {
        ES2ResourceFactory factory = factories[adapterOrdinal];
        if (factory == null && screen != null) {
            factory = new ES2ResourceFactory(screen);
            factories[adapterOrdinal] = factory;
        }
        return factory;
    }

    /*
     * we need screen only because BaseShaderContext requres Screen in the constructor
     */
    private static Screen getScreenForAdapter(List<Screen> screens, int adapterOrdinal) {
        for (Screen screen : screens) {
            if (screen.getAdapterOrdinal() == adapterOrdinal) {
                return screen;
            }
        }
        return Screen.getMainScreen();
    }

    @Override
    public int getAdapterOrdinal(Screen screen) {
        return glFactory.getAdapterOrdinal(screen.getNativeScreen());
    }

    private static ES2ResourceFactory findDefaultResourceFactory(List<Screen> screens) {
        for (int adapter = 0, n = glFactory.getAdapterCount(); adapter != n; ++adapter) {
            ES2ResourceFactory rf =
                    getES2ResourceFactory(adapter, getScreenForAdapter(screens, adapter));

            if (rf != null) {
                if (PrismSettings.verbose) {
                    glFactory.printDriverInformation(adapter);
                }
                return rf;
            } else {
                if (!PrismSettings.disableBadDriverWarning) {
                    System.err.println("disableBadDriverWarning is unsupported on prism-es2");
//                    printDriverWarning(adapter);
                }
            }
        }
        return null;
    }
    ES2ResourceFactory _default;

    @Override
    public ResourceFactory getDefaultResourceFactory(List<Screen> screens) {
        if (_default == null) {
            _default = findDefaultResourceFactory(screens);
        }
        return _default;
    }

    @Override
    public ResourceFactory getResourceFactory(Screen screen) {
        return getES2ResourceFactory(screen.getAdapterOrdinal(), screen);
    }

    @Override
    public void dispose() {
        if (creator != Thread.currentThread()) {
            throw new IllegalStateException(
                    "This operation is not permitted on the current thread ["
                    + Thread.currentThread().getName() + "]");
        }
        if (isEglfb) {
            _default.dispose();
        }
        super.dispose();
    }

    @Override
    public boolean is3DSupported() {
        // It is okay to just returns true if we plan to support 3D on all
        // ES2 platforms that are PS 3 capable. However we are not ready to
        // support 3D on the embedded platform. Some of this platforms may be
        // PS 3 capable but have other limitations such as NPOT. 
        return PlatformUtil.isEmbedded() ? PlatformUtil.isEmbedded3DEnabled() : true;
    }

    @Override
    public final boolean isAntiAliasingSupported() {
        return antiAliasingSupported;
    }

    @Override
    public boolean isVsyncSupported() {
        return true;
    }

    @Override
    public boolean supportsShaderType(ShaderType type) {
        switch (type) {
            case GLSL:
                return true;
            default:
                return false;
        }
    }

    @Override
    public boolean supportsShaderModel(ShaderModel model) {
        switch (model) {
            case SM3:
                return true;
            default:
                return false;
        }
    }
}
