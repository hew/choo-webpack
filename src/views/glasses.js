import { view } from 'choo'
import { root } from '../css/style.js'
import animate from 'animateplus'
const $ = require('sprint-js')

export const glassesView = (params, state, send ) => {

  let { init } = params

  init ? initAnimation() : updateAnimation()

  console.log(params)
  return view`
    <div
      class=${root.glasses}
      id='glasses'
      >
      <img src=${require('../img/dealwithit.png')} alt="">
		</div>
  `
}

const initAnimation = () => { 
  
  requestAnimationFrame(() => {

   let div = document.querySelector('#glasses')

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

  requestAnimationFrame(() => {

   let div = document.querySelector('#glasses')
   let values = Math.floor(Math.random() * 10)

    console.log(values)
    animate({
      el: div,
      opacity: [1, 1], 
      translateY: [`${values}0%`, `${values}0%`],
      skewY: [`${values}deg`, `${values}deg`],
      duration: 100,
      delay: 5
    })
  })

}
