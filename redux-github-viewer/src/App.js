import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Top from './pages/Top'
import PullRequest from './pages/PullRequest'
import Profile from './pages/Profile'
import Issue from './pages/Issue'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Top} /> {/* https://qiita.com/gombeedoe/items/6f4ea0e37775bac01c0d */}
      <Route path="/profile" component={Profile} />
      <Route path="/issue" component={Issue} />
      <Route path="/pull-request" component={PullRequest} />
    </div>
  </BrowserRouter>
)

export default App
