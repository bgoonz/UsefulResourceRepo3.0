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

package com.sun.glass.ui.monocle.input;

import com.sun.glass.events.KeyEvent;
import com.sun.glass.ui.Application;
import com.sun.glass.ui.monocle.MonocleSettings;
import com.sun.glass.ui.monocle.MonocleTrace;
import com.sun.glass.ui.monocle.MonocleView;
import com.sun.glass.ui.monocle.MonocleWindow;
import com.sun.glass.ui.monocle.RunnableProcessor;
import com.sun.glass.ui.monocle.util.IntSet;

import java.security.AccessController;
import java.security.PrivilegedAction;

/**
 * Processes key input events based on changes to key state. Not
 * thread-safe.
 */

public class KeyInput {
    private static KeyInput instance = new KeyInput();

    private KeyState state = new KeyState();
    private IntSet keys = new IntSet();
    private boolean numLock = false;
    private boolean capsLock = false;
    private char[] NO_CHAR = { };

    public static KeyInput getInstance() {
        return instance;
    }

    public void getState(KeyState result) {
        state.copyTo(result);
    }

    public void setState(KeyState newState) {
        if (MonocleSettings.settings.traceEvents) {
            MonocleTrace.traceEvent("Set %s", newState);
        }
        newState.getWindow(true);
        // send release events
        state.getKeysPressed().difference(keys, newState.getKeysPressed());
        if (!keys.isEmpty()) {
            for (int i = 0; i < keys.size(); i++) {
                int key = keys.get(i);
                dispatchKeyEvent(newState, KeyEvent.RELEASE, key);
            }
        }
        keys.clear();
        // send press events
        newState.getKeysPressed().difference(keys, state.getKeysPressed());
        if (!keys.isEmpty()) {
            for (int i = 0; i < keys.size(); i++) {
                int key = keys.get(i);
                if (key == KeyEvent.VK_CAPS_LOCK) {
                    capsLock = !capsLock;
                } else if (key == KeyEvent.VK_NUM_LOCK) {
                    numLock = !numLock;
                } else if (key == KeyEvent.VK_C && newState.isControlPressed()) {
                    AccessController.doPrivileged((PrivilegedAction<Void>) () -> {
                        if ("1".equals(System.getenv("JAVAFX_DEBUG"))) {
                            System.exit(0);
                        }
                        return null;
                    });
                }
                dispatchKeyEvent(newState, KeyEvent.PRESS, key);
            }
        }
        keys.clear();
        newState.copyTo(state);
    }

    private void dispatchKeyEvent(KeyState ks, int type, int key) {
        MonocleWindow window = ks.getWindow(false);
        if (window == null) {
            return;
        }
        MonocleView view = (MonocleView) window.getView();
        if (view == null) {
            return;
        }
        char[] chars = getKeyChars(ks, key);
        int modifiers = ks.getModifiers();
        RunnableProcessor.runLater(() -> {
            view.notifyKey(type, key, chars, modifiers);
        });
        if (type == KeyEvent.PRESS && chars.length > 0) {
            RunnableProcessor.runLater(() -> {
                view.notifyKey(KeyEvent.TYPED, key, chars, modifiers);
            });
        }
    }

    private char[] getKeyChars(KeyState state, int key) {
        char c = '\000';
        boolean shifted = state.isShiftPressed();
        // TODO: implement configurable keyboard mappings.
        // The following is only for US keyboards
        if (key >= KeyEvent.VK_A && key <= KeyEvent.VK_Z) {
            shifted ^= capsLock;
            if (shifted) {
                c = (char) (key - KeyEvent.VK_A + 'A');
            } else {
                c = (char) (key - KeyEvent.VK_A + 'a');
            }
        } else if (key >= KeyEvent.VK_NUMPAD0 && key <= KeyEvent.VK_NUMPAD9) {
            if (numLock) {
                c = (char) (key - KeyEvent.VK_NUMPAD0 + '0');
            }
        } else if (key >= KeyEvent.VK_0 && key <= KeyEvent.VK_9) {
            if (shifted) {
                switch (key) {
                    case KeyEvent.VK_0: c = ')'; break;
                    case KeyEvent.VK_1: c = '!'; break;
                    case KeyEvent.VK_2: c = '@'; break;
                    case KeyEvent.VK_3: c = '#'; break;
                    case KeyEvent.VK_4: c = '$'; break;
                    case KeyEvent.VK_5: c = '%'; break;
                    case KeyEvent.VK_6: c = '^'; break;
                    case KeyEvent.VK_7: c = '&'; break;
                    case KeyEvent.VK_8: c = '*'; break;
                    case KeyEvent.VK_9: c = '('; break;
                }
            } else {
                c = (char) (key - KeyEvent.VK_0 + '0');
            }
        } else if (key == KeyEvent.VK_SPACE) {
            c = ' ';
        } else if (key == KeyEvent.VK_TAB) {
            c = '\t';
        } else if (key == KeyEvent.VK_ENTER) {
            c = '\n';
        } else if (key == KeyEvent.VK_MULTIPLY) {
            c = '*';
        } else if (key == KeyEvent.VK_DIVIDE) {
            c = '/';
        } else if (shifted) {
            switch (key) {
                case KeyEvent.VK_BACK_QUOTE: c = '~'; break;
                case KeyEvent.VK_COMMA: c = '<'; break;
                case KeyEvent.VK_PERIOD: c = '>'; break;
                case KeyEvent.VK_SLASH: c = '?'; break;
                case KeyEvent.VK_SEMICOLON: c = ':'; break;
                case KeyEvent.VK_QUOTE: c = '\"'; break;
                case KeyEvent.VK_BRACELEFT: c = '{'; break;
                case KeyEvent.VK_BRACERIGHT: c = '}'; break;
                case KeyEvent.VK_BACK_SLASH: c = '|'; break;
                case KeyEvent.VK_MINUS: c = '_'; break;
                case KeyEvent.VK_EQUALS: c = '+'; break;
            }        } else {
            switch (key) {
                case KeyEvent.VK_BACK_QUOTE: c = '`'; break;
                case KeyEvent.VK_COMMA: c = ','; break;
                case KeyEvent.VK_PERIOD: c = '.'; break;
                case KeyEvent.VK_SLASH: c = '/'; break;
                case KeyEvent.VK_SEMICOLON: c = ';'; break;
                case KeyEvent.VK_QUOTE: c = '\''; break;
                case KeyEvent.VK_BRACELEFT: c = '['; break;
                case KeyEvent.VK_BRACERIGHT: c = ']'; break;
                case KeyEvent.VK_BACK_SLASH: c = '\\'; break;
                case KeyEvent.VK_MINUS: c = '-'; break;
                case KeyEvent.VK_EQUALS: c = '='; break;
            }
        }
        return c == '\000' ? NO_CHAR : new char[] { c };
    }

    public int getKeyCodeForChar(char c) {
        c = Character.toUpperCase(c);
        // remove shift modification
        switch (c) {
            case '!': c = '1'; break;
            case '@': c = '2'; break;
            case '#': c = '3'; break;
            case '$': c = '4'; break;
            case '%': c = '5'; break;
            case '^': c = '6'; break;
            case '&': c = '7'; break;
            case '*': c = '8'; break;
            case '(': c = '9'; break;
            case ')': c = '0'; break;
            case '~': c = '`'; break;
            case '_': c = '-'; break;
            case '+': c = '='; break;
            case '{': c = '['; break;
            case '}': c = ']'; break;
            case '|': c = '\\'; break;
            case ':': c = ';'; break;
            case '\"': c = '\''; break;
            case '<': c = ','; break;
            case '>': c = '.'; break;
            case '?': c = '/'; break;
        }
        if (c >= 'A' && c <= 'Z') {
            return (c - 'A') + KeyEvent.VK_A;
        } else if (c >= '0' && c <= '9') {
            return (c - '0') + KeyEvent.VK_0;
        }
        switch (c) {
            case '`': return KeyEvent.VK_BACK_QUOTE;
            case '-': return KeyEvent.VK_MINUS;
            case '=': return KeyEvent.VK_EQUALS;
            case '[': return KeyEvent.VK_BRACELEFT;
            case ']': return KeyEvent.VK_BRACERIGHT;
            case '\\': return KeyEvent.VK_BACK_SLASH;
            case ';': return KeyEvent.VK_SEMICOLON;
            case '\'': return KeyEvent.VK_QUOTE;
            case ',': return KeyEvent.VK_COMMA;
            case '.': return KeyEvent.VK_PERIOD;
            case '/': return KeyEvent.VK_SLASH;
            default: return KeyEvent.VK_UNDEFINED;
        }
    }

}
