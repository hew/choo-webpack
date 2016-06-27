import { view } from 'choo'

export const mainView = (params, state, send) => {
  return view`
    <main class="app">
      <h1>${state.input.title}</h1>
      <label>Set the title</label>
      <input
        type="text"
        placeholder=${state.input.title}
        oninput=${(e) => send('input:update', { payload: e.target.value })}>
    </main>
  `
}
