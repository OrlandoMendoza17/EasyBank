import React from 'react'
import Header from './components/widgets/Header';
import Hero from './components/sections/Hero'
import WhyEasybank from './components/sections/WhyEasybank';
import Articles from './components/sections/Articles'; 
import Footer from './components/widgets/Footer';

const App = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <WhyEasybank/>
      <Articles/>
      <Footer/>
    </main>
  )
}

export default App;