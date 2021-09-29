import React from 'react'
import Sidebar from './Components/Sidebar'
import NoteContext from './Context/NoteContext'
import NoteContainer from './Components/NoteContainer'
import './Styles/App.css'
function App() {
  return (
    <>
    <NoteContext>
      <div className="app_main">
        <Sidebar />
        <NoteContainer />
      </div>
      </NoteContext>
    </>
  )
}

export default App
