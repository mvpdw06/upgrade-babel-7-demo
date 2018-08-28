import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const rootElement = document.getElementById('app')
const renderApp = element => {
  const App = require('./App').default
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    element
  )
}

renderApp(rootElement)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App.js', () => renderApp(rootElement))
}
