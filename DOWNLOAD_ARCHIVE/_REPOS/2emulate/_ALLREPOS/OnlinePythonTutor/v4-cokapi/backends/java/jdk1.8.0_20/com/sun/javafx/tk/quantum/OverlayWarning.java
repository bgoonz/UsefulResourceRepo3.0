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

package com.sun.javafx.tk.quantum;

import com.sun.javafx.scene.DirtyBits;
import javafx.animation.Animation.Status;
import javafx.animation.FadeTransition;
import javafx.animation.PauseTransition;
import javafx.animation.SequentialTransition;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Rectangle2D;
import javafx.scene.Group;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.scene.text.TextAlignment;
import javafx.util.Duration;

public class OverlayWarning extends Group {

    private static final float  PAD      = 40f;
    private static final float  RECTW    = 600f;
    private static final float  RECTH    = 100f;
    private static final float  ARC      = 20f;
    private static final int    FONTSIZE = 24;
    
    private ViewScene               view;
    private SequentialTransition    overlayTransition;
    private boolean                 warningTransition;

    public OverlayWarning(final ViewScene vs) {
        view = vs;
        
        createOverlayGroup();
        
        PauseTransition pause = new PauseTransition(Duration.millis(4000));
        FadeTransition fade = new FadeTransition(Duration.millis(1000), this);
        fade.setFromValue(1);
        fade.setToValue(0);
        
        overlayTransition = new SequentialTransition();
        overlayTransition.getChildren().add(pause);
        overlayTransition.getChildren().add(fade);
        overlayTransition.setOnFinished(event -> {
            warningTransition = false;
            view.getWindowStage().setWarning(null);
        });
    }

    protected ViewScene getView() {
        return view;
    }

    protected final void setView(ViewScene vs) {
        if (view != null) {
            view.getWindowStage().setWarning(null);
        }

        view = vs;
        view.entireSceneNeedsRepaint();
   }
    
    protected void warn(String msg) {
        text.setText(msg);
        
        warningTransition = true;
        overlayTransition.play();
    }

    protected void cancel() {
        if (overlayTransition != null &&
            overlayTransition.getStatus() == Status.RUNNING) {
            overlayTransition.stop();
            warningTransition = false;
        }
        view.getWindowStage().setWarning(null);
    }

    protected boolean inWarningTransition() {
        return warningTransition;
    }
    
    private Text text = new Text();
    private Rectangle background;
    
    private void createOverlayGroup() {
        final Font font = new Font(Font.getDefault().getFamily(), FONTSIZE);
        final Rectangle2D screenBounds = new Rectangle2D(0, 0,
                view.getSceneState().getScreenWidth(),
                view.getSceneState().getScreenHeight());
        
        String TEXT_CSS =
            "-fx-effect: dropshadow(two-pass-box, rgba(0,0,0,0.75), 3, 0.0, 0, 2);";
        text.setStroke(Color.WHITE);
        text.setFill(Color.WHITE);
        text.setFont(font);
        text.setWrappingWidth(RECTW - PAD - PAD);
        text.setStyle(TEXT_CSS);
        text.setTextAlignment(TextAlignment.CENTER);
        
        background = createBackground(text, screenBounds);

        getChildren().add(background);
        getChildren().add(text);
    }
    
    private Rectangle createBackground(Text text, Rectangle2D screen) {
        Rectangle rectangle = new Rectangle();
        double textW = text.getLayoutBounds().getWidth();
        double textH = text.getLayoutBounds().getHeight();
        double rectX = (screen.getWidth() - RECTW) / 2.0;
        double rectY = (screen.getHeight() / 2.0);

        rectangle.setWidth(RECTW);
        rectangle.setHeight(RECTH);
        rectangle.setX(rectX);
        rectangle.setY(rectY - RECTH);
        rectangle.setArcWidth(ARC);
        rectangle.setArcHeight(ARC);
        rectangle.setFill(Color.gray(0.0, 0.6));
        
        text.setX(rectX + ((RECTW - textW) / 2.0));
        text.setY(rectY - (RECTH  / 2.0) + ((textH - text.getBaselineOffset()) / 2.0));

        return rectangle;
    }

    @Override
    public void impl_updatePeer() {
        text.impl_updatePeer();
        background.impl_updatePeer();
        super.impl_updatePeer();
    }

    @Override
    protected void updateBounds() {
        super.updateBounds();
    }

    @Override
    protected void impl_markDirty(DirtyBits dirtyBit) {
        super.impl_markDirty(dirtyBit);
        view.synchroniseOverlayWarning();
    }
}
