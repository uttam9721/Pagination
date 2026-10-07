
import React, { useState } from 'react'
import Sum from './components/Sum'
import SearchExample from './components/Search'
import hook from './pages/hook';

const App = () => {
  const [count,setCount]=useState(0)

  return (
    <div>
      {/* <h1>{count}</h1>
      <button
      onClick={()=>setCount(count+1)}
      >Increase</button>
      <Sum /> */}
      {/* <SearchExample /> */}
      <hook />
     
    </div>
  )
}

export default App
