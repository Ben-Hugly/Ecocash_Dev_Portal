import React from 'react'
import './App.css'
import { Navbar,ThemeToggle,Hero,GettingStarted, UseCases,Benefits,Testimonials,ReadyToGrow,SocialMediaLinks,Footer} from './components'

function App() {
 

  return (
    <div className='dark:bg-primary bg-white space-y-20' >
      <Navbar/>
      <ThemeToggle/>{/**for testing */}
      <Hero/>
      <GettingStarted/>
      <UseCases/>
      <Benefits/>
      <Testimonials/>  
      <ReadyToGrow/>  
      <SocialMediaLinks/> 
      <Footer/> 
    </div>
  )
}

export default App
