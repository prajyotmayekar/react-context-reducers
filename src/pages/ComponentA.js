import React from 'react'

import ComponentB from "./ComponentB"

function ComponentA() {
  return (
    <div>
      ComponentA!<br></br>

      Nexted Component in A <br></br>
      <br></br>
      <ComponentB />

      <br></br>
    </div>
  )
}

export default ComponentA
