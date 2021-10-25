import mouse from 'mouse-position';
import perFrame from 'frame-debounce';
import css from 'defaultcss';
import inherits from 'inherits';
import Emitter from 'events/';
import clamp from 'clamp';
import path from 'path';
import fs from 'fs';

css('gooey-toggle', fs.readFileSync(
  path.join(__dirname, 'toggle.css')
, 'utf8'))

export default GooeyToggle;

inherits(GooeyToggle, Emitter)

class GooeyToggle {
  constructor(value) {
    if (!(this instanceof GooeyToggle))
      return new GooeyToggle(value)

    const self = this;

    Emitter.call(this)
    this.value = value = !!value

    this.el = document.createElement('div')
    this.el.classList.add('gooey-toggle')

    this.input = document.createElement('input')
    this.input.setAttribute('type', 'checkbox')
    this.el.appendChild(this.input)

    this.input.addEventListener('change', () => {
      self.set(!!self.input.checked)
    }, false)

    this.set(value)
  }

  set(value) {
    this.input.checked = this.value = !!value
    this.emit('change', this.value)
  }
}
