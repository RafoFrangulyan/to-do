import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ProsAndCons from '../Main/ProsAndCons';

import './index.css';

const Main = () => (
  <div className="main">
    <DndProvider backend={HTML5Backend}>
      <ProsAndCons title="PROS" />
      <ProsAndCons title="CONS" />
    </DndProvider>
  </div>
);

export default Main;
