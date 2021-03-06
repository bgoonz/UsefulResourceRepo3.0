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

package com.sun.glass.ui.monocle.linux;

import com.sun.glass.ui.Application;
import com.sun.glass.ui.monocle.NativePlatformFactory;
import com.sun.glass.ui.monocle.RunnableProcessor;
import com.sun.glass.ui.monocle.input.InputDevice;

import java.io.File;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.ReadableByteChannel;
import java.util.BitSet;
import java.util.Map;

/**
 * A LinuxInputDevice listens for events on a Linux
 * input device node, typically one of the files in /dev/input. When events are
 * waiting to be processed on the device it notifies its listener on a thread
 * provided by its runnable processor object.
 * <p>
 * Event lines are accumulated in a buffer until an event "EV_SYN EV_SYN_REPORT
 * 0" is received. At this point the listener is notified. The listener can then
 * use the methods getEventType(), getEventCode() and getEventValue() to obtain
 * the details of the current event line to process. nextEvent() and
 * hasNextEvent() are used to iterate over pending events.
 * <p>
 * To save on RAM and GC, event lines are not objects.
 */
public class LinuxInputDevice implements Runnable, InputDevice {

    private LinuxInputProcessor inputProcessor;
    private ReadableByteChannel in;
    private long fd = -1;
    private File devNode;
    private File sysPath;
    private Map<String, BitSet> capabilities;
    private Map<Integer, AbsoluteInputCapabilities> absCaps;
    private Map<String, String> udevManifest;
    private ByteBuffer event = ByteBuffer.allocateDirect(LinuxEventBuffer.EVENT_STRUCT_SIZE);
    private RunnableProcessor runnableProcessor;
    private EventProcessor processor = new EventProcessor();
    private LinuxEventBuffer buffer = new LinuxEventBuffer();
    private Map<String,String> uevent;
    private static LinuxSystem system = LinuxSystem.getLinuxSystem();

    /**
     * Create a new com.sun.glass.ui.monocle.input.LinuxInputDevice on the given
     * input node.
     *
     * @param devNode The node on which to listen for input
     * @param sysPath The sysfs path describing the device
     * @throws IOException
     */
    public LinuxInputDevice(
            File devNode,
            File sysPath,
            Map<String, String> udevManifest) throws IOException {
        this.devNode = devNode;
        this.sysPath = sysPath;
        this.udevManifest = udevManifest;
        this.capabilities = SysFS.readCapabilities(sysPath);
        this.absCaps = AbsoluteInputCapabilities.getCapabilities(
                devNode, capabilities.get("abs"));
        fd = system.open(devNode.getPath(), LinuxSystem.O_RDONLY);
        if (fd == -1) {
            throw new IOException(system.getErrorMessage() + " on " + devNode);
        }
        // attempt to grab the device. If the grab fails, keep going.
        int EVIOCGRAB = system.IOW('E', 0x90, 4);
        system.ioctl(fd, EVIOCGRAB, 1);
        this.runnableProcessor = NativePlatformFactory.getNativePlatform()
                .getRunnableProcessor();
        this.uevent = SysFS.readUEvent(sysPath);
    }

    /**
     * Create a new simulated LinuxInputDevice
     *
     * @param capabilities Simulated capabilities
     * @param absCaps Simulated absolute axis capabilities
     * @param in Channel f  or simulated input events
     * @param uevent Simulated uevent data
     */
    public LinuxInputDevice(
            Map<String, BitSet> capabilities,
            Map<Integer, AbsoluteInputCapabilities> absCaps,
            ReadableByteChannel in,
            Map<String, String> udevManifest,
            Map<String, String> uevent) {
        this.capabilities = capabilities;
        this.absCaps = absCaps;
        this.in = in;
        this.udevManifest = udevManifest;
        this.uevent = uevent;
        this.runnableProcessor = NativePlatformFactory.getNativePlatform()
                .getRunnableProcessor();
    }

    public void setInputProcessor(LinuxInputProcessor inputProcessor) {
        this.inputProcessor = inputProcessor;
    }

    private void readToEventBuffer() throws IOException {
        if (in != null) {
            in.read(event);
        } else if (fd != -1) {
            int position = event.position();
            int bytesRead = (int) system.read(fd, event, position, event.limit());
            if (bytesRead == -1) {
                throw new IOException(system.getErrorMessage() + " on " + devNode);
            } else {
                event.position(position + bytesRead);
            }
        }
    }

    @Override
    public void run() {
        if (inputProcessor == null) {
            System.err.println("Error: no input processor set on " + devNode);
            return;
        }
        while (true) {
            try {
                readToEventBuffer();
                if (event.position() == event.limit()) {
                    event.flip();
                    synchronized (buffer) {
                        if (buffer.put(event) && !processor.scheduled) {
                            runnableProcessor.invokeLater(processor);
                            processor.scheduled = true;
                        }
                    }
                    event.rewind();
                }
            } catch (IOException | InterruptedException e) {
                // the device is disconnected
                return;
            }
        }
    }

    /**
     * The EventProcessor is used to notify listeners of pending events. It runs
     * on the application thread.
     */
    class EventProcessor implements Runnable {
        boolean scheduled;

        public void run() {
            buffer.startIteration();
            // Do not lock the buffer while processing events. We still want to be
            // able to add incoming events to it.
            try {
                inputProcessor.processEvents(LinuxInputDevice.this);
            } catch (RuntimeException e) {
                Application.reportException(e);
            }
            synchronized (buffer) {
                if (buffer.hasNextEvent()) {
                    // a new event came in after the call to processEvents
                    runnableProcessor.invokeLater(processor);
                } else {
                    processor.scheduled = false;
                }
                buffer.compact();
            }
        }
    }

    public LinuxEventBuffer getBuffer() {
        return buffer;
    }

    /** Asks whether the device is quiet. "Quiet" means that the event
     * reader is blocked waiting for events, the buffer is empty and the event
     * processor is not scheduled. Called on the application thread.
     */
    public boolean isQuiet() {
        synchronized (buffer) {
            return !processor.scheduled && !buffer.hasData();
        }
    }

    /**
     * @return a string describing this input device
     */
    public String toString() {
        return devNode == null ? "Robot" : devNode.toString();
    }

    BitSet getCapability(String type) {
        return capabilities.get(type);
    }

    AbsoluteInputCapabilities getAbsoluteInputCapabilities(int axis) {
        return absCaps == null ? null : absCaps.get(axis);
    }

    String getProduct() {
        return uevent.get("PRODUCT");
    }

    @Override
    public boolean isTouch() {
        return "1".equals(udevManifest.get("ID_INPUT_TOUCHSCREEN"))
                || "1".equals(udevManifest.get("ID_INPUT_TABLET"));
    }

    @Override
    public boolean isMultiTouch() {
        if (isTouch()) {
            BitSet abs = capabilities.get("abs");
            if (abs == null) {
                return false;
            }
            return abs.get(Input.ABS_MT_SLOT)
                    || (abs.get(Input.ABS_MT_POSITION_X)
                        && abs.get(Input.ABS_MT_POSITION_Y));
        } else {
            return false;
        }
    }

    @Override
    public boolean isRelative() {
        return "1".equals(udevManifest.get("ID_INPUT_MOUSE"));
    }

    @Override
    public boolean is5Way() {
        BitSet key = capabilities.get("key");
        if (key == null) {
            return false;
        }
        // Make sure we have all arrow keys
        for (int i = 0; i < KeyBits.KEYBITS_ARROWS.length; i++) {
            if (!key.get(KeyBits.KEYBITS_ARROWS[i])) {
                return false;
            }
        }
        // and at least one select key
        for (int i = 0; i < KeyBits.KEYBITS_SELECT.length; i++) {
            if (key.get(KeyBits.KEYBITS_SELECT[i])) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean isFullKeyboard() {
        BitSet key = capabilities.get("key");
        if (key == null) {
            return false;
        }
        // Make sure we have all alphanumeric keys
        for (int i = 0; i < KeyBits.KEYBITS_PC.length; i++) {
            if (!key.get(KeyBits.KEYBITS_PC[i])) {
                return false;
            }
        }
        // ...and the 5-way keys
        return is5Way();
    }

}
