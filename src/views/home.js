import { view } from 'choo'
import { root } from '../css/style.js'
import { glassesView } from './glasses'
import animate from 'animateplus'
const $ = require('sprint-js')


export const homeView = (params, state, send) => {

  return view`
		<main>
      <h1>${state.title}</h1>
      <input
				type="text"
        oninput=${(e) => send('update', { payload: e.target.value })} />
        <div>
          ${glassesView()}
        </div>
		</main>
  `
}

