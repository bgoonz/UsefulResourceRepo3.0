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

package com.sun.glass.ui.win;

import java.util.function.Function;
import javafx.collections.ObservableList;
import javafx.geometry.Bounds;
import javafx.geometry.Point2D;
import javafx.scene.Node;
import javafx.scene.Scene;
import com.sun.javafx.scene.accessibility.Accessible;
import com.sun.javafx.scene.accessibility.Action;
import com.sun.javafx.scene.accessibility.Attribute;
import com.sun.javafx.scene.accessibility.Role;
import javafx.scene.input.KeyCombination;
import com.sun.glass.ui.PlatformAccessible;
import com.sun.glass.ui.View;
import static com.sun.javafx.scene.accessibility.Attribute.*;

/*
 * This class is the Java peer for GlassAccessible.
 * GlassAccessible implements all UIA interfaces required including:
 * IRawElementProviderSimple
 * IRawElementProviderFragment
 * IRawElementProviderFragmentRoot
 * IInvokeProvider
 *
 *
 * Ideas (performance, low priority):
 * 1. Only raise events when needed:
 *   - Either implement or IRawElementProviderAdviseEvents use UiaClientsAreListening
 *
 * 2. When returning the same string to UIA we could save the BSTR instead
 *    of creating a new one every time.
 *
 */

final class WinAccessible extends PlatformAccessible {

    private native static void _initIDs();
    static {
//        _initIDs();
    }

    private static int idCount = 1;

    /* PROPERTYID  */
    private static final int UIA_BoundingRectanglePropertyId     = 30001;
    private static final int UIA_ProcessIdPropertyId             = 30002;
    private static final int UIA_ControlTypePropertyId           = 30003;
    private static final int UIA_LocalizedControlTypePropertyId  = 30004;
    private static final int UIA_NamePropertyId                  = 30005;
    private static final int UIA_AcceleratorKeyPropertyId        = 30006;
    private static final int UIA_AccessKeyPropertyId             = 30007;
    private static final int UIA_HasKeyboardFocusPropertyId      = 30008;
    private static final int UIA_IsKeyboardFocusablePropertyId   = 30009;
    private static final int UIA_IsEnabledPropertyId             = 30010;
    private static final int UIA_AutomationIdPropertyId          = 30011;
    private static final int UIA_ClassNamePropertyId             = 30012;
    private static final int UIA_HelpTextPropertyId              = 30013;
    private static final int UIA_ClickablePointPropertyId        = 30014;
    private static final int UIA_CulturePropertyId               = 30015;
    private static final int UIA_IsControlElementPropertyId      = 30016;
    private static final int UIA_IsContentElementPropertyId      = 30017;
    private static final int UIA_LabeledByPropertyId             = 30018;
    private static final int UIA_IsPasswordPropertyId            = 30019;
    private static final int UIA_NativeWindowHandlePropertyId    = 30020;
    private static final int UIA_ItemTypePropertyId              = 30021;
    private static final int UIA_IsOffscreenPropertyId           = 30022;
    private static final int UIA_OrientationPropertyId           = 30023;
    private static final int UIA_FrameworkIdPropertyId           = 30024;
    private static final int UIA_ValueValuePropertyId            = 30045;
    private static final int UIA_RangeValueValuePropertyId       = 30047;
    private static final int UIA_ExpandCollapseExpandCollapseStatePropertyId = 30070;
    private static final int UIA_ToggleToggleStatePropertyId     = 30086;
    private static final int UIA_AriaRolePropertyId              = 30101;
    private static final int UIA_ProviderDescriptionPropertyId   = 30107;

    /* Control Pattern Identifiers */
    private static final int UIA_InvokePatternId                 = 10000;
    private static final int UIA_SelectionPatternId              = 10001;
    private static final int UIA_ValuePatternId                  = 10002;
    private static final int UIA_RangeValuePatternId             = 10003;
    private static final int UIA_ScrollPatternId                 = 10004;
    private static final int UIA_ExpandCollapsePatternId         = 10005;
    private static final int UIA_GridPatternId                   = 10006;
    private static final int UIA_GridItemPatternId               = 10007;
    private static final int UIA_SelectionItemPatternId          = 10010;
    private static final int UIA_TablePatternId                  = 10012;
    private static final int UIA_TableItemPatternId              = 10013;
    private static final int UIA_TextPatternId                   = 10014;
    private static final int UIA_TogglePatternId                 = 10015;
    private static final int UIA_TransformPatternId              = 10016;
    private static final int UIA_ScrollItemPatternId             = 10017;
    private static final int UIA_ItemContainerPatternId          = 10019;

    /* UIA_ControlTypeIds */
    private static final int UIA_ButtonControlTypeId             = 50000;
    private static final int UIA_CheckBoxControlTypeId           = 50002;
    private static final int UIA_ComboBoxControlTypeId           = 50003;
    private static final int UIA_EditControlTypeId               = 50004;
    private static final int UIA_HyperlinkControlTypeId          = 50005;
    private static final int UIA_ImageControlTypeId              = 50006;
    private static final int UIA_ListItemControlTypeId           = 50007;
    private static final int UIA_ListControlTypeId               = 50008;
    private static final int UIA_MenuControlTypeId               = 50009;
    private static final int UIA_MenuBarControlTypeId            = 50010;
    private static final int UIA_MenuItemControlTypeId           = 50011;
    private static final int UIA_ProgressBarControlTypeId        = 50012;
    private static final int UIA_RadioButtonControlTypeId        = 50013;
    private static final int UIA_ScrollBarControlTypeId          = 50014;
    private static final int UIA_SliderControlTypeId             = 50015;
    private static final int UIA_TabControlTypeId                = 50018;
    private static final int UIA_TabItemControlTypeId            = 50019;
    private static final int UIA_TextControlTypeId               = 50020;
    private static final int UIA_ToolBarControlTypeId            = 50021;
    private static final int UIA_TreeControlTypeId               = 50023;
    private static final int UIA_TreeItemControlTypeId           = 50024;
    private static final int UIA_GroupControlTypeId              = 50026;
    private static final int UIA_ThumbControlTypeId              = 50027;
    private static final int UIA_DataGridControlTypeId           = 50028;
    private static final int UIA_DataItemControlTypeId           = 50029;
    private static final int UIA_SplitButtonControlTypeId        = 50031;
    private static final int UIA_WindowControlTypeId             = 50032;
    private static final int UIA_PaneControlTypeId               = 50033;
    private static final int UIA_TableControlTypeId              = 50036;

    /* NavigateDirection */
    private static final int NavigateDirection_Parent            = 0;
    private static final int NavigateDirection_NextSibling       = 1;
    private static final int NavigateDirection_PreviousSibling   = 2;
    private static final int NavigateDirection_FirstChild        = 3;
    private static final int NavigateDirection_LastChild         = 4;

    /* RowOrColumnMajor */
    private static final int RowOrColumnMajor_RowMajor          = 0;
    private static final int RowOrColumnMajor_ColumnMajor       = 1;
    private static final int RowOrColumnMajor_Indeterminate     = 2;

    /* Event ID constants */
    private static final int UIA_MenuOpenedEventId               = 20003;
    private static final int UIA_AutomationPropertyChangedEventId= 20004;
    private static final int UIA_AutomationFocusChangedEventId   = 20005;
    private static final int UIA_MenuClosedEventId               = 20007;
    private static final int UIA_SelectionItem_ElementRemovedFromSelectionEventId = 20011;
    private static final int UIA_SelectionItem_ElementSelectedEventId = 20012;
    private static final int UIA_Text_TextSelectionChangedEventId = 20014;
    private static final int UIA_Text_TextChangedEventId         = 20015;
    private static final int UIA_MenuModeStartEventId            = 20018;
    private static final int UIA_MenuModeEndEventId              = 20019;

    /* SupportedTextSelection */
    private static final int SupportedTextSelection_None         = 0;
    private static final int SupportedTextSelection_Single       = 1;
    private static final int SupportedTextSelection_Multiple     = 2;

    /* ExpandCollapseState */
    private static final int ExpandCollapseState_Collapsed          = 0;
    private static final int ExpandCollapseState_Expanded           = 1;
    private static final int ExpandCollapseState_PartiallyExpanded  = 2;
    private static final int ExpandCollapseState_LeafNode           = 3;

    /* ScrollAmount */
    private static final int ScrollAmount_LargeDecrement        = 0;
    private static final int ScrollAmount_SmallDecrement        = 1;
    private static final int ScrollAmount_NoAmount              = 2;
    private static final int ScrollAmount_LargeIncrement        = 3;
    private static final int ScrollAmount_SmallIncrement        = 4;

    /* Scroll */
    private static final int UIA_ScrollPatternNoScroll          = -1;

    /* ToggleState */
    private static final int ToggleState_Off                    = 0;
    private static final int ToggleState_On                     = 1;
    private static final int ToggleState_Indeterminate          = 2;

    /* Other constants */
    private static final int UiaAppendRuntimeId                  = 3;

    private long peer;
    private int id;

    /* Text Support */
    WinTextRangeProvider documentRange;
    WinTextRangeProvider selectionRange;
    boolean documentRangeValid, selectionRangeValid;

    /* The lastIndex is used by parents to keep track of the index of the last child
     * returned in Navigate. It is very common for Narrator to traverse the children
     * list by calling next sibling sequentially, without lastIndex the caller would
     * have to traverse the list to find the location of the current child before it
     * can return the next sibling.
     */
    private int lastIndex = 0;

    /* Creates a GlassAccessible linked to the caller (GlobalRef) */
    private native long _createGlassAccessible();

    /* Releases the GlassAccessible and deletes the GlobalRef */
    private native void _destroyGlassAccessible(long accessible);

    private native static long UiaRaiseAutomationEvent(long pProvider, int id);
    private native static long UiaRaiseAutomationPropertyChangedEvent(long pProvider, int id, WinVariant oldV, WinVariant newV);
    private native static boolean UiaClientsAreListening();

    private WinAccessible(Accessible accessible) {
        super(accessible);
        this.peer = _createGlassAccessible();
    }

    static WinAccessible createAccessible(Accessible accessible) {
//        if (accessible == null) return null;
//        WinAccessible winAccessible = new WinAccessible(accessible);
//        if (winAccessible.peer == 0L) return null;
//        winAccessible.id = idCount++;
//        return winAccessible;
        return null;
    }

    @Override
    public void dispose() {
        super.dispose();
        if (selectionRange != null) {
            selectionRange.dispose();
            selectionRange = null;
        }
        if (documentRange != null) {
            documentRange.dispose();
            documentRange = null;
        }
        if (peer != 0L) {
            _destroyGlassAccessible(peer);
            peer = 0L;
        }
    }


    @Override
    public void sendNotification(Attribute notification) {
        if (isDisposed()) return;

        switch (notification) {
            case FOCUS_NODE:
                if (getView() != null) {
                    // This is a Scene
                    long focus = GetFocus();
                    if (focus != 0) {
                        UiaRaiseAutomationEvent(focus, UIA_AutomationFocusChangedEventId);
                    }
                } else {
                    // This is a Scene.transientFocusContainer
                    Node node = (Node)getAttribute(FOCUS_NODE);
                    if (node != null) {
                        UiaRaiseAutomationEvent(getAccessible(node), UIA_AutomationFocusChangedEventId);
                    } else {
                        // Delegate back to the Scene if the transient focus owner is null
                        Scene scene = (Scene)getAttribute(SCENE);
                        if (scene != null) {
//                            Accessible acc = scene.getAccessible();
//                            if (acc != null) {
//                                acc.sendNotification(FOCUS_NODE);
//                            }
                        }
                    }
                }
                break;
            case SELECTED_PAGE: {
                /* 
                 * Use the notification in the parent to poke the children.
                 * Note: FOCUS_NODE does not see this case because as for as the scene graph
                 * is concerned the focus is still on the parent. I.e Pagination.
                 */
                Node node = (Node)getAttribute(SELECTED_PAGE);
                if (node != null) {
                    UiaRaiseAutomationEvent(getAccessible(node), UIA_AutomationFocusChangedEventId);
                }
                break;
            }
            case SELECTED_TAB: {
                /* 
                 * Use the notification in the parent to poke the children.
                 * Note: FOCUS_NODE does not see this case because as for as the scene graph
                 * is concerned the focus is still on the parent. I.e TabPane.
                 */
                Node node = (Node)getAttribute(SELECTED_TAB);
                if (node != null) {
                    UiaRaiseAutomationEvent(getAccessible(node), UIA_AutomationFocusChangedEventId);
                }
                break;
            }
            case SELECTED_CELLS: {
                /* 
                 * Use the notification in the parent to poke the children.
                 * Note: FOCUS_NODE does not see this case because as for as the scene graph
                 * is concerned the focus is still on the parent. I.e TableView, ListView.
                 */
                ObservableList<Node> selection = (ObservableList<Node>)getAttribute(SELECTED_CELLS);
                if (selection != null) {
                    selection.stream().forEach(n -> UiaRaiseAutomationEvent(getAccessible(n), UIA_AutomationFocusChangedEventId));
                }
                break;
            }
            case SELECTED_ROWS: {
                /* 
                 * Use the notification in the parent to poke the children.
                 * Note: FOCUS_NODE does not see this case because as for as the scene graph
                 * is concerned the focus is still on the parent. I.e TableView, ListView.
                 */
                ObservableList<Node> selection = (ObservableList<Node>)getAttribute(SELECTED_ROWS);
                if (selection != null) {
                    selection.stream().forEach(n -> UiaRaiseAutomationEvent(getAccessible(n), UIA_AutomationFocusChangedEventId));
                }
                break;
            }
            case INDETERMINATE: {
                if (getAttribute(ROLE) == Role.CHECKBOX) {
                    notifyToggleState();
                }
                break;
            }
            case SELECTED: {
                Object role = getAttribute(ROLE); 
                if (role == Role.CHECKBOX || role == Role.RADIO_BUTTON) {
                    notifyToggleState();
                    break;
                }
                Boolean selected = (Boolean)getAttribute(SELECTED);
                if (selected != null) {
                    if (selected) {
                        UiaRaiseAutomationEvent(peer, UIA_SelectionItem_ElementSelectedEventId);
                    } else {
                        UiaRaiseAutomationEvent(peer, UIA_SelectionItem_ElementRemovedFromSelectionEventId);
                    }
                }
                break;
            }
            case FOCUSED: {
                /* HANDLED IN FOCUS_NODE */
                break;
            }
            case VALUE: {
                Double value = (Double)getAttribute(VALUE);
                if (value != null) {
                    WinVariant vo = new WinVariant();
                    vo.vt = WinVariant.VT_R8;
                    vo.dblVal = 0;
                    WinVariant vn = new WinVariant();
                    vn.vt = WinVariant.VT_R8;
                    vn.dblVal = value;
                    UiaRaiseAutomationPropertyChangedEvent(peer, UIA_RangeValueValuePropertyId, vo, vn);
                }
                break;
            }
            case SELECTION_START:
            case SELECTION_END:
                if (selectionRange != null) {
                    Integer start = (Integer)getAttribute(SELECTION_START);
                    boolean newStart = start != null && start != selectionRange.getStart();
                    Integer end = (Integer)getAttribute(SELECTION_END);
                    boolean newEnd = end != null && end != selectionRange.getEnd();
                    /* Sending unnecessary selection changed events causes Narrator
                     * not to focus an empty text control when clicking.
                     */
                    if (newStart || newEnd) {
                        selectionRangeValid = false;
                        UiaRaiseAutomationEvent(peer, UIA_Text_TextSelectionChangedEventId);
                    }
                }
                break;
            case TITLE:
                String value = (String)getAttribute(TITLE);
                if (value != null) {
                    /* Combo and Text both implement IValueProvider */
                    WinVariant vo = new WinVariant();
                    vo.vt = WinVariant.VT_BSTR;
                    vo.bstrVal = "";
                    WinVariant vn = new WinVariant();
                    vn.vt = WinVariant.VT_BSTR;
                    vn.bstrVal = value;
                    UiaRaiseAutomationPropertyChangedEvent(peer, UIA_ValueValuePropertyId, vo, vn);
                }

                if (selectionRange != null || documentRange != null) {
                    UiaRaiseAutomationEvent(peer, UIA_Text_TextChangedEventId);
                    documentRangeValid = false;
                    selectionRangeValid = false;
                }
                break;
            case EXPANDED: {
                Boolean expanded = (Boolean)getAttribute(EXPANDED);
                if (expanded != null) {
                    WinVariant vo = new WinVariant();
                    vo.vt = WinVariant.VT_I4;
                    vo.lVal = expanded ? ExpandCollapseState_Collapsed : ExpandCollapseState_Expanded;
                    WinVariant vn = new WinVariant();
                    vn.vt = WinVariant.VT_I4;
                    vn.lVal = expanded ? ExpandCollapseState_Expanded : ExpandCollapseState_Collapsed;
                    UiaRaiseAutomationPropertyChangedEvent(peer, UIA_ExpandCollapseExpandCollapseStatePropertyId, vo, vn);
                }
                break;
            }
            case PARENT:
                break;
            default:
                UiaRaiseAutomationEvent(peer, UIA_AutomationPropertyChangedEventId);
        }
    }

    void notifyToggleState() {
        int state = get_ToggleState();
        WinVariant vo = new WinVariant();
        vo.vt = WinVariant.VT_I4;
        vo.lVal = state;
        WinVariant vn = new WinVariant();
        vn.vt = WinVariant.VT_I4;
        vn.lVal = state;
        UiaRaiseAutomationPropertyChangedEvent(peer, UIA_ToggleToggleStatePropertyId, vo, vn);
    }

    @Override
    protected long getNativeAccessible() {
        return peer;
    }

    /* Overwritten in order to make is visible to WinTextRangeProvider */
    @Override
    protected Object getAttribute(Attribute attribute, Object... parameters) {
        return super.getAttribute(attribute, parameters);
    }

    /* Overwritten in order to make is visible to WinTextRangeProvider */
    @Override
    protected void executeAction(Action action, Object... parameters) {
        super.executeAction(action, parameters);
    }

    private long getContainer(Role targetRole) {
        Node node = getContainerNode(targetRole);
        return node == null ? 0 : getAccessible(node);
    }

    private Node getContainerNode() {
        if (isDisposed()) return null;
        Role role = (Role) getAttribute(ROLE);
        if (role != null) {
            switch(role) {
                case TABLE_ROW:
                case TABLE_CELL: return getContainerNode(Role.TABLE_VIEW);
                case LIST_ITEM: return getContainerNode(Role.LIST_VIEW);
                case TAB_ITEM: return getContainerNode(Role.TAB_PANE);
                case PAGE: return getContainerNode(Role.PAGINATION);
                case TREE_ITEM: return getContainerNode(Role.TREE_VIEW);
                case TREE_TABLE_ITEM: return getContainerNode(Role.TREE_TABLE_VIEW);
                case TREE_TABLE_CELL: return getContainerNode(Role.TREE_TABLE_VIEW);
                default:
            }
        }
        return null;
    }

    private int getControlType() {
        Role role = (Role)getAttribute(ROLE);
        if (role == null) return UIA_GroupControlTypeId;
        switch (role) {
            case CONTEXT_MENU: return UIA_MenuControlTypeId;
            case MENU_ITEM: return UIA_MenuItemControlTypeId;
            case BUTTON:
            case MENU_BUTTON:
            case TOGGLE_BUTTON:
            case INCREMENT_BUTTON:
            case DECREMENT_BUTTON: return UIA_ButtonControlTypeId;
            case SPLIT_MENU_BUTTON: return UIA_SplitButtonControlTypeId;
            case PAGINATION:
            case TAB_PANE: return UIA_TabControlTypeId;
            case PAGE:
            case TAB_ITEM: return UIA_TabItemControlTypeId;
            case SLIDER: return UIA_SliderControlTypeId;
            case PARENT: return getView() != null ? UIA_WindowControlTypeId : UIA_PaneControlTypeId;
            case TEXT: return UIA_TextControlTypeId;
            case TEXT_FIELD:
            case PASSWORD_FIELD:
            case TEXT_AREA: return UIA_TextControlTypeId;
            case TABLE_VIEW: return UIA_TableControlTypeId;
            case LIST_VIEW: return UIA_ListControlTypeId;
            case LIST_ITEM: return UIA_ListItemControlTypeId;
            case TREE_TABLE_CELL:
            case TABLE_CELL: return UIA_DataItemControlTypeId;
            case IMAGE: return UIA_ImageControlTypeId;
            case RADIO_BUTTON: return UIA_RadioButtonControlTypeId;
            case CHECKBOX: return UIA_CheckBoxControlTypeId;
            case COMBOBOX: return UIA_ComboBoxControlTypeId;
            case HYPERLINK: return UIA_HyperlinkControlTypeId;
            case TREE_TABLE_VIEW:
            case TREE_VIEW: return UIA_TreeControlTypeId;
            case TREE_TABLE_ITEM:
            case TREE_ITEM: return UIA_TreeItemControlTypeId;
            case PROGRESS_INDICATOR: return UIA_ProgressBarControlTypeId;
            case TOOLBAR: return UIA_ToolBarControlTypeId;
            case TITLED_PANE: return UIA_GroupControlTypeId;
            case SCROLL_PANE: return UIA_PaneControlTypeId;
            case SCROLL_BAR: return UIA_ScrollBarControlTypeId;
            case THUMB: return UIA_ThumbControlTypeId;
            case MENU_BAR: return UIA_MenuBarControlTypeId;
            case DATE_PICKER: return UIA_PaneControlTypeId;
            default: return 0;
        }
    }

    /***********************************************/
    /*        IRawElementProviderSimple            */
    /***********************************************/
    long GetPatternProvider(int patternId) {
        if (isDisposed()) return 0;
        Role role = (Role)getAttribute(ROLE);
        boolean impl = false;
        switch (role) {
            case MENU_ITEM:
                impl = patternId == UIA_InvokePatternId;
                if (!impl) {
                    Object type = getAttribute(MENU_ITEM_TYPE);
                    if (type == Role.CONTEXT_MENU) {
                        impl |= patternId == UIA_ExpandCollapsePatternId;
                    }
                    if (type == Role.CHECKBOX || type == Role.RADIO_BUTTON) {
                        impl |= patternId == UIA_TogglePatternId;
                    }
                }
                break;
            case HYPERLINK:
            case BUTTON:
            case INCREMENT_BUTTON:
            case DECREMENT_BUTTON:
            case MENU_BUTTON:
                impl = patternId == UIA_InvokePatternId;
                break;
            case PAGE:
            case TAB_ITEM:
                impl = patternId == UIA_SelectionItemPatternId;
                break;
            case PAGINATION:
            case TAB_PANE:
                impl = patternId == UIA_SelectionPatternId;
                break;
            case SCROLL_PANE:
                impl = patternId == UIA_ScrollPatternId;
                break;
            case TREE_TABLE_VIEW:
            case TABLE_VIEW:
                impl = patternId == UIA_SelectionPatternId ||
                       patternId == UIA_GridPatternId ||
                       patternId == UIA_TablePatternId ||
                       patternId == UIA_ScrollPatternId;
                break;
            case TREE_VIEW:
                impl = patternId == UIA_SelectionPatternId ||
                       patternId == UIA_ScrollPatternId;
                break;
            case LIST_VIEW:
                impl = patternId == UIA_SelectionPatternId ||
                       patternId == UIA_GridPatternId ||
                       patternId == UIA_ScrollPatternId;
                break;
            case TREE_TABLE_CELL:
            case TABLE_CELL:
                impl = patternId == UIA_SelectionItemPatternId ||
                       patternId == UIA_GridItemPatternId ||
                       patternId == UIA_TableItemPatternId ||
                       patternId == UIA_ScrollItemPatternId;
                break;
            case LIST_ITEM:
                impl = patternId == UIA_SelectionItemPatternId ||
                       patternId == UIA_GridItemPatternId ||
                       patternId == UIA_ScrollItemPatternId;
                break;
            case TREE_ITEM:
                impl = patternId == UIA_SelectionItemPatternId ||
                       patternId == UIA_ExpandCollapsePatternId ||
                       patternId == UIA_ScrollItemPatternId;
                break;
            case TREE_TABLE_ITEM:
                impl = patternId == UIA_SelectionItemPatternId ||
                       patternId == UIA_ExpandCollapsePatternId ||
                       patternId == UIA_GridItemPatternId ||
                       patternId == UIA_TableItemPatternId ||
                       patternId == UIA_ScrollItemPatternId;
                break;

            /* 
             * MSDN doc is confusing if text elements should implement
             * UIA_ValuePatternId. The article 'Text and TextRange Control
             * Patterns' says to implement for backward compatibility (MSAA).
             * The article 'Text Control Type' says to never implement it,
             * and says to use 'Edit control type' instead (which is only
             * available on Windows 8).
             *
             * For now UIA_ValuePatternId is implemented to enable us to set the
             * value on TextField / TextArea controls.
             */
            case TEXT_FIELD:
            case TEXT_AREA:
                impl = patternId == UIA_TextPatternId ||
                       patternId == UIA_ValuePatternId;
                break;
            case TEXT:
                /* UIA_TextPatternId seems overkill for text. Use UIA_NamePropertyId instead */
                break;
            case SPLIT_MENU_BUTTON:
                impl = patternId == UIA_InvokePatternId ||
                       patternId == UIA_ExpandCollapsePatternId;
                break;
            case RADIO_BUTTON:
                impl = patternId == UIA_SelectionItemPatternId;
                break;
            case CHECKBOX:
                impl = patternId == UIA_TogglePatternId;
                break;
            case TOGGLE_BUTTON:
                impl = patternId == UIA_TogglePatternId;
                break;
            case TITLED_PANE:
            case TOOLBAR:
                impl = patternId == UIA_ExpandCollapsePatternId;
                break;
            case COMBOBOX:
                impl = patternId == UIA_ExpandCollapsePatternId ||
                       patternId == UIA_ValuePatternId;
                break;
            case SCROLL_BAR:
            case SLIDER:
            case PROGRESS_INDICATOR:
                impl = patternId == UIA_RangeValuePatternId;
                break;
            case THUMB:
                impl = patternId == UIA_TransformPatternId;
                break;
            default:
        }
        return impl ? getNativeAccessible() : 0L;
    }

    long get_HostRawElementProvider() {
        if (isDisposed()) return 0;
        /* 
         * Returning NULL makes this accessible 'lightweight',
         * GetRuntimeID() will be called for it.
         */
        View view = getView();
        return view != null ? view.getNativeView() : 0;
    }

    WinVariant GetPropertyValue(int propertyId) {
        if (isDisposed()) return null;
        WinVariant variant = null;
        switch (propertyId) {
            case UIA_ControlTypePropertyId: {
                int controlType = getControlType();
                if (controlType != 0) {
                    variant = new WinVariant();
                    variant.vt = WinVariant.VT_I4;
                    variant.lVal = controlType;
                }
                break;
            }
            case UIA_AccessKeyPropertyId: {
                String mnemonic = (String)getAttribute(MNEMONIC);
                if (mnemonic != null) {
                    variant = new WinVariant();
                    variant.vt = WinVariant.VT_BSTR;
                    variant.bstrVal = "Alt"+mnemonic.toLowerCase();
                }
                break;
            }
            case UIA_AcceleratorKeyPropertyId: {
                KeyCombination kc = (KeyCombination)getAttribute(ACCELERATOR);
                if (kc != null) {
                    variant = new WinVariant();
                    variant.vt = WinVariant.VT_BSTR;
                    /* Note: KeyCombination should have a getDisplayText() which encapsulates 
                     * KeystrokeUtils.toString()
                     */
                    variant.bstrVal = kc.toString().replaceAll("Shortcut", "Ctrl");
                }
                break;
            }
            case UIA_NamePropertyId: {
                String name;

                Role role = (Role)getAttribute(ROLE);
                if (role == null) role = Role.NODE; // to prevent NPE
                switch (role) {
                    case COMBOBOX:
                        /*
                         *  These controls use TITLE to answer get_ValueString().
                         *  Only LABELED_BY can be used to specify a name for them.
                         */
                        name = null;
                        break;
                    case TEXT_FIELD:
                    case TEXT_AREA:
                        /*
                         * Note that this results in ignoring the LabeledBy for text
                         * controls because they return their text as the TITLE.
                         * However, otherwise they don't work, i.e. Narrator won't read
                         * the text. Or we should implement more advanced patterns
                         * available on Windows 8 to support text controls properly.
                         */
                    default:
                        name = (String)getAttribute(TITLE);
                }

                if (name == null || name.length() == 0) {
                    Node label = (Node)getAttribute(LABELED_BY);
                    if (label != null) {
//                        name = (String)label.getAccessible().getAttribute(TITLE);
                    }
                }
                if (name == null || name.length() == 0) {
                    /* Code intentionally commented - use for debugging only */
//                    if (getView() != null) {
//                        name = "JavaFXWindow" + id;
//                    } else {
//                        name = toString() + "-" + id;
//                    }
                    break;
                }
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BSTR;
                variant.bstrVal = (String)name;
                break;
            }
            case UIA_HelpTextPropertyId: {
                String tooltip = (String)getAttribute(TOOLTIP);
                if (tooltip != null) {
                    variant = new WinVariant();
                    variant.vt = WinVariant.VT_BSTR;
                    variant.bstrVal = tooltip;
                }
                break;
            }
            case UIA_HasKeyboardFocusPropertyId: {
                Boolean focus = (Boolean)getAttribute(FOCUSED);
                /* 
                 * Note that accessibility focus and scene focus are not the same.
                 * Windows won't work correctly unless the accessible returned in GetFocus() 
                 * answer TRUE in UIA_HasKeyboardFocusPropertyId.
                 * Note that UIA_HasKeyboardFocusPropertyId reports true for the main parent
                 * of a 'focus item', but that doesn't seem to cause problems.
                 */
                if (Boolean.FALSE.equals(focus)) {
                    Scene scene = (Scene)getAttribute(SCENE);
                    if (scene != null) {
//                        Accessible acc = scene.getAccessible();
//                        if (acc != null) {
//                            Node node = (Node)acc.getAttribute(FOCUS_NODE);
//                            if (node != null) {
//                                Node item = (Node)node.getAccessible().getAttribute(FOCUS_ITEM);
//                                if (getAccessible(item) == peer) {
//                                    focus = true;
//                                }
//                            }
//                        }
                    }
                }
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BOOL;
                variant.boolVal = focus != null ? focus : false;
                break;
            }
            case UIA_IsContentElementPropertyId:
            case UIA_IsControlElementPropertyId: {
                //TODO how to handle ControlElement versus ContentElement
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BOOL;
                variant.boolVal = getView() != null || !isIgnored();
                break;
            }
            case UIA_IsEnabledPropertyId: {
                Boolean enabled = (Boolean)getAttribute(ENABLED);
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BOOL;
                variant.boolVal = enabled != null ? enabled : true;
                break;
            }
            case UIA_IsKeyboardFocusablePropertyId: {
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BOOL;
                variant.boolVal = true; //TODO return focusTraversable
                break;
            }
            case UIA_IsPasswordPropertyId: {
                Role role = (Role)getAttribute(ROLE);
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BOOL;
                variant.boolVal = role == Role.PASSWORD_FIELD;
                break;
            }
            case UIA_AutomationIdPropertyId: {
                /* Not required but useful for debugging */
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BSTR;
                variant.bstrVal = "JavaFX"+id;
                break;
            }
            case UIA_ProviderDescriptionPropertyId: {
                /* Not required but useful for debugging */
                variant = new WinVariant();
                variant.vt = WinVariant.VT_BSTR;
                variant.bstrVal = "JavaFXProvider";
                break;
            }
            default:
        }
        return variant;
    }

    /***********************************************/
    /*       IRawElementProviderFragment           */
    /***********************************************/
    float[] get_BoundingRectangle() {
        if (isDisposed()) return null;
        /* No needs to answer for the root */
        if (getView() != null) return null;

        Bounds bounds = (Bounds)getAttribute(BOUNDS);
        if (bounds != null) {
            return new float[] {(float)bounds.getMinX(), (float)bounds.getMinY(),
                                (float)bounds.getWidth(), (float)bounds.getHeight()};
        }
        return null;
    }

    long get_FragmentRoot() {
        if (isDisposed()) return 0L;
        Scene scene = (Scene)getAttribute(SCENE);
        if (scene == null) return 0L;
        Accessible acc = null;//scene.getAccessible();
        if (acc == null) return 0L;
        WinAccessible winAcc = (WinAccessible)acc.impl_getDelegate();
        if (winAcc == null || winAcc.isDisposed()) return 0L;
        return winAcc.getNativeAccessible();
    }

    long[] GetEmbeddedFragmentRoots() {
        if (isDisposed()) return null;
        return null;
    }

    int[] GetRuntimeId() {
        if (isDisposed()) return null;

        /* MSDN: Implementations should return NULL for a top-level element that is hosted in a window. */
        if (getView() != null) return null;
        return new int[] {UiaAppendRuntimeId, id};
    }

    private long NavigateListView(WinAccessible listItemAccessible, int direction) {
        Node list = listItemAccessible.getContainerNode();
        if (list == null) return 0;
        Accessible listAccessible = null;//list.getAccessible();
        if (listAccessible == null) return 0;
        Integer count = (Integer)listAccessible.getAttribute(ROW_COUNT);
        if (count == null || count == 0) return 0;
        Integer index = (Integer)listItemAccessible.getAttribute(INDEX);
        if (index == null) return 0;
        switch (direction) {
            case NavigateDirection_NextSibling: index++; break;
            case NavigateDirection_PreviousSibling: index--; break;
            case NavigateDirection_FirstChild: index = 0; break;
            case NavigateDirection_LastChild: index = count - 1; break;
        }
        Node node = (Node)listAccessible.getAttribute(ROW_AT_INDEX, index);
        return getAccessible(node);
    }

    long Navigate(int direction) {
        if (isDisposed()) return 0;
        Role role = (Role)getAttribute(ROLE);
        /* special case for the tree item hierarchy, as expected by Windows */
        boolean treeCell = role == Role.TREE_ITEM || role == Role.TREE_TABLE_ITEM;
        Node node = null;
        switch (direction) {
            case NavigateDirection_Parent: {
                /* Return null for the top level node */
                if (getView() != null) return 0L;

                if (treeCell) {
                    node = (Node)getAttribute(TREE_ITEM_PARENT);
                    if (node == null) {
                        /* root tree item case*/
                        if (role == Role.TREE_ITEM) {
                            return getContainer(Role.TREE_VIEW);
                        } else {
                            return getContainer(Role.TREE_TABLE_VIEW);
                        }
                    }
                } else {
                    node = (Node)getAttribute(PARENT);
                    if (node == null) {
                        /* scene root node case */
                        Scene scene = (Scene)getAttribute(SCENE);
                        if (scene == null) return 0L;
                        Accessible acc = null;//scene.getAccessible();
                        if (acc == null) return 0L;
                        WinAccessible winAcc = (WinAccessible)acc.impl_getDelegate();
                        if (winAcc == null || winAcc.isDisposed()) return 0L;
                        return winAcc.getNativeAccessible();
                    }
                }
                break;
            }
            case NavigateDirection_NextSibling:
            case NavigateDirection_PreviousSibling: {
                if (role == Role.LIST_ITEM) {
                    return NavigateListView(this, direction);
                }

                Node parent = (Node)getAttribute(treeCell ? TREE_ITEM_PARENT : PARENT);
                /* 
                 * When the parent is NULL is indicates either the root node for the scene
                 * or the root tree item in a tree view. Either way, there is no siblings. 
                 */
                if (parent != null) {
                    Accessible parentAccessible = null;//parent.getAccessible();
                    Function<Integer, Node> getChild;
                    int count = 0;
                    if (treeCell) {
                        Integer result = (Integer)parentAccessible.getAttribute(TREE_ITEM_COUNT);
                        if (result == null) return 0;
                        count = result;
                        getChild = index -> {
                            return (Node)parentAccessible.getAttribute(Attribute.TREE_ITEM_AT_INDEX, index);
                        };
                    } else {
                        ObservableList<Node> children = (ObservableList<Node>)parentAccessible.getAttribute(CHILDREN);
                        if (children == null) return 0;
                        count = children.size();
                        getChild = index -> {
                            return children.get(index);
                        };
                    }

                    WinAccessible winAcc = (WinAccessible)parentAccessible.impl_getDelegate();
                    int lastIndex = winAcc.lastIndex;
                    int currentIndex = -1;
                    if (0 <= lastIndex && lastIndex < count && getAccessible(getChild.apply(lastIndex)) == peer) {
                        currentIndex = lastIndex;
                    } else {
                        for (int i = 0; i < count; i++) {
                            if (getAccessible(getChild.apply(i)) == peer) {
                                currentIndex = i;
                                break;
                            }
                        }
                    }
                    if (currentIndex != -1) {
                        if (direction == NavigateDirection_NextSibling) {
                            currentIndex++;
                        } else {
                            currentIndex--;
                        }
                        if (0 <= currentIndex && currentIndex < count) {
                            node = getChild.apply(currentIndex);
                            winAcc.lastIndex = currentIndex;
                        }
                    }
                }
                break;
            }
            case NavigateDirection_FirstChild:
            case NavigateDirection_LastChild: {
                lastIndex = -1;
                if (role == Role.TREE_VIEW || role == Role.TREE_TABLE_VIEW) {
                    /* The TreeView only returns the root node as child */
                    lastIndex = 0;
                    node = (Node)getAttribute(ROW_AT_INDEX, 0);
                } else if (treeCell) {
                    Integer count = (Integer)getAttribute(TREE_ITEM_COUNT);
                    if (count != null && count > 0) {
                        lastIndex = direction == NavigateDirection_FirstChild ? 0 : count - 1;
                        node = (Node)getAttribute(TREE_ITEM_AT_INDEX, lastIndex);
                    }
                } else {
                    ObservableList<Node> children = (ObservableList<Node>)getAttribute(CHILDREN);
                    if (children != null && children.size() > 0) {
                        lastIndex = direction == NavigateDirection_FirstChild ? 0 : children.size() - 1;
                        node = children.get(lastIndex);
                    }
                    if (node != null) {
//                        role = (Role)node.getAccessible().getAttribute(ROLE);
//                        if (role == Role.LIST_ITEM) {
//                            WinAccessible itemAcc = (WinAccessible)node.getAccessible().impl_getDelegate();
//                            return NavigateListView(itemAcc, direction);
//                        }
                    }
                }
                break;
            }
        }
        return getAccessible(node);
    }

    void SetFocus() {
        if (isDisposed()) return;
    }

    /***********************************************/
    /*     IRawElementProviderFragmentRoot         */
    /***********************************************/
    long ElementProviderFromPoint(double x, double y) {
        if (isDisposed()) return 0;
        Node node = (Node)getAttribute(NODE_AT_POINT, new Point2D(x, y));
        return getAccessible(node);
    }

    long GetFocus() {
        Node node = (Node)getAttribute(FOCUS_NODE);
        if (node == null) return 0L;
        Node item = null;//(Node)node.getAccessible().getAttribute(FOCUS_ITEM);
        if (item != null) return getAccessible(item);
        return getAccessible(node);
    }
    /***********************************************/
    /*     IRawElementProviderAdviseEvents         */
    /***********************************************/
    void AdviseEventAdded(int eventId, long propertyIDs) {
        /* Implementing IRawElementProviderAdviseEvents ensures
         * that the window is announced by Narrator when it first
         * opens. No further action is required.
         */
    }

    void AdviseEventRemoved(int eventId, long propertyIDs) {
        /* See AdviseEventAdded() */
    }

    /***********************************************/
    /*             IInvokeProvider                 */
    /***********************************************/
    void Invoke() {
        if (isDisposed()) return;
        executeAction(Action.FIRE);
    }

    /***********************************************/
    /*           ISelectionProvider                */
    /***********************************************/
    long[] GetSelection() {
        if (isDisposed()) return null;

        /* 
         * GetSelection() is sent by ISelectionProvider and ITextProvider.
         * Check the role before processing message.
         */
        Role role = (Role)getAttribute(ROLE);
        switch (role) {
            case TABLE_ROW:
            case TREE_TABLE_VIEW:
            case TABLE_VIEW: {
                ObservableList<Node> selection = (ObservableList<Node>)getAttribute(SELECTED_CELLS);
                if (selection != null) {
                    return selection.stream().mapToLong(n -> getAccessible(n)).toArray();
                }
                break;
            }
            case TREE_VIEW:
            case LIST_VIEW: {
                ObservableList<Node> selection = (ObservableList<Node>)getAttribute(SELECTED_ROWS);
                if (selection != null) {
                    return selection.stream().mapToLong(n -> getAccessible(n)).toArray();
                }
                break;
            }
            case PAGINATION: {
                Node node = (Node)getAttribute(SELECTED_PAGE);
                if (node != null) {
                    return new long[] {getAccessible(node)};
                }
                break;
            }
            case TAB_PANE: {
                Node node = (Node)getAttribute(SELECTED_TAB);
                if (node != null) {
                    return new long[] {getAccessible(node)};
                }
                break;
            }
            case TEXT_FIELD:
            case TEXT_AREA: {
                if (selectionRange == null) {
                    selectionRange = new WinTextRangeProvider(this);
                }
                if (!selectionRangeValid) {
                    int start = (Integer)getAttribute(SELECTION_START);
                    int end = -1;
                    int length = -1;
                    if (start >= 0) {
                        end = (Integer)getAttribute(SELECTION_END);
                        if (end >= start) {
                            String string = (String)getAttribute(TITLE);
                            length = string.length();
                        }
                    }
                    if (length != -1 && end <= length) {
                        selectionRange.setRange(start, end);
                    } else {
                        selectionRange.setRange(0, 0);
                    }
                    selectionRangeValid = true;
                }
                return new long[] {selectionRange.getNativeProvider()};
            }
            default:
        }
        return null;
    }

    boolean get_CanSelectMultiple() {
        if (isDisposed()) return false;
        Role role = (Role)getAttribute(ROLE);
        if (role != null) {
            switch (role) {
                case LIST_VIEW:
                case TABLE_VIEW:
                case TREE_VIEW:
                case TREE_TABLE_VIEW:
                    return Boolean.TRUE.equals(getAttribute(MULTIPLE_SELECTION));
                default:
            }
        }
        return false;
    }

    boolean get_IsSelectionRequired() {
        if (isDisposed()) return false;
        //TODO: this may not be true...
        return true;
    }

    /***********************************************/
    /*           IRangeValueProvider               */
    /***********************************************/
    void SetValue(double val) {
        if (isDisposed()) return;
        Role role = (Role)getAttribute(ROLE);
        if (role != null) {
            switch (role) {
                case SLIDER:
                case SCROLL_BAR:
                    executeAction(Action.SET_VALUE, val);
                    break;
                default:
            }
        }
    }

    double get_Value() {
        if (isDisposed()) return 0;
        Double value = (Double)getAttribute(VALUE);
        return value != null ? value : 0;
    }

    /*
     * Note that this method is called by the IValueProvider also.
     */
    boolean get_IsReadOnly() {
        if (isDisposed()) return false;
        Role role = (Role)getAttribute(ROLE);
        if (role != null) {
            switch (role) {
                case SLIDER:
                case SCROLL_BAR:
                case TEXT_FIELD:
                case TEXT_AREA: return false;
                case COMBOBOX: return Boolean.FALSE.equals(getAttribute(EDITABLE));
                default:
            }
        }
        return true;
    }

    double get_Maximum() {
        if (isDisposed()) return 0;
        Double value = (Double)getAttribute(MAX_VALUE);
        return value != null ? value : 0;
    }

    double get_Minimum() {
        if (isDisposed()) return 0;
        Double value = (Double)getAttribute(MIN_VALUE);
        return value != null ? value : 0;
    }

    double get_LargeChange() {
        if (isDisposed()) return 0;
        return 10;//TODO
    }

    double get_SmallChange() {
        if (isDisposed()) return 0;
        return 3;//TODO
    }

    /***********************************************/
    /*             IValueProvider                  */
    /***********************************************/
    void SetValueString(String val) {
        if (isDisposed()) return;
        Role role = (Role)getAttribute(ROLE);
        if (role != null) {
            switch (role) {
                case TEXT_FIELD:
                case TEXT_AREA:
                    executeAction(Action.SET_TITLE, val);
                    break;
                default:
            }
        }
    }

    String get_ValueString() {
        if (isDisposed()) return null;
        return (String)getAttribute(TITLE);
    }

    /***********************************************/
    /*          ISelectionItemProvider             */
    /***********************************************/
    void Select() {
        if (isDisposed()) return;
        Role role = (Role)getAttribute(ROLE);
        if (role != null) {
            switch (role) {
                case RADIO_BUTTON:
                case BUTTON:
                case TOGGLE_BUTTON:
                case INCREMENT_BUTTON:
                case DECREMENT_BUTTON:
                    executeAction(Action.FIRE);
                    break;
                default:
                    executeAction(Action.SELECT);
            }
        }
    }

    void AddToSelection() {
        if (isDisposed()) return;
        executeAction(Action.ADD_TO_SELECTION);
    }

    void RemoveFromSelection() {
        if (isDisposed()) return;
        executeAction(Action.REMOVE_FROM_SELECTION);
    }

    boolean get_IsSelected() {
        if (isDisposed()) return false;
        return Boolean.TRUE.equals(getAttribute(SELECTED));
    }

    long get_SelectionContainer() {
        Node node = getContainerNode();
        return node == null ? 0 : getAccessible(node);
    }

    /***********************************************/
    /*              ITextProvider                  */
    /***********************************************/
    long[] GetVisibleRanges() {
        if (isDisposed()) return null;
        return new long[] {get_DocumentRange()};
    }

    long RangeFromChild(long childElement) {
        if (isDisposed()) return 0;
        return 0;
    }

    long RangeFromPoint(double x, double y) {
        if (isDisposed()) return 0;
        Integer offset = (Integer)getAttribute(OFFSET_AT_POINT, new Point2D(x, y));
        if (offset != null) {
            WinTextRangeProvider range = new WinTextRangeProvider(this);
            range.setRange(offset, offset);
            return range.getNativeProvider();
        }
        return 0;
    }

    long get_DocumentRange() {
        if (isDisposed()) return 0;
        if (documentRange == null) {
            documentRange = new WinTextRangeProvider(this);
        }
        if (!documentRangeValid) {
            String text = (String)getAttribute(TITLE);
            documentRange.setRange(0, text.length());
            documentRangeValid = true;
        }
        return documentRange.getNativeProvider();
    }

    int get_SupportedTextSelection() {
        if (isDisposed()) return 0;
        /* Before this can be done extra API for multiple selection will be required. */
//        if (Boolean.TRUE.equals(getAttribute(MULTIPLE_SELECTION))) {
//            return SupportedTextSelection_Multiple;
//        }
        return SupportedTextSelection_Single;
    }

    /***********************************************/
    /*             IGridProvider                   */
    /***********************************************/
    int get_ColumnCount() {
        if (isDisposed()) return 0;
        Integer count = (Integer)getAttribute(COLUMN_COUNT);

        /* 
         * JFX does not require ListView to report column count == 1
         * But Windows wants a column count of (at least) 1.
         */
        return count != null ? count : 1;
    }

    int get_RowCount() {
        if (isDisposed()) return 0;
        Integer count = (Integer)getAttribute(ROW_COUNT);
        return count != null ? count : 0;
    }

    long GetItem(int row, int column) {
        if (isDisposed()) return 0;
        Node node = (Node)getAttribute(CELL_AT_ROW_COLUMN, row, column);
        return getAccessible(node);
    }

    /***********************************************/
    /*             IGridItemProvider               */
    /***********************************************/
    int get_Column() {
        if (isDisposed()) return 0;
        Integer result = (Integer)getAttribute(COLUMN_INDEX);
        return result != null ? result : 0;
    }

    int get_ColumnSpan() {
        if (isDisposed()) return 0;
        return 1;
    }

    long get_ContainingGrid() {
        if (isDisposed()) return 0;
        Role role = (Role) getAttribute(ROLE);
        if (role != null) {
            switch(role) {
                case TABLE_ROW:
                case TABLE_CELL: return getContainer(Role.TABLE_VIEW);
                case LIST_ITEM: return getContainer(Role.LIST_VIEW);
                case TREE_TABLE_ITEM:
                case TREE_TABLE_CELL: return getContainer(Role.TREE_TABLE_VIEW);
                default:
            }
        }
        return 0;
    }

    int get_Row() {
        if (isDisposed()) return 0;
        Integer result = null;
        Role role = (Role) getAttribute(ROLE);
        if (role != null) {
            switch (role) {
                case TREE_TABLE_ITEM:
                case TREE_TABLE_CELL:
                case TABLE_ROW:
                case TABLE_CELL: result = (Integer)getAttribute(ROW_INDEX); break;
                case LIST_ITEM: result = (Integer)getAttribute(INDEX); break;
                default:
            }
        }
        return result != null ? result : 0;
    }

    int get_RowSpan() {
        if (isDisposed()) return 0;
        return 1;
    }

    /***********************************************/
    /*               ITableProvider                */
    /***********************************************/
    long[] GetColumnHeaders() {
        if (isDisposed()) return null;
       /* No support in JFX to return all columns with a single call */
       return null;
    }

    long[] GetRowHeaders() {
        if (isDisposed()) return null;
       /* No row header support on JFX */
       return null;
    }

    int get_RowOrColumnMajor() {
        if (isDisposed()) return 0;
        return RowOrColumnMajor_RowMajor;
    }

    /***********************************************/
    /*             ITableItemProvider              */
    /***********************************************/
    long[] GetColumnHeaderItems() {
        if (isDisposed()) return null;
       Integer columnIndex = (Integer)getAttribute(COLUMN_INDEX);
       if (columnIndex == null) return null;
       Node table = null;
       Node node = (Node)getAttribute(PARENT);
       while (node != null) {
           Accessible acc = null;//node.getAccessible();
           Role role = (Role)acc.getAttribute(ROLE);
           if (role == Role.TABLE_VIEW || role == Role.TREE_TABLE_VIEW) {
               table = node;
               break;
           }
           node = (Node)acc.getAttribute(PARENT);
       }
       if (table == null) return null;
       Node column = null;//(Node)table.getAccessible().getAttribute(COLUMN_AT_INDEX, columnIndex);
       return new long[] {getAccessible(column)};
    }

    long[] GetRowHeaderItems() {
        if (isDisposed()) return null;
        /* No row header support on JFX */
       return null;
    }

    /***********************************************/
    /*             IToggleProvider                 */
    /***********************************************/
    void Toggle() {
        if (isDisposed()) return;
        executeAction(Action.FIRE);
    }

    int get_ToggleState() {
        if (isDisposed()) return 0;
        if (Boolean.TRUE.equals(getAttribute(INDETERMINATE))) {
            return ToggleState_Indeterminate;
        }
        boolean selected = Boolean.TRUE.equals(getAttribute(SELECTED));
        return selected ? ToggleState_On : ToggleState_Off;
    }

    /***********************************************/
    /*             IExpandCollapseProvider         */
    /***********************************************/
    void Collapse() {
        if (isDisposed()) return;
        Role role = (Role)getAttribute(ROLE);
        if (role == Role.TOOLBAR) {
            Node button = (Node)getAttribute(OVERFLOW_BUTTON);
            if (button != null) {
//                button.getAccessible().executeAction(Action.FIRE);
            }
            return;
        }
        executeAction(Action.COLLAPSE);
    }

    void Expand() {
        if (isDisposed()) return;
        Role role = (Role)getAttribute(ROLE);
        if (role == Role.TOOLBAR) {
            Node button = (Node)getAttribute(OVERFLOW_BUTTON);
            if (button != null) {
//                button.getAccessible().executeAction(Action.FIRE);
            }
            return;
        }
        executeAction(Action.EXPAND);
    }

    int get_ExpandCollapseState() {
        if (isDisposed()) return 0;

        Role role = (Role)getAttribute(ROLE);
        if (role == Role.TOOLBAR) {
            Node button = (Node)getAttribute(OVERFLOW_BUTTON);
            if (button != null) {
//                boolean visible = Boolean.TRUE.equals(button.getAccessible().getAttribute(VISIBLE));
//                return visible ? ExpandCollapseState_Collapsed : ExpandCollapseState_Expanded;
            }
        }

        /* 
         * We ask if the accessible is a leaf for the TreeItem case where
         * we want to return that it is a leaf node. In other cases
         * (e.g. ComboBox) this will return false which means the ComboBox is
         * not a leaf and the final return statement falls through to returning
         * either expanded or collapsed, as expected.
         */
        Object o = getAttribute(LEAF);
        if (Boolean.TRUE.equals(o)) return ExpandCollapseState_LeafNode;

        o = getAttribute(EXPANDED);
        boolean isExpanded = Boolean.TRUE.equals(o);
        return isExpanded ? ExpandCollapseState_Expanded : ExpandCollapseState_Collapsed;
    }

    /***********************************************/
    /*             ITransformProvider              */
    /***********************************************/
    boolean get_CanMove() {
        Role role = (Role)getAttribute(ROLE);
        switch (role) {
            case THUMB: return true;
            default: return false;
        }
    }

    boolean get_CanResize() {
        return false;
    }

    boolean get_CanRotate() {
        return false;
    }

    void Move(double x, double y) {
        executeAction(Action.MOVE, x, y);
    }

    void Resize(double width, double height) {
    }

    void Rotate(double degrees) {
    }

    /***********************************************/
    /*             IScrollProvider                 */
    /***********************************************/
    void Scroll(int horizontalAmount, int verticalAmount) {
        if (isDisposed()) return;

        /* dealing with vertical scroll first */
        if (get_VerticallyScrollable()) {
            Node vsb = (Node)getAttribute(VERTICAL_SCROLLBAR);
//            Accessible vsba = vsb.getAccessible();
//            switch (verticalAmount) {
//                case ScrollAmount_LargeIncrement:
//                    vsba.executeAction(Action.BLOCK_INCREMENT);
//                    break;
//                case ScrollAmount_SmallIncrement:
//                    vsba.executeAction(Action.INCREMENT);
//                    break;
//                case ScrollAmount_LargeDecrement:
//                    vsba.executeAction(Action.BLOCK_DECREMENT);
//                    break;
//                case ScrollAmount_SmallDecrement:
//                    vsba.executeAction(Action.DECREMENT);
//                    break;
//                default:
//            }
        }

        /* now dealing with horizontal scroll */
        if (get_HorizontallyScrollable()) {
            Node hsb = (Node)getAttribute(HORIZONTAL_SCROLLBAR);
//            Accessible hsba = hsb.getAccessible();
//            switch (horizontalAmount) {
//                case ScrollAmount_LargeIncrement:
//                    hsba.executeAction(Action.BLOCK_INCREMENT);
//                    break;
//                case ScrollAmount_SmallIncrement:
//                    hsba.executeAction(Action.INCREMENT);
//                    break;
//                case ScrollAmount_LargeDecrement:
//                    hsba.executeAction(Action.BLOCK_DECREMENT);
//                    break;
//                case ScrollAmount_SmallDecrement:
//                    hsba.executeAction(Action.DECREMENT);
//                    break;
//                default:
//            }
        }
    }

    void SetScrollPercent(double horizontalPercent, double verticalPercent) {
        if (isDisposed()) return;

        /* dealing with vertical scroll first */
        if (verticalPercent != UIA_ScrollPatternNoScroll && get_VerticallyScrollable()) {
            Node vsb = (Node)getAttribute(VERTICAL_SCROLLBAR);
//            Double min = (Double)vsb.getAccessible().getAttribute(MIN_VALUE);
//            Double max = (Double)vsb.getAccessible().getAttribute(MAX_VALUE);
//            if (min != null && max != null) {
//                vsb.getAccessible().executeAction(Action.SET_VALUE, (max-min)*(verticalPercent/100)+min);
//            }
        }

        /* now dealing with horizontal scroll */
        if (horizontalPercent != UIA_ScrollPatternNoScroll && get_HorizontallyScrollable()) {
            Node hsb = (Node)getAttribute(HORIZONTAL_SCROLLBAR);
//            Double min = (Double)hsb.getAccessible().getAttribute(MIN_VALUE);
//            Double max = (Double)hsb.getAccessible().getAttribute(MAX_VALUE);
//            if (min != null && max != null) {
//                hsb.getAccessible().executeAction(Action.SET_VALUE, (max-min)*(horizontalPercent/100)+min);
//            }
        }
    }

    boolean get_HorizontallyScrollable() {
        if (isDisposed()) return false;

        Node hsb = (Node)getAttribute(HORIZONTAL_SCROLLBAR);
        if (hsb == null) return false;

        Boolean visible = null;//(Boolean)hsb.getAccessible().getAttribute(VISIBLE);
        return Boolean.TRUE.equals(visible);
    }

    double get_HorizontalScrollPercent() {
        if (isDisposed()) return 0;

        if (!get_HorizontallyScrollable()) {
            return UIA_ScrollPatternNoScroll;
        }

        Node hsb = (Node) getAttribute(HORIZONTAL_SCROLLBAR);
        if (hsb != null) {
            /* Windows expects a percentage between 0 and 100 */
//            Accessible hsba = hsb.getAccessible();
//            Double value = (Double)hsba.getAttribute(VALUE);
//            if (value == null) return 0;
//            Double max = (Double)hsba.getAttribute(MAX_VALUE);
//            if (max == null) return 0;
//            Double min = (Double)hsba.getAttribute(MIN_VALUE);
//            if (min == null) return 0;
//            return (100 * (value - min)) / (max - min);
        }

        return 0;
    }

    double get_HorizontalViewSize() {
        if (isDisposed()) return 0;
        if (!get_HorizontallyScrollable()) return 100; /* MSDN spec */
        Node content = (Node) getAttribute(CONTENTS);
        if (content == null) return 100;
        Bounds contentBounds = null;//(Bounds) content.getAccessible().getAttribute(BOUNDS);
        if (contentBounds == null) return 0;
        Bounds scrollPaneBounds = (Bounds)getAttribute(BOUNDS);
        if (scrollPaneBounds == null) return 0;
        return scrollPaneBounds.getWidth() / contentBounds.getWidth() * 100;
    }

    boolean get_VerticallyScrollable() {
        if (isDisposed()) return false;

        Node vsb = (Node) getAttribute(VERTICAL_SCROLLBAR);
        if (vsb == null) return false;

        Boolean visible = null;//(Boolean)vsb.getAccessible().getAttribute(VISIBLE);
        return Boolean.TRUE.equals(visible);
    }

    double get_VerticalScrollPercent() {
        if (isDisposed()) return 0;

        if (!get_VerticallyScrollable()) {
            return UIA_ScrollPatternNoScroll;
        }

        Node vsb = (Node) getAttribute(Attribute.VERTICAL_SCROLLBAR);
        if (vsb != null) {
            /* Windows expects a percentage between 0 and 100 */
//            Accessible vsba = vsb.getAccessible();
//            Double value = (Double)vsba.getAttribute(VALUE);
//            if (value == null) return 0;
//            Double max = (Double)vsba.getAttribute(MAX_VALUE);
//            if (max == null) return 0;
//            Double min = (Double)vsba.getAttribute(MIN_VALUE);
//            if (min == null) return 0;
//            return (100 * (value - min)) / (max - min);
        }

        return 0;
    }

    double get_VerticalViewSize() {
        if (isDisposed()) return 0;
        if (!get_VerticallyScrollable()) return 100;

        double contentHeight = 0;

        Bounds scrollPaneBounds = (Bounds) getAttribute(BOUNDS);
        if (scrollPaneBounds == null) return 0;
        double scrollPaneHeight = scrollPaneBounds.getHeight();

        Role role = (Role) getAttribute(ROLE);
        if (role == Role.SCROLL_PANE) {
            Node content = (Node) getAttribute(CONTENTS);
            if (content != null) {
//                Bounds contentBounds = (Bounds) content.getAccessible().getAttribute(BOUNDS);
//                contentHeight = contentBounds == null ? 0 : contentBounds.getHeight();
            }
        } else {
            Integer itemCount = 0;
            switch (role) {
                case LIST_VIEW:
                case TABLE_VIEW:
                case TREE_VIEW:
                case TREE_TABLE_VIEW:
                    itemCount = (Integer) getAttribute(ROW_COUNT);
                    break;
                default:
            }

            /*
             * Do a quick calculation to approximate the height of the
             * content area by assuming a fixed height multiplied by the number
             * of items. The default height we use is 24px, which is the default
             * height as specified in com.sun.javafx.scene.control.skin.CellSkinBase.
             */
            contentHeight = itemCount == null ? 0 : itemCount * 24;
        }

        return contentHeight == 0 ? 0 : scrollPaneHeight / contentHeight * 100;
    }

    /***********************************************/
    /*             IScrollItemProvider             */
    /***********************************************/
    void ScrollIntoView() {
        if (isDisposed()) return;

        Integer cellIndex = (Integer)getAttribute(INDEX);
        if (cellIndex == null) cellIndex = (Integer)getAttribute(ROW_INDEX);
        Node container = getContainerNode();
        if (cellIndex != null && container != null) {
//            container.getAccessible().executeAction(Action.SCROLL_TO_INDEX, cellIndex);
        }
    }
}
