import React,{useContext} from 'react';
import '../App.css';
import {Context} from '../context/context'

function Operation(props) {
  const context = useContext(Context);
     function op(){
       if(props.value==="clear")
       context.setstate({
        result:0,
        number:"0",
        operation:""
       
      })
       if(props.value !== "="){
        context.setstate({
          result:parseFloat(context.state.number),
          number:"",
          operation:props.value
         
        })
       }else{
        switch (context.state.operation) {
          case "+":
            context.setstate({
              result:context.state.result+parseFloat(context.state.number),
              number:context.state.result+parseFloat(context.state.number),
              operation:""
             
            })
            break;
            case "clear":
              context.setstate({
                result:0,
                number:"0",
                operation:""
               
              })
              break;
          case "/":
            context.setstate({
              result:context.state.result/parseFloat(context.state.number),
              number:"",
              operation:""
             
            })
            break;
            case "*":
              context.setstate({
                result:context.state.result*parseFloat(context.state.number),
                number:"",
                operation:""
               
              })
              break;
          case "-":
            context.setstate({
              result:context.state.result-parseFloat(context.state.number),
              number:"",
              operation:""
             
            })
            break;
          default:
            break;
        }
       }
    
     }
  return (
    
      <div style={{display:"inline-block",marginLeft:10}}>
             
       
         <button className="b" onClick={()=>{op()}}>

            {props.value}
      
          </button>
        
      </div>

  );
}

export default Operation;