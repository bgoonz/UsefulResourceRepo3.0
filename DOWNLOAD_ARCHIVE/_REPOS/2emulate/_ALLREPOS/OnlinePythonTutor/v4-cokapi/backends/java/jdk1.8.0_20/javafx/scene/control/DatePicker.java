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

package javafx.scene.control;

// editor and converter code in sync with ComboBox 4858:e60e9a5396e6

import java.time.LocalDate;
import java.time.DateTimeException;
import java.time.chrono.Chronology;
import java.time.chrono.ChronoLocalDate;
import java.time.chrono.IsoChronology;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.DecimalStyle;
import java.time.format.FormatStyle;
import java.time.temporal.TemporalAccessor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

import com.sun.javafx.scene.control.skin.ComboBoxListViewSkin;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.ReadOnlyObjectProperty;
import javafx.beans.property.ReadOnlyObjectWrapper;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.value.WritableValue;
import javafx.css.CssMetaData;
import javafx.css.Styleable;
import javafx.css.StyleableBooleanProperty;
import javafx.css.StyleableProperty;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import javafx.util.Callback;
import javafx.util.StringConverter;

import com.sun.javafx.css.converters.BooleanConverter;
import com.sun.javafx.scene.control.skin.DatePickerSkin;
import com.sun.javafx.scene.control.skin.resources.ControlResources;


/**
 * The DatePicker control allows the user to enter a date as text or
 * to select a date from a calendar popup. The calendar is based on
 * either the standard ISO-8601 chronology or any of the other
 * chronology classes defined in the java.time.chrono package.
 *
 * <p>The {@link #valueProperty() value} property represents the
 * currently selected {@link java.time.LocalDate}.  An initial date can
 * be set via the {@link #DatePicker(java.time.LocalDate) constructor}
 * or by calling {@link #setValue(java.time.LocalDate) setValue()}.  The
 * default value is null.
 *
 * <pre><code>
 * final DatePicker datePicker = new DatePicker();
 * datePicker.setOnAction(new EventHandler() {
 *     public void handle(Event t) {
 *         LocalDate date = datePicker.getValue();
 *         System.err.println("Selected date: " + date);
 *     }
 * });
 * </code></pre>
 *
 * The {@link #chronologyProperty() chronology} property specifies a
 * calendar system to be used for parsing, displaying, and choosing
 * dates.
 * The {@link #valueProperty() value} property is always defined in
 * the ISO calendar system, however, so applications based on a
 * different chronology may use the conversion methods provided in the
 * {@link java.time.chrono.Chronology} API to get or set the
 * corresponding {@link java.time.chrono.ChronoLocalDate} value. For
 * example:
 *
 * <pre><code>
 * LocalDate isoDate = datePicker.getValue();
 * ChronoLocalDate chronoDate =
 *     ((isoDate != null) ? datePicker.getChronology().date(isoDate) : null);
 * System.err.println("Selected date: " + chronoDate);
 * </code></pre>
 *
 *
 * @since JavaFX 8.0
 */
public class DatePicker extends ComboBoxBase<LocalDate> {

    private LocalDate lastValidDate = null;
    private Chronology lastValidChronology = IsoChronology.INSTANCE;

    /**
     * Creates a default DatePicker instance with a <code>null</code> date value set.
     */
    public DatePicker() {
        this(null);

        valueProperty().addListener(observable -> {
            LocalDate date = getValue();
            Chronology chrono = getChronology();

            if (validateDate(chrono, date)) {
                lastValidDate = date;
            } else {
                System.err.println("Restoring value to " +
                            ((lastValidDate == null) ? "null" : getConverter().toString(lastValidDate)));
                setValue(lastValidDate);
            }
        });

        chronologyProperty().addListener(observable -> {
            LocalDate date = getValue();
            Chronology chrono = getChronology();

            if (validateDate(chrono, date)) {
                lastValidChronology = chrono;
            } else {
                System.err.println("Restoring value to " + lastValidChronology);
                setChronology(lastValidChronology);
            }
        });
    }

    private boolean validateDate(Chronology chrono, LocalDate date) {
        try {
            if (date != null) {
                chrono.date(date);
            }
            return true;
        } catch (DateTimeException ex) {
            System.err.println(ex);
            return false;
        }
    }

    /**
     * Creates a DatePicker instance and sets the
     * {@link #valueProperty() value} to the given date.
     *
     * @param localDate to be set as the currently selected date in the DatePicker. Can be null.
     */
    public DatePicker(LocalDate localDate) {
        setValue(localDate);
        getStyleClass().add(DEFAULT_STYLE_CLASS);
        setEditable(true);
    }


    /***************************************************************************
     *                                                                         *
     * Properties                                                                 *
     *                                                                         *
     **************************************************************************/


    /**
     * A custom cell factory can be provided to customize individual
     * day cells in the DatePicker popup. Refer to {@link DateCell}
     * and {@link Cell} for more information on cell factories.
     * Example:
     *
     * <pre><code>
     * final Callback&lt;DatePicker, DateCell&gt; dayCellFactory = new Callback&lt;DatePicker, DateCell&gt;() {
     *     public DateCell call(final DatePicker datePicker) {
     *         return new DateCell() {
     *             &#064;Override public void updateItem(LocalDate item, boolean empty) {
     *                 super.updateItem(item, empty);
     *
     *                 if (MonthDay.from(item).equals(MonthDay.of(9, 25))) {
     *                     setTooltip(new Tooltip("Happy Birthday!"));
     *                     setStyle("-fx-background-color: #ff4444;");
     *                 }
     *                 if (item.equals(LocalDate.now().plusDays(1))) {
     *                     // Tomorrow is too soon.
     *                     setDisable(true);
     *                 }
     *             }
     *         };
     *     }
     * };
     * datePicker.setDayCellFactory(dayCellFactory);
     * </code></pre>
     *
     * @defaultValue null
     */
    private ObjectProperty<Callback<DatePicker, DateCell>> dayCellFactory;
    public final void setDayCellFactory(Callback<DatePicker, DateCell> value) {
        dayCellFactoryProperty().set(value);
    }
    public final Callback<DatePicker, DateCell> getDayCellFactory() {
        return (dayCellFactory != null) ? dayCellFactory.get() : null;
    }
    public final ObjectProperty<Callback<DatePicker, DateCell>> dayCellFactoryProperty() {
        if (dayCellFactory == null) {
            dayCellFactory = new SimpleObjectProperty<Callback<DatePicker, DateCell>>(this, "dayCellFactory");
        }
        return dayCellFactory;
    }



    /**
     * The calendar system used for parsing, displaying, and choosing
     * dates in the DatePicker control.
     *
     * <p>The default value is returned from a call to
     * {@code Chronology.ofLocale(Locale.getDefault(Locale.Category.FORMAT))}.
     * The default is usually {@link java.time.chrono.IsoChronology} unless
     * provided explicitly in the {@link java.util.Locale} by use of a
     * Locale calendar extension.
     *
     * Setting the value to <code>null</code> will restore the default
     * chronology.
     */
    public final ObjectProperty<Chronology> chronologyProperty() {
        return chronology;
    }
    private ObjectProperty<Chronology> chronology =
        new SimpleObjectProperty<Chronology>(this, "chronology", null);
    public final Chronology getChronology() {
        Chronology chrono = chronology.get();
        if (chrono == null) {
            try {
                chrono = Chronology.ofLocale(Locale.getDefault(Locale.Category.FORMAT));
            } catch (Exception ex) {
                System.err.println(ex);
            }
            if (chrono == null) {
                chrono = IsoChronology.INSTANCE;
            }
            //System.err.println(chrono);
        }
        return chrono;
    }
    public final void setChronology(Chronology value) {
        chronology.setValue(value);
    }


    /**
     * Whether the DatePicker popup should display a column showing
     * week numbers.
     *
     * <p>The default value is specified in a resource bundle, and
     * depends on the country of the current locale.
     */
    public final BooleanProperty showWeekNumbersProperty() {
        if (showWeekNumbers == null) {
            String country = Locale.getDefault(Locale.Category.FORMAT).getCountry();
            boolean localizedDefault =
                (!country.isEmpty() &&
                 ControlResources.getNonTranslatableString("DatePicker.showWeekNumbers").contains(country));
            showWeekNumbers = new StyleableBooleanProperty(localizedDefault) {
                @Override public CssMetaData<DatePicker,Boolean> getCssMetaData() {
                    return StyleableProperties.SHOW_WEEK_NUMBERS;
                }

                @Override public Object getBean() {
                    return DatePicker.this;
                }

                @Override public String getName() {
                    return "showWeekNumbers";
                }
            };
        }
        return showWeekNumbers;
    }
    private BooleanProperty showWeekNumbers;
    public final void setShowWeekNumbers(boolean value) {
        showWeekNumbersProperty().setValue(value);
    }
    public final boolean isShowWeekNumbers() {
        return showWeekNumbersProperty().getValue();
    }


    // --- string converter
    /**
     * Converts the input text to an object of type LocalDate and vice
     * versa.
     *
     * <p>If not set by the application, the DatePicker skin class will
     * set a converter based on a {@link java.time.DateTimeFormatter}
     * for the current {@link java.util.Locale} and
     * {@link #chronologyProperty() chronology}. This formatter is
     * then used to parse and display the current date value.
     *
     * Setting the value to <code>null</code> will restore the default
     * converter.
     *
     * <p>Example using an explicit formatter:
     * <pre><code>
     * datePicker.setConverter(new StringConverter&lt;LocalDate&gt;() {
     *     String pattern = "yyyy-MM-dd";
     *     DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern(pattern);
     *
     *     {
     *         datePicker.setPromptText(pattern.toLowerCase());
     *     }
     *
     *     &#064;Override public String toString(LocalDate date) {
     *         if (date != null) {
     *             return dateFormatter.format(date);
     *         } else {
     *             return "";
     *         }
     *     }
     *
     *     &#064;Override public LocalDate fromString(String string) {
     *         if (string != null && !string.isEmpty()) {
     *             return LocalDate.parse(string, dateFormatter);
     *         } else {
     *             return null;
     *         }
     *     }
     * });
     * </code></pre>
     * <p>Example that wraps the default formatter and catches parse exceptions:
     * <pre><code>
     *   final StringConverter&lt;LocalDate&gt; defaultConverter = datePicker.getConverter();
     *   datePicker.setConverter(new StringConverter&lt;LocalDate&gt;() {
     *       &#064;Override public String toString(LocalDate value) {
     *           return defaultConverter.toString(value);
     *       }
     *
     *       &#064;Override public LocalDate fromString(String text) {
     *           try {
     *               return defaultConverter.fromString(text);
     *           } catch (DateTimeParseException ex) {
     *               System.err.println("HelloDatePicker: "+ex.getMessage());
     *               throw ex;
     *           }
     *       }
     *   });
     * </code></pre>
     *
     * <p>The default base year for parsing input containing only two digits for
     * the year is 2000 (see {@link java.time.format.DateTimeFormatter}).  This
     * default is not useful for allowing a person's date of birth to be typed.
     * The following example modifies the converter's fromString() method to
     * allow a two digit year for birth dates up to 99 years in the past.
     * <pre><code>
     *   &#064;Override public LocalDate fromString(String text) {
     *       if (text != null && !text.isEmpty()) {
     *           Locale locale = Locale.getDefault(Locale.Category.FORMAT);
     *           Chronology chrono = datePicker.getChronology();
     *           String pattern =
     *               DateTimeFormatterBuilder.getLocalizedDateTimePattern(FormatStyle.SHORT,
     *                                                                    null, chrono, locale);
     *           String prePattern = pattern.substring(0, pattern.indexOf("y"));
     *           String postPattern = pattern.substring(pattern.lastIndexOf("y")+1);
     *           int baseYear = LocalDate.now().getYear() - 99;
     *           DateTimeFormatter df = new DateTimeFormatterBuilder()
     *                       .parseLenient()
     *                       .appendPattern(prePattern)
     *                       .appendValueReduced(ChronoField.YEAR, 2, 2, baseYear)
     *                       .appendPattern(postPattern)
     *                       .toFormatter();
     *           return LocalDate.from(chrono.date(df.parse(text)));
     *       } else {
     *           return null;
     *       }
     *   }
     * </code></pre>
     *
     * @see javafx.scene.control.ComboBox#converterProperty
     */
    public final ObjectProperty<StringConverter<LocalDate>> converterProperty() { return converter; }
    private ObjectProperty<StringConverter<LocalDate>> converter =
            new SimpleObjectProperty<StringConverter<LocalDate>>(this, "converter", null);
    public final void setConverter(StringConverter<LocalDate> value) { converterProperty().set(value); }
    public final StringConverter<LocalDate> getConverter() {
        StringConverter<LocalDate> converter = converterProperty().get();
        if (converter != null) {
            return converter;
        } else {
            return defaultConverter;
        }
    }

    private StringConverter<LocalDate> defaultConverter = new StringConverter<LocalDate>() {
        @Override public String toString(LocalDate value) {
            if (value != null) {
                Locale locale = Locale.getDefault(Locale.Category.FORMAT);
                Chronology chrono = getChronology();
                ChronoLocalDate cDate;
                try {
                    cDate = chrono.date(value);
                } catch (DateTimeException ex) {
                    System.err.println(ex);
                    chrono = IsoChronology.INSTANCE;
                    cDate = value;
                }
                DateTimeFormatter dateFormatter =
                    DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT)
                                     .withLocale(locale)
                                     .withChronology(chrono)
                                     .withDecimalStyle(DecimalStyle.of(locale));

                String pattern =
                    DateTimeFormatterBuilder.getLocalizedDateTimePattern(FormatStyle.SHORT,
                                                                         null, chrono, locale);

                if (pattern.contains("yy") && !pattern.contains("yyy")) {
                    // Modify pattern to show four-digit year, including leading zeros.
                    String newPattern = pattern.replace("yy", "yyyy");
                    //System.err.println("Fixing pattern ("+forParsing+"): "+pattern+" -> "+newPattern);
                    dateFormatter = DateTimeFormatter.ofPattern(newPattern)
                                                     .withDecimalStyle(DecimalStyle.of(locale));
                }

                return dateFormatter.format(cDate);
            } else {
                return "";
            }
        }

        @Override public LocalDate fromString(String text) {
            if (text != null && !text.isEmpty()) {
                Locale locale = Locale.getDefault(Locale.Category.FORMAT);
                Chronology chrono = getChronology();

                String pattern =
                    DateTimeFormatterBuilder.getLocalizedDateTimePattern(FormatStyle.SHORT,
                                                                         null, chrono, locale);
                DateTimeFormatter df =
                    new DateTimeFormatterBuilder().parseLenient()
                                                  .appendPattern(pattern)
                                                  .toFormatter()
                                                  .withChronology(chrono)
                                                  .withDecimalStyle(DecimalStyle.of(locale));
                TemporalAccessor temporal = df.parse(text);
                ChronoLocalDate cDate = chrono.date(temporal);
                return LocalDate.from(cDate);
            }
            return null;
        }
    };


    // --- Editor
    /**
     * The editor for the DatePicker.
     *
     * @see javafx.scene.control.ComboBox#editorProperty
     */
    private ReadOnlyObjectWrapper<TextField> editor;
    public final TextField getEditor() {
        return editorProperty().get();
    }
    public final ReadOnlyObjectProperty<TextField> editorProperty() {
        if (editor == null) {
            editor = new ReadOnlyObjectWrapper<TextField>(this, "editor");
            editor.set(new ComboBoxListViewSkin.FakeFocusTextField());
        }
        return editor.getReadOnlyProperty();
    }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new DatePickerSkin(this);
    }


    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "date-picker";

     /**
      * @treatAsPrivate implementation detail
      */
    private static class StyleableProperties {
        private static final String country =
            Locale.getDefault(Locale.Category.FORMAT).getCountry();
        private static final CssMetaData<DatePicker, Boolean> SHOW_WEEK_NUMBERS =
              new CssMetaData<DatePicker, Boolean>("-fx-show-week-numbers",
                   BooleanConverter.getInstance(),
                   (!country.isEmpty() &&
                    ControlResources.getNonTranslatableString("DatePicker.showWeekNumbers").contains(country))) {
            @Override public boolean isSettable(DatePicker n) {
                return n.showWeekNumbers == null || !n.showWeekNumbers.isBound();
            }

            @Override public StyleableProperty<Boolean> getStyleableProperty(DatePicker n) {
                return (StyleableProperty<Boolean>)(WritableValue<Boolean>)n.showWeekNumbersProperty();
            }
        };

        private static final List<CssMetaData<? extends Styleable, ?>> STYLEABLES;

        static {
            final List<CssMetaData<? extends Styleable, ?>> styleables =
                new ArrayList<CssMetaData<? extends Styleable, ?>>(Control.getClassCssMetaData());
            Collections.addAll(styleables,
                SHOW_WEEK_NUMBERS
            );
            STYLEABLES = Collections.unmodifiableList(styleables);
        }
    }

    /**
     * @return The CssMetaData associated with this class, which may include the
     * CssMetaData of its super classes.
     */
    public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
        return StyleableProperties.STYLEABLES;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<CssMetaData<? extends Styleable, ?>> getControlCssMetaData() {
        return getClassCssMetaData();
    }

    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.DATE_PICKER;
//            case DATE: return getValue();
//            case TITLE: {
//                LocalDate date = getValue();
//                StringConverter<LocalDate> c = getConverter();
//                if (date != null && c != null) {
//                    return c.toString(date);
//                }
//                return "";
//            }
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }

}
