import React,{useState} from 'react';
import './App.css';
import Operation from './components/operation'
import Result from './components/result'
import ButtonN from './components/buttonN'
import { Provider} from './context/context'

function App() {
  const [state, setstate] = useState({
    result:0,
    number:'0',
    operation:''
});

  return (
    <div className="App">
      <h1>Calculator</h1>
      <Provider value={{state,setstate}}>
         <div id="back">
          <Result/>
          <div className="t">
        
          <ButtonN value="1"/>
          <ButtonN value="2"/>
          <ButtonN value="3"/>
          <Operation value="/"/>

          <br />
          <ButtonN value="4"/>
          <ButtonN value="5"/>
          <ButtonN value="6"/>
          <Operation value="*"/>
             <br/>
          <ButtonN value="7"/>
          <ButtonN value="8"/>
          <ButtonN value="9"/>
          <Operation value="+"/>
          <br/>
         <ButtonN value="0"/>
          <ButtonN value="."/>
          <Operation value="clear"/>
          <Operation value="="/>

         <Operation value="-"/>
        </div>
      </div>
      </Provider>
    </div>
  );
}

export default App;
