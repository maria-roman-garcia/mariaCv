import React, { useState } from 'react';
import './App.scss';
//Components
import Menu from './Menu/Menu';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import TimeLineExperience from './TimeLineExperience/TimeLineExperience';
import ToolsExperience from './ToolsExperience/ToolsExperience';
import Training from './Training/Training';
import Projects from './Projects/Projects';
// Context
import { ContextProvider } from './Context/Context';

const App = () => {

  //Context
  const [contextInfo, setContextInfo] = useState({
    menuSelected: 1
  })

  const renderMenuSection=(menuSelected)=>{
    switch(menuSelected){
      case 1: return <AboutMe />
      case 2: return <TimeLineExperience />
      case 3: return <Training />
      case 4: return <ToolsExperience />
      case 5: return <Projects/>
      default: console.log("No section expected")
    }
  }

  return (
    <div className="App">
      <ContextProvider value={{ contextInfo, setContextInfo }}>
        <Header />
        <Menu/>
        {renderMenuSection(contextInfo.menuSelected)}    
      </ContextProvider>
    </div>
  );
}

export default App;
