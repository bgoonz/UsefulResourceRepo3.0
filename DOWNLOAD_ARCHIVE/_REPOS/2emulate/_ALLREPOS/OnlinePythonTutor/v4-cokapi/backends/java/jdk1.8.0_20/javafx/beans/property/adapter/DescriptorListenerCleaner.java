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
package javafx.beans.property.adapter;

import com.sun.javafx.property.adapter.ReadOnlyPropertyDescriptor;

class DescriptorListenerCleaner implements Runnable{

    private final ReadOnlyPropertyDescriptor pd;
    private final ReadOnlyPropertyDescriptor.ReadOnlyListener<?> l;

    DescriptorListenerCleaner(ReadOnlyPropertyDescriptor pd, ReadOnlyPropertyDescriptor.ReadOnlyListener<?> l) {
        this.pd = pd;
        this.l = l;

    }

    @Override
    public void run() {
        pd.removeListener(l);
    }
}
