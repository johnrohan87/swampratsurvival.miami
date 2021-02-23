import React, { useReducer } from 'react';

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_USER':
      return {
        ...state,
        user: state.user === null ? console.log('user is ' + state.user) : console.log('user is ' + state.user),
      };
    default:
      throw new Error('Bad Action Type')
  }
}
export const GlobalContext = React.createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
