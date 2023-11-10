import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Books from './components/Books';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  )
}

export default App
