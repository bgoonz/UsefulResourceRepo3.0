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

import com.sun.javafx.binding.MapExpressionHelper;
import javafx.beans.InvalidationListener;
import javafx.beans.value.ChangeListener;
import javafx.collections.ObservableMap;
import javafx.collections.MapChangeListener;

import static javafx.collections.MapChangeListener.Change;

/**
 * This class provides a convenient class to define read-only properties. It
 * creates two properties that are synchronized. One property is read-only
 * and can be passed to external users. The other property is read- and
 * writable and should be used internally only.
 *
 * @since JavaFX 2.1
 */
public class ReadOnlyMapWrapper<K, V> extends SimpleMapProperty<K, V> {

    private ReadOnlyPropertyImpl readOnlyProperty;

    /**
     * The constructor of {@code ReadOnlyMapWrapper}
     */
    public ReadOnlyMapWrapper() {
    }

    /**
     * The constructor of {@code ReadOnlyMapWrapper}
     *
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyMapWrapper(ObservableMap<K, V> initialValue) {
        super(initialValue);
    }

    /**
     * The constructor of {@code ReadOnlyMapWrapper}
     *
     * @param bean
     *            the bean of this {@code ReadOnlyMapWrapper}
     * @param name
     *            the name of this {@code ReadOnlyMapWrapper}
     */
    public ReadOnlyMapWrapper(Object bean, String name) {
        super(bean, name);
    }

    /**
     * The constructor of {@code ReadOnlyMapWrapper}
     *
     * @param bean
     *            the bean of this {@code ReadOnlyMapWrapper}
     * @param name
     *            the name of this {@code ReadOnlyMapWrapper}
     * @param initialValue
     *            the initial value of the wrapped value
     */
    public ReadOnlyMapWrapper(Object bean, String name,
                              ObservableMap<K, V> initialValue) {
        super(bean, name, initialValue);
    }

    /**
     * Returns the readonly property, that is synchronized with this
     * {@code ReadOnlyMapWrapper}.
     *
     * @return the readonly property
     */
    public ReadOnlyMapProperty<K, V> getReadOnlyProperty() {
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
    public void addListener(ChangeListener<? super ObservableMap<K, V>> listener) {
        getReadOnlyProperty().addListener(listener);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void removeListener(ChangeListener<? super ObservableMap<K, V>> listener) {
        if (readOnlyProperty != null) {
            readOnlyProperty.removeListener(listener);
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void addListener(MapChangeListener<? super K, ? super V> listener) {
        getReadOnlyProperty().addListener(listener);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void removeListener(MapChangeListener<? super K, ? super V> listener) {
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

    /**
     * {@inheritDoc}
     */
    @Override
    protected void fireValueChangedEvent(Change<? extends K, ? extends V> change) {
        if (readOnlyProperty != null) {
            readOnlyProperty.fireValueChangedEvent(change);
        }
    }

    private class ReadOnlyPropertyImpl extends ReadOnlyMapProperty<K, V> {

        private MapExpressionHelper<K, V> helper = null;

        @Override
        public ObservableMap<K, V> get() {
            return ReadOnlyMapWrapper.this.get();
        }

        @Override
        public void addListener(InvalidationListener listener) {
            helper = MapExpressionHelper.addListener(helper, this, listener);
        }

        @Override
        public void removeListener(InvalidationListener listener) {
            helper = MapExpressionHelper.removeListener(helper, listener);
        }

        @Override
        public void addListener(ChangeListener<? super ObservableMap<K, V>> listener) {
            helper = MapExpressionHelper.addListener(helper, this, listener);
        }

        @Override
        public void removeListener(ChangeListener<? super ObservableMap<K, V>> listener) {
            helper = MapExpressionHelper.removeListener(helper, listener);
        }

        @Override
        public void addListener(MapChangeListener<? super K, ? super V> listener) {
            helper = MapExpressionHelper.addListener(helper, this, listener);
        }

        @Override
        public void removeListener(MapChangeListener<? super K, ? super V> listener) {
            helper = MapExpressionHelper.removeListener(helper, listener);
        }

        private void fireValueChangedEvent() {
            MapExpressionHelper.fireValueChangedEvent(helper);
        }

        private void fireValueChangedEvent(Change<? extends K, ? extends V> change) {
            MapExpressionHelper.fireValueChangedEvent(helper, change);
        }

        @Override
        public Object getBean() {
            return ReadOnlyMapWrapper.this.getBean();
        }

        @Override
        public String getName() {
            return ReadOnlyMapWrapper.this.getName();
        }

        @Override
        public ReadOnlyIntegerProperty sizeProperty() {
            return ReadOnlyMapWrapper.this.sizeProperty();
        }

        @Override
        public ReadOnlyBooleanProperty emptyProperty() {
            return ReadOnlyMapWrapper.this.emptyProperty();
        }
    }
}
