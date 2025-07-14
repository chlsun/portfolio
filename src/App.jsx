import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './includes/Header';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<h3>main</h3>}/>
      </Routes>
    </>
  )
}

export default App
