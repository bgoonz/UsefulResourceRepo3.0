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

package com.sun.glass.ui.monocle;

import com.sun.glass.events.MouseEvent;
import com.sun.glass.ui.Pixels;
import com.sun.glass.ui.Robot;
import com.sun.glass.ui.monocle.input.KeyInput;
import com.sun.glass.ui.monocle.input.KeyState;
import com.sun.glass.ui.monocle.input.MouseInput;
import com.sun.glass.ui.monocle.input.MouseState;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import javafx.application.Platform;

import java.nio.IntBuffer;
import java.nio.ShortBuffer;

public class MonocleRobot extends Robot {
    @Override
    protected void _create() {
    }

    @Override
    protected void _destroy() {
    }

    @Override
    protected void _keyPress(int code) {
        Platform.runLater(() -> {
            KeyState state = new KeyState();
            KeyInput.getInstance().getState(state);
            state.pressKey(code);
            KeyInput.getInstance().setState(state);
        });
    }

    @Override
    protected void _keyRelease(int code) {
        Platform.runLater(() -> {
            KeyState state = new KeyState();
            KeyInput.getInstance().getState(state);
            state.releaseKey(code);
            KeyInput.getInstance().setState(state);
        });
    }

    @Override
    protected void _mouseMove(int x, int y) {
        Platform.runLater(() -> {
            MouseState state = new MouseState();
            MouseInput.getInstance().getState(state);
            state.setX(x);
            state.setY(y);
            MouseInput.getInstance().setState(state, false);
        });
    }

    @Override
    protected void _mousePress(int buttons) {
        Platform.runLater(() -> {
            MouseState state = new MouseState();
            MouseInput.getInstance().getState(state);
            if ((buttons & MOUSE_LEFT_BTN) != 0) {
                state.pressButton(MouseEvent.BUTTON_LEFT);
            }
            if ((buttons & MOUSE_MIDDLE_BTN) != 0) {
                state.pressButton(MouseEvent.BUTTON_OTHER);
            }
            if ((buttons & MOUSE_RIGHT_BTN) != 0) {
                state.pressButton(MouseEvent.BUTTON_RIGHT);
            }
            MouseInput.getInstance().setState(state, false);
        });
    }

    @Override
    protected void _mouseRelease(int buttons) {
        Platform.runLater(() -> {
            MouseState state = new MouseState();
            MouseInput.getInstance().getState(state);
            if ((buttons & MOUSE_LEFT_BTN) != 0) {
                state.releaseButton(MouseEvent.BUTTON_LEFT);
            }
            if ((buttons & MOUSE_MIDDLE_BTN) != 0) {
                state.releaseButton(MouseEvent.BUTTON_OTHER);
            }
            if ((buttons & MOUSE_RIGHT_BTN) != 0) {
                state.releaseButton(MouseEvent.BUTTON_RIGHT);
            }
            MouseInput.getInstance().setState(state, false);
        });
    }

    @Override
    protected void _mouseWheel(int wheelAmt) {
        Platform.runLater(() -> {
            MouseState state = new MouseState();
            MouseInput mouse = MouseInput.getInstance();
            mouse.getState(state);
            int direction = wheelAmt < 0
                            ? MouseState.WHEEL_DOWN
                            : MouseState.WHEEL_UP;
            for (int i = 0; i < Math.abs(wheelAmt); i++) {
                state.setWheel(direction);
                mouse.setState(state, false);
                state.setWheel(MouseState.WHEEL_NONE);
                mouse.setState(state, false);
            }
        });
    }

    @Override
    protected int _getMouseX() {
        MouseState state = new MouseState();
        MouseInput.getInstance().getState(state);
        return state.getX();
    }

    @Override
    protected int _getMouseY() {
        MouseState state = new MouseState();
        MouseInput.getInstance().getState(state);
        return state.getY();
    }

    @Override
    protected int _getPixelColor(int x, int y) {
        NativeScreen screen = NativePlatformFactory.getNativePlatform().getScreen();
        final int byteDepth = screen.getDepth() >>> 3;
        final int bwidth = screen.getWidth();
        final int bheight = screen.getHeight();

        if (x < 0 || x > bwidth || y < 0 || y > bheight) {
            return 0;
        }

        synchronized (NativeScreen.framebufferSwapLock) {

            ByteBuffer buffer = screen.getScreenCapture();

            if (byteDepth == 2) {
                ShortBuffer shortbuf = buffer.asShortBuffer();

                int v = shortbuf.get((y * bwidth) + x);
                int red = (int) ((v & 0xF800) >> 11) << 3;
                int green = (int) ((v & 0x7E0) >> 5) << 2;
                int blue = (int) (v & 0x1F) << 3;

                int p = (0xff000000
                        | (red << 16)
                        | (green << 8)
                        | blue);
                return p;
            } else if (byteDepth >= 4) {
                IntBuffer intbuf = buffer.asIntBuffer();
                return intbuf.get((y * bwidth) + x);
            } else {
                throw new RuntimeException("Unknown bit depth");
            }
        }
    }

    @Override
    protected Pixels _getScreenCapture(int x, int y, int width, int height,
            boolean isHiDPI) {
        NativeScreen screen = NativePlatformFactory.getNativePlatform().getScreen();
        final int byteDepth = screen.getDepth() >>> 3;
        final int bwidth = screen.getWidth();
        final int bheight = screen.getHeight();
        IntBuffer ret = null;

        synchronized (NativeScreen.framebufferSwapLock) {

            ByteBuffer buffer = screen.getScreenCapture();

            if (x == 0 && y == 0
                    && width == screen.getWidth() && height == screen.getHeight()
                    && byteDepth == 4) {
                return new MonoclePixels(width, height, buffer.asIntBuffer());
            } else {
                int size = width * height;
                ret = IntBuffer.allocate(size);

                ShortBuffer shortbuf = null;
                IntBuffer intbuf = null;

                if (byteDepth == 2) {
                    shortbuf = buffer.asShortBuffer();
                } else if (byteDepth >= 4) {
                    intbuf = buffer.asIntBuffer();
                } else {
                    throw new RuntimeException("Unknown bit depth");
                }

                // create a subset of the capture in the return buffer
                int row, col;
                for (row = y; row < y + height; row++) {
                    // stepping through one row at a time.

                    int bufferRowStart = row * bwidth; // first in the screen row
                    int retRowStart = (row - y) * width; // first in return row

                    ret.position(retRowStart);
                    if ((row < 0) || (row >= bheight)) {
                        // off the top or bottom of the window
                        for (col = 0; col < width; col++) {
                            ret.put(0xff000000); //black
                        }
                    } else {
                        // in the y body

                        // if off the edge, left
                        for (col = x; col < 0; col++) {
                            ret.put(0xff000000); //black
                        }

                        for (; col < x + width && col < bwidth; col++) {
                            // get our color from the bytebuffer

                            if (byteDepth == 4) {
                                ret.put(intbuf.get(bufferRowStart + col));
                            } else if (byteDepth == 2) {
                                int v = shortbuf.get(bufferRowStart + col);
                                int red = (int) ((v & 0xF800) >> 11) << 3;
                                int green = (int) ((v & 0x7E0) >> 5) << 2;
                                int blue = (int) (v & 0x1F) << 3;

                                int p = (0xff000000 | 
                                        (red << 16) | 
                                        (green << 8) | 
                                        blue);

                                ret.put(p);
                            }

                        }

                        // if off the edge right
                        for (; col < x + width; col++) {
                            ret.put(0xff000000); //black
                        }

                    }
                }
            }
            ret.clear();

            return new MonoclePixels(width, height, ret);
        }
    }
}
