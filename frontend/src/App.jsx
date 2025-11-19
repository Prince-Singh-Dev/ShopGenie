import React from 'react'
import { Route , Routes } from 'react-router-dom'
import { Navigate, useLocation } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/registration'
import Nav from './component/Nav'
import { useContext } from 'react'
import { userdataContext } from './context/UserContext'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'

function App(){

  let {userData}= useContext(userdataContext) 
  let location = useLocation()

  return (
    <>
    { userData && <Nav/>}
      <Routes>

        <Route path='/login' 
        element={userData ? (<Navigate to={location.state?.from || "/"}/> )
        : (<Login/>)
      }/>

        <Route path='/signup' 
        element={userData ? (<Navigate to={location.state?.from || "/"}/> )
        : (<Registration/>)}/>

        <Route path='/' 
        element={userData ? <Home/> : <Navigate to="/login" state={{from : location.pathname}}/>}/>

        <Route path='/about' 
        element={userData ? <About/> : <Navigate to="/login" state={{from : location.pathname}}/>}/>

        <Route path='/collection' 
        element={userData ? <Collections/> : <Navigate to="/login" state={{from : location.pathname}}/>}/>

        <Route path='/product' 
        element={userData ? <Product/> : <Navigate to="/login" state={{from : location.pathname}}/>}/>

        <Route path='/contact' 
        element={userData ? <Contact/> : <Navigate to="/login" state={{from : location.pathname}}/>}/>

      </Routes>
    </>
  )
}

export default App