import React, { useState } from 'react';

import DraggableInput from '../../DraggableInput';
import { useTodoContext } from '../../../Context';

import './index.css';

const ProsAndCons = ({ title }) => {
  const {
    defaultData
  } = useTodoContext();

  const inputData = title === 'PROS' ? defaultData.pros : defaultData.cons;
  const [data, setData] = useState(inputData);

  return (
    <div className="pros-and-cons">
      <h3>{title}</h3>
      <hr />
      <ol>
        {data.map((value, index) =>
          <DraggableInput
            key={index}
            data={data}
            index={index}
            value={value}
            title={title}
            setData={setData}
          />
        )}
      </ol>
    </div>
  );
};

export default ProsAndCons;
