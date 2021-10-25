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
package com.sun.glass.events;

public class ViewEvent {
    final static public int ADD                 = 411;
    final static public int REMOVE              = 412;

    final static public int REPAINT             = 421;
    final static public int RESIZE              = 422;
    final static public int MOVE                = 423; // a-la "insets changed"

    final static public int FULLSCREEN_ENTER    = 431;
    final static public int FULLSCREEN_EXIT     = 432;

    static public String getTypeString(int type) {
        String string = "UNKNOWN";
        switch (type) {
            case ADD: string = "ADD"; break;
            case REMOVE: string = "REMOVE"; break;

            case REPAINT: string = "REPAINT"; break;
            case RESIZE: string = "RESIZE"; break;
            case MOVE: string = "MOVE"; break;

            case FULLSCREEN_ENTER: string = "FULLSCREEN_ENTER"; break;
            case FULLSCREEN_EXIT: string = "FULLSCREEN_EXIT"; break;

            default:
                System.err.println("Unknown view event type: " + type);
                break;
        }
        return string;
    }
}
