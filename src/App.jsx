import React from 'react';
import { CTA, Brand, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatViki } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatViki />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
