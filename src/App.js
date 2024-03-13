import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "./layout/header/Header"
import Footer from './layout/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/footer' element={<Footer />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App