import choo from 'choo'
import insertCss from 'insert-css'
import csjs from 'csjs'

import { rootView } from './views/root'
import { appStyles } from './css/style.js'

const app = choo()

app.model({
  namespace: 'home',
  state: {
    title: 'Choo Starter',
    init: true
  },
  reducers: {
    update: (action, state) => ({ title: action.payload, init: false })
  },
  effects: {
    update: (action, state, send) => (document.title = action.payload)
  }
})

app.model({
  namespace: 'glasses',
  state: {
    animating: true
  }
})

app.router((route) => [
  route('/', rootView),
])



insertCss(appStyles)
const tree = app.start()
document.body.appendChild(tree)
