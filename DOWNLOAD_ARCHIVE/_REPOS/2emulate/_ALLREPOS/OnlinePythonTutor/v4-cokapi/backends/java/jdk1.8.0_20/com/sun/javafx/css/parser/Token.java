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

package com.sun.javafx.css.parser;


final class Token {

    final static int EOF = -1;
    final static int INVALID = 0;
    final static int SKIP = 1;

    final static Token EOF_TOKEN = new Token(EOF, "EOF");
    final static Token INVALID_TOKEN = new Token(INVALID, "INVALID");
    final static Token SKIP_TOKEN = new Token(SKIP, "SKIP");

    Token(int type, String text, int line, int offset) {
        this.type = type;
        this.text = text;
        this.line = line;
        this.offset = offset;        
    }
    
    Token(int type, String text) {
        this(type, text, -1, -1);
    }

    Token(int type) {
        this(type, null);
    }

    private Token() {
        this(0, "INVALID");
    }

    String getText() {
        return text;
    }

    int getType() {
        return type;
    }

    int getLine() {
        return line;
    }

    void setLine(int line) {
        this.line = line;
    }

    int getOffset() {
        return offset;
    }

    void setOffset(int offset) {
        this.offset = offset;
    }

    @Override public String toString() {
        final StringBuilder buf = new StringBuilder();
        buf.append('[').append(line).append(',').append(offset).append(']')
           .append(',').append(text).append(",<").append(type).append('>');
        return buf.toString();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null ||
            getClass() != obj.getClass()) {
            return false;
        }
        final Token other = (Token) obj;
        if (this.type != other.type) {
            return false;
        }
        if ((this.text == null) ? (other.text != null) : !this.text.equals(other.text)) {
            return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + this.type;
        hash = 67 * hash + (this.text != null ? this.text.hashCode() : 0);
        return hash;
    }


    private final String text;
    private int offset;
    private int line;
    private final int type;


}
