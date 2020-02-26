import React from 'react';
import Home from './pages/Home'
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
