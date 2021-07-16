import React, { createContext, useState } from 'react';

const defaultState = {
  enteredFleetData: [],
  setEnteredFleetData: () => {},

  currentURL: '',
  setCurrentURL: () => {},
};

export const Context = createContext(defaultState);

export const CsvDataProvider = ({ children }) => {
  const [enteredFleetData, setEnteredFleetData] = useState([]);
  const [currentURL, setCurrentURL] = useState('');

  const value = {
    enteredFleetData,
    setEnteredFleetData,

    currentURL,
    setCurrentURL,
  };

  return <Context.Provider {...{ value }}>{children}</Context.Provider>;
};
