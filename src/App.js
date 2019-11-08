import React from 'react';

import Main from './Components/Main';
import Header from './Components/Header';

import { ContextProvider } from './Context';

const App = () => (
  <ContextProvider>
    <Header />
    <Main />
  </ContextProvider>
);
  
export default App;
