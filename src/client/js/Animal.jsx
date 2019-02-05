//App.jsx
import React from "react";
import PropTypes from "prop-types";
//import { Link, Switch, Route } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { Link, Route } from "react-router-dom";
//import { hot } from "react-hot-loader";

//特殊寫法
const Animal = props => {
  const { type } = props;
  return <div className="Animal">{type}</div>;
};
//正統寫法
//class App extends React.Component{
//  render(){
//    return <div className="app">This is app!</div>;
//  }
//}

Animal.propTypes = {
  type: PropTypes.string
};

export default Animal;
