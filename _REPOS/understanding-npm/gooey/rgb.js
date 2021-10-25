import css from 'defaultcss';
import inherits from 'inherits';
import Vector from './vector';
import Emitter from 'events/';
import zfill from 'zfill';
import path from 'path';
import fs from 'fs';
export default GooeyRGB;

css('gooey-rgb', fs.readFileSync(
  path.join(__dirname, 'rgb.css')
, 'utf8'))

inherits(GooeyRGB, Emitter)

class GooeyRGB {
  constructor(value, min, max) {
    if (!(this instanceof GooeyRGB))
      return new GooeyRGB(value, min, max)

    this.vector = Vector(value, min, max)

    const r = this.r = this.vector.sliders[0];
    const g = this.g = this.vector.sliders[1];
    const b = this.b = this.vector.sliders[2];
    const rgb  = this.rgb = [r, g, b];
    const self = this;

    self.value = value
    self.el = document.createElement('div')
    self.el.classList.add('gooey-rgb')
    self._setting = false

    r.el.classList.add('gooey-rgb-r')
    g.el.classList.add('gooey-rgb-g')
    b.el.classList.add('gooey-rgb-b')

    const display = document.createElement('div');
    display.classList.add('gooey-rgb-display')
    self.el.appendChild(display)

    this.vector.on('change', () => {
      self.emit('change')
    })

    rgb.forEach(({el}, i) => {
      self.el.appendChild(el)
    })

    this.on('change', () => {
      const hex = [0, 0, 0];

      // Convert the [1, 1, 1] color to CSS hex value
      hex[0] = zfill(Math.round(self.value[0] * 255).toString(16), 2)
      hex[1] = zfill(Math.round(self.value[1] * 255).toString(16), 2)
      hex[2] = zfill(Math.round(self.value[2] * 255).toString(16), 2)

      display.style.background = `#${hex.join('')}`
    })

    this.set(value)
  }

  set(value) {
    this.vector.set(value)
  }
}
