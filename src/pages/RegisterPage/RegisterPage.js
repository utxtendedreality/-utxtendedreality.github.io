import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Register from './Register'


function RegisterPage() {


  return (
    <div>
      <Header />
        <Register />
      <Footer/>
    </div>
  );
}

export default RegisterPage;