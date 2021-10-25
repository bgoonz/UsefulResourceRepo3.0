/*
 * Copyright (c) 2011, 2014, Oracle and/or its affiliates. All rights reserved.
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

package javafx.scene.control;

//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;

/**
 * Text field that masks entered characters.
 * @since JavaFX 2.0
 */
public class PasswordField extends TextField {

    /**
     * Creates a default PasswordField instance.
     */
    public PasswordField() {
        getStyleClass().add("password-field");
    }

    /***************************************************************************
     *                                                                         *
     * Methods                                                                 *
     *                                                                         *
     **************************************************************************/

    /**
     * Does nothing for PasswordField.
     */
    @Override public void cut() {
        // No-op
    }

    /**
     * Does nothing for PasswordField.
     */
    @Override public void copy() {
        // No-op
    }


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.PASSWORD_FIELD;
//            case TITLE: return null;
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
