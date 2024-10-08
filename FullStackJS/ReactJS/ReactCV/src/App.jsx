import { useState } from 'react'
import gitHub from './assets/github.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import gmail from './assets/gmail.svg'
import './App.css'

function SVGIcon({icon}) {
  return (
    <img  width='30px' height='30px' src={icon}></img>
  )
}

function Info({className,text, color, fontSize, method}) {
  const infoStyle = {
    color: color,
    fontSize: fontSize + "rem"
  };

  return (
    <div className={className} style={infoStyle} onDoubleClick={method}> {text}</div>
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
      setProf(<Info text={e.target.value} color="gray" fontSize="5" method={doubleClickHandler} />)
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
      setDesc(<Info className="desc" text={e.target.value} color="gray" fontSize={1} method={doubleClickHandler} />)
    }
  }
  const [desc, setDesc] = useState(<Info className="desc" text={defaultDesc} color="gray" fontSize={1} method={doubleClickHandler} />); 

  return (
    <>
      {desc}
    </>
  )
}

function ProjectSource({source, icon}) {
  return (
    <a className="projSource" href={source} target="_blank">
      <SVGIcon icon={icon} />
    </a>
  )
}

function Project1() {
  const title = "A compiler for Jack Programming langauge"
  const desc = "I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN CONTENT AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME ANYWHERE YOU LIKE ON YOUR PAGE. "
  const source = "https://www.github.com/"
  return (
    <div id="Project1" className="Projects">
      <ProjectTitle defaultTitle={title} />
      <ProjectDescription defaultDesc={desc}/>
      <ProjectSource source = {source} icon={gitHub}/>
    </div>    
  )
}

function Project2() {
  const title = "Almost Twitter"
  const desc = "I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN CONTENT AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME ANYWHERE YOU LIKE ON YOUR PAGE. "
  const source = "https://www.github.com/"
  return (
    <div id="Project1" className="Projects">
      <ProjectTitle defaultTitle={title} />
      <ProjectDescription defaultDesc={desc}/>
      <ProjectSource source = {source} icon={gitHub}/>
    </div>    
  )

}

function Project3() {
  const title = "Basic Implementation of UART"
  const desc = "I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN CONTENT AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME ANYWHERE YOU LIKE ON YOUR PAGE. "
  const source = "https://www.github.com/"
  return (
    <div id="Project1" className="Projects">
      <ProjectTitle defaultTitle={title} />
      <ProjectDescription defaultDesc={desc}/>
      <ProjectSource source = {source} icon={gitHub}/>
    </div>    
  )
}
function Projects () {
  return (
    <div className="ProjectsHolder">
      Projects
      <Project1 />
      <Project2 />
      <Project3 />
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

function Contact() {
  return (
    <div className="Contact">
      <a href="https://linkedin.com/" target="_blank">
        <SVGIcon icon={linkedin} />
      </a>
      <a href="https://twitter.com/" targte="_blank">
        <SVGIcon icon={twitter} />
      </a>
      <a href="https://gmail.com/" targte="_blank">
        <SVGIcon icon={gmail} />
      </a>
    </div>
  )
}
function App() {
  return (
    <>
      <div
        className="intro"
      >
        <CV />
        <Contact />
        <div class="Credits">
          Developed by kathulu
        </div>
      </div>
    </>
  )
}

export default App
