/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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

package javafx.util.converter;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import javafx.util.StringConverter;

/**
 * <p>{@link StringConverter} implementation for {@link Date} values that
 * represent a date and time.</p>
 * 
 * @see DateStringConverter
 * @see TimeStringConverter
 * @since JavaFX 2.1
 */
public class DateTimeStringConverter extends StringConverter<Date> {
    
    // ------------------------------------------------------ Private properties
    protected final Locale locale;
    protected final String pattern;
    protected final DateFormat dateFormat;
    
    
    // ------------------------------------------------------------ Constructors
    public DateTimeStringConverter() {
        this(Locale.getDefault());
    }
    
    public DateTimeStringConverter(Locale locale) {
        this(locale, null);
    }
    
    public DateTimeStringConverter(String pattern) {
        this(Locale.getDefault(), pattern, null);
    }
    
    public DateTimeStringConverter(Locale locale, String pattern) {
        this(locale, pattern, null);
    }
    
    public DateTimeStringConverter(DateFormat dateFormat) {
        this(null, null, dateFormat);
    }
    
    DateTimeStringConverter(Locale locale, String pattern, DateFormat dateFormat) {
        this.locale = locale;
        this.pattern = pattern;
        this.dateFormat = dateFormat;
    }
    

    // ------------------------------------------------------- Converter Methods

    /** {@inheritDoc} */
    @Override public Date fromString(String value) {
        try {
            // If the specified value is null or zero-length, return null
            if (value == null) {
                return (null);
            }

            value = value.trim();

            if (value.length() < 1) {
                return (null);
            }

            // Create and configure the parser to be used
            DateFormat parser = getDateFormat();

            // Perform the requested parsing
            return parser.parse(value);
        } catch (ParseException ex) {
            throw new RuntimeException(ex);
        }
    }

    /** {@inheritDoc} */
    @Override public String toString(Date value) {
        // If the specified value is null, return a zero-length String
        if (value == null) {
            return "";
        }

        // Create and configure the formatter to be used
        DateFormat formatter = getDateFormat();

        // Perform the requested formatting
        return formatter.format(value);
    }

    // --------------------------------------------------------- Private Methods

    /**
     * <p>Return a <code>DateFormat</code> instance to use for formatting
     * and parsing in this {@link StringConverter}.</p>
     */
    protected DateFormat getDateFormat() {
        Locale _locale = locale == null ? Locale.getDefault() : locale;

        DateFormat df = null;

        if (dateFormat != null) {
            return dateFormat;
        } else if (pattern != null) {
            df = new SimpleDateFormat(pattern, _locale);
        } else {
            df = DateFormat.getDateTimeInstance();
        }

        df.setLenient(false);

        return df;
    }
}
