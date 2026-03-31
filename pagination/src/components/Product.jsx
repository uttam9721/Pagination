import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
const Product = () => {
  const { addToCard } = useContext(ShopContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const stepCount = 8;

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.table(result.data.products);
    setData(result.data.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const last = page * stepCount;
  const first = last - stepCount;
  const currentData = data.slice(first, last);
  const len = Math.ceil(data.length / stepCount);

  return (
    <div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5'>
        {currentData.map((item, idx) => {
          return (
            <div  className='w-80 border border-[#ccc] gap-5 mx-auto' key={idx}>

              <div>
                {/* FIX: images is array */}
                <img className='w-50 h-60 mx-auto' src={item.images[0]} alt={item.title} />
              </div>

              <div className='p-5'>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 50)}...</p>
              </div>

              <div className='justify-center mx-auto p-2 w-full flex'>
                <button
                onClick={()=>addToCard(item)}
                className='justify-center w-full font-bold text-white py-2 bg-gray-800'>
                  Add to Cart
                </button>
              </div>

            </div>
          )
        })}
      </div>

      <div className='flex mb-5 justify-center gap-3 mt-5'>
        <button
         className='px-5 py-1 border-2 cursor-pointer rounded hover:bg-[#ccc] hover:text-black font-bold'
        onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>

        {/* FIX: don't render array */}
        <span>Page {page} of {len}</span>

        <button className='px-5 py-1 border-2 cursor-pointer rounded hover:bg-[#ccc] hover:text-black font-bold' onClick={() => setPage(page + 1)} disabled={page === len}>
          Next
        </button>
      </div>

    </div>
  )
}

export default Product;