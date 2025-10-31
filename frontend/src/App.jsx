import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/registration'

function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App