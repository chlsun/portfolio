import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './includes/Header';
import MainPage from './components/MainPage';
import './reset.css';
import ProjectDetail from './components/projects/project-detail/ProjectDetail';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
