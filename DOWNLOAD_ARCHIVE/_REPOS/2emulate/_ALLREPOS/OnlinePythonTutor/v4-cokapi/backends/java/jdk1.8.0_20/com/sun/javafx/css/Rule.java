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

package com.sun.javafx.css;

import com.sun.javafx.collections.TrackableObservableList;
import javafx.collections.ListChangeListener.Change;
import javafx.collections.ObservableList;
import javafx.css.PseudoClass;
import javafx.css.StyleOrigin;
import javafx.scene.Node;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/*
 * A selector is a collection of selectors and declarations.
 */
final public class Rule {

    private List<Selector> selectors = null;

    /**
     * The list returned from this method should be treated as unmodifiable.
     * Tools should use {@link #getSelectors()} which tracks adds and removes.
     */
    public List<Selector>  getUnobservedSelectorList() {
        if (selectors == null) {
            selectors = new ArrayList<Selector>();
        }
        return selectors;
    }

    private List<Declaration> declarations = null;
    /**
     * The list returned from this method should be treated as unmodifiable.
     * Tools should use {@link #getDeclarations()} which tracks adds and removes.
     */
    public List<Declaration> getUnobservedDeclarationList() {

        if (declarations == null && serializedDecls != null) {

            try {
                ByteArrayInputStream bis = new ByteArrayInputStream(serializedDecls);
                DataInputStream dis = new DataInputStream(bis);

                short nDeclarations = dis.readShort();
                declarations = new ArrayList<Declaration>(nDeclarations);
                for (int i = 0; i < nDeclarations; i++) {

                    Declaration decl = Declaration.readBinary(bssVersion, dis, stylesheet.getStringStore());
                    decl.rule = Rule.this;

                    if (stylesheet != null && stylesheet.getUrl() != null) {
                        String stylesheetUrl = stylesheet.getUrl();
                        decl.fixUrl(stylesheetUrl);
                    }

                    declarations.add(decl);
                }

            } catch (IOException ioe) {
                declarations = new ArrayList<>();
                assert false; ioe.getMessage();

            } finally {
                serializedDecls = null;
            }

        }

        return declarations;
    }

    private Observables observables = null;

    /**
     * This method is to support tooling that may want to add declarations to
     * or remove declarations from a Rule. Changes to the list are tracked
     * so that added declarations are tagged as belonging to this rule, and
     * the rule for removed declarations is nulled out.
     * If the list is not going to be modified, then it is more efficient to
     * call {@link #getUnobservedDeclarationList()}, but the returned list
     * must be treated as unmodifiable.
     * @return
     */
    public final ObservableList<Declaration> getDeclarations() {

        if (observables == null) {
            observables = new Observables(this);
        }

        return observables.getDeclarations();
    }

    /**
     * This method is to support tooling that may want to add selectors to
     * or remove selectors from a Rule. Changes to the list are tracked
     * so that added selectors are tagged as belonging to this rule, and
     * the rule for removed selectors is nulled out.
     * If the list is not going to be modified, then it is more efficient to
     * call {@link #getUnobservedSelectorList()}, but the returned list
     * must be treated as unmodifiable.
     * @return
     */
    public final ObservableList<Selector> getSelectors() {

        if (observables == null) {
            observables = new Observables(this);
        }

        return observables.getSelectors();
    }

    /** The stylesheet this selector belongs to */
    private Stylesheet stylesheet;
    public Stylesheet getStylesheet() {
        return stylesheet;
    }

    /* package */
    void setStylesheet(Stylesheet stylesheet) {

        // For an imported stylesheet, update origin, but not stylesheet ref
        // TODO: I don't like this. Done as an expedient for at-import-rule.
        if (this.stylesheet != null && stylesheet != null) {
            this.stylesheet.setOrigin(stylesheet.getOrigin());
            return;
        }

        this.stylesheet = stylesheet;
        
        if (stylesheet != null && stylesheet.getUrl() != null) {
            final String stylesheetUrl = stylesheet.getUrl();

            int nDeclarations = declarations != null ? declarations.size() : 0;
            for (int d=0; d<nDeclarations; d++) {
                declarations.get(d).fixUrl(stylesheetUrl);
            }
        }
    }

    public StyleOrigin getOrigin() {
        return stylesheet != null ? stylesheet.getOrigin() : null;
    }


    public Rule(List<Selector> selectors, List<Declaration> declarations) {

        this.selectors = selectors;
        this.declarations = declarations;
        serializedDecls = null;
        this.bssVersion = Stylesheet.BINARY_CSS_VERSION;

        int sMax = selectors != null ? selectors.size() : 0;
        for(int i = 0; i < sMax; i++) {
            Selector sel = selectors.get(i);
            sel.setRule(Rule.this);
        }

        int dMax = declarations != null ? declarations.size() : 0;
        for (int d=0; d<dMax; d++) {
            Declaration decl = declarations.get(d);
            decl.rule = this;
        }
    }

    private byte[] serializedDecls;
    private final int bssVersion;

    private Rule(List<Selector> selectors, byte[] buf, int bssVersion) {

        this.selectors = selectors;
        this.declarations = null;
        this.serializedDecls = buf;
        this.bssVersion = bssVersion;

        int sMax = selectors != null ? selectors.size() : 0;
        for(int i = 0; i < sMax; i++) {
            Selector sel = selectors.get(i);
            sel.setRule(Rule.this);
        }

    }

    // Return mask of selectors that match
    long applies(Node node, Set<PseudoClass>[] triggerStates) {
        long mask = 0;
        for (int i = 0; i < selectors.size(); i++) {
            Selector sel = selectors.get(i);
            if (sel.applies(node, triggerStates, 0)) {                
                mask |= 1l << i;
            }
        }
        return mask;
    }

    /** Converts this object to a string. */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        if (selectors.size()>0) {
            sb.append(selectors.get(0));
        }
        for (int n=1; n<selectors.size(); n++) {
            sb.append(',');
            sb.append(selectors.get(n));
        }
        sb.append("{\n");
        int nDeclarations = declarations != null ? declarations.size() : 0;
        for (int n=0; n<nDeclarations; n++) {
            sb.append("\t");
            sb.append(declarations.get(n));
            sb.append("\n");
        }
        sb .append("}");
        return sb.toString();
    }

    /*
     * If an authoring tool adds or removes a selector or declaration,
     * then the selector or declaration needs to be tweaked to know that
     * this is the Rule to which it belongs.
     */
    private final static class Observables {

        private Observables(Rule rule) {

            this.rule = rule;

            selectorObservableList = new TrackableObservableList<Selector>(rule.getUnobservedSelectorList()) {
                @Override protected void onChanged(Change<Selector> c) {
                    while (c.next()) {
                        if (c.wasAdded()) {
                            List<Selector> added = c.getAddedSubList();
                            for(int i = 0, max = added.size(); i < max; i++) {
                                Selector sel = added.get(i);
                                sel.setRule(Observables.this.rule);
                            }
                        }

                        if (c.wasRemoved()) {
                            List<Selector> removed = c.getAddedSubList();
                            for(int i = 0, max = removed.size(); i < max; i++) {
                                Selector sel = removed.get(i);
                                if (sel.getRule() == Observables.this.rule) {
                                    sel.setRule(null);
                                }
                            }
                        }
                    }
                }
            };

            declarationObservableList = new TrackableObservableList<Declaration>(rule.getUnobservedDeclarationList()) {
                @Override protected void onChanged(Change<Declaration> c) {
                    while (c.next()) {
                        if (c.wasAdded()) {
                            List<Declaration> added = c.getAddedSubList();
                            for(int i = 0, max = added.size(); i < max; i++) {
                                Declaration decl = added.get(i);
                                decl.rule = Observables.this.rule;

                                Stylesheet stylesheet = Observables.this.rule.stylesheet;
                                if (stylesheet != null && stylesheet.getUrl() != null) {
                                    final String stylesheetUrl = stylesheet.getUrl();
                                    decl.fixUrl(stylesheetUrl);
                                }
                            }
                        }

                        if (c.wasRemoved()) {
                            List<Declaration> removed = c.getRemoved();
                            for(int i = 0, max = removed.size(); i < max; i++) {
                                Declaration decl = removed.get(i);
                                if (decl.rule == Observables.this.rule) {
                                    decl.rule = null;
                                }
                            }
                        }
                    }
                }
            };

        }

        private ObservableList<Selector> getSelectors() {
            return selectorObservableList;
        }

        private ObservableList<Declaration> getDeclarations() {
            return declarationObservableList;
        }

        private final Rule rule;
        private final ObservableList<Selector> selectorObservableList;
        private final ObservableList<Declaration> declarationObservableList;

    }

    final void writeBinary(DataOutputStream os, StringStore stringStore)
            throws IOException {

        final int nSelectors = this.selectors != null ? this.selectors.size() : 0;
        os.writeShort(nSelectors);
        for (int i = 0; i < nSelectors; i++) {
            Selector sel = this.selectors.get(i);
            sel.writeBinary(os, stringStore);
        }

        List<Declaration> decls = getUnobservedDeclarationList();
        if (decls != null) {

            ByteArrayOutputStream bos = new ByteArrayOutputStream(5192);
            DataOutputStream dos = new DataOutputStream(bos);

            int nDeclarations =  decls.size();
            dos.writeShort(nDeclarations);

            for (int i = 0; i < nDeclarations; i++) {
                Declaration decl = declarations.get(i);
                decl.writeBinary(dos, stringStore);
            }

            os.writeInt(bos.size());
            os.write(bos.toByteArray());

        } else {
            // no declarations!
            os.writeShort(0);
        }
    }

    static Rule readBinary(int bssVersion, DataInputStream is, String[] strings)
            throws IOException
    {
        short nSelectors = is.readShort();
        List<Selector> selectors = new ArrayList<Selector>(nSelectors);
        for (int i = 0; i < nSelectors; i++) {
            Selector s = Selector.readBinary(bssVersion, is, strings);
            selectors.add(s);
        }

        if (bssVersion < 4) {
            short nDeclarations = is.readShort();
            List<Declaration> declarations = new ArrayList<Declaration>(nDeclarations);
            for (int i = 0; i < nDeclarations; i++) {
                Declaration d = Declaration.readBinary(bssVersion, is, strings);
                declarations.add(d);
            }

            return new Rule(selectors, declarations);
        }

        // de-serialize decls into byte array
        int nBytes = is.readInt();
        byte[] buf = new byte[nBytes];

        if (nBytes > 0) {
            is.readFully(buf);
        }
        return new Rule(selectors, buf, bssVersion);
    }
}
