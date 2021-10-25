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
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import javafx.util.StringConverter;

/**
 * <p>{@link StringConverter} implementation for {@link Date} values.</p>
 * 
 * @see TimeStringConverter
 * @see DateTimeStringConverter
 * @since JavaFX 2.1
 */
public class DateStringConverter extends DateTimeStringConverter {
    
    // ------------------------------------------------------------ Constructors
    public DateStringConverter() {
        this(Locale.getDefault());
    }
    
    public DateStringConverter(Locale locale) {
        this(locale, null);
    }
    
    public DateStringConverter(String pattern) {
        this(Locale.getDefault(), pattern, null);
    }
    
    public DateStringConverter(Locale locale, String pattern) {
        this(locale, pattern, null);
    }
    
    public DateStringConverter(DateFormat dateFormat) {
        this(null, null, dateFormat);
    }
    
    private DateStringConverter(Locale locale, String pattern, DateFormat dateFormat) {
        super(locale, pattern, dateFormat);
    }
    

    // --------------------------------------------------------- Private Methods

    /** {@inheritDoc} */
    @Override protected DateFormat getDateFormat() {
        Locale _locale = locale == null ? Locale.getDefault() : locale;

        DateFormat df = null;

        if (dateFormat != null) {
            return dateFormat;
        } else if (pattern != null) {
            df = new SimpleDateFormat(pattern, _locale);
        } else {
            df = DateFormat.getDateInstance();
        }

        df.setLenient(false);

        return df;
    }
}
