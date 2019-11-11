import React, { useState, useContext, createContext } from 'react';

import defaultData from '../TestData';

const DataContext = createContext();
const useTodoContext = () => useContext(DataContext);

function ContextProvider({ children }) {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleChangeData = (index, value, data, setData) => {
    const newData = [...data];
    newData.splice(index, 1, value);
    setData(newData);
  };
  const handleRemoveData = (index, data, setData) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  const addData = setData => setData(prev => [...prev, '']);
  const handleInputChangeData = ({ target: { value } }, data, setData) => {
    const dataLength = data.length;
    const dataLastIndex = dataLength - 1;
  
    if (!value && selectedIndex !== dataLastIndex && dataLength !== 1) {
      handleRemoveData(selectedIndex, data, setData);
    } else {
      handleChangeData(selectedIndex, value, data, setData);
    };

    if (dataLastIndex === selectedIndex && value.trim()) {
      addData(setData);
    };
  };

  return (
    <DataContext.Provider
      value={{
        defaultData,
        selectedIndex,
        setSelectedIndex,
        handleRemoveData,
        handleChangeData,
        handleInputChangeData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export {
  useTodoContext,
  ContextProvider,
};
