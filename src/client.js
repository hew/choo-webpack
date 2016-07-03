import choo from 'choo'
import insertCss from 'insert-css'
import csjs from 'csjs'

import { homeView } from './views/home'
import { appStyles } from './css/style.js'

const app = choo()

app.model({
  state: {
    title: 'Choo Starter'
  },
  reducers: {
    update: (action, state) => ({ title: action.payload })
  },
  effects: {
    update: (action, state, send) => (document.title = action.payload)
  }
})

app.router((route) => [
  route('/', homeView),
])



insertCss(appStyles)
const tree = app.start()
document.body.appendChild(tree)

