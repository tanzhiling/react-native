import React, {useReducer, useContext} from 'react';
import {setStorage, getStorage} from '../utils/storage';
const initState = {
  isLogin: getStorage('@isLogin') ? getStorage('@isLogin') : false,
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'setLogin':
      if (payload.isLogin) {
        setStorage('@isLogin', payload.isLogin);
      }
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};

export const Context = React.createContext({});

export const useStore = () => {
  const {state, dispatch} = useContext(Context);
  return {state, dispatch};
};

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};
