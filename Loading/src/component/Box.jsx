import React, { useContext } from 'react'
import { NumberContext } from '../Context/ContextApi'

const Box = () => {
    const {num,setNum}=useContext(NumberContext)
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default Box
