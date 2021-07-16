import React from 'react'

import ComponentC from "./ComponentC"

function ComponentB() {
  return (
    <div>
      ComponentB<br></br>

      Nexted Component in B <br></br>
      <br></br>
      <ComponentC />
    </div>
  )
}

export default ComponentB
