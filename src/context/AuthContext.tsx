import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

// Definir que información tendré aquí
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// Lo usuaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeName: (name: string) => void;
  changeFavouriteIcon: (iconName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor de información. Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeFavouriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeName = (name: string) => {
    dispatch({type: 'changeUsername', payload: name});
  };
  return (
    <AuthContext.Provider
      value={{authState, signIn, changeFavouriteIcon, logOut, changeName}}>
      {children}
    </AuthContext.Provider>
  );
};
