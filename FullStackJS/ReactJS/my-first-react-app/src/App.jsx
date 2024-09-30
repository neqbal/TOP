import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props) {
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
}
function App() {
  const [count, setCount] = useState(0)
  const animals = ["lion", "cheetahs", "lizard", "snake"];
  return (
    <>
      <div>
        <h1> animals: </h1>
	  <List animals = {animals} />
      </div>
    </>
  )
}

export default App
