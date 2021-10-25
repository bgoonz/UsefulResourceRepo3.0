import css from 'defaultcss';
import inherits from 'inherits';
import Slider from './slider';
import Emitter from 'events/';
import zfill from 'zfill';
import path from 'path';
import fs from 'fs';
export default GooeyRGB;

inherits(GooeyRGB, Emitter)

class GooeyRGB {
  constructor(value, min, max) {
    if (!(this instanceof GooeyRGB))
      return new GooeyRGB(value, min, max)

    Emitter.call(this)

    const sliders = this.sliders = [];
    for (let i = 0; i < value.length; i++) {
      sliders[i] = Slider(value[i], min, max)
    }

    const self = this;

    self.value = value
    self.el = document.createElement('div')
    self.el.classList.add('gooey-vector')
    self._setting = false

    sliders.forEach((channel, i) => {
      self.el.appendChild(channel.el)

      channel.on('change', () => {
        if (self._setting) return
        self.value[i] = channel.value
        self.emit('change')
      })
    })

    this.set(value)
  }

  set(value) {
    this._setting = true
    this.value = value

    for (let i = 0; i < value.length; i++) {
      this.sliders[i].set(value[i])
    }

    this._setting = false
    this.emit('change')
  }
}
