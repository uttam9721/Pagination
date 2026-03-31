
import React, { useState } from 'react'
import Sum from './components/Sum'
import SearchExample from './components/Search'

const App = () => {
  const [count,setCount]=useState(0)

  return (
    <div>
      {/* <h1>{count}</h1>
      <button
      onClick={()=>setCount(count+1)}
      >Increase</button>
      <Sum /> */}
      <SearchExample />
     
    </div>
  )
}

export default App
