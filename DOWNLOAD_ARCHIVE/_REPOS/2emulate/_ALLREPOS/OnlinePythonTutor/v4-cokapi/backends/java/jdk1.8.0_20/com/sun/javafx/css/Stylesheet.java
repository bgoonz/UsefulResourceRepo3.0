/*
 * Copyright (c) 2010, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.css;

import com.sun.javafx.collections.TrackableObservableList;
import com.sun.javafx.css.parser.CSSParser;
import javafx.collections.ListChangeListener.Change;
import javafx.collections.ObservableList;
import javafx.css.StyleOrigin;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 * A stylesheet which can apply properties to a tree of objects.  A stylesheet 
 * is a collection of zero or more {@link Rule Rules}, each of which is applied 
 * to each object in the tree.  Typically the selector will examine the object to
 * determine whether or not it is applicable, and if so it will apply certain 
 * property values to the object.
 * <p>
 */
public class Stylesheet {

    /**
     * Version number of binary CSS format. The value is incremented whenever the format of the
     * binary stream changes. This number does not correlate with JavaFX versions.
     * Version 5: persist @font-face
     */
    final static int BINARY_CSS_VERSION = 5;
            
    private final String url;
    /** The URL from which the stylesheet was loaded.
     * @return The URL from which the stylesheet was loaded, or null if 
     *         the stylesheet was created from an inline style. 
     */
    public String getUrl() {
        return url;
    }

    /**
     * True if this style came from user stylesheet, we need to know this so 
     * that we can make user important styles have higher priority than
     * author styles
     */
    private StyleOrigin origin = StyleOrigin.AUTHOR;
    public StyleOrigin getOrigin() {
        return origin;
    }
    public void setOrigin(StyleOrigin origin) {
        this.origin = origin;
    }

    /** All the rules contained in the stylesheet in the order they are in the file */
    private final ObservableList<Rule> rules = new TrackableObservableList<Rule>() {

        @Override
        protected void onChanged(Change<Rule> c) {
            c.reset();
            while (c.next()) {
                if (c.wasAdded()) {
                    for(Rule rule : c.getAddedSubList()) {
                        rule.setStylesheet(Stylesheet.this);
                    }
                } else if (c.wasRemoved()) {
                    for (Rule rule : c.getRemoved()) {
                        if (rule.getStylesheet() == Stylesheet.this) rule.setStylesheet(null);
                    }
                }
            }
        }
    };

    /** List of all font faces */
    private final List<FontFace> fontFaces = new ArrayList<FontFace>();

    /**
     * Constructs a stylesheet with the base URI defaulting to the root
     * path of the application.
     */
    public Stylesheet() {

//        ClassLoader cl = Thread.currentThread().getContextClassLoader();
//        this.url = (cl != null) ? cl.getResource("") : null;
        //
        // RT-17344
        // The above code is unreliable. The getResource call is intended
        // to return the root path of the Application instance, but it sometimes
        // returns null. Here, we'll set url to null and then when a url is 
        // resolved, the url path can be used in the getResource call. For 
        // example, if the css is -fx-image: url("images/duke.png"), we can
        // do cl.getResouce("images/duke.png") in URLConverter
        //

        this(null);
    }

    /**
     * Constructs a Stylesheet using the given URL as the base URI. The
     * parameter may not be null.
     * @param url
     */
    public Stylesheet(String url) {

        this.url = url;
        
    }

    public List<Rule> getRules() {
        return rules;
    }

    public List<FontFace> getFontFaces() {
        return fontFaces;
    }

    @Override public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj instanceof Stylesheet) {
            Stylesheet other = (Stylesheet)obj;
            
            if (this.url == null && other.url == null) {
                return true;
            } else if (this.url == null || other.url == null) {
                return false;
            } else {
                return this.url.equals(other.url);
            }
        }
        return false;
    }
    
    @Override public int hashCode() {
        int hash = 7;
        hash = 13 * hash + (this.url != null ? this.url.hashCode() : 0);
        return hash;
    }

    /** Returns a string representation of this object. */
    @Override public String toString() {
        StringBuilder sbuf = new StringBuilder();
        sbuf.append("/* ");
        if (url != null) sbuf.append(url);
        if (rules.isEmpty()) {
            sbuf.append(" */");
        } else {
            sbuf.append(" */\n");
            for(int r=0; r<rules.size(); r++) {
                sbuf.append(rules.get(r));
                sbuf.append('\n');
            }
        }
        return sbuf.toString();
    }

    // protected for unit testing
    final void writeBinary(final DataOutputStream os, final StringStore stringStore)
        throws IOException 
    {
        // Note: url is not written since it depends on runtime environment.
        int index = stringStore.addString(origin.name());
        os.writeShort(index);
        os.writeShort(rules.size());
        for (Rule r : rules) r.writeBinary(os,stringStore);

        // Version 5 adds persistence of FontFace
        List<FontFace> fontFaceList = getFontFaces();
        int nFontFaces = fontFaceList != null ? fontFaceList.size() : 0;
        os.writeShort(nFontFaces);

        for(int n=0; n<nFontFaces; n++) {
            FontFace fontFace = fontFaceList.get(n);
            fontFace.writeBinary(os, stringStore);
        }
    }
    
    // protected for unit testing 
    final void readBinary(int bssVersion, DataInputStream is, String[] strings)
        throws IOException 
    {
        this.stringStore = strings;
        final int index = is.readShort();
        this.setOrigin(StyleOrigin.valueOf(strings[index]));
        final int nRules = is.readShort();
        List<Rule> persistedRules = new ArrayList<Rule>(nRules);
        for (int n=0; n<nRules; n++) {
            persistedRules.add(Rule.readBinary(bssVersion,is,strings));
        }
        this.rules.addAll(persistedRules);

        if (bssVersion >= 5) {
            List<FontFace> fontFaceList = this.getFontFaces();
            int nFontFaces = is.readShort();
            for (int n=0; n<nFontFaces; n++) {
                FontFace fontFace = FontFace.readBinary(bssVersion, is, strings);
                fontFaceList.add(fontFace);
            }
        }
    }

    private String[] stringStore;
    final String[] getStringStore() { return stringStore; }

    /** Load a binary stylesheet file from a input stream */
    public static Stylesheet loadBinary(URL url) throws IOException {

        if (url == null) return null;

        Stylesheet stylesheet = null;

        try (DataInputStream dataInputStream =
                     new DataInputStream(new BufferedInputStream(url.openStream(), 40 * 1024))) {

            // read file version
            final int bssVersion = dataInputStream.readShort();
            if (bssVersion > Stylesheet.BINARY_CSS_VERSION) {
                throw new IOException(url.toString() + " wrong binary CSS version: "
                        + bssVersion + ". Expected version less than or equal to" +
                        Stylesheet.BINARY_CSS_VERSION);
            }
            // read strings
            final String[] strings = StringStore.readBinary(dataInputStream);
            // read binary data
            stylesheet = new Stylesheet(url.toExternalForm());

            try {

                dataInputStream.mark(Integer.MAX_VALUE);
                stylesheet.readBinary(bssVersion, dataInputStream, strings);

            } catch (Exception e) {

                stylesheet = new Stylesheet(url.toExternalForm());

                dataInputStream.reset();

                if (bssVersion == 2) {
                    // RT-31022
                    stylesheet.readBinary(3, dataInputStream, strings);
                } else {
                    stylesheet.readBinary(Stylesheet.BINARY_CSS_VERSION, dataInputStream, strings);
                }
            }

        } catch (FileNotFoundException fnfe) {
            // This comes from url.openStream() and is expected.
            // It just means that the .bss file doesn't exist.
        }

        // return stylesheet
        return stylesheet;
    }

    /**
     * Convert the .css file referenced by urlIn to binary format and write to urlOut.
     * @param source is the JavaFX .css file to convert
     * @param destination is the file to which the binary conversion is written
     * @throws IOException
     * @throws IllegalArgumentException if either parameter is null, if source and destination are the same,
     * if source cannot be read, or if destination cannot be written.
     */
    public static void convertToBinary(File source, File destination) throws IOException {

        if (source == null || destination == null) {
            throw new IllegalArgumentException("parameters may not be null");
        }

        if (source.getAbsolutePath().equals(destination.getAbsolutePath())) {
            throw new IllegalArgumentException("source and destination may not be the same");
        }

        if (source.canRead() == false) {
            throw new IllegalArgumentException("cannot read source file");
        }

        if (destination.exists() ? (destination.canWrite() == false) : (destination.createNewFile() == false)) {
            throw new IllegalArgumentException("cannot write destination file");
        }

        URI sourceURI = source.toURI();
        Stylesheet stylesheet = CSSParser.getInstance().parse(sourceURI.toURL());

        // first write all the css binary data into the buffer and collect strings on way
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        DataOutputStream dos = new DataOutputStream(baos);
        StringStore stringStore = new StringStore();
        stylesheet.writeBinary(dos, stringStore);
        dos.flush();
        dos.close();

        FileOutputStream fos = new FileOutputStream(destination);
        DataOutputStream os = new DataOutputStream(fos);

        // write file version
        os.writeShort(BINARY_CSS_VERSION);

        // write strings
        stringStore.writeBinary(os);

        // write binary css
        os.write(baos.toByteArray());
        os.flush();
        os.close();
    }

}
