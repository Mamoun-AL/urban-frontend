import {createContext, useEffect, useState} from "react";
import React, { useContext } from 'react';

import axios from "axios";
import {data} from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  const isAuthenticated = !!user; 
  return (
    <UserContext.Provider value={{user,setUser,ready,isAuthenticated}}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);
