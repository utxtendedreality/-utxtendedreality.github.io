import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Edit from './Edit'


function EditPage() {


  return (
    <div>
      <Header />
        <Edit />
      <Footer/>
    </div>
  );
}

export default EditPage;


