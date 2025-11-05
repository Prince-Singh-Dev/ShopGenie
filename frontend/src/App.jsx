import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/registration'
import Nav from './component/Nav'
import { useContext } from 'react'
import { userdataContext } from './context/UserContext'

function App(){

  let {userData}= useContext(userdataContext) 

  return (
    <>
    { userData && <Nav/>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App