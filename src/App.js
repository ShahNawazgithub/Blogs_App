import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import AddBlog from './Pages/AddBlog'
import Blog from './Pages/Blog'
import Home from './Pages/Home'

export default function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:slug/:id' element={<Blog/>}/>
      <Route path='/add-blog' element={<AddBlog/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>  
    </div>
  )
}
