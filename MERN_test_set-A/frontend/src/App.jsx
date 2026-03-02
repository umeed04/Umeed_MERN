import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit'
import Show from './components/Show'
import Home from './components/Home'
import Add from './components/Add'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/add" element={ <Add /> }></Route>

        <Route path="/edit/:id" element={ <Edit /> }></Route>

        <Route path="/:id" element={ <Show/> }></Route>

      </Routes> 
      <Footer/>   
      </BrowserRouter>
    </>
  )
}

export default App
