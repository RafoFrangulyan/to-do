import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useTodoContext } from '../../../Context';
import { ItemType } from '../../../Constants/ItemType';


import './index.css'

const Input = ({ data, setData, index, value }) => {
  const mainRef = useRef(null);
  const {
    setSelectedIndex,
    handleInputChangeData
  } = useTodoContext();
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemType.INPUT, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag() {
      if (value) return true;
    }
  });
  const [_, drop] = useDrop({
    accept: ItemType.INPUT,
    drop(item) {
      const dragged = item.index;
      const hovered = index;
      const dataCopy = [...data];
      const removed = dataCopy.splice(dragged, 1);
      dataCopy.splice(hovered, 0, removed);
      setData(dataCopy);
    },
    canDrop() {
      if (value) return true;
    }
  });

  drag(drop(mainRef));

  return (
    <div
      ref={mainRef}
      style={{
        opacity: isDragging ? 0.5 : 1,

      }}
    >
      <li key={index} onClick={() => setSelectedIndex(index)}>
        <input
          placeholder="Fill Field"
          className="input"
          value={value}
          onChange={e => handleInputChangeData(e, data, setData)}
        />
      </li>
    </div>
  );
};

export default Input;
