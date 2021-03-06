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

import com.sun.glass.ui.Application;

import java.util.LinkedList;
import java.util.concurrent.CountDownLatch;

public class RunnableProcessor implements Runnable {

    private RunnableQueue queue = new RunnableQueue();

    private static class RunLoopControl {
        boolean active; // thread should continue to process events.
        Object release; // object to return with on leave nested
    }

    // our stack of nested run loops
    private LinkedList<RunLoopControl> activeRunLoops = new LinkedList<RunLoopControl>();

    @Override
    public void run() {
        runLoop();
    }

    public void invokeLater(Runnable r) {
        queue.postRunnable(r);
    }

    public void invokeAndWait(final Runnable r) {
        final CountDownLatch latch = new CountDownLatch(1);
        queue.postRunnable(() -> {
            try {
                r.run();
            } finally {
                latch.countDown();
            }
        });
        try {
            latch.await();
        } catch (InterruptedException e) { }
    }

    private Object runLoop() {
        final RunLoopControl control = new RunLoopControl();

        //push this new instance on the stack
        activeRunLoops.push(control);

        control.active = true;
        while (control.active) {
            try {
                queue.getNextRunnable().run();
            } catch (Throwable e) {
                Application.reportException(e);
            }
        }

        return control.release;

    }

    Object enterNestedEventLoop() {
        // we are being called on the current active event thread
        // via dispatch, so it is stalled until we return.

        // start our nested loop, which will block until that exits
        Object ret = runLoop();

        // and return the value that was passed into leaveNested
        return ret;
    }

    void leaveNestedEventLoop(Object retValue) {
        // we are being called from dispatch of the current running
        // event thread. We want to cause this thread to exit, and
        // restart the nested on.

        RunLoopControl current = activeRunLoops.pop();
        assert current != null;

        // let the current run loop die when we return to dispatch.
        current.active = false;
        // and give it the ret object so it will return it to the
        // blocked nesting call.
        current.release = retValue;

        // when we return from this dispatched event, we will exit
        // because we are no longer active, and then the nested
        // call can return the release value we just provided.
    }

    void shutdown() {
        synchronized (queue) {
            queue.clear();
            while (!activeRunLoops.isEmpty()) {
                RunLoopControl control = activeRunLoops.pop();
                control.active = false;
            }
            queue.notifyAll();
        }
    }

    public static void runLater(Runnable r) {
        NativePlatformFactory.getNativePlatform()
                .getRunnableProcessor()
                .invokeLater(r);
    }

}
