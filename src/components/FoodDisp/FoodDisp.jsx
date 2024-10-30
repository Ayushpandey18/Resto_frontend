import React, { useContext } from 'react'
import {StoreContext} from '../../context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'
import './FoodDisp.css'
const FoodDisp = ({catego}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='fdisp' id='Fooddisp'>
      <h2>Top Dishes Near You!!</h2>
      <div className="flist">
        {
            food_list.map((item,ind)=>{
              if(catego==='all'||catego===item.category)
                return <Fooditem key={ind} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            })
        }
      </div>
    </div>
  )
}

export default FoodDisp
