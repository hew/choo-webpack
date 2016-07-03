import { view } from 'choo'
import { root } from '../css/style.js'
import animate from 'animateplus'
const $ = require('sprint-js')

export const glassesView = (params, state, send) => {

  requestAnimationFrame(() => {

    let div = document.querySelector('#glasses')

    animate({
      el: div,
      opacity: [0, 1], 
      translateY: ['-100%', '100%'], 
      duration: 5000,
      delay: 100
    })
  })

  return view`
		<div id="glasses">
      <img src=${require('../img/dealwithit.png')} alt="">
		</div>
  `
}

