// Laus, Mark Angelo T.
// WD - 401

import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ParentComponent from './components/ParentComponent'

function App() {


  return (
    <>
    <div>
      <Hello />
    </div>
    <div>
      <Welcome />
    </div>
      <div>
       <h2>React Props Example</h2>
       <ParentComponent />
      </div>
    </>
  )
}

export default App
