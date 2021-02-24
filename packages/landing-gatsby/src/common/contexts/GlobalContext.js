import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext({user:"none"});
export const GlobalDispatchContext = React.createContext();

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'USER':
      return {
        ...state,
        user: state.user === "none" ? console.log('user is ' + state.user) : console.log('user is ' + state.user),
      };
    default:
      throw new Error('Bad Action Type')
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state }}>
      <GlobalDispatchContext.Provider value={{ dispatch }}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
