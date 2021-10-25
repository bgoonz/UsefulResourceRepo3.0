/*
 * Copyright (c) 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.logging;

import com.oracle.jrockit.jfr.ContentType;
import com.oracle.jrockit.jfr.EventDefinition;
import com.oracle.jrockit.jfr.EventToken;
import com.oracle.jrockit.jfr.TimedEvent;
import com.oracle.jrockit.jfr.ValueDefinition;

@EventDefinition(path="javafx/input", name = "JavaFX Input", description="JavaFX input event", stacktrace=false, thread=true)
public class JFRInputEvent extends TimedEvent {

    @ValueDefinition(name="inputType", description="Input event type", contentType=ContentType.None)
    private String input;
    
    public JFRInputEvent(EventToken eventToken) {
        super(eventToken);
    }

    public String getInput() {
        return input;
    }
    
    public void setInput(String s) {
        input = s;
    }    
}
