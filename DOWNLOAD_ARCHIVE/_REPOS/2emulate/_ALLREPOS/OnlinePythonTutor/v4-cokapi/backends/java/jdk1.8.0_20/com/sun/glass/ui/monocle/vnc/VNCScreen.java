/*
 * Copyright (c) 2010, 2014, Oracle and/or its affiliates. All rights reserved.
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

package com.sun.glass.ui.monocle.vnc;

import com.sun.glass.events.MouseEvent;
import com.sun.glass.ui.monocle.headless.HeadlessScreen;
import com.sun.glass.ui.monocle.input.MouseInput;
import com.sun.glass.ui.monocle.input.MouseState;
import javafx.application.Platform;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.channels.WritableByteChannel;
import java.nio.charset.Charset;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.BitSet;
import java.util.HashSet;
import java.util.Set;

/** A headless screen that is available for remote connections using the
 * RFB 3.3 protocol on port 5901.
 */
public class VNCScreen extends HeadlessScreen {

    private ServerSocketChannel server;
    private Set<ClientConnection> clients = new HashSet<ClientConnection>();

    public VNCScreen() {
        super(1024, 600, 32);
        try {
            server = ServerSocketChannel.open();
            int vncPort = AccessController.doPrivileged(
                    (PrivilegedAction<Integer>)
                            () -> Integer.getInteger("vnc.port", 5901));
            server.bind(new InetSocketAddress(vncPort));
            Thread t = new Thread(new ConnectionAccepter());
            t.setDaemon(true);
            t.setName("VNC Server on port " + vncPort);
            t.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void shutdown() {
        super.shutdown();
        for (ClientConnection cc : clients) {
            try {
                cc.socket.close();
            } catch (IOException e) { }
        }
    }

    @Override
    public void swapBuffers() {
        ClientConnection[] ccs;
        synchronized (clients) {
            ccs = clients.toArray(new ClientConnection[clients.size()]);
        }
        for (ClientConnection cc : ccs) {
            try {
                sendBuffer(cc.socket);
            } catch (IOException e) {
                clients.remove(cc);
            }
        }
        super.swapBuffers();
    }

    private void removeClient(ClientConnection cc, IOException e) {
        synchronized (clients) {
            if (clients.contains(cc)) {
                System.out.format("Disconnecting %s: %s\n",
                                  cc.descriptor, e.getMessage());
                clients.remove(cc);
            }
        }
    }

    private void sendBuffer(WritableByteChannel out) throws IOException {
        ByteBuffer buffer = ByteBuffer.allocate(16);
        buffer.order(ByteOrder.BIG_ENDIAN);
        buffer.put((byte) 0);
        buffer.put((byte) 0);
        buffer.putShort((short) 1); // rectangle count
        buffer.putShort((short) 0); // x
        buffer.putShort((short) 0); // y
        buffer.putShort((short) width);
        buffer.putShort((short) height);
        buffer.putInt(0); // raw
        buffer.flip();
        out.write(buffer);
        fb.write(out);
    }

    private class ConnectionAccepter implements Runnable {
        @Override
        public void run() {
            ByteBuffer buffer = ByteBuffer.allocate(64);
            buffer.order(ByteOrder.BIG_ENDIAN);
            while (true) {
                try {
                    SocketChannel client = server.accept();
                    System.out.format("Connection received from %s\n",
                                      client.getRemoteAddress());
                    // Declare the server protocol version
                    buffer.clear();
                    buffer.put("RFB 003.003\n".getBytes());
                    buffer.flip();
                    client.write(buffer);
                    // Read the client protocol version
                    buffer.clear();
                    buffer.limit(12);
                    client.read(buffer);
                    buffer.flip();
                    System.out.format("Client supports %s\n",
                                      Charset.forName("UTF-8")
                                              .decode(buffer).toString().trim());
                    buffer.clear();
                    buffer.putInt(1); // no authentication
                    buffer.flip();
                    client.write(buffer);
                    buffer.clear();
                    buffer.limit(1);
                    client.read(buffer);
                    System.out.format("Client share request: %d\n",
                                      buffer.get(0));
                    buffer.clear();
                    buffer.putShort((short) width);
                    buffer.putShort((short) height);
                    buffer.put((byte) depth);
                    buffer.put((byte) depth);
                    buffer.put((byte) (ByteOrder.nativeOrder().equals(ByteOrder.BIG_ENDIAN) ? 0 : 1));
                    buffer.put((byte) 1); // true color
                    if (depth == 32) {
                        buffer.putShort((short) 255); // red max
                        buffer.putShort((short) 255); // green max
                        buffer.putShort((short) 255); // blue max
                        buffer.put((byte) 16); // red offset
                        buffer.put((byte) 8); // blue offset
                        buffer.put((byte) 0); // green offset
                    } else {
                        buffer.putShort((byte) (short) 31);
                        buffer.putShort((byte) (short) 63);
                        buffer.putShort((byte) (short) 31);
                        buffer.put((byte) 11);
                        buffer.put((byte) 5);
                        buffer.put((byte) 0);
                    }
                    buffer.put((byte) 0); // padding
                    buffer.put((byte) 0);
                    buffer.put((byte) 0);
                    String name = "JavaFX on " + client.getLocalAddress();
                    buffer.putInt(name.length());
                    buffer.put(name.getBytes());
                    buffer.flip();
                    client.write(buffer);
                    ClientConnection cc = new ClientConnection();
                    cc.socket = client;
                    Thread t = new Thread(cc);
                    t.setDaemon(true);
                    t.setName("VNC client connection from "
                                      + client.getRemoteAddress());
                    t.start();
                    synchronized (clients) {
                        clients.add(cc);
                    }
                    sendBuffer(client);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private class ClientConnection implements Runnable {
        private SocketChannel socket;
        private String descriptor;
        @Override
        public void run() {
            ByteBuffer buffer = ByteBuffer.allocate(32);
            buffer.order(ByteOrder.BIG_ENDIAN);
            try {
                descriptor = socket.getRemoteAddress().toString();
                while (true) {
                    buffer.clear();
                    buffer.limit(4);
                    socket.read(buffer);
                    switch (buffer.get(0)) {
                        case 0: // SetPixelFormat
                            // discard the message in the next 16 bytes
                            buffer.clear();
                            buffer.limit(16);
                            socket.read(buffer);
                            break;
                        case 1: // FixColorMapEntries
                            buffer.clear();
                            buffer.limit(2);
                            socket.read(buffer);
                            // discard color map entries
                            int colorMapEntryCount = buffer.getShort(0);
                            for (int i = 0; i < colorMapEntryCount; i++) {
                                buffer.clear();
                                buffer.limit(6);
                                socket.read(buffer);
                            }
                            break;
                        case 2: // SetEncodings
                            // discard encodings
                            int encodingCount = buffer.getShort(2);
                            for (int i = 0; i < encodingCount; i++) {
                                buffer.clear();
                                buffer.limit(4);
                                socket.read(buffer);
                            }
                        case 3: // FramebufferUpdateRequest
                            buffer.clear();
                            buffer.limit(6);
                            socket.read(buffer);
                            Platform.runLater(() -> {
                                try {
                                    if (fb.hasReceivedData()) {
                                        // an update is in progress and will
                                        // be sent on the next call to
                                        // swapBuffers. No need to
                                        // respond to this request.
                                    } else {
                                        sendBuffer(socket);
                                    }
                                } catch (IOException e) {
                                    removeClient(ClientConnection.this, e);
                                }
                            });
                            break;
                        case 4: // KeyEvent
                            buffer.clear();
                            buffer.limit(4);
                            socket.read(buffer);
                            break;
                        case 5: { // PointerEvent
                            int x = buffer.getShort(2);
                            buffer.position(1);
                            buffer.limit(2);
                            BitSet buttons = BitSet.valueOf(buffer);
                            buffer.clear();
                            buffer.limit(2);
                            socket.read(buffer);
                            int y = buffer.getShort(0);
                            final MouseState state = new MouseState();
                            state.setX(x);
                            state.setY(y);
                            if (buttons.get(0)) {
                                state.pressButton(MouseEvent.BUTTON_LEFT);
                            }
                            if (buttons.get(1)) {
                                state.pressButton(MouseEvent.BUTTON_OTHER);
                            }
                            if (buttons.get(2)) {
                                state.pressButton(MouseEvent.BUTTON_RIGHT);
                            }
                            Platform.runLater(() -> MouseInput.getInstance().setState(state, false));
                            break;
                        }
                        case 6: // ClientCutText
                            buffer.clear();
                            buffer.limit(4);
                            socket.read(buffer);
                            int textLength = buffer.getInt(0);
                            for (int i = 0; i < textLength; i++) {
                                buffer.clear();
                                buffer.limit(1);
                                socket.read(buffer);
                            }
                            break;
                        default:
                            System.err.format(
                                    "Unknown message %d from client %s\n",
                                    buffer.get(0), socket.getRemoteAddress());
                    }
                }
            } catch (IOException e) {
                removeClient(this, e);
            }
        }
    }

}
