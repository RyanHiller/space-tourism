import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Crew from './pages/Crew/Crew'
import Destination from './pages/Destination/Destination'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Technology from './pages/Technology/Technology'

import * as styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='crew' element={<Crew />} />
            <Route path='destination' element={<Destination />} />
            <Route path='technology' element={<Technology />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
