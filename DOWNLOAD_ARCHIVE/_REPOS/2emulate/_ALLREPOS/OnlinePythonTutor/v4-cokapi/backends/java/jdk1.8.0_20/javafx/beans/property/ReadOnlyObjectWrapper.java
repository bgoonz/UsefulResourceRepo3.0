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

package javafx.beans.property;

import javafx.beans.InvalidationListener;
import javafx.beans.value.ChangeListener;

import com.sun.javafx.binding.ExpressionHelper;

/**
 * This class provides a convenient class to define read-only properties. It
 * creates two properties that are synchronized. One property is read-only
 * and can be passed to external users. The other property is read- and
 * writable and should be used internally only.
 * 
 * @since JavaFX 2.0
 */
public class ReadOnlyObjectWrapper<T> extends SimpleObjectProperty<T> {

    private ReadOnlyPropertyImpl readOnlyProperty;

    /**
     * The constructor of {@code ReadOnlyObjectWrapper}
     */
    public ReadOnlyObjectWrapper() {
    }

    /**
     * The constructor of {@code ReadOnlyObjectWrapper}
     * 
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyObjectWrapper(T initialValue) {
        super(initialValue);
    }

    /**
     * The constructor of {@code ReadOnlyObjectWrapper}
     * 
     * @param bean
     *            the bean of this {@code ReadOnlyObjectProperty}
     * @param name
     *            the name of this {@code ReadOnlyObjectProperty}
     */
    public ReadOnlyObjectWrapper(Object bean, String name) {
        super(bean, name);
    }

    /**
     * The constructor of {@code ReadOnlyObjectWrapper}
     * 
     * @param bean
     *            the bean of this {@code ReadOnlyObjectProperty}
     * @param name
     *            the name of this {@code ReadOnlyObjectProperty}
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyObjectWrapper(Object bean, String name, T initialValue) {
        super(bean, name, initialValue);
    }

    /**
     * Returns the readonly property, that is synchronized with this
     * {@code ReadOnlyObjectWrapper}.
     * 
     * @return the readonly property
     */
    public ReadOnlyObjectProperty<T> getReadOnlyProperty() {
        if (readOnlyProperty == null) {
            readOnlyProperty = new ReadOnlyPropertyImpl();
        }
        return readOnlyProperty;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void addListener(InvalidationListener listener) {
        getReadOnlyProperty().addListener(listener);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void removeListener(InvalidationListener listener) {
        if (readOnlyProperty != null) {
            readOnlyProperty.removeListener(listener);
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void addListener(ChangeListener<? super T> listener) {
        getReadOnlyProperty().addListener(listener);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void removeListener(ChangeListener<? super T> listener) {
        if (readOnlyProperty != null) {
            readOnlyProperty.removeListener(listener);
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    protected void fireValueChangedEvent() {
        if (readOnlyProperty != null) {
            readOnlyProperty.fireValueChangedEvent();
        }
    }

    private class ReadOnlyPropertyImpl extends ReadOnlyObjectProperty<T> {
        
        private ExpressionHelper<T> helper = null;
        
        @Override
        public T get() {
            return ReadOnlyObjectWrapper.this.get();
        }

        @Override 
        public void addListener(InvalidationListener listener) {
            helper = ExpressionHelper.addListener(helper, this, listener);
        }

        @Override 
        public void removeListener(InvalidationListener listener) {
            helper = ExpressionHelper.removeListener(helper, listener);
        }
        
        @Override
        public void addListener(ChangeListener<? super T> listener) {
            helper = ExpressionHelper.addListener(helper, this, listener);
        }

        @Override 
        public void removeListener(ChangeListener<? super T> listener) {
            helper = ExpressionHelper.removeListener(helper, listener);
        }
        
        protected void fireValueChangedEvent() {
            ExpressionHelper.fireValueChangedEvent(helper);
        }
        
        @Override
        public Object getBean() {
            return ReadOnlyObjectWrapper.this.getBean();
        }

        @Override
        public String getName() {
            return ReadOnlyObjectWrapper.this.getName();
        }
    };
}
