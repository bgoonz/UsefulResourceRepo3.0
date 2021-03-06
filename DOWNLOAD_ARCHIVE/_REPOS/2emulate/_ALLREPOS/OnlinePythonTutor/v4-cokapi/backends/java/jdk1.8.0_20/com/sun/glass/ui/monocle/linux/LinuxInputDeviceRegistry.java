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

import com.sun.glass.ui.monocle.input.InputDeviceRegistry;

import java.io.File;
import java.io.IOException;
import java.security.AllPermission;
import java.util.BitSet;
import java.util.HashMap;
import java.util.Map;

public class LinuxInputDeviceRegistry extends InputDeviceRegistry {

    public LinuxInputDeviceRegistry(boolean headless) {
        if (headless) {
            // Keep the registry but do not bind it to udev.
            return;
        }
        Map<File, LinuxInputDevice> deviceMap = new HashMap<>();
        UdevListener udevListener = (action, event) -> {
            String subsystem = event.get("SUBSYSTEM");
            String devPath = event.get("DEVPATH");
            String devName = event.get("DEVNAME");
            if (subsystem != null && subsystem.equals("input")
                    && devPath != null && devName != null) {
                try {
                    File sysPath = new File("/sys", devPath);
                    if (action.equals("add")
                            || (action.equals("change")
                            && !deviceMap.containsKey(sysPath))) {
                        File devNode = new File(devName);
                        LinuxInputDevice device = createDevice(
                                devNode, sysPath, event);
                        if (device != null) {
                            deviceMap.put(sysPath, device);
                        }
                    } else if (action.equals("remove")) {
                        LinuxInputDevice device = deviceMap.get(sysPath);
                        deviceMap.remove(sysPath);
                        if (device != null) {
                            devices.remove(device);
                        }
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        };
        Udev.getInstance().addListener(udevListener);
        // Request updates for existing devices
        SysFS.triggerUdevNotification("input");
    }

    private LinuxInputDevice createDevice(File devNode,
                                          File sysPath,
                                          Map<String, String> udevManifest)
            throws IOException {
        LinuxInputDevice device = new LinuxInputDevice(
                devNode, sysPath, udevManifest);
        return addDeviceInternal(device, "Linux input: " + devNode.toString());
    }

    public LinuxInputDevice addDevice(LinuxInputDevice device, String name) {
        SecurityManager security = System.getSecurityManager();
        if (security != null) {
            security.checkPermission(new AllPermission());
        }
        return addDeviceInternal(device, name);
    }

    private LinuxInputDevice addDeviceInternal(LinuxInputDevice device, String name) {
        LinuxInputProcessor processor = createInputProcessor(device);
        if (processor == null) {
            return null;
        } else {
            device.setInputProcessor(createInputProcessor(device));
            Thread thread = new Thread(device);
            thread.setName(name);
            thread.setDaemon(true);
            thread.start();
            devices.add(device);
            return device;
        }
    }

    public void removeDevice(LinuxInputDevice device) {
        SecurityManager security = System.getSecurityManager();
        if (security != null) {
            security.checkPermission(new AllPermission());
        }
        devices.remove(device);
    }

    private LinuxInputProcessor createInputProcessor(LinuxInputDevice device) {
        if (device.isTouch()) {
            BitSet absCaps = device.getCapability("abs");
            boolean isMT = absCaps.get(Input.ABS_MT_POSITION_X)
                    && absCaps.get(Input.ABS_MT_POSITION_Y);
            if (isMT) {
                if (absCaps.get(Input.ABS_MT_TRACKING_ID)) {
                    return new LinuxStatefulMultiTouchProcessor(device);
                } else {
                    return new LinuxStatelessMultiTouchProcessor(device);
                }
            } else {
                return new LinuxSimpleTouchProcessor(device);
            }
        } else if (device.isRelative()) {
            return new LinuxMouseProcessor();
        } else {
            BitSet keyCaps = device.getCapability("key");
            if (keyCaps != null && !keyCaps.isEmpty()) {
                return new LinuxKeyProcessor();
            } else {
                return null;
            }
        }
    }

}
