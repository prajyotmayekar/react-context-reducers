import React,{useState} from 'react'

function UseState_usingObj() {

  const initialVal = {first_name:"yo",last_name:"froyo"}
  const[userName,setUserName] = useState(initialVal)

  function updateUserFname(e){
    setUserName({...userName,first_name:e.target.value})
  }

  function updateUserLname(e){
    setUserName({...userName,last_name:e.target.value})
  }

  return (
    <div>
        <h1>Use state using object!</h1>

        <div>
          First name <b>{userName.first_name}</b>
        </div>
        <div>
          Last name <b>{userName.last_name}</b>
        </div>
        <div className="buttonCont">
          <input type="text" name="first_name" onChange={e=>updateUserFname(e)} /> First name<br></br>
        </div>
        <div className="buttonCont">
          <input type="text" name="last_name" onChange={e=>updateUserLname(e)}  /> Last name<br></br>
        </div>
    </div>
  )
}

export default UseState_usingObj
