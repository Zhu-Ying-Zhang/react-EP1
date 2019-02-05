//App.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link, Switch, Route, Redirect } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { Link, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import Main from "./Main.jsx";
import Animal from "./Animal.jsx";

//特殊寫法
const App = props => {
  const { content } = props;
  return (
    <div className="App">
      <nav className="app-nav">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/cat">cat</Link>
        </li>
        <li>
          <Link to="/dog">dog</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </nav>
      <div className="app-body">
        Main Page This is App!{content}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/dog" component={() => <Animal type="Dog" />} />
          <Route path="/cat" component={() => <Animal type="Cat" />} />
          <Route path="/about" render={() => <div>about</div>} />
          <Route path="/404" render={() => <div>ERROR</div>} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </div>
  );
};
//正統寫法
//class App extends React.Component{
//  render(){
//    return <div className="app">This is app!</div>;
//  }
//}

App.propTypes = {
  content: PropTypes.string
};

export default hot(module)(App);
