/*
 * Copyright (c) 2013, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.javafx.scene.control.behavior;

import javafx.scene.control.DatePicker;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import com.sun.javafx.scene.control.skin.DatePickerSkin;
import static javafx.scene.input.KeyCode.DOWN;
import static javafx.scene.input.KeyCode.F4;
import static javafx.scene.input.KeyCode.UP;
import static javafx.scene.input.KeyEvent.KEY_RELEASED;


public class DatePickerBehavior extends ComboBoxBaseBehavior<LocalDate> {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     *
     */
    public DatePickerBehavior(final DatePicker datePicker) {
        super(datePicker, DATE_PICKER_BINDINGS);
    }

    /***************************************************************************
     *                                                                         *
     * Key event handling                                                      *
     *                                                                         *
     **************************************************************************/

    /**
     * Opens the Date Picker Popup
     */
    protected static final String OPEN_ACTION = "Open";

    /**
     * Closes the Date Picker Popup
     */
    protected static final String CLOSE_ACTION = "Close";


    protected static final List<KeyBinding> DATE_PICKER_BINDINGS = new ArrayList<KeyBinding>();
    static {
        DATE_PICKER_BINDINGS.add(new KeyBinding(F4, KEY_RELEASED, "togglePopup"));
        DATE_PICKER_BINDINGS.add(new KeyBinding(UP, "togglePopup").alt());
        DATE_PICKER_BINDINGS.add(new KeyBinding(DOWN, "togglePopup").alt());
    }

    @Override protected void callAction(String name) {
        switch (name) {
          case OPEN_ACTION:
              show(); break;

          case CLOSE_ACTION:
              hide(); break;

          case "togglePopup":
              if (getControl().isShowing()) {
                  hide();
              } else {
                  show();
              }
              break;

          default:
            super.callAction(name);
        }
    }

    @Override public void onAutoHide() {
        // when we click on some non-interactive part of the
        // calendar - we do not want to hide.
        DatePicker datePicker = (DatePicker)getControl();
        DatePickerSkin cpSkin = (DatePickerSkin)datePicker.getSkin();
        cpSkin.syncWithAutoUpdate();
        // if the DatePicker is no longer showing, then invoke the super method
        // to keep its show/hide state in sync.
        if (!datePicker.isShowing()) super.onAutoHide();
    }

}
