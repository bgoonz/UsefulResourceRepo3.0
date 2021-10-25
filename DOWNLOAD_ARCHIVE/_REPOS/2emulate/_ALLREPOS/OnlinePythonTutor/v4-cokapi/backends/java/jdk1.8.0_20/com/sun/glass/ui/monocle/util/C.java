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

package com.sun.glass.ui.monocle.util;

import java.nio.ByteBuffer;
import java.security.Permission;

public class C {

    private static Permission permission = new RuntimePermission("loadLibrary.*");

    private static C instance = new C();

    public static C getC() {
        checkPermissions();
        return instance;
    }

    private static void checkPermissions() {
        SecurityManager security = System.getSecurityManager();
        if (security != null) {
            security.checkPermission(permission);
        }
    }

    private C() {
    }

    public static abstract class Structure {
        public final ByteBuffer b;
        public final long p;
        protected Structure() {
            b = ByteBuffer.allocateDirect(sizeof());
            p = getC().GetDirectBufferAddress(b);
        }
        protected Structure(long ptr) {
            b = getC().NewDirectByteBuffer(ptr, sizeof());
            p = ptr;
        }
        public abstract int sizeof();
    }

    public native ByteBuffer NewDirectByteBuffer(long ptr, int size);
    public native long GetDirectBufferAddress(ByteBuffer b);

}
