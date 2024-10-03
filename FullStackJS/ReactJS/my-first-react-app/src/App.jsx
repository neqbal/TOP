import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
                
/*function ListItem(props) {
	return <li> {props.animal}</li>
}

function List(props) {
	return (
		<ul>
			{props.animals.map((animal) => {
				return <ListItem key={animal} animal={animal}/>
			})}
		</ul>
	)	
}*/
/*import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;*/
const colors = ["red", "blue", "yellow"];
function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  }
  return (
    <>
      <div
        className = "App"
        style = {{
          backgroundColor,
        }}
      >
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor===color? "selected" : ""}
          >
          {color}
          </button>
        ))}
      </div>
    </>
  )
}

export default App
