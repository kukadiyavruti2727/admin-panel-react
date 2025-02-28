import React, { useState } from 'react'
import { Sidebar } from './Components/Sidebar/Sidebar';
import MainContent from './Components/Main/MainContent';

export const App = () => {
  const [darkMode, setdarkMode] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDarkMode = () => {
    setdarkMode(!darkMode)
  }

  const togglSidebar= ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={`flex font-Monstserrat bg-sky-700 ${darkMode && "dark"}`}>
        <Sidebar togglSidebar={togglSidebar} isOpen={isOpen}/>
        <MainContent  isOpen={isOpen} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </div>
    </>
  )
}
export default App;
