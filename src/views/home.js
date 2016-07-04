import { view } from 'choo'

export const homeView = (params, state, send) => {
  return view`
		<div>
      <h1>✓ Webpack</h1>
      <h1>✗ ${state.home.title}</h1>
      <input
        type="text"
        maxlength="10"
        oninput=${
          (e) => send('home:update', { payload: e.target.value })
        } />
		</div>
  `
}

