import React,{useContext} from 'react';
import '../App.css';
import {Context} from '../context/context'
function Result() {
  const context = useContext(Context);
  return (
    
      <div id="r">
        <p>{context.state.number} {context.state.operation}
        <br/>
  {context.state.result!==0?( context.state.result):null} </p>
      </div>

  );
}

export default Result;