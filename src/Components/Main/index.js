import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ProsAndCons from '../Main/ProsAndCons';

import './index.css';

const Main = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="main">
      <ProsAndCons title="PROS" />
      <ProsAndCons title="CONS" />
    </div>
  </DndProvider>
);

export default Main;
