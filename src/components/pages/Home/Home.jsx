import React, { useState } from 'react'
import Header from '../../Header/Header'
import Explore from '../../Explore/Explore'
import FoodDisp from '../../FoodDisp/FoodDisp';

const Home = () => {
  const [catego,setcat]=useState("all");
  return (
    <div>
      <Header/>
      <Explore cat={catego} setcat={setcat}/>
      <FoodDisp catego={catego}/>
    </div>
  )
}

export default Home
