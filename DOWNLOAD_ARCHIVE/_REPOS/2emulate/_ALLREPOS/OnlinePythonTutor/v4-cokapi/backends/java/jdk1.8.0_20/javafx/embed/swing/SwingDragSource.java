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

package javafx.embed.swing;

import com.sun.javafx.embed.EmbeddedSceneDSInterface;
import com.sun.javafx.tk.Toolkit;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.Transferable;
import java.awt.dnd.DropTargetDragEvent;
import java.awt.dnd.DropTargetDropEvent;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import javafx.scene.input.TransferMode;

/**
 * Drag source to deliver data from Swing environment to embedded FX scene.
 */
final class SwingDragSource implements EmbeddedSceneDSInterface {

    private int sourceActions;
    private Map<String, Object> mimeType2Data = Collections.EMPTY_MAP;

    SwingDragSource() {
    }
    
    void updateContents(final DropTargetDragEvent e, boolean fetchData) {
        sourceActions = e.getSourceActions();
        updateData(e.getTransferable(), fetchData);
    }

    void updateContents(final DropTargetDropEvent e, boolean fetchData) {
        sourceActions = e.getSourceActions();
        updateData(e.getTransferable(), fetchData);
    }

    private void updateData(Transferable t, boolean fetchData) {
        final Map<String, DataFlavor> mimeType2DataFlavor =
                DataFlavorUtils.adjustSwingDataFlavors(
                t.getTransferDataFlavors());

        // If we keep reference to source Transferable in SwingDragSource and
        // call Transferable#getTransferData() on it from
        // SwingDragSource#getData() we may run into
        // "java.awt.dnd.InvalidDnDOperationException" issue as
        // SwingDragSource#getData() is called from FX user code and from
        // QuantumClipboard#getContent() (sik!). These calls usually take
        // place in the context of 
        // EmbeddedSceneDTInterface#handleDragDrop() method as the
        // normal handling of DnD.
        // Instead of keeping reference to source Transferable we just read
        // all its data while in the context safe for calling
        // Transferable#getTransferData().
        //
        // This observation is true for standard AWT Transferable-s. 
        // Things may be totally broken for custom Transferable-s though.

        // For performance reasons, the DRAG_ENTERED and DRAG_OVER event
        // handlers pass fetchData == false so as to update the set of
        // available MIME types only. The DRAG_DROPPED handler passes
        // fetchData == true which also fetches all the data.
        // NOTE: Due to JDK-8028585 this code won't be able to fetch data
        // when invoked from handlers other than DROPPED in any case.

        try {
            mimeType2Data = DataFlavorUtils.readAllData(t, mimeType2DataFlavor,
                    fetchData);
        } catch (Exception e) {
            mimeType2Data = Collections.EMPTY_MAP;
        }
    }

    @Override
    public Set<TransferMode> getSupportedActions() {
        assert Toolkit.getToolkit().isFxUserThread();
        return SwingDnD.dropActionsToTransferModes(sourceActions);
    }

    @Override
    public Object getData(final String mimeType) {
        assert Toolkit.getToolkit().isFxUserThread();
        return mimeType2Data.get(mimeType);
    }

    @Override
    public String[] getMimeTypes() {
        assert Toolkit.getToolkit().isFxUserThread();
        return mimeType2Data.keySet().toArray(new String[0]);
    }

    @Override
    public boolean isMimeTypeAvailable(final String mimeType) {
        assert Toolkit.getToolkit().isFxUserThread();
        return Arrays.asList(getMimeTypes()).contains(mimeType);
    }

    @Override
    public void dragDropEnd(TransferMode performedAction) {
        throw new UnsupportedOperationException();                
    }
}
