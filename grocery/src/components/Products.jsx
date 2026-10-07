
import React from 'react'
import { data } from '../services/Grocery'

const Products = () => {
    console.log(data);
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border border-[#ccc]'>
      {data.map((item,idx)=>{
        return(
            <div key={idx} className='w-80'>
                <div className='w-60'>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className='w-55'>
                    <h2>{item.name}</h2>
                    <p>{item.category}</p>
                    <p>₹{item.price}</p>
                </div>
                <div className='mx-auto p-2'>

                    <button className='bg-green-600 text-white w-full'>Add to Cart</button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Products
