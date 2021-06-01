import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
// 引用组件
import Home from './views/Home';
import About from './views/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 class="h1">1111</h1>
        <HashRouter>
          <Switch>
            <Route component={Home} exact path="/"></Route>
            <Route component={About} path="/about"></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
