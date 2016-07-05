import { view } from 'choo'
import { root } from '../css/style.js'
import animate from 'animateplus'
const $ = require('sprint-js')

export const glassesView = (params, state, send) => {
  // Bring in state
  let init = params
  // Step up animation logic
  init ? initAnimation() : updateAnimation()
  return view`
   <div class=${root.inner}>
   <img src=${require('../img/webpack.png')} alt=''>
      <div
        class=${root.glasses}
        id='glasses'
        >
       <img src=${require('../img/dealwithit.png')} alt=''>
     </div>
   </div>  
  `
}

const initAnimation = () => {
  window.requestAnimationFrame(() => {
    let div = $('#glasses')
    animate({
      el: div,
      opacity: [0, 1],
      translateY: ['-100%', '100%'],
      duration: 1000,
      delay: 200,
      easing: 'linear'
    })
  })
}

const updateAnimation = () => {
  window.requestAnimationFrame(() => {
    let div = $('#glasses')
    let r = Math.floor(Math.random() * 10)
    let s = Math.floor(Math.random() * 10)
    let t = Math.floor(Math.random() * Math.floor(Math.random() * 100))
    animate({
      el: div,
      opacity: [1, 1],
      translateY: [`${s}0%`, `${r}0%`],
      rotateX: [`${t}deg`, `1${t}deg`],
      duration: 0,
      delay: 0
    })
    let html = document.querySelector('html');
    html.style.backgroundColor = `rgb(255, ${t}${r}, ${s}${r})`
  })
}
