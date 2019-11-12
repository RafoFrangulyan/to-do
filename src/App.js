import React from 'react';

import Main from './Components/Main';
import Header from './Components/Header';

import { ContextProvider } from './Context';

import './App.css';

const App = () => (
  <div className="app">
    <ContextProvider>
      <Header />
      <Main />
    </ContextProvider>
  </div>
);

export default App;
