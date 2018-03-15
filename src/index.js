import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

  const PrimaryRoute = ()=>(
    <Router>
      <Route exact path="/" component={App}/> 
    </Router>
  )

ReactDOM.render(<PrimaryRoute />, document.getElementById('root'));
