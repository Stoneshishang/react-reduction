import React, { createContext, useState } from 'react';

const defaultState = {
  enteredFleetData: [],
  setEnteredFleetData: () => {},
};

export const Context = createContext(defaultState);

export const CsvDataProvider = ({ children }) => {
  const [enteredFleetData, setEnteredFleetData] = useState([]);

  const value = {
    enteredFleetData,
    setEnteredFleetData,
  };

  return <Context.Provider {...{ value }}>{children}</Context.Provider>;
};
