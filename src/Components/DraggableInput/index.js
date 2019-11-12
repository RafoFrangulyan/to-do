import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import Input from '../Input';
import { ItemType } from '../../Constants/ItemType';

const DraggableInput = ({ data, setData, index, value, title, ...rest }) => {

  const mainRef = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: {
      index,
      title,
      value,
      prosData: data,
      setProsData: setData,
      type: ItemType.INPUT
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag() {
      if (value) return true;
    }
  });
  // eslint-disable-next-line 
  const [_, drop] = useDrop({
    accept: ItemType.INPUT,
    drop(item) {
      const hovered = index;
      const dataCopy = [...data];
      const dragged = item.index;
      const removed = dataCopy.splice(dragged, 1);

      if (item.title === title) {
        dataCopy.splice(hovered, 0, ...removed);
        setData(dataCopy);
      } else {
        const nweData = [...data];
        const newProsData = [...item.prosData];
        newProsData.splice(dragged, 1);
        item.setProsData(newProsData);
        nweData.splice(hovered, 0, item.value);
        setData(nweData);
      };
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
      <Input
        data={data}
        index={index}
        value={value}
        setData={setData}
      />
    </div>
  );
};

export default DraggableInput;
