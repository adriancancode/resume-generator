import Resume from './components/resume';
import Input from './components/input';
import { ResumeProvider } from './components/ResumeContext';
import './App.css'



function App() {
  return (
    <ResumeProvider>
      <h1>Craft-a-CV</h1>
      <p>Draft and craft your resume with this simple resume building app.</p>
      <Resume/>
      <div className='section-container'>
        <Input section="Contact Information"/>
        <Input section="Education"/>
        <Input section="Experience"/>
        <Input section="Skills"/>
        <Input section="Projects"/>
      </div>
      

    </ResumeProvider>
  )
}

export default App
