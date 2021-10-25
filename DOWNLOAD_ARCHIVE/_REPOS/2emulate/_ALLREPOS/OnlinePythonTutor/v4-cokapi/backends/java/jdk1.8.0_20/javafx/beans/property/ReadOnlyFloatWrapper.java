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
public class ReadOnlyFloatWrapper extends SimpleFloatProperty {

    private ReadOnlyPropertyImpl readOnlyProperty;

    /**
     * The constructor of {@code ReadOnlyFloatWrapper}
     */
    public ReadOnlyFloatWrapper() {
    }

    /**
     * The constructor of {@code ReadOnlyFloatWrapper}
     * 
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyFloatWrapper(float initialValue) {
        super(initialValue);
    }

    /**
     * The constructor of {@code ReadOnlyFloatWrapper}
     * 
     * @param bean
     *            the bean of this {@code ReadOnlyFloatProperty}
     * @param name
     *            the name of this {@code ReadOnlyFloatProperty}
     */
    public ReadOnlyFloatWrapper(Object bean, String name) {
        super(bean, name);
    }

    /**
     * The constructor of {@code ReadOnlyFloatWrapper}
     * 
     * @param bean
     *            the bean of this {@code ReadOnlyFloatProperty}
     * @param name
     *            the name of this {@code ReadOnlyFloatProperty}
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyFloatWrapper(Object bean, String name, float initialValue) {
        super(bean, name, initialValue);
    }

    /**
     * Returns the readonly property, that is synchronized with this
     * {@code ReadOnlyFloatWrapper}.
     * 
     * @return the readonly property
     */
    public ReadOnlyFloatProperty getReadOnlyProperty() {
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

    private class ReadOnlyPropertyImpl extends ReadOnlyFloatProperty {
        
        private ExpressionHelper<Number> helper = null;
        
        @Override
        public float get() {
            return ReadOnlyFloatWrapper.this.get();
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
            return ReadOnlyFloatWrapper.this.getBean();
        }

        @Override
        public String getName() {
            return ReadOnlyFloatWrapper.this.getName();
        }
    };
}
