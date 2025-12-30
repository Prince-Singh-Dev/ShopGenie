import React, { useContext } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { adminDataContext } from './context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
    <ToastContainer />
     {!adminData ? <Login/> : <>   
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/lists' element={<List/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </>
      }
    </>
  )
}

export default App
