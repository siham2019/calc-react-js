import React, { createContext } from 'react';

export const Context=createContext();
export function Provider(props) {
    return (
    <Context.Provider value={props.value}>
      {props.children}
    </Context.Provider>
    )
}