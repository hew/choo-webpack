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
   <img src=${require('../img/webpack.png')} alt="">
      <div
        class=${root.glasses}
        id='glasses'
        >
       <img src=${require('../img/dealwithit.png')} alt="">
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
      duration: 5000,
      delay: 200
    })
  })
}

const updateAnimation = (updateValues) => {
  window.requestAnimationFrame(() => {
    let div = $('#glasses')
    let values = Math.floor(Math.random() * 10)
    animate({
      el: div,
      opacity: [1, 1],
      translateY: [`${values}0%`, `${values}0%`],
      skewY: [`${values}deg`, `${values}deg`],
      duration: 100,
      delay: 0
    })
  })
}
