/*
 * Copyright (c) 2012, 2014, Oracle and/or its affiliates. All rights reserved.
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
package com.sun.glass.ui.swt;

import org.eclipse.swt.*;
import org.eclipse.swt.widgets.*;

import com.sun.glass.ui.Timer;

final class SWTTimer extends Timer implements Runnable {
    Runnable timerRunnable;
    int period = 16;
    static final boolean THREAD_TIMER = System.getProperty("glass.swt.threadtimer") != null;
    
    protected SWTTimer(Runnable runnable) {
        super(runnable);
    }

    @Override protected long _start(Runnable runnable) {
        return 1;
    };
    
    @Override
    protected long _start(final Runnable runnable, final int period) {
        //TODO - timing bug when start/stop timer (shared state)
        //TODO - stop old timer before starting a new one
        this.period = period;
        if (THREAD_TIMER) {
            timerRunnable = runnable;
            new Thread(this).start();
            return 1;
        }
        final Display display = Display.getDefault();
        timerRunnable = new Runnable() {
            public void run() {
                runnable.run();
                display.timerExec(period, this);
            };
        };
        display.asyncExec(() -> {
            display.timerExec(period, timerRunnable);
            display.addListener(SWT.Dispose, e -> {
                if (timerRunnable == null) return;
                display.timerExec(-1, timerRunnable);
                timerRunnable = null;
            });
        });
        return 1;
    }

    @Override
    protected void _stop(long timer) {
        //TODO - timing bug when start/stop timer (shared state)
        if (timerRunnable == null) return;
        if (THREAD_TIMER) {
            timerRunnable = null;
            return;
        }
        final Display display = Display.getDefault();
        display.asyncExec(() -> {
            if (timerRunnable == null) return;
            display.timerExec(-1, timerRunnable);
            timerRunnable = null;
        });
    }

    public void run() {
        while (timerRunnable != null) {
            long startTime = System.currentTimeMillis();
            timerRunnable.run();
            long sleepTime = period - (System.currentTimeMillis() - startTime);
            if (sleepTime > 0) {
                try {
                    Thread.sleep(sleepTime);
                } catch (InterruptedException e) { }
            }
        }
    }
}

