import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './common/store'
import AppIndex from './components/appIndex'

import './index.css'

const store = configureStore()

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <AppIndex />
    </BrowserRouter>
  </Provider>
)

render(
  Root,
  document.getElementById('root') as HTMLElement
)
