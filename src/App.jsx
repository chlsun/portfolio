import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './includes/Header';
import MainPage from './components/MainPage';
import './reset.css';
import ProjectDetail from './components/projects/project-detail/ProjectDetail';

function App() {

  const location = useLocation();
  const hideHeader = location.pathname.startsWith('/projects/');

  return (
    <>
      
      {!hideHeader && 
        <>
          <div style={{height : "80px"}}/>
          <Header />
        </>
      }
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
