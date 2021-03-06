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

package javafx.scene.text;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javafx.beans.property.DoubleProperty;
import javafx.beans.property.ObjectProperty;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.NodeOrientation;
import javafx.geometry.Orientation;
import javafx.geometry.VPos;
import javafx.scene.Node;
//import javafx.scene.accessibility.Attribute;
//import javafx.scene.accessibility.Role;
import javafx.scene.layout.Pane;
import javafx.css.StyleableDoubleProperty;
import javafx.css.StyleableObjectProperty;
import javafx.css.CssMetaData;

import com.sun.javafx.css.converters.EnumConverter;
import com.sun.javafx.css.converters.SizeConverter;
import com.sun.javafx.geom.BaseBounds;
import com.sun.javafx.geom.Point2D;
import com.sun.javafx.geom.RectBounds;
import com.sun.javafx.scene.text.GlyphList;
import com.sun.javafx.scene.text.TextLayout;
import com.sun.javafx.scene.text.TextLayoutFactory;
import com.sun.javafx.scene.text.TextSpan;
import com.sun.javafx.tk.Toolkit;

import javafx.css.Styleable;
import javafx.css.StyleableProperty;

/**
 * TextFlow is special layout designed to lay out rich text.
 * It can be used to layout several {@link Text} nodes in a single text flow.
 * The TextFlow uses the text and the font of each {@link Text} node inside of it
 * plus it own width and text alignment to determine the location for each child.
 * A single {@link Text} node can span over several lines due to wrapping and
 * the visual location of {@link Text} node can differ from the logical location
 * due to bidi reordering.
 *
 * <p>
 * Any other Node, rather than Text, will be treated as embedded object in the
 * text layout. It will be inserted in the content using its preferred width,
 * height, and baseline offset.
 *
 * <p>
 * When a {@link Text} node is inside of a TextFlow some its properties are ignored.
 * For example, the x and y properties of the {@link Text} node are ignored since
 * the location of the node is determined by the parent. Likewise, the wrapping
 * width in the {@link Text} node is ignored since the width used for wrapping
 * is the TextFlow's width. The value of the <code>pickOnBounds</code> property
 * of a {@link Text} is set to <code>false</code> when it is laid out by the
 * TextFlow. This happens because the content of a single {@link Text} node can
 * divided and placed in the different locations on the TextFlow (usually due to
 * line breaking and bidi reordering).
 *
 * <p>
 * The wrapping width of the layout is determined by the region's current width.
 * It can be specified by the application by setting the textflow's preferred
 * width. If no wrapping is desired, the application can either set the preferred
 * with to Double.MAX_VALUE or Region.USE_COMPUTED_SIZE.
 *
 * <p>
 * Paragraphs are separated by {@code '\n'} present in any Text child.
 *
 * <p>
 * Example of a TextFlow:
 * <pre><code>
 *     Text text1 = new Text("Big italic red text");
 *     text1.setFill(Color.RED);
 *     text1.setFont(Font.font("Helvetica", FontPosture.ITALIC, 40));
 *     Text text2 = new Text(" little bold blue text");
 *     text2.setFill(Color.BLUE);
 *     text2.setFont(Font.font("Helvetica", FontWeight.BOLD, 10));
 *     TextFlow textFlow = new TextFlow(text1, text2);
 * </code></pre>
 *
 * <p>
 * TextFlow lays out each managed child regardless of the child's visible property value;
 * unmanaged children are ignored for all layout calculations.</p>
 *
 * <p>
 * TextFlow may be styled with backgrounds and borders using CSS.  See
 * {@link javafx.scene.layout.Region Region} superclass for details.</p>
 *
 * <h4>Resizable Range</h4>
 *
 * A textflow's parent will resize the textflow within the textflow's range
 * during layout. By default the textflow computes this range based on its content
 * as outlined in the tables below.
 * <p>
 * <table border="1">
 * <tr><td></td><th>width</th><th>height</th></tr>
 * <tr><th>minimum</th>
 * <td>left/right insets</td>
 * <td>top/bottom insets plus the height of the text content</td></tr>
 * <tr><th>preferred</th>
 * <td>left/right insets plus the width of the text content</td>
 * <td>top/bottom insets plus the height of the text content</td></tr>
 * <tr><th>maximum</th>
 * <td>Double.MAX_VALUE</td><td>Double.MAX_VALUE</td></tr>
 * </table>
 * <p>
 * A textflow's unbounded maximum width and height are an indication to the parent that
 * it may be resized beyond its preferred size to fill whatever space is assigned to it.
 * <p>
 * TextFlow provides properties for setting the size range directly.  These
 * properties default to the sentinel value Region.USE_COMPUTED_SIZE, however the
 * application may set them to other values as needed:
 * <pre><code>
 *     <b>textflow.setMaxWidth(500);</b>
 * </code></pre>
 * Applications may restore the computed values by setting these properties back
 * to Region.USE_COMPUTED_SIZE.
 * <p>
 * TextFlow does not clip its content by default, so it is possible that childrens'
 * bounds may extend outside its own bounds if a child's pref size is larger than
 * the space textflow has to allocate for it.</p>
 *
 * @since JavaFX 8.0
 */
public class TextFlow extends Pane {

    private TextLayout layout;
    private boolean needsContent;
    private boolean inLayout;

    /**
     * Creates an empty TextFlow layout.
     */
    public TextFlow() {
        super();
        effectiveNodeOrientationProperty().addListener(observable -> checkOrientation());
    }

    /**
     * Creates a TextFlow layout with the given children.
     *
     * @param children children.
     */
    public TextFlow(Node... children) {
        this();
        getChildren().addAll(children);
    }

    private void checkOrientation() {
        NodeOrientation orientation = getEffectiveNodeOrientation();
        boolean rtl =  orientation == NodeOrientation.RIGHT_TO_LEFT;
        int dir = rtl ? TextLayout.DIRECTION_RTL : TextLayout.DIRECTION_LTR;
        TextLayout layout = getTextLayout();
        if (layout.setDirection(dir)) {
            requestLayout();
        }
    }

    @Override
    public boolean usesMirroring() {
        return false;
    }

    @Override protected void setWidth(double value) {
        if (value != getWidth()) {
            TextLayout layout = getTextLayout();
            Insets insets = getInsets();
            double left = snapSpace(insets.getLeft());
            double right = snapSpace(insets.getRight());
            double width = Math.max(1, value - left - right);
            layout.setWrapWidth((float)width);
            super.setWidth(value);
        }
    }

    @Override protected double computePrefWidth(double height) {
        TextLayout layout = getTextLayout();
        layout.setWrapWidth(0);
        double width = layout.getBounds().getWidth();
        Insets insets = getInsets();
        double left = snapSpace(insets.getLeft());
        double right = snapSpace(insets.getRight());
        double wrappingWidth = Math.max(1, getWidth() - left - right);
        layout.setWrapWidth((float)wrappingWidth);
        return left + width + right;
    }

    @Override protected double computePrefHeight(double width) {
        TextLayout layout = getTextLayout();
        Insets insets = getInsets();
        double left = snapSpace(insets.getLeft());
        double right = snapSpace(insets.getRight());
        if (width == USE_COMPUTED_SIZE) {
            layout.setWrapWidth(0);
        } else {
            double wrappingWidth = Math.max(1, width - left - right);
            layout.setWrapWidth((float)wrappingWidth);
        }
        double height = layout.getBounds().getHeight();
        double wrappingWidth = Math.max(1, getWidth() - left - right);
        layout.setWrapWidth((float)wrappingWidth);
        double top = snapSpace(insets.getTop());
        double bottom = snapSpace(insets.getBottom());
        return top + height + bottom;
    }

    @Override protected double computeMinHeight(double width) {
        return computePrefHeight(width);
    }

    @Override public void requestLayout() {
        /* The geometry of text nodes can be changed during layout children.
         * For that reason it has to call impl_geomChanged() causing
         * requestLayout() to happen during layoutChildren().
         * The inLayout flag prevents this call to cause any extra work.
         */
        if (inLayout) return;

        /*
        * There is no need to reset the text layout's content every time
        * requestLayout() is called. For example, the content needs
        * to be set when:
        *  children add or removed
        *  children managed state changes
        *  children geomChanged (width/height of embedded node)
        *  children content changes (text/font of text node)
        * The content does not need to set when:
        *  the width/height changes in the region
        *  the insets changes in the region
        *
        * Unfortunately, it is not possible to know what change invoked request
        * layout. The solution is to always reset the content in the text
        * layout and rely on it to preserve itself if the new content equals to
        * the old one. The cost to generate the new content is not avoid.
        */
        needsContent = true;
        super.requestLayout();
    }

    @Override public Orientation getContentBias() {
        return Orientation.HORIZONTAL;
    }

    @Override protected void layoutChildren() {
        inLayout = true;
        Insets insets = getInsets();
        double top = snapSpace(insets.getTop());
        double left = snapSpace(insets.getLeft());

        GlyphList[] runs = getTextLayout().getRuns();
        for (int j = 0; j < runs.length; j++) {
            GlyphList run = runs[j];
            TextSpan span = run.getTextSpan();
            if (span instanceof EmbeddedSpan) {
                Node child = ((EmbeddedSpan)span).getNode();
                Point2D location = run.getLocation();
                double baselineOffset = -run.getLineBounds().getMinY();

                layoutInArea(child, left + location.x, top + location.y,
                             run.getWidth(), run.getHeight(),
                             baselineOffset, null, true, true,
                             HPos.CENTER, VPos.BASELINE);
            }
        }

        List<Node> managed = getManagedChildren();
        for (Node node: managed) {
            if (node instanceof Text) {
                Text text = (Text)node;
                text.layoutSpan(runs);
                BaseBounds spanBounds = text.getSpanBounds();
                text.relocate(left + spanBounds.getMinX(),
                              top + spanBounds.getMinY());
            }
        }
        inLayout = false;
    }

    private static class EmbeddedSpan implements TextSpan {
        RectBounds bounds;
        Node node;
        public EmbeddedSpan(Node node, double baseline, double width, double height) {
            this.node = node;
            bounds = new RectBounds(0, (float)-baseline,
                                    (float)width, (float)(height - baseline));
        }

        @Override public String getText() {
            return "\uFFFC";
        }

        @Override public Object getFont() {
            return null;
        }

        @Override public RectBounds getBounds() {
            return bounds;
        }

        public Node getNode() {
            return node;
        }
    }

    TextLayout getTextLayout() {
        if (layout == null) {
            TextLayoutFactory factory = Toolkit.getToolkit().getTextLayoutFactory();
            layout = factory.createLayout();
            needsContent = true;
        }
        if (needsContent) {
            List<Node> children = getManagedChildren();
            TextSpan[] spans = new TextSpan[children.size()];
            for (int i = 0; i < spans.length; i++) {
                Node node = children.get(i);
                if (node instanceof Text) {
                    spans[i] = ((Text)node).getTextSpan();
                } else {
                    /* Creating a text span every time forces text layout
                     * to run a full text analysis in the new content.
                     */
                    double baseline = node.getBaselineOffset();
                    if (baseline == BASELINE_OFFSET_SAME_AS_HEIGHT) {
                        baseline = node.getLayoutBounds().getHeight();
                    }
                    double width = computeChildPrefAreaWidth(node, null);
                    double height = computeChildPrefAreaHeight(node, null);
                    spans[i] = new EmbeddedSpan(node, baseline, width, height);
                }
            }
            layout.setContent(spans);
            needsContent = false;
        }
        return layout;
    }

    /**
     * Defines horizontal text alignment.
     *
     * @defaultValue TextAlignment.LEFT
     */
    private ObjectProperty<TextAlignment> textAlignment;

    public final void setTextAlignment(TextAlignment value) {
        textAlignmentProperty().set(value);
    }

    public final TextAlignment getTextAlignment() {
        return textAlignment == null ? TextAlignment.LEFT : textAlignment.get();
    }

    public final ObjectProperty<TextAlignment> textAlignmentProperty() {
        if (textAlignment == null) {
            textAlignment =
                new StyleableObjectProperty<TextAlignment>(TextAlignment.LEFT) {
                @Override public Object getBean() { return TextFlow.this; }
                @Override public String getName() { return "textAlignment"; }
                @Override public CssMetaData<TextFlow, TextAlignment> getCssMetaData() {
                    return StyleableProperties.TEXT_ALIGNMENT;
                }
                @Override public void invalidated() {
                    TextAlignment align = get();
                    if (align == null) align = TextAlignment.LEFT;
                    TextLayout layout = getTextLayout();
                    layout.setAlignment(align.ordinal());
                    requestLayout();
                }
            };
        }
        return textAlignment;
    }

    /**
     * Defines the vertical space in pixel between lines.
     *
     * @defaultValue 0
     *
     * @since JavaFX 8.0
     */
    private DoubleProperty lineSpacing;

    public final void setLineSpacing(double spacing) {
        lineSpacingProperty().set(spacing);
    }

    public final double getLineSpacing() {
        return lineSpacing == null ? 0 : lineSpacing.get();
    }

    public final DoubleProperty lineSpacingProperty() {
        if (lineSpacing == null) {
            lineSpacing =
                new StyleableDoubleProperty(0) {
                @Override public Object getBean() { return TextFlow.this; }
                @Override public String getName() { return "lineSpacing"; }
                @Override public CssMetaData<TextFlow, Number> getCssMetaData() {
                    return StyleableProperties.LINE_SPACING;
                }
                @Override public void invalidated() {
                    TextLayout layout = getTextLayout();
                    if (layout.setLineSpacing((float)get())) {
                        requestLayout();
                    }
                }
            };
        }
        return lineSpacing;
    }

    @Override public final double getBaselineOffset() {
        Insets insets = getInsets();
        double top = snapSpace(insets.getTop());
        return top - getTextLayout().getBounds().getMinY();
    }

   /***************************************************************************
    *                                                                         *
    *                            Stylesheet Handling                          *
    *                                                                         *
    **************************************************************************/

     /**
      * Super-lazy instantiation pattern from Bill Pugh.
      * @treatAsPrivate implementation detail
      */
     private static class StyleableProperties {

         private static final
             CssMetaData<TextFlow, TextAlignment> TEXT_ALIGNMENT =
                 new CssMetaData<TextFlow,TextAlignment>("-fx-text-alignment",
                 new EnumConverter<TextAlignment>(TextAlignment.class),
                 TextAlignment.LEFT) {

            @Override public boolean isSettable(TextFlow node) {
                return node.textAlignment == null || !node.textAlignment.isBound();
            }

            @Override public StyleableProperty<TextAlignment> getStyleableProperty(TextFlow node) {
                return (StyleableProperty<TextAlignment>)node.textAlignmentProperty();
            }
         };

         private static final
             CssMetaData<TextFlow,Number> LINE_SPACING =
                 new CssMetaData<TextFlow,Number>("-fx-line-spacing",
                 SizeConverter.getInstance(), 0) {

            @Override public boolean isSettable(TextFlow node) {
                return node.lineSpacing == null || !node.lineSpacing.isBound();
            }

            @Override public StyleableProperty<Number> getStyleableProperty(TextFlow node) {
                return (StyleableProperty<Number>)node.lineSpacingProperty();
            }
         };

	 private static final List<CssMetaData<? extends Styleable, ?>> STYLEABLES;
         static {
            final List<CssMetaData<? extends Styleable, ?>> styleables =
                new ArrayList<CssMetaData<? extends Styleable, ?>>(Pane.getClassCssMetaData());
            styleables.add(TEXT_ALIGNMENT);
            styleables.add(LINE_SPACING);
            STYLEABLES = Collections.unmodifiableList(styleables);
         }
    }

    /**
     * @return The CssMetaData associated with this class, which may include the
     * CssMetaData of its super classes.
     */
    public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
        return StyleableProperties.STYLEABLES;
    }

    @Override
    public List<CssMetaData<? extends Styleable, ?>> getCssMetaData() {
        return getClassCssMetaData();
    }

    /* The methods in this section are copied from Region due to package visibility restriction */
    private static double snapSpace(double value, boolean snapToPixel) {
        return snapToPixel ? Math.round(value) : value;
    }

    static double boundedSize(double min, double pref, double max) {
        double a = pref >= min ? pref : min;
        double b = min >= max ? min : max;
        return a <= b ? a : b;
    }

    double computeChildPrefAreaWidth(Node child, Insets margin) {
        return computeChildPrefAreaWidth(child, margin, -1);
    }

    double computeChildPrefAreaWidth(Node child, Insets margin, double height) {
        final boolean snap = isSnapToPixel();
        double top = margin != null? snapSpace(margin.getTop(), snap) : 0;
        double bottom = margin != null? snapSpace(margin.getBottom(), snap) : 0;
        double left = margin != null? snapSpace(margin.getLeft(), snap) : 0;
        double right = margin != null? snapSpace(margin.getRight(), snap) : 0;
        double alt = -1;
        if (child.getContentBias() == Orientation.VERTICAL) { // width depends on height
            alt = snapSize(boundedSize(
                    child.minHeight(-1), height != -1? height - top - bottom :
                           child.prefHeight(-1), child.maxHeight(-1)));
        }
        return left + snapSize(boundedSize(child.minWidth(alt), child.prefWidth(alt), child.maxWidth(alt))) + right;
    }

    double computeChildPrefAreaHeight(Node child, Insets margin) {
        return computeChildPrefAreaHeight(child, margin, -1);
    }

    double computeChildPrefAreaHeight(Node child, Insets margin, double width) {
        final boolean snap = isSnapToPixel();
        double top = margin != null? snapSpace(margin.getTop(), snap) : 0;
        double bottom = margin != null? snapSpace(margin.getBottom(), snap) : 0;
        double left = margin != null? snapSpace(margin.getLeft(), snap) : 0;
        double right = margin != null? snapSpace(margin.getRight(), snap) : 0;
        double alt = -1;
        if (child.getContentBias() == Orientation.HORIZONTAL) { // height depends on width
            alt = snapSize(boundedSize(
                    child.minWidth(-1), width != -1? width - left - right :
                           child.prefWidth(-1), child.maxWidth(-1)));
        }
        return top + snapSize(boundedSize(child.minHeight(alt), child.prefHeight(alt), child.maxHeight(alt))) + bottom;
    }
    /* end of copied code */

//    /** @treatAsPrivate */
//    @Override
//    public Object accGetAttribute(Attribute attribute, Object... parameters) {
//        switch (attribute) {
//            case ROLE: return Role.TEXT;
//            case TITLE: {
//                StringBuilder title = new StringBuilder();
//                for (Node node: getChildren()) {
//                    Object text = node.accGetAttribute(Attribute.TITLE, parameters);
//                    if (text != null) {
//                        title.append(text.toString());
//                    }
//                }
//                return title.toString();
//            }
//            default: return super.accGetAttribute(attribute, parameters);
//        }
//    }
}
