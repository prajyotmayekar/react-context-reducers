import React,{useContext} from 'react'

import {CountContext} from '../App'

function ComponentC() {
  console.log("xxxxxxxxxxxx");
  const contextVal = useContext(CountContext);
  console.log(contextVal);
  return (
    <div>
      xxxx {contextVal.countVal}

      <button onClick={()=>contextVal.dispatchVal('increment')}>Increment</button>
      <button onClick={()=>contextVal.dispatchVal('decrement')}>Decrement</button>
      <button onClick={()=>contextVal.dispatchVal('reset')}>Reset</button>
    </div>
  )
}

export default ComponentC
