import React, { createContext, useContext, useReducer } from "react";
// preparing the data layer, creation of "context",where the data layer actually lives.
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// allows you to pull information from the data layer
export const useStateValue = () => useContext(StateContext);