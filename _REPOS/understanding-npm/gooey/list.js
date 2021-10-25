import mouse from 'mouse-position';
import perFrame from 'frame-debounce';
import css from 'defaultcss';
import inherits from 'inherits';
import Emitter from 'events/';
import clamp from 'clamp';
import path from 'path';
import fs from 'fs';

css('gooey-list', fs.readFileSync(
  path.join(__dirname, 'list.css')
, 'utf8'))

export default GooeyList;

inherits(GooeyList, Emitter)

class GooeyList {
  constructor(value, items) {
    if (!(this instanceof GooeyList))
      return new GooeyList(value, items)

    const self = this;

    Emitter.call(this)
    this.value = value
    this.items = items

    this.dropdown = document.createElement('select')

    this.el = document.createElement('div')
    this.el.classList.add('gooey-list')
    this.el.appendChild(this.dropdown)

    Object.keys(items).forEach(key => {
      const opt = document.createElement('option');
      const val = items[key];

      opt.value = key
      opt.innerHTML = key

      if (val === value) opt.setAttribute('selected', '')
      self.dropdown.appendChild(opt)
    })

    this.dropdown.addEventListener('change', () => {
      const old = self.value;

      self.set(items[self.dropdown.value])

      if (self.value !== old) {
        self.emit('change')
      }
    }, false)

    this.set(value)
  }

  set(value) {
    this.value = value

    if (this.selectByValue(value)) {
      this.emit('change')
    }
  }

  selectByValue(value) {
    const keys    = Object.keys(this.items);
    const matches = keys.filter(function(key) {
      return this.items[key] === value
    }, this);

    if (!matches.length) return

    const index  = keys.indexOf(matches[0]);
    const change = this.dropdown.selectedIndex !== index;
    if (change) {
      this.dropdown.selectedIndex = index
    }

    return change
  }
}
