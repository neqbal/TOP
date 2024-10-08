import { useState } from 'react'
import './App.css'

function Info({text, color, fontSize, method}) {
  const infoStyle = {
    color: color,
    fontSize: fontSize + "rem"
  };

  return (
    <div style={infoStyle} onDoubleClick={method}> {text}</div>
  )
}

function InputField({method}) {
  return <input type="text" onKeyUp={method}></input>
}

function Profession() { 
  function doubleClickHandler() {
    setProf(<InputField method={handleKeyUp} />)
    console.log("ugauga")
  }


  function handleKeyUp(e) {
    if(e.key === 'Enter') {
      setProf(<Info text={e.target.value} color="" fontSize="5" method={doubleClickHandler} />)
    }
  }

  const [prof, setProf] = useState(<Info text="Aspiring Operating Systems developer" color="gray" fontSize={2.8} method={doubleClickHandler} />)
 
  return (
        <>
          {prof}
        </>
  )
}

function Name() { 
  function doubleClickHandler() {
    setName(<InputField method={handleKeyUp} />)
    console.log("ugauga")
  }


  function handleKeyUp(e) {
    if(e.key === 'Enter') {
      setName(<Info text={e.target.value} color="" fontSize="5" method={doubleClickHandler} />)
    }
  }

  const [name, setName] = useState(<Info text="Guts" color="" fontSize="3.8" method={doubleClickHandler} />)
 
  return (
        <>
          I'M
          {name}
        </>
  )
}

function GeneralInfo() {
  return ( 
    <div className="generalInfo">
      <Name />
      <Profession />
    </div>
  )
}

function PersonalDetails() {
  return (
    <div className="personalDetails">
      <GeneralInfo />
    </div>
  )
}

function ProjectTitle({defaultTitle}) {
  function doubleClickHandler() {
    setTitle(<InputField method={handleKeyUp} />) 
  }

  function handleKeyUp(e) {
    if(e.key === 'Enter') {
      setTitle(<Info text={e.target.value} color="" fontSize={3} method={doubleClickHandler} />)
    }
  }
  const [title, setTitle] = useState(<Info text={defaultTitle} color="" fontSize={3} method={doubleClickHandler} />); 

  return (
    <div className="title">
      {title}
    </div>
  )
}

function ProjectDescription({defaultDesc}) {
  function doubleClickHandler() {
    setDesc(<InputField method={handleKeyUp} />) 
  }

  function handleKeyUp(e) {
    if(e.key === 'Enter') {
      setDesc(<Info text={e.target.value} color="gray" fontSize={2.5} method={doubleClickHandler} />)
    }
  }
  const [desc, setDesc] = useState(<Info text={defaultDesc} color="gray" fontSize={2.5} method={doubleClickHandler} />); 

  return (
    <div className="desc">
      {desc}
    </div>
  )
}

function ProjectSource() {
}

function Project1() {
  const title = "A compiler for Jack Programming langauge"
  const desc = "akjsdkjasbnfkhaskdjbasjbfkasjbndj \nkjashdkjahsdkjhasdjhkjashd \nkjashdkabskdjbasjdhbshjkdgfb asbdf hghahsjd \nashgdjhasdhjbasd \n"
  return (
    <div id="Project1" className="Projects">
      <ProjectTitle defaultTitle={title} />
      <ProjectDescription defaultDesc={desc}/>
      <ProjectSource />
    </div>    
  )
}

function Projects () {
  return (
    <div className="ProjectsHolder">
      Projects
      <Project1 />
    </div>
  )
}

function CV() {
  return (
    <>
      <PersonalDetails /> 
      <Projects />
    </>
  ) 
}

function App() {
  return (
    <>
      <div
        className="intro"
      >
        <CV />
      </div>
    </>
  )
}

export default App
