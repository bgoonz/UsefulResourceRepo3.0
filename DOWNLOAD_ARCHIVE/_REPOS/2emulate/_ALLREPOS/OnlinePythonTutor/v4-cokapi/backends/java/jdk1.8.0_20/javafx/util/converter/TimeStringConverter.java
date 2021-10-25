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
 * <p>{@link StringConverter} implementation for {@link Date} values that
 * represent time.</p>
 * 
 * @see DateStringConverter
 * @see DateTimeStringConverter
 * @since JavaFX 2.1
 */
public class TimeStringConverter extends DateTimeStringConverter {
    
    // ------------------------------------------------------------ Constructors
    public TimeStringConverter() {
        this(Locale.getDefault());
    }
    
    public TimeStringConverter(Locale locale) {
        this(locale, null);
    }
    
    public TimeStringConverter(String pattern) {
        this(Locale.getDefault(), pattern, null);
    }
    
    public TimeStringConverter(Locale locale, String pattern) {
        this(locale, pattern, null);
    }
    
    public TimeStringConverter(DateFormat dateFormat) {
        this(null, null, dateFormat);
    }
    
    private TimeStringConverter(Locale locale, String pattern, DateFormat dateFormat) {
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
            df = DateFormat.getTimeInstance();
        }

        df.setLenient(false);

        return df;
    }
}
