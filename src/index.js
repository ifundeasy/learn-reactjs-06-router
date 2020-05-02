import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import Error from './pages/error';
import 'bootswatch/dist/journal/bootstrap.min.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <main role='main'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route path='/topics' component={Topics} />
              <Route path='/other'>
                <Redirect to='/about' />
              </Route>
              <Route component={Error} />
            </Switch>
          </div>
        </main>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
