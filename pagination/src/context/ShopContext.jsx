import React from 'react'
import { createContext,useState } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [card,setCard]=useState([]);

    const addToCard=(item)=>{
        setCard([...card,item]);
    }




  return (
    <ShopContext.Provider value={{card,addToCard}}>
        {children}
    </ShopContext.Provider>
    
  )
}

export default ShopContextProvider;