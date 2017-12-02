import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import researchusApp from './reducers'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

 let store = createStore(researchusApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)