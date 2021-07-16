import React,{useState,useRef,useEffect} from 'react'

function UseState_usingArray() {
  const[empList,updateEmployeeList] = useState([]);

   useEffect(() => {    
     console.log("use effect called");
   },[empList]);

  const first_name = useRef(null);
  const last_name = useRef(null);
  
  function addEmployee(){

    if(first_name.current.value && last_name.current.value){
      updateEmployeeList([...empList,
      {first_name:first_name.current.value,
      last_name:last_name.current.value}]);

      first_name.current.value = '';
      last_name.current.value = '';
    }
  }

  function removeEmployee(){
    updateEmployeeList(empList.filter(item =>item.first_name!=='prajyot'))
  }

  return (
    <div>
      <h1>Use state using Array list</h1>
      <div className="buttonCont">
          <input type="text" name="first_name" ref={first_name}/> First name<br></br>
      </div>
      <div className="buttonCont">
          <input type="text" name="last_name" ref={last_name} /> Last name<br></br>
      </div>
      <div className="buttonCont" >
          <button onClick={addEmployee}>Save employee</button>
      </div>
      <div className="buttonCont" >
          <button onClick={removeEmployee}>Splice</button>
      </div>
      <div className="buttonCont">
          {JSON.stringify(empList)}
      </div>
      <div>
        {empList.map((item,index)=>(
          <p>{index} {item.first_name} {item.last_name}</p>
        ))}
      </div>
    </div>
  )
}

export default UseState_usingArray
