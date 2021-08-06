import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions';
import {decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>anime hours {counter}</h2>
      <button onClick= {()=>dispatch(increment())}>+</button>
        <button onClick= {()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
