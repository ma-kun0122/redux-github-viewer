import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './reducks/store/store'
import { ConnectedRouter } from 'connected-react-router'
import './index.css'
import App from './App'
import * as History from 'history'

const history = History.createBrowserHistory()
export const store = createStore(history) //ここでcreateScoreを実行して初めてストアが作られている

ReactDOM.render(
  <Provider store={store}>
    {/* ここでAppコンポーネントがストアを参照できるようにしている */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
