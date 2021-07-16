import React,{useReducer} from 'react'

import logo from './logo.svg';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Reducers from "./pages/Reducers"
import Home from "./pages/Home"
import UseState_usingObj from "./pages/UseState_usingObj"
import UseState_usingArray from "./pages/UseState_usingArray"
import useContext from "./pages/useContext"

import ComponentA from "./pages/ComponentA"
import UseReducer from "./pages/UseReducer"



export const MyContext = React.createContext();

export const EmployeeNo = React.createContext();

const initalValue = 5

const reducer = (state,action)=>{
  switch(action){
    case "increment":
      return state+1
    break;
    case "decrement":
      return state-1
    break;
    case "reset":
      return initalValue
    break;
  }
}

export const CountContext = React.createContext()

function App() {
  const[count,dispatch] = useReducer(reducer,initalValue)
  return (
    <div className="App">
      <p>count val: {count}</p> 
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/use_state_object">Use State - Object</Link>
            </li>
            <li>
              <Link to="/UseState_usingArray">Use State - Array</Link>
            </li>
            <li>
              <Link to="/reducers">Reducers</Link>
            </li>
            <li>
              <Link to="/use_context">Use Context</Link>
            </li>
            <li>
              <Link to="/component_a">Component A</Link>
            </li>
            <li>
              <Link to="/use_reducer">Use Reducer</Link>
            </li>
          </ul>
          
            <Switch>
              <div className="body_content">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/reducers">
                  <Reducers />
                </Route>
                <Route path="/use_state_object">
                  <UseState_usingObj />
                </Route>
                <Route path="/UseState_usingArray">
                  <UseState_usingArray />
                </Route>
                <Route path="/use_context">
                  <useContext />
                </Route>
                <Route path="/component_a">
                  <CountContext.Provider value={{countVal:count,dispatchVal:dispatch}}>
                    <ComponentA />
                  </CountContext.Provider>
                </Route>
                <Route path="/use_reducer">
                    <UseReducer />
                </Route>
                </div>
            </Switch>
              
        </div>
      </Router>
    </div>
  );
}

export default App;
