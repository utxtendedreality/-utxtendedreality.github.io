import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from "./Home"


function HomePage() {


  return (
    <div>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default HomePage;