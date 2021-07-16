import React,{useReducer} from 'react'

const initialValue = {
  firstVal:0,
  secondVal:0
}

const reducer = (state,action) =>{
  switch(action.action){
    case "increment":
    return {...state,firstVal:state.firstVal+1};
    case "decrement":
    return {...state,firstVal:state.firstVal-1};
    case "reset":
    return {...state,firstVal: initialValue.firstVal};
    case "increment-5":
    return {...state,secondVal: state.secondVal+action.value};
    case "decrement-5":
    return {...state,secondVal: state.secondVal-action.value};
  }
}

function UseReducer() {
  
  const[count,dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
      <p>First value {count.firstVal}</p>
      <button onClick={()=>dispatch({action:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({action:'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({action:'reset'})}>Reset</button>

      <br></br>
      <br></br>
      <p>Second value {count.secondVal}</p>
      <button onClick={()=>dispatch({action:'increment-5',value: 5})}>Increment 5</button>
      <button onClick={()=>dispatch({action:'decrement-5',value: 5})}>Decrement 5</button>
    </div>
  )
}

export default UseReducer
