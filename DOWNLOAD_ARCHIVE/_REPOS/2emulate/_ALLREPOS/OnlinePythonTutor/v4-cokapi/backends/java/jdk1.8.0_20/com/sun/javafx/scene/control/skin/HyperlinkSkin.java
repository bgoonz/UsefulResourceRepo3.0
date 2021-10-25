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

package com.sun.javafx.scene.control.skin;

import javafx.scene.control.Hyperlink;

import com.sun.javafx.scene.control.behavior.ButtonBehavior;

/**
 * A Skin for Hyperlinks.
 */
public class HyperlinkSkin extends LabeledSkinBase<Hyperlink, ButtonBehavior<Hyperlink>> {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    public HyperlinkSkin(Hyperlink link) {
        super(link, new ButtonBehavior<Hyperlink>(link));
    }

}
