import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'

//components 
import Auth from './components/Auth'
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Post from './components/Post';
import Nav from './components/Nav'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      showNav: true
    }
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Nav className='Nav'/>
            <Switch>
              <Route exact path='/' component={Auth} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/post/:postid' component={Post} />
              <Route path='/new' component={Form} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;