import React, { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartit,setcart]=useState({});
  const addtocart=(id)=>{
  if(!cartit[id]){
  setcart((prev)=>({...prev,[id]:1}))
  }
  else{
  setcart((prev)=>({...prev,[id]:prev[id]+1}))
  }
  }
  const remfromcart=(id)=>{
    setcart((prev)=>({...prev,[id]:prev[id]-1}))  
    }
  const contextValue = {
   food_list,cartit,setcart,addtocart,remfromcart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;