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

import javafx.css.PseudoClass;
import javafx.beans.InvalidationListener;
import javafx.beans.Observable;
import javafx.beans.WeakInvalidationListener;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.collections.ListChangeListener;
import javafx.scene.Node;
import com.sun.javafx.scene.control.skin.TreeCellSkin;
import javafx.collections.WeakListChangeListener;
import java.lang.ref.WeakReference;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.ReadOnlyObjectProperty;
import javafx.beans.property.ReadOnlyObjectWrapper;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.beans.value.WeakChangeListener;
//import javafx.scene.accessibility.Action;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;

/**
 * The {@link Cell} type used with the {@link TreeView} control. In addition to 
 * the API defined on {@link IndexedCell}, the TreeCell
 * exposes additional states and pseudo classes for use by CSS.
 * <p>
 * A TreeCell watches the selection model of the TreeView for which it is
 * associated, ensuring that it visually indicates to the user whether it is
 * selected. When a TreeCell is selected, this is exposed both via the
 * {@link #selectedProperty() selected} property, as well as via the 'selected'
 * CSS pseudo class state.
 * <p>
 * Due to the fact that TreeCell extends from {@link IndexedCell}, each TreeCell 
 * also provides an {@link #indexProperty() index} property. The index will be 
 * updated as cells are expanded and collapsed, and therefore should be
 * considered a view index rather than a model index.
 * <p>
 * Finally, each TreeCell also has a reference back to the TreeView that it is
 * being used with. Each TreeCell belongs to one and only one TreeView.
 *
 * @see TreeView
 * @see TreeItem
 * @param <T> The type of the value contained within the 
 *      {@link #treeItemProperty() TreeItem} property.
 * @since JavaFX 2.0
 */
public class TreeCell<T> extends IndexedCell<T> {

    /***************************************************************************
     *                                                                         *
     * Constructors                                                            *
     *                                                                         *
     **************************************************************************/

    /**
     * Creates a default TreeCell instance.
     */
    public TreeCell() {
        getStyleClass().addAll(DEFAULT_STYLE_CLASS);
    }



    /***************************************************************************
     *                                                                         *
     * Callbacks and events                                                    *
     *                                                                         *
     **************************************************************************/
    
    private final ListChangeListener<Integer> selectedListener = c -> {
        updateSelection();
    };
    
    /**
     * Listens to the selectionModel property on the TreeView. Whenever the entire model is changed,
     * we have to unhook the weakSelectedListener and update the selection.
     */
    private final ChangeListener<MultipleSelectionModel<TreeItem<T>>> selectionModelPropertyListener = new ChangeListener<MultipleSelectionModel<TreeItem<T>>>() {
        @Override public void changed(ObservableValue<? extends MultipleSelectionModel<TreeItem<T>>> observable,
                                      MultipleSelectionModel<TreeItem<T>> oldValue,
                                      MultipleSelectionModel<TreeItem<T>> newValue) {
            if (oldValue != null) {
                oldValue.getSelectedIndices().removeListener(weakSelectedListener);
            }
            if (newValue != null) {
                newValue.getSelectedIndices().addListener(weakSelectedListener);
            }
            updateSelection();
        }
    };    

    private final InvalidationListener focusedListener = valueModel -> {
        updateFocus();
    };
    
    /**
     * Listens to the focusModel property on the TreeView. Whenever the entire model is changed,
     * we have to unhook the weakFocusedListener and update the focus.
     */
    private final ChangeListener<FocusModel<TreeItem<T>>> focusModelPropertyListener = new ChangeListener<FocusModel<TreeItem<T>>>() {
        @Override public void changed(ObservableValue<? extends FocusModel<TreeItem<T>>> observable,
                                      FocusModel<TreeItem<T>> oldValue,
                                      FocusModel<TreeItem<T>> newValue) {
            if (oldValue != null) {
                oldValue.focusedIndexProperty().removeListener(weakFocusedListener);
            }
            if (newValue != null) {
                newValue.focusedIndexProperty().addListener(weakFocusedListener);
            }
            updateFocus();
        }
    };

    private final InvalidationListener editingListener = valueModel -> {
        updateEditing();
    };
    
    private final InvalidationListener leafListener = new InvalidationListener() {
        @Override public void invalidated(Observable valueModel) {
            // necessary to update the disclosure node in the skin when the
            // leaf property changes
            TreeItem<T> treeItem = getTreeItem();
            if (treeItem != null) {
                requestLayout();
            }
        }
    };
    
    /* proxy pseudo-class state change from treeItem's expandedProperty */
    private boolean oldIsExpanded;
    private final InvalidationListener treeItemExpandedInvalidationListener = new InvalidationListener() {
        @Override public void invalidated(Observable o) {
            boolean isExpanded = ((BooleanProperty)o).get();
            pseudoClassStateChanged(EXPANDED_PSEUDOCLASS_STATE,   isExpanded);
            pseudoClassStateChanged(COLLAPSED_PSEUDOCLASS_STATE, !isExpanded);
            if (isExpanded != oldIsExpanded) {
//                accSendNotification(Attribute.EXPANDED);
            }
            oldIsExpanded = isExpanded;
        }
    };

    private final InvalidationListener rootPropertyListener = observable -> {
        updateItem(-1);
    };
    
    private final WeakListChangeListener<Integer> weakSelectedListener = new WeakListChangeListener<Integer>(selectedListener);
    private final WeakChangeListener<MultipleSelectionModel<TreeItem<T>>> weakSelectionModelPropertyListener = new WeakChangeListener<MultipleSelectionModel<TreeItem<T>>>(selectionModelPropertyListener);
    private final WeakInvalidationListener weakFocusedListener = new WeakInvalidationListener(focusedListener);
    private final WeakChangeListener<FocusModel<TreeItem<T>>> weakFocusModelPropertyListener = new WeakChangeListener<FocusModel<TreeItem<T>>>(focusModelPropertyListener);
    private final WeakInvalidationListener weakEditingListener = new WeakInvalidationListener(editingListener);
    private final WeakInvalidationListener weakLeafListener = new WeakInvalidationListener(leafListener);
    private final WeakInvalidationListener weakTreeItemExpandedInvalidationListener =
            new WeakInvalidationListener(treeItemExpandedInvalidationListener);
    private final WeakInvalidationListener weakRootPropertyListener = new WeakInvalidationListener(rootPropertyListener);

    
    
    
    /***************************************************************************
     *                                                                         *
     * Properties                                                              *
     *                                                                         *
     **************************************************************************/
    
    // --- TreeItem
    private ReadOnlyObjectWrapper<TreeItem<T>> treeItem = 
        new ReadOnlyObjectWrapper<TreeItem<T>>(this, "treeItem") {

            TreeItem<T> oldValue = null;
            
            @Override protected void invalidated() {
                if (oldValue != null) {
                    oldValue.expandedProperty().removeListener(weakTreeItemExpandedInvalidationListener);
                }
                
                oldValue = get(); 
                
                if (oldValue != null) {
                    oldIsExpanded = oldValue.isExpanded();
                    oldValue.expandedProperty().addListener(weakTreeItemExpandedInvalidationListener);
                    // fake an invalidation to ensure updated pseudo-class state
                    weakTreeItemExpandedInvalidationListener.invalidated(oldValue.expandedProperty());            
                }
                
            }
    };
    private void setTreeItem(TreeItem<T> value) {
        treeItem.set(value); 
    }
    
    /**
     * Returns the TreeItem currently set in this TreeCell.
     */
    public final TreeItem<T> getTreeItem() { return treeItem.get(); }
    
    /**
     * Each TreeCell represents at most a single {@link TreeItem}, which is
     * represented by this property.
     */
    public final ReadOnlyObjectProperty<TreeItem<T>> treeItemProperty() { return treeItem.getReadOnlyProperty(); }


    
    // --- Disclosure Node
    private ObjectProperty<Node> disclosureNode = new SimpleObjectProperty<Node>(this, "disclosureNode");

    /**
     * The node to use as the "disclosure" triangle, or toggle, used for
     * expanding and collapsing items. This is only used in the case of
     * an item in the tree which contains child items. If not specified, the
     * TreeCell's Skin implementation is responsible for providing a default
     * disclosure node.
     */
    public final void setDisclosureNode(Node value) { disclosureNodeProperty().set(value); }
    
    /**
     * Returns the current disclosure node set in this TreeCell.
     */
    public final Node getDisclosureNode() { return disclosureNode.get(); }
    
    /**
     * The disclosure node is commonly seen represented as a triangle that rotates
     * on screen to indicate whether or not the TreeItem that it is placed
     * beside is expanded or collapsed.
     */
    public final ObjectProperty<Node> disclosureNodeProperty() { return disclosureNode; }
    
    
    // --- TreeView
    private ReadOnlyObjectWrapper<TreeView<T>> treeView = new ReadOnlyObjectWrapper<TreeView<T>>() {
        private WeakReference<TreeView<T>> weakTreeViewRef;
        @Override protected void invalidated() {
            MultipleSelectionModel<TreeItem<T>> sm;
            FocusModel<TreeItem<T>> fm;
            
            if (weakTreeViewRef != null) {
                TreeView<T> oldTreeView = weakTreeViewRef.get();
                if (oldTreeView != null) {
                    // remove old listeners
                    sm = oldTreeView.getSelectionModel();
                    if (sm != null) {
                        sm.getSelectedIndices().removeListener(weakSelectedListener);
                    }

                    fm = oldTreeView.getFocusModel();
                    if (fm != null) {
                        fm.focusedIndexProperty().removeListener(weakFocusedListener);
                    }

                    oldTreeView.editingItemProperty().removeListener(weakEditingListener);
                    oldTreeView.focusModelProperty().removeListener(weakFocusModelPropertyListener);
                    oldTreeView.selectionModelProperty().removeListener(weakSelectionModelPropertyListener);
                    oldTreeView.rootProperty().removeListener(weakRootPropertyListener);
                }
                
                weakTreeViewRef = null;
            }

            TreeView<T> treeView = get();
            if (treeView != null) {
                sm = treeView.getSelectionModel();
                if (sm != null) {
                    // listening for changes to treeView.selectedIndex and IndexedCell.index,
                    // to determine if this cell is selected
                    sm.getSelectedIndices().addListener(weakSelectedListener);
                }

                fm = treeView.getFocusModel();
                if (fm != null) {
                    // similar to above, but this time for focus
                    fm.focusedIndexProperty().addListener(weakFocusedListener);
                }

                treeView.editingItemProperty().addListener(weakEditingListener);
                treeView.focusModelProperty().addListener(weakFocusModelPropertyListener);
                treeView.selectionModelProperty().addListener(weakSelectionModelPropertyListener);
                treeView.rootProperty().addListener(weakRootPropertyListener);

                weakTreeViewRef = new WeakReference<TreeView<T>>(treeView);
            }

            updateItem(-1);
            requestLayout();
        }

        @Override
        public Object getBean() {
            return TreeCell.this;
        }

        @Override
        public String getName() {
            return "treeView";
        }
    };
    
    private void setTreeView(TreeView<T> value) { treeView.set(value); }

    /**
     * Returns the TreeView associated with this TreeCell.
     */
    public final TreeView<T> getTreeView() { return treeView.get(); }
    
    /**
     * A TreeCell is explicitly linked to a single {@link TreeView} instance,
     * which is represented by this property.
     */
    public final ReadOnlyObjectProperty<TreeView<T>> treeViewProperty() { return treeView.getReadOnlyProperty(); }



    /***************************************************************************
     *                                                                         *
     * Public API                                                              *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override public void startEdit() {
        if (isEditing()) return;

        final TreeView<T> tree = getTreeView();
        if (! isEditable() || (tree != null && ! tree.isEditable())) {
//            if (Logging.getControlsLogger().isLoggable(PlatformLogger.SEVERE)) {
//                Logging.getControlsLogger().severe(
//                    "Can not call TreeCell.startEdit() on this TreeCell, as it "
//                        + "is not allowed to enter its editing state (TreeCell: "
//                        + this + ", TreeView: " + tree + ").");
//            }
            return;
        }

        updateItem(-1);
        
        // it makes sense to get the cell into its editing state before firing
        // the event to the TreeView below, so that's what we're doing here
        // by calling super.startEdit().
        super.startEdit();
        
         // Inform the TreeView of the edit starting.
        if (tree != null) {
            tree.fireEvent(new TreeView.EditEvent<T>(tree,
                    TreeView.<T>editStartEvent(),
                    getTreeItem(),
                    getItem(),
                    null));
            
            tree.requestFocus();
        }
    }

     /** {@inheritDoc} */
    @Override public void commitEdit(T newValue) {
        if (! isEditing()) return;
        final TreeItem<T> treeItem = getTreeItem();
        final TreeView<T> tree = getTreeView();
        if (tree != null) {
            // Inform the TreeView of the edit being ready to be committed.
            tree.fireEvent(new TreeView.EditEvent<T>(tree,
                    TreeView.<T>editCommitEvent(),
                    treeItem,
                    getItem(),
                    newValue));
        }

        // inform parent classes of the commit, so that they can switch us
        // out of the editing state.
        // This MUST come before the updateItem call below, otherwise it will
        // call cancelEdit(), resulting in both commit and cancel events being
        // fired (as identified in RT-29650)
        super.commitEdit(newValue);

        // update the item within this cell, so that it represents the new value
        if (treeItem != null) {
            treeItem.setValue(newValue);
            updateTreeItem(treeItem);
            updateItem(newValue, false);
        }
        
        if (tree != null) {
            // reset the editing item in the TreetView
            tree.edit(null);

            // request focus back onto the tree, only if the current focus
            // owner has the tree as a parent (otherwise the user might have
            // clicked out of the tree entirely and given focus to something else.
            // It would be rude of us to request it back again.
            ControlUtils.requestFocusOnControlOnlyIfCurrentFocusOwnerIsChild(tree);
        }
    }

    /** {@inheritDoc} */
    @Override public void cancelEdit() {
        if (! isEditing()) return;
        
        TreeView<T> tree = getTreeView();

        super.cancelEdit();

        if (tree != null) {
            // reset the editing index on the TreeView
            if (updateEditingIndex) tree.edit(null);

            // request focus back onto the tree, only if the current focus
            // owner has the tree as a parent (otherwise the user might have
            // clicked out of the tree entirely and given focus to something else.
            // It would be rude of us to request it back again.
            ControlUtils.requestFocusOnControlOnlyIfCurrentFocusOwnerIsChild(tree);
        
            tree.fireEvent(new TreeView.EditEvent<T>(tree,
                    TreeView.<T>editCancelEvent(),
                    getTreeItem(),
                    getItem(),
                    null));
        }
    }

    /** {@inheritDoc} */
    @Override protected Skin<?> createDefaultSkin() {
        return new TreeCellSkin<T>(this);
    }

    /***************************************************************************
     *                                                                         *
     * Private Implementation                                                  *
     *                                                                         *
     **************************************************************************/

    /** {@inheritDoc} */
    @Override void indexChanged(int oldIndex, int newIndex) {
        super.indexChanged(oldIndex, newIndex);

        // when the cell index changes, this may result in the cell
        // changing state to be selected and/or focused.
        if (isEditing() && newIndex == oldIndex) {
            // no-op
            // Fix for RT-31165 - if we (needlessly) update the index whilst the
            // cell is being edited it will no longer be in an editing state.
            // This means that in certain (common) circumstances that it will
            // appear that a cell is uneditable as, despite being clicked, it
            // will not change to the editing state as a layout of VirtualFlow
            // is immediately invoked, which forces all cells to be updated.
        } else {
            updateItem(oldIndex);
            updateSelection();
            updateFocus();
        }
    }

    private boolean isFirstRun = true;
    private void updateItem(int oldIndex) {
        TreeView<T> tv = getTreeView();
        if (tv == null) return;
        
        // Compute whether the index for this cell is for a real item
        int index = getIndex();
        boolean valid = index >=0 && index < tv.getExpandedItemCount();
        final boolean isEmpty = isEmpty();
        final TreeItem<T> oldTreeItem = getTreeItem();

        // Cause the cell to update itself
        outer: if (valid) {
            // update the TreeCell state.
            // get the new treeItem that is about to go in to the TreeCell
            TreeItem<T> newTreeItem = tv.getTreeItem(index);
            T newValue = newTreeItem == null ? null : newTreeItem.getValue();
            T oldValue = oldTreeItem == null ? null : oldTreeItem.getValue();

            // For the sake of RT-14279, it is important that the order of these
            // method calls is as shown below. If the order is switched, it is
            // likely that events will be fired where the item is null, even
            // though calling cell.getTreeItem().getValue() returns the value
            // as expected

            // RT-35864 - if the index didn't change, then avoid calling updateItem
            // unless the item has changed.
            if (oldIndex == index) {
                if (oldValue != null ? oldValue.equals(newValue) : newValue == null) {
                    // RT-37054:  we break out of the if/else code here and
                    // proceed with the code following this, so that we may
                    // still update references, listeners, etc as required.
                    break outer;
                }
            }
            updateTreeItem(newTreeItem);
            updateItem(newValue, false);
        } else {
            // RT-30484 We need to allow a first run to be special-cased to allow
            // for the updateItem method to be called at least once to allow for
            // the correct visual state to be set up. In particular, in RT-30484
            // refer to Ensemble8PopUpTree.png - in this case the arrows are being
            // shown as the new cells are instantiated with the arrows in the
            // children list, and are only hidden in updateItem.
            if ((!isEmpty && oldTreeItem != null) || isFirstRun) {
                updateTreeItem(null);
                updateItem(null, true);
                isFirstRun = false;
            }
        }
    }

    private void updateSelection() {
        if (isEmpty()) return;
        if (getIndex() == -1 || getTreeView() == null) return;
        if (getTreeView().getSelectionModel() == null) return;
        
        boolean isSelected = getTreeView().getSelectionModel().isSelected(getIndex());
        if (isSelected() == isSelected) return;
        
        updateSelected(isSelected);
    }

    private void updateFocus() {
        if (getIndex() == -1 || getTreeView() == null) return;
        if (getTreeView().getFocusModel() == null) return;
        
        setFocused(getTreeView().getFocusModel().isFocused(getIndex()));
    }

    private boolean updateEditingIndex = true;
    private void updateEditing() {
        final int index = getIndex();
        final TreeView<T> tree = getTreeView();
        final TreeItem<T> treeItem = getTreeItem();
        final TreeItem<T> editItem = tree == null ? null : tree.getEditingItem();
        final boolean editing = isEditing();
        
        if (index == -1 || tree == null || treeItem == null) return;
        
        final boolean match = treeItem.equals(editItem);
        
        // If my tree item is the item being edited and I'm not currently in
        // the edit mode, then I need to enter the edit mode
        if (match && !editing) {
            startEdit();
        } else if (! match && editing) {
            // If my tree item is not the one being edited then I need to cancel
            // the edit. The tricky thing here is that as part of this call
            // I cannot end up calling tree.edit(null) the way that the standard
            // cancelEdit method would do. Yet, I need to call cancelEdit
            // so that subclasses which override cancelEdit can execute. So,
            // I have to use a kind of hacky flag workaround.
            updateEditingIndex = false;
            cancelEdit();
            updateEditingIndex = true;
        }
    }



    /***************************************************************************
     *                                                                         *
     * Expert API                                                              *
     *                                                                         *
     **************************************************************************/
    
    

    /**
     * Updates the TreeView associated with this TreeCell.
     * 
     * @param tree The new TreeView that should be associated with this TreeCell.
     * @expert This function is intended to be used by experts, primarily
     *         by those implementing new Skins. It is not common
     *         for developers or designers to access this function directly.
     */
    public final void updateTreeView(TreeView<T> tree) {
        setTreeView(tree); 
    }

    /**
     * Updates the TreeItem associated with this TreeCell.
     *
     * @param treeItem The new TreeItem that should be associated with this 
     *      TreeCell.
     * @expert This function is intended to be used by experts, primarily
     *      by those implementing new Skins. It is not common
     *      for developers or designers to access this function directly.
     */
    public final void updateTreeItem(TreeItem<T> treeItem) {
        TreeItem<T> _treeItem = getTreeItem();
        if (_treeItem != null) {
            _treeItem.leafProperty().removeListener(weakLeafListener);
        }
        setTreeItem(treeItem);
        if (treeItem != null) {
            treeItem.leafProperty().addListener(weakLeafListener);
        }
    }


    
    /***************************************************************************
     *                                                                         *
     * Stylesheet Handling                                                     *
     *                                                                         *
     **************************************************************************/

    private static final String DEFAULT_STYLE_CLASS = "tree-cell";

    private static final PseudoClass EXPANDED_PSEUDOCLASS_STATE = PseudoClass.getPseudoClass("expanded");
    private static final PseudoClass COLLAPSED_PSEUDOCLASS_STATE = PseudoClass.getPseudoClass("collapsed");


    /***************************************************************************
     *                                                                         *
     * Accessibility handling                                                  *
     *                                                                         *
     **************************************************************************/

//    /** @treatAsPrivate */
//    @Override public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        TreeItem<T> treeItem = getTreeItem();
//        TreeView<T> treeView = getTreeView();
//        switch (attribute) {
//            case ROLE: return Role.TREE_ITEM;
//            case TREE_ITEM_PARENT: {
//                if (treeView == null) return null;
//                if (treeItem == null) return null;
//                TreeItem<T> parent = treeItem.getParent();
//                if (parent == null) return null;
//                int parentIndex = treeView.getRow(parent);
//                return treeView.accGetAttribute(Attribute.ROW_AT_INDEX, parentIndex);
//            }
//            case TREE_ITEM_COUNT: {
//                return treeItem == null  ? 0 : treeItem.getChildren().size();
//            }
//            case TREE_ITEM_AT_INDEX:
//                if (treeItem == null) return null;
//                int index = (Integer)parameters[0];
//                if (index >= treeItem.getChildren().size()) return null;
//                TreeItem<T> child = treeItem.getChildren().get(index);
//                if (child == null) return null;
//                int childIndex = treeView.getRow(child);
//                return treeView.accGetAttribute(Attribute.ROW_AT_INDEX, childIndex);
//            case TITLE: {
//                Object value = treeItem == null ? null : treeItem.getValue();
//                return value == null ? "" : value.toString();
//            }
//            case LEAF: return treeItem == null ? true : treeItem.isLeaf();
//            case EXPANDED: return treeItem == null ? false : treeItem.isExpanded();
//            case INDEX: return getIndex();
//            case SELECTED: return isSelected();
//            case DISCLOSURE_LEVEL: {
//                return treeView == null ? 0 : treeView.getTreeItemLevel(treeItem);
//            }
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
//
//    /** @treatAsPrivate */
//    @Override public void accExecuteAction(Action action, Object... parameters) {
//        final TreeView<T> treeView = getTreeView();
//        final TreeItem<T> treeItem = getTreeItem();
//        final MultipleSelectionModel<TreeItem<T>> sm = treeView == null ? null : treeView.getSelectionModel();
//
//        switch (action) {
//            case EXPAND: {
//                if (treeItem != null) treeItem.setExpanded(true);
//                break;
//            }
//            case COLLAPSE: {
//                if (treeItem != null) treeItem.setExpanded(false);
//                break;
//            }
//            case SELECT: {
//                if (sm != null) sm.clearAndSelect(getIndex());
//                break;
//            }
//            case ADD_TO_SELECTION: {
//                if (sm != null) sm.select(getIndex());
//                break;
//            }
//            case REMOVE_FROM_SELECTION: {
//                if (sm != null) sm.clearSelection(getIndex());
//                break;
//            }
//            default: super.accExecuteAction(action);
//        }
//    }
}
