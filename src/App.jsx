import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './includes/Header';
import MainPage from './components/MainPage';
import './reset.css';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
