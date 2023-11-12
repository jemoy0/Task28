import {Light} from './components/light'
import React, {useState} from "react";

function App() {

  const [color, setColor] = useState("red")

  return (
    <div>
      <Light color={color}/>
      <div className='buttons'>
      
        <button 
          onClick={() => {
            setColor("green")
          }}
        >
          green
        </button>

        <button 
          onClick={() => {
            setColor("yellow")
          }}
        >
          yellow
        </button>

        <button 
          onClick={() => {
            setColor("red")
          }}
        >
          red
        </button>
        
      </div>
    </div>
  );
}

export default App;
