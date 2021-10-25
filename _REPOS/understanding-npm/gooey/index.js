import escape from 'escape-html';
import css from 'defaultcss';
import inherits from 'inherits';
import Emitter from 'events/';
import path from 'path';
import fs from 'fs';

css('gooey', fs.readFileSync(
  path.join(__dirname, 'index.css')
, 'utf8'))

export default Gooey;

inherits(Gooey, Emitter)

class Gooey {
  constructor() {
    if (!(this instanceof Gooey)) return new Gooey
    Emitter.call(this)

    const self = this;

    this.visible = false

    this.toggleButton = document.createElement('div')
    this.toggleButton.classList.add('gooey-top-toggle')
    this.toggleButton.addEventListener('click', () => {
      self.toggle()
    }, false)

    this.el = document.createElement('div')
    this.el.classList.add('gooey')
    this.el.appendChild(this.toggleButton)
    this.values   = {}
    this.elements = {}
  }

  attach() {
    document.body.appendChild(this.el)
    return this
  }

  add(name, node) {
    const wrap = document.createElement('div');
    const head = document.createElement('h1');
    const self = this;

    head.innerHTML = escape(name)
    head.classList.add('gooey-h1')
    wrap.classList.add('gooey-entry')

    this.el.appendChild(wrap)
    wrap.appendChild(head)
    wrap.appendChild(node.el)

    self.elements[name] = node
    self.values[name]   = node.value
    node.on('change', () => {
      self.emit(name, self.values[name] = node.value)
    })

    return this
  }

  toggle() {
    if (this.visible) {
      this.hide()
    } else {
      this.show()
    }
  }

  hide() {
    this.visible = false
    this.el.classList.remove('gooey-visible')
  }

  show() {
    this.visible = true
    this.el.classList.add('gooey-visible')
  }
}
