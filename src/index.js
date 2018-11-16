import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routers from './router/router'
import store from './redux/store'
import {Provider} from 'react-redux'
if (module.hot) {
  module.hot.accept()
}
class App extends React.Component {
  render () {
    return (
      <div className='main'>
        <div className='content'>
          <Routers />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('App')
)
