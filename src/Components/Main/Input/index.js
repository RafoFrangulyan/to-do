import React from 'react';

import { useTodoContext } from '../../../Context';

import './index.css'

const Input = ({ data, setData, index, value }) => {

  const {
    setSelectedIndex,
    handleInputChangeData
  } = useTodoContext();

  return (
    <li key={index} onClick={() => setSelectedIndex(index)}>
      <input
        className="input"
        value={value}
        onChange={e => handleInputChangeData(e, data, setData)}
      />
    </li>
  );
};

export default Input;
