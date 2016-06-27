import choo from 'choo'
import {mainView} from './view'

const app = choo()
document.title = 'Hummus is Gewd'

app.model({
  namespace: 'input',
  state: {
    title: 'Hummus is Gewd'
  },
  reducers: {
    update: (action, state) => ({ title: action.payload })
  },
  effects: {
    update: (action, state, send) => (document.title = action.payload)
  }
})

app.router((route) => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)

