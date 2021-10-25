/*
 * Copyright (c) 2009, 2014, Oracle and/or its affiliates. All rights reserved.
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

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * StringStore
 *
 */
public class StringStore {
    private final Map<String,Integer> stringMap = new HashMap<String,Integer>();
    public final List<String> strings = new ArrayList<String>();

    public int addString(String s) {

        Integer index = stringMap.get(s);
        if (index == null) {
            index = strings.size();
            strings.add(s);
            stringMap.put(s,index);
        }
        return index;
    }

    public void writeBinary(DataOutputStream os) throws IOException {
        os.writeShort(strings.size());
        if (stringMap.containsKey(null)) {
            Integer index = stringMap.get(null);
            os.writeShort(index);
        } else {
            os.writeShort(-1);
        }
        for (int n=0; n<strings.size(); n++) {
            String s = strings.get(n);
            if (s == null) continue;
            os.writeUTF(s);
        }
    }

    // TODO: this isn't parallel with writeBinary
    static String[] readBinary(DataInputStream is) throws IOException {
        int nStrings = is.readShort();
        int nullIndex = is.readShort();
        String[] strings = new String[nStrings];
        java.util.Arrays.fill(strings, null);
        for (int n=0; n<nStrings; n++) {
            if (n == nullIndex) continue;
            strings[n] = is.readUTF();
        }
        return strings;
    }
}
