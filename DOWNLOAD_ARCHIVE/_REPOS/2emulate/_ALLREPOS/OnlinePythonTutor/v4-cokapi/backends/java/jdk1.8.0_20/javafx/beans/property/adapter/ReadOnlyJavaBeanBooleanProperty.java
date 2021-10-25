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
import javafx.beans.property.ReadOnlyBooleanPropertyBase;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.UndeclaredThrowableException;
import sun.misc.Cleaner;

import java.security.AccessController;
import java.security.AccessControlContext;
import java.security.PrivilegedAction;

import sun.reflect.misc.MethodUtil;

/**
 * A {@code ReadOnlyJavaBeanBooleanProperty} provides an adapter between a regular
 * read only Java Bean property of type {@code boolean} or {@code Boolean} and a JavaFX 
 * {@code ReadOnlyBooleanProperty}. It cannot be created directly, but a 
 * {@link ReadOnlyJavaBeanBooleanPropertyBuilder} has to be used.
 * <p>
 * As a minimum, the Java Bean must implement a getter for the
 * property. If the getter of an instance of this class is called, the property of 
 * the Java Bean is returned. If the Java Bean property is bound (i.e. it supports
 * PropertyChangeListeners), this {@code ReadOnlyJavaBeanBooleanProperty} will be 
 * aware of changes in the Java Bean. Otherwise it can be notified about
 * changes by calling {@link #fireValueChangedEvent()}.
 * 
 * @see javafx.beans.property.ReadOnlyBooleanProperty
 * @see ReadOnlyJavaBeanBooleanPropertyBuilder
 * @since JavaFX 2.1
 */
public final class ReadOnlyJavaBeanBooleanProperty extends ReadOnlyBooleanPropertyBase implements ReadOnlyJavaBeanProperty<Boolean> {

    private final ReadOnlyPropertyDescriptor descriptor;
    private final ReadOnlyPropertyDescriptor.ReadOnlyListener<Boolean> listener;

    private final AccessControlContext acc = AccessController.getContext();

    ReadOnlyJavaBeanBooleanProperty(ReadOnlyPropertyDescriptor descriptor, Object bean) {
        this.descriptor = descriptor;
        this.listener = descriptor.new ReadOnlyListener<Boolean>(bean, this);
        descriptor.addListener(listener);
        Cleaner.create(this, new DescriptorListenerCleaner(descriptor, listener));
    }

    /**
     * {@inheritDoc}
     * 
     * @throws UndeclaredThrowableException if calling the getter of the Java Bean
     * property throws an {@code IllegalAccessException} or an 
     * {@code InvocationTargetException}.
     */
    @Override
    public boolean get() {
        return AccessController.doPrivileged((PrivilegedAction<Boolean>) () -> {
            try {
                return (Boolean)MethodUtil.invoke(descriptor.getGetter(), getBean(), (Object[])null);
            } catch (IllegalAccessException e) {
                throw new UndeclaredThrowableException(e);
            } catch (InvocationTargetException e) {
                throw new UndeclaredThrowableException(e);
            }
        }, acc);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Object getBean() {
        return listener.getBean();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String getName() {
        return descriptor.getName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void fireValueChangedEvent() {
        super.fireValueChangedEvent();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void dispose() {
        descriptor.removeListener(listener);
    }
}
