import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from './About';



function AboutPage() {


  return (
    <div>
      <Header />
      <About/>
      <Footer/>
    </div>
  );
}

export default AboutPage;