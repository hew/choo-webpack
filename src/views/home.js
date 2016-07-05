import { view } from 'choo'
import $ from 'sprint-js'
import animate from 'animateplus'

export const homeView = (params, state, send) => {
  let init = params 
  init ? revealAnimation() : console.log('beep')
  return view`
		<div>
      <h1>✓ Webpack</h1>
      <h1>${state.home.symbol} ${state.home.title}</h1>
      <input
        id="revealBox"
        type="text"
        maxlength="100"
        oninput=${
          (e) => send('home:update', { payload: e.target.value })
        } />
		</div>
  `
}

const revealAnimation = () => {
  window.requestAnimationFrame(() => {
    let div = $('#revealBox')
    animate({
      el: div,
      translateX: [`-1000%`, 0],
      opacity: [0, 1],
      duration: 3000,
      delay: 0,
      easing: 'linear'
    })
  })
}
