import mouse from 'mouse-position';
import perFrame from 'frame-debounce';
import css from 'defaultcss';
import inherits from 'inherits';
import Emitter from 'events/';
import clamp from 'clamp';
import path from 'path';
import fs from 'fs';

css('gooey-slider', fs.readFileSync(
  path.join(__dirname, 'slider.css')
, 'utf8'))

export default GooeySlider;

inherits(GooeySlider, Emitter)

class GooeySlider {
  constructor(value, min, max) {
    if (!(this instanceof GooeySlider))
      return new GooeySlider(value, min, max)

    const self = this;

    Emitter.call(this)
    this.value = value
    this.min   = min
    this.max   = max

    this.el = document.createElement('div')
    this.el.classList.add('gooey-slider')

    this.wrap = this.el.appendChild(document.createElement('div'))
    this.wrap.classList.add('gooey-slider-wrap')

    this.inner = this.wrap.appendChild(document.createElement('div'))
    this.inner.classList.add('gooey-slider-inner')

    let dragging = false;
    let width    = 0;

    this.wrap.addEventListener('mousedown', e => {
      dragging = true
      width = self.wrap.getBoundingClientRect().width
    }, false)

    window.addEventListener('mouseup', e => {
      dragging = false
    }, false)

    const m = mouse(this.wrap, window).on('move', perFrame(() => {
      if (!dragging) return

      const progress = clamp(m.x / width, 0, 1);
      const value = self.min + progress * (self.max - self.min);
      self.set(value)
    }));

    this.set(value)
  }

  set(value) {
    this.value = clamp(value, this.min, this.max)
    this.emit('change')

    const progress = (value - this.min) / (this.max - this.min);
    const percent  = progress * 100;

    this.inner.style.width = `${percent}%`
  }
}
