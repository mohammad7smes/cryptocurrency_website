import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import MarketUpdate from './Components/MarketUpdate';
import HowItsWork from './Components/HowItsWork';
import WhatIsCryptex from './Components/WhatIsCryptex';
import OurApp from './Components/OurApp';
import Footer from './Components/Footer';

const App = () => {
  const [app,ShowApp] = useState(true)
 
  return (
    <div dir='rtl'>
        <Navbar />
        <Hero />
        <MarketUpdate />
        <HowItsWork />
        <WhatIsCryptex />
        <OurApp/>
        <Footer/>
        
        <div className={`${app ? "block" : "hidden"} fixed bottom-2 w-[100%] bg-blue-700 md:w-[50%] flex justify-around px-3 py2 rounded-md `}>
          <div className='w-[50%]'>
            <button type='button' className={` text-white rounded-lg`} onClick={()=>ShowApp(!app)}>&times;</button>
            <p className='text-gray-300'>در برنامه اندرویدی ما تجربه کاملا متفاوت را حس کن! همین الآن دریافتش کن</p>
          </div>
          <div className='w-[20%] mt-2'>
            <button type='button' className='bg-blue-800 hover:bg-blue-900 p-3  focus:border focus:border-red-900 text-gray-300'>دریافت کریپتکس</button>
          </div>
        </div>
        
        
    </div>
  )

}

export default App
