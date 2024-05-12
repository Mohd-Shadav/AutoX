import React from 'react'
import './App.css'
import HeadLogo from './components/HeadLogo'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import Footer from './components/Footer'
import News from './components/News'
import Trending from './components/Trending'
import Reviews from './components/Reviews'

function App() {
  return (
    <div>
      
      <HeadLogo/>
      <Navbar/>
    
      <Carousel/>
      
      <Cards/>

      <News/>
      <Trending/>
      <Reviews/>
      <Footer/>

    </div>
  )
}

export default App