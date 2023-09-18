import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Event from './Event'
import PostHeader from '../../components/PostHeader';


function EventPage() {


  return (
    <div>
      <Header />
        <PostHeader type="Events"/>
        <Event />
      <Footer/>
    </div>
  );
}

export default EventPage;