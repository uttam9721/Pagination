import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const NumberContext=createContext();

export const NumberProvider=({children})=>{
    const [num,setNum]=useState(0);
    return(
        <NumberContext.Provider value={{
            num,
            setNum
        }}>
            {children}
        </NumberContext.Provider>
    )
}