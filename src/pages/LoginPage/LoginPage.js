import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from './Login.js'


function LoginPage() {


  return (
    <div>
      <Header />
        <Login />
      <Footer/>
    </div>
  );
}

export default LoginPage;