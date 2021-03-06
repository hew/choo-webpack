import choo from 'choo'
import { rootView } from './views/root'
import { appStyles } from './css/style.js'
import insertCss from 'insert-css'

const app = choo()

app.model({
  namespace: 'home',
  state: {
    title: 'Type Something',
    init: true,
    symbol: '✗' 
  },
  reducers: {
    update: (action, state) => ({ title: action.payload, init: false, symbol: '✓' })
  },
  effects: {
    update: (action, state, send) => (document.title = action.payload)
  }
})

app.router((route) => [
  route('/', rootView)
])

insertCss(appStyles)
const tree = app.start()
document.body.appendChild(tree)
