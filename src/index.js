import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import reaseachusApp from './reducers'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// let store = createStore(reaseachusApp)

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
)