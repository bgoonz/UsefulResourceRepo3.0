"use strict";

/**
 * This file contains all implemented properties that are not a part of any
 * current specifications or drafts, but are handled by browsers nevertheless.
 */

var allExtraProperties = new Set();
module.exports = allExtraProperties;
allExtraProperties.add("background-position-x");
allExtraProperties.add("background-position-y");
allExtraProperties.add("background-repeat-x");
allExtraProperties.add("background-repeat-y");
allExtraProperties.add("color-interpolation");
allExtraProperties.add("color-profile");
allExtraProperties.add("color-rendering");
allExtraProperties.add("css-float");
allExtraProperties.add("enable-background");
allExtraProperties.add("fill");
allExtraProperties.add("fill-opacity");
allExtraProperties.add("fill-rule");
allExtraProperties.add("glyph-orientation-horizontal");
allExtraProperties.add("image-rendering");
allExtraProperties.add("kerning");
allExtraProperties.add("marker");
allExtraProperties.add("marker-end");
allExtraProperties.add("marker-mid");
allExtraProperties.add("marker-offset");
allExtraProperties.add("marker-start");
allExtraProperties.add("marks");
allExtraProperties.add("pointer-events");
allExtraProperties.add("shape-rendering");
allExtraProperties.add("size");
allExtraProperties.add("src");
allExtraProperties.add("stop-color");
allExtraProperties.add("stop-opacity");
allExtraProperties.add("stroke");
allExtraProperties.add("stroke-dasharray");
allExtraProperties.add("stroke-dashoffset");
allExtraProperties.add("stroke-linecap");
allExtraProperties.add("stroke-linejoin");
allExtraProperties.add("stroke-miterlimit");
allExtraProperties.add("stroke-opacity");
allExtraProperties.add("stroke-width");
allExtraProperties.add("text-anchor");
allExtraProperties.add("text-line-through");
allExtraProperties.add("text-line-through-color");
allExtraProperties.add("text-line-through-mode");
allExtraProperties.add("text-line-through-style");
allExtraProperties.add("text-line-through-width");
allExtraProperties.add("text-overline");
allExtraProperties.add("text-overline-color");
allExtraProperties.add("text-overline-mode");
allExtraProperties.add("text-overline-style");
allExtraProperties.add("text-overline-width");
allExtraProperties.add("text-rendering");
allExtraProperties.add("text-underline");
allExtraProperties.add("text-underline-color");
allExtraProperties.add("text-underline-mode");
allExtraProperties.add("text-underline-style");
allExtraProperties.add("text-underline-width");
allExtraProperties.add("unicode-range");
allExtraProperties.add("vector-effect");
allExtraProperties.add("webkit-animation");
allExtraProperties.add("webkit-animation-delay");
allExtraProperties.add("webkit-animation-direction");
allExtraProperties.add("webkit-animation-duration");
allExtraProperties.add("webkit-animation-fill-mode");
allExtraProperties.add("webkit-animation-iteration-count");
allExtraProperties.add("webkit-animation-name");
allExtraProperties.add("webkit-animation-play-state");
allExtraProperties.add("webkit-animation-timing-function");
allExtraProperties.add("webkit-appearance");
allExtraProperties.add("webkit-aspect-ratio");
allExtraProperties.add("webkit-backface-visibility");
allExtraProperties.add("webkit-background-clip");
allExtraProperties.add("webkit-background-composite");
allExtraProperties.add("webkit-background-origin");
allExtraProperties.add("webkit-background-size");
allExtraProperties.add("webkit-border-after");
allExtraProperties.add("webkit-border-after-color");
allExtraProperties.add("webkit-border-after-style");
allExtraProperties.add("webkit-border-after-width");
allExtraProperties.add("webkit-border-before");
allExtraProperties.add("webkit-border-before-color");
allExtraProperties.add("webkit-border-before-style");
allExtraProperties.add("webkit-border-before-width");
allExtraProperties.add("webkit-border-end");
allExtraProperties.add("webkit-border-end-color");
allExtraProperties.add("webkit-border-end-style");
allExtraProperties.add("webkit-border-end-width");
allExtraProperties.add("webkit-border-fit");
allExtraProperties.add("webkit-border-horizontal-spacing");
allExtraProperties.add("webkit-border-image");
allExtraProperties.add("webkit-border-radius");
allExtraProperties.add("webkit-border-start");
allExtraProperties.add("webkit-border-start-color");
allExtraProperties.add("webkit-border-start-style");
allExtraProperties.add("webkit-border-start-width");
allExtraProperties.add("webkit-border-vertical-spacing");
allExtraProperties.add("webkit-box-align");
allExtraProperties.add("webkit-box-direction");
allExtraProperties.add("webkit-box-flex");
allExtraProperties.add("webkit-box-flex-group");
allExtraProperties.add("webkit-box-lines");
allExtraProperties.add("webkit-box-ordinal-group");
allExtraProperties.add("webkit-box-orient");
allExtraProperties.add("webkit-box-pack");
allExtraProperties.add("webkit-box-reflect");
allExtraProperties.add("webkit-box-shadow");
allExtraProperties.add("webkit-color-correction");
allExtraProperties.add("webkit-column-axis");
allExtraProperties.add("webkit-column-break-after");
allExtraProperties.add("webkit-column-break-before");
allExtraProperties.add("webkit-column-break-inside");
allExtraProperties.add("webkit-column-count");
allExtraProperties.add("webkit-column-gap");
allExtraProperties.add("webkit-column-rule");
allExtraProperties.add("webkit-column-rule-color");
allExtraProperties.add("webkit-column-rule-style");
allExtraProperties.add("webkit-column-rule-width");
allExtraProperties.add("webkit-columns");
allExtraProperties.add("webkit-column-span");
allExtraProperties.add("webkit-column-width");
allExtraProperties.add("webkit-filter");
allExtraProperties.add("webkit-flex-align");
allExtraProperties.add("webkit-flex-direction");
allExtraProperties.add("webkit-flex-flow");
allExtraProperties.add("webkit-flex-item-align");
allExtraProperties.add("webkit-flex-line-pack");
allExtraProperties.add("webkit-flex-order");
allExtraProperties.add("webkit-flex-pack");
allExtraProperties.add("webkit-flex-wrap");
allExtraProperties.add("webkit-flow-from");
allExtraProperties.add("webkit-flow-into");
allExtraProperties.add("webkit-font-feature-settings");
allExtraProperties.add("webkit-font-kerning");
allExtraProperties.add("webkit-font-size-delta");
allExtraProperties.add("webkit-font-smoothing");
allExtraProperties.add("webkit-font-variant-ligatures");
allExtraProperties.add("webkit-highlight");
allExtraProperties.add("webkit-hyphenate-character");
allExtraProperties.add("webkit-hyphenate-limit-after");
allExtraProperties.add("webkit-hyphenate-limit-before");
allExtraProperties.add("webkit-hyphenate-limit-lines");
allExtraProperties.add("webkit-hyphens");
allExtraProperties.add("webkit-line-align");
allExtraProperties.add("webkit-line-box-contain");
allExtraProperties.add("webkit-line-break");
allExtraProperties.add("webkit-line-clamp");
allExtraProperties.add("webkit-line-grid");
allExtraProperties.add("webkit-line-snap");
allExtraProperties.add("webkit-locale");
allExtraProperties.add("webkit-logical-height");
allExtraProperties.add("webkit-logical-width");
allExtraProperties.add("webkit-margin-after");
allExtraProperties.add("webkit-margin-after-collapse");
allExtraProperties.add("webkit-margin-before");
allExtraProperties.add("webkit-margin-before-collapse");
allExtraProperties.add("webkit-margin-bottom-collapse");
allExtraProperties.add("webkit-margin-collapse");
allExtraProperties.add("webkit-margin-end");
allExtraProperties.add("webkit-margin-start");
allExtraProperties.add("webkit-margin-top-collapse");
allExtraProperties.add("webkit-marquee");
allExtraProperties.add("webkit-marquee-direction");
allExtraProperties.add("webkit-marquee-increment");
allExtraProperties.add("webkit-marquee-repetition");
allExtraProperties.add("webkit-marquee-speed");
allExtraProperties.add("webkit-marquee-style");
allExtraProperties.add("webkit-mask");
allExtraProperties.add("webkit-mask-attachment");
allExtraProperties.add("webkit-mask-box-image");
allExtraProperties.add("webkit-mask-box-image-outset");
allExtraProperties.add("webkit-mask-box-image-repeat");
allExtraProperties.add("webkit-mask-box-image-slice");
allExtraProperties.add("webkit-mask-box-image-source");
allExtraProperties.add("webkit-mask-box-image-width");
allExtraProperties.add("webkit-mask-clip");
allExtraProperties.add("webkit-mask-composite");
allExtraProperties.add("webkit-mask-image");
allExtraProperties.add("webkit-mask-origin");
allExtraProperties.add("webkit-mask-position");
allExtraProperties.add("webkit-mask-position-x");
allExtraProperties.add("webkit-mask-position-y");
allExtraProperties.add("webkit-mask-repeat");
allExtraProperties.add("webkit-mask-repeat-x");
allExtraProperties.add("webkit-mask-repeat-y");
allExtraProperties.add("webkit-mask-size");
allExtraProperties.add("webkit-match-nearest-mail-blockquote-color");
allExtraProperties.add("webkit-max-logical-height");
allExtraProperties.add("webkit-max-logical-width");
allExtraProperties.add("webkit-min-logical-height");
allExtraProperties.add("webkit-min-logical-width");
allExtraProperties.add("webkit-nbsp-mode");
allExtraProperties.add("webkit-overflow-scrolling");
allExtraProperties.add("webkit-padding-after");
allExtraProperties.add("webkit-padding-before");
allExtraProperties.add("webkit-padding-end");
allExtraProperties.add("webkit-padding-start");
allExtraProperties.add("webkit-perspective");
allExtraProperties.add("webkit-perspective-origin");
allExtraProperties.add("webkit-perspective-origin-x");
allExtraProperties.add("webkit-perspective-origin-y");
allExtraProperties.add("webkit-print-color-adjust");
allExtraProperties.add("webkit-region-break-after");
allExtraProperties.add("webkit-region-break-before");
allExtraProperties.add("webkit-region-break-inside");
allExtraProperties.add("webkit-region-overflow");
allExtraProperties.add("webkit-rtl-ordering");
allExtraProperties.add("webkit-svg-shadow");
allExtraProperties.add("webkit-tap-highlight-color");
allExtraProperties.add("webkit-text-combine");
allExtraProperties.add("webkit-text-decorations-in-effect");
allExtraProperties.add("webkit-text-emphasis");
allExtraProperties.add("webkit-text-emphasis-color");
allExtraProperties.add("webkit-text-emphasis-position");
allExtraProperties.add("webkit-text-emphasis-style");
allExtraProperties.add("webkit-text-fill-color");
allExtraProperties.add("webkit-text-orientation");
allExtraProperties.add("webkit-text-security");
allExtraProperties.add("webkit-text-size-adjust");
allExtraProperties.add("webkit-text-stroke");
allExtraProperties.add("webkit-text-stroke-color");
allExtraProperties.add("webkit-text-stroke-width");
allExtraProperties.add("webkit-transform");
allExtraProperties.add("webkit-transform-origin");
allExtraProperties.add("webkit-transform-origin-x");
allExtraProperties.add("webkit-transform-origin-y");
allExtraProperties.add("webkit-transform-origin-z");
allExtraProperties.add("webkit-transform-style");
allExtraProperties.add("webkit-transition");
allExtraProperties.add("webkit-transition-delay");
allExtraProperties.add("webkit-transition-duration");
allExtraProperties.add("webkit-transition-property");
allExtraProperties.add("webkit-transition-timing-function");
allExtraProperties.add("webkit-user-drag");
allExtraProperties.add("webkit-user-modify");
allExtraProperties.add("webkit-user-select");
allExtraProperties.add("webkit-wrap");
allExtraProperties.add("webkit-wrap-flow");
allExtraProperties.add("webkit-wrap-margin");
allExtraProperties.add("webkit-wrap-padding");
allExtraProperties.add("webkit-wrap-shape-inside");
allExtraProperties.add("webkit-wrap-shape-outside");
allExtraProperties.add("webkit-wrap-through");
allExtraProperties.add("webkit-writing-mode");
allExtraProperties.add("zoom");
