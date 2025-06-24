import gsap from 'gsap';
import {ScrollTrigger , SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>App</div>
  )
}

export default App