import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

//要素の定義
const Home = () => {
  return <Header />;
};

const Profile = () => {
  return <p>Profileのページです</p>;
};

const Issue = () => {
  return <p>Issueページ</p>;
};

const PullRequest = () => {
  return <p>PullRequestページ</p>;
};


const App = () => (
  <BrowserRouter>  
  <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/issue" component={Issue} />
      <Route path="/pull-request" component={PullRequest} />
    </div>
  　

  </BrowserRouter>
);

export default App;
