import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Top from "./templates/Top" 
import PullRequest from "./templates/PullRequest" 
import Profile from "./templates/Profile" 
import Issue from "./templates/Issue" 

//要素の定義


const App = () => (
  <BrowserRouter>  
  <div>
      <Route path="/" component={Top} /> {/* https://qiita.com/gombeedoe/items/6f4ea0e37775bac01c0d */}
      <Route path="/profile" component={Profile} />
      <Route path="/issue" component={Issue} />
      <Route path="/pull-request" component={PullRequest} />
    </div>
  </BrowserRouter>
);

export default App;
