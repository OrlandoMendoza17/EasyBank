import React from 'react'
import Hero from './components/sections/Hero'
import WhyEasybank from './components/sections/WhyEasybank';
import Header from './components/widgets/Header';

const App = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <WhyEasybank/>  
    </main>
  )
}

export default App;