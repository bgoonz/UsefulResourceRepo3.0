const gui = require('./')().attach();

gui.add('boolean_toggle', require('./toggle')(true)
  .on('change', function() {
    console.log('boolean_toggle:', this.value)
  }))

gui.add('exposure', require('./slider')(0.5, 0, 1))
gui.on('exposure', value => {
  console.log('exposure:', value)
})

gui.add('fog_distance', require('./slider')(5, -10, 10))
gui.on('fog_distance', value => {
  console.log('fog_distance:', value)
})

let p1;
let p2;
let p3;
let p4;
let p5;

gui.add('particle_mode', require('./list')(null, {
  'first choice':  p1 = { id: 1 },
  'second choice': p2 = { id: 2 },
  'third choice':  p3 = { id: 3 },
  'fourth choice': p4 = { id: 4 },
  'fifth choice':  p5 = { id: 5 }
}).on('change', function() {
  console.log('particle_mode:', this.value)
}))

setTimeout(() => {
  gui.elements['particle_mode'].set(p5)
  gui.elements['boolean_toggle'].set(false)
}, 1000)

setTimeout(() => {
  gui.elements['boolean_toggle'].set(true)
}, 3500)
