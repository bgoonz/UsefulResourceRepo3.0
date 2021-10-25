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

package com.sun.prism.impl;

/**
 * The base implementation of the {@link ResourcePool} interface, providing
 * bookkeeping for the {@link managed()} method and support for sharing
 * resources amongst multiple pools.
 */
public abstract class BaseResourcePool<T> implements ResourcePool<T> {
    long managedSize;
    final long maxSize;
    final ResourcePool sharedParent;
    private final Thread managerThread;

    protected BaseResourcePool() {
        this(null, Long.MAX_VALUE);
    }

    protected BaseResourcePool(long max) {
        this(null, max);
    }

    protected BaseResourcePool(ResourcePool parent) {
        this(parent, parent.max());
    }

    protected BaseResourcePool(ResourcePool parent, long max) {
        this.sharedParent = parent;
        this.maxSize = ((parent == null)
                        ? max
                        : Math.min(parent.max(), max));
        managerThread = Thread.currentThread();
    }

    @Override
    public boolean isManagerThread() {
        return Thread.currentThread() == managerThread;
    }

    @Override
    public final long managed() {
        return managedSize;
    }

    @Override
    public long used() {
        if (sharedParent != null) {
            return sharedParent.used();
        }
        return managedSize;
    }

    @Override
    public final long max() {
        return maxSize;
    }

    @Override
    public boolean prepareForAllocation(long size) {
        return ManagedResource.cleanup(this, size);
    }

    @Override
    public final void recordAllocated(long size) {
        managedSize += size;
    }

    @Override
    public final void resourceManaged(T resource) {
        recordAllocated(size(resource));
    }

    @Override
    public final void resourceFreed(T resource) {
        recordFree(size(resource));
    }

    @Override
    public final void recordFree(long size) {
        managedSize -= size;
        if (managedSize < 0) {
            throw new IllegalStateException("Negative resource amount");
        }
    }
}
