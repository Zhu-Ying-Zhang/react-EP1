//App.jsx
import React from "react";
import PropTypes from "prop-types";

//特殊寫法
const App = (props) => {
  const {content} = props;
  return <div className="App">This is App!{content}</div>;
};
//正統寫法
//class App extends React.Component{
//  render(){
//    return <div className="app">This is app!</div>;
//  }
//}

App.propTypes = {
  content: PropTypes.string, 
};

export default App;
