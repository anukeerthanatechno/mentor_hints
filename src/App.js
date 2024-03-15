import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "./layout/header/Header"
import Footer from './layout/footer/Footer'
import Home from './pages/Home'
import "./comman.css"
import Membership from './component/Membership'
import Learn from './component/Learn'

const App = () => {
  return (
    <>
      <Header />
      <Membership />
      <Learn />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App