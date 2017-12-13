import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import createStore from './src/redux/configureStore'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore();

  const ConnectedBody = () => (
    <Provider store={store}>
      { bodyComponent }
    </Provider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}