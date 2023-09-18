import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import EventPage from './pages/EventPage/EventPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CreateEventPage from './pages/CreatePage/CreateEventPage'
import CreateProjectPage from './pages/CreatePage/CreateProjectPage'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import EditPage from './pages/EditPage/EditPage';
import './App.css';
import {UserContextProvider} from "./UserContext";



function App() {

  return (
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/post/:id" element={<PostDetailPage/>}/>
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  </UserContextProvider>

  );
}

export default App;