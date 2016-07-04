import { view } from 'choo'
import { root } from '../css/style.js'
import { homeView } from './home'
import { glassesView } from './glasses'

export const rootView = (params, state, send) => {
  let { init } = state.home
  return view`
		<main class=${root.container}>
      ${homeView(params, state, send)}
      ${glassesView(init, state, send)}
		</main>
  `
}
