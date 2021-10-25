/*
 * Copyright (c) 2010, 2013, Oracle and/or its affiliates. All rights reserved.
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

package javafx.animation;

import com.sun.scenario.animation.shared.AnimationAccessor;

final class AnimationAccessorImpl extends AnimationAccessor{

    @Override
    public void setCurrentRate(Animation animation, double currentRate) {
        animation.impl_setCurrentRate(currentRate);
    }

    @Override
    public void playTo(Animation animation, long pos, long cycleTicks) {
        animation.impl_playTo(pos, cycleTicks);
    }

    @Override
    public void jumpTo(Animation animation, long pos, long cycleTicks, boolean forceJump) {
        animation.impl_jumpTo(pos, cycleTicks, forceJump);
    }

    @Override
    public void finished(Animation animation) {
        animation.impl_finished();
    }

    @Override
    public void setCurrentTicks(Animation animation, long ticks) {
        animation.impl_setCurrentTicks(ticks);
    }

    
}
