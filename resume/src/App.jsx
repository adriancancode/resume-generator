import { useState } from 'react'
import Resume from './components/resume';
import Input from './components/input';
import './App.css'

function App() {
  return (
    <>
    <h1>Craft-a-CV</h1>
    <p>Draft and craft your resume with this simple resume building app.</p>
      <Resume/>
      <Input section="Education"/>
      <Input section="Experience"/>
      <Input section="Skills"/>
      <Input section="Projects"/>

    </>
  )
}

export default App
