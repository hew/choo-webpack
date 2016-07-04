import { view } from 'choo'

export const homeView = (params, state, send) => {

  return view`
		<main>
      <h1>~ ${state.home.title}</h1>
      <input
				type="text"
        oninput=${
          (e) => send('home:update', { payload: e.target.value }) 
        } />
		</main>
  `
}

