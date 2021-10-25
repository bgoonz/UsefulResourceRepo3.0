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

package com.sun.javafx.fxml.builder;

import javafx.scene.shape.TriangleMesh;
import javafx.util.Builder;

import java.util.Locale;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;

public class TriangleMeshBuilder extends TreeMap<String, Object> implements Builder<TriangleMesh> {

    private static final String VALUE_SEPARATOR_REGEX = "[,\\s]+";

    private float[] points;
    private float[] texCoords;
    private int[] faces;
    private int[] faceSmoothingGroups;

    @Override
    public TriangleMesh build() {
        TriangleMesh mesh = new TriangleMesh();
        if (points != null) {
            mesh.getPoints().setAll(points);
        }
        if (texCoords != null) {
            mesh.getTexCoords().setAll(texCoords);
        }
        if (faces != null) {
            mesh.getFaces().setAll(faces);
        }
        if (faceSmoothingGroups != null) {
            mesh.getFaceSmoothingGroups().setAll(faceSmoothingGroups);
        }
        return mesh;
    }

    @Override
    public Object put(String key, Object value) {

        if ("points".equalsIgnoreCase(key)) {
            String[] split = ((String) value).split(VALUE_SEPARATOR_REGEX);
            points = new float[split.length];
            for (int i = 0; i < split.length; ++i) {
                points[i] = Float.parseFloat(split[i]);
            }
        } else if ("texcoords".equalsIgnoreCase(key)) {
            String[] split = ((String) value).split(VALUE_SEPARATOR_REGEX);
            texCoords = new float[split.length];
            for (int i = 0; i < split.length; ++i) {
                texCoords[i] = Float.parseFloat(split[i]);
            }
        } else if ("faces".equalsIgnoreCase(key)) {
            String[] split = ((String) value).split(VALUE_SEPARATOR_REGEX);
            faces = new int[split.length];
            for (int i = 0; i < split.length; ++i) {
                faces[i] = Integer.parseInt(split[i]);
            }
        } else if ("facesmoothinggroups".equalsIgnoreCase(key)) {
            String[] split = ((String) value).split(VALUE_SEPARATOR_REGEX);
            faceSmoothingGroups = new int[split.length];
            for (int i = 0; i < split.length; ++i) {
                faceSmoothingGroups[i] = Integer.parseInt(split[i]);
            }
        }

        return super.put(key.toLowerCase(Locale.ROOT), value);
    }

    @Override
    public Set<Entry<String, Object>> entrySet() {
        return super.entrySet();
    }

}
