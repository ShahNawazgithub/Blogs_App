import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import AddBlog from './Pages/AddBlog'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import BlogListing from './Pages/BlogListing'
import Editblogs from './Pages/Editblogs'

export default function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/admin-create-blog' element={<AddBlog />} />
          <Route path='/admin' element={<BlogListing />} />
          <Route path='/edit-blog/:id' element={<Editblogs />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}
