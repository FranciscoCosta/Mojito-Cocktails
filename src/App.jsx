import gsap from 'gsap';
import {ScrollTrigger , SplitText} from 'gsap/all';
import Navbar from './components/navbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'
import Hero from './components/hero.jsx';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black'>
        </div>
    </main>
  )
}

export default App