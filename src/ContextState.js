import React, { createContext, useState } from 'react';

const defaultState = {
  enteredFleetData: [],
  setEnteredFleetData: () => {},

  currentURL: '',
  setCurrentURL: () => {},

  isOpenAssemblies: false,
  setIsOpenAssemblies: () => {},

  isOpenEvaluation: false,
  setIsOpenEvaluation: () => {},

  isOpenRecommendation: false,
  setIsOpenRecommendation: () => {},

  isOpenOptimization: false,
  setIsOpenOptimization: () => {},
};

export const Context = createContext(defaultState);

export const GloabalContextProvider = ({ children }) => {
  const [enteredFleetData, setEnteredFleetData] = useState([]);
  const [currentURL, setCurrentURL] = useState('');
  const [isOpenAssemblies, setIsOpenAssemblies] = useState(false);
  const [isOpenEvaluation, setIsOpenEvaluation] = useState(false);
  const [isOpenRecommendation, setIsOpenRecommendation] = useState(false);
  const [isOpenOptimization, setIsOpenOptimization] = useState(false);

  console.log('===============currentURL=====================');
  console.log(currentURL);

  const value = {
    enteredFleetData,
    setEnteredFleetData,

    currentURL,
    setCurrentURL,

    isOpenAssemblies,
    setIsOpenAssemblies,

    isOpenEvaluation,
    setIsOpenEvaluation,

    isOpenRecommendation,
    setIsOpenRecommendation,

    isOpenOptimization,
    setIsOpenOptimization,
  };

  return <Context.Provider {...{ value }}>{children}</Context.Provider>;
};
