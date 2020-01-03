import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import World from './features/world'
import Home from './features/home/home'

window.addEventListener('unload', function(event) {
  console.log('EVENT ')
  document.getElementById('background').pause();
  document.getElementsByTagName('canvas').removoe();
});

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/world' component={World}/>
    </Router>
  );
}

export default App;

