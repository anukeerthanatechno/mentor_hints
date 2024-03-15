import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "./layout/header/Header"
import Footer from './layout/footer/Footer'
import Membership from './component/Membership'
import Learn from './component/Learn'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App