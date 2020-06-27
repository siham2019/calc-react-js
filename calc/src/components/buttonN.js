import React,{useContext} from 'react';
import '../App.css';
import {Context} from '../context/context'
function ButtonN(props) {
  const context = useContext(Context);
  return (
    
  <div className="u">
    <button className="b" onClick={()=>{
      context.setstate({
        result:context.state.result,
        number:context.state.number+props.value,
        operation:context.state.operation

      })
      }}>

      {props.value}

    </button>
  </div>

  );
}

export default ButtonN;