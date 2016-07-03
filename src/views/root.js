import { view } from 'choo'
import animate from 'animateplus'

import { root } from '../css/style.js'
import { homeView } from './home'
import { glassesView } from './glasses'

export const rootView = (params, state, send) => {

  console.log(state)
  return view`
		<main>
      ${ homeView(params, state, send) }
      ${ glassesView(params, state, send) }
		</main>
  `
}
