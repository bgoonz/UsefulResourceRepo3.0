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
public class ReadOnlyLongWrapper extends SimpleLongProperty {

    private ReadOnlyPropertyImpl readOnlyProperty;

    /**
     * The constructor of {@code ReadOnlyLongWrapper}
     */
    public ReadOnlyLongWrapper() {
    }

    /**
     * The constructor of {@code ReadOnlyLongWrapper}
     * 
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyLongWrapper(long initialValue) {
        super(initialValue);
    }

    /**
     * The constructor of {@code ReadOnlyLongWrapper}
     * 
     * @param bean
     *            the bean of this {@code ReadOnlyLongProperty}
     * @param name
     *            the name of this {@code ReadOnlyLongProperty}
     */
    public ReadOnlyLongWrapper(Object bean, String name) {
        super(bean, name);
    }

    /**
     * The constructor of {@code ReadOnlyLongWrapper}
     * 
     * @param bean
     *            the bean of this {@code ReadOnlyLongProperty}
     * @param name
     *            the name of this {@code ReadOnlyLongProperty}
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyLongWrapper(Object bean, String name, long initialValue) {
        super(bean, name, initialValue);
    }

    /**
     * Returns the readonly property, that is synchronized with this
     * {@code ReadOnlyLongWrapper}.
     * 
     * @return the readonly property
     */
    public ReadOnlyLongProperty getReadOnlyProperty() {
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
    public void addListener(ChangeListener<? super Number> listener) {
        getReadOnlyProperty().addListener(listener);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void removeListener(ChangeListener<? super Number> listener) {
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

    private class ReadOnlyPropertyImpl extends ReadOnlyLongProperty {
        
        private ExpressionHelper<Number> helper = null;
        
        @Override
        public long get() {
            return ReadOnlyLongWrapper.this.get();
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
        public void addListener(ChangeListener<? super Number> listener) {
            helper = ExpressionHelper.addListener(helper, this, listener);
        }

        @Override 
        public void removeListener(ChangeListener<? super Number> listener) {
            helper = ExpressionHelper.removeListener(helper, listener);
        }
        
        protected void fireValueChangedEvent() {
            ExpressionHelper.fireValueChangedEvent(helper);
        }
        
        @Override
        public Object getBean() {
            return ReadOnlyLongWrapper.this.getBean();
        }

        @Override
        public String getName() {
            return ReadOnlyLongWrapper.this.getName();
        }
    };
}
