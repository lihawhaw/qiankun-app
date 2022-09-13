import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import About from '@/pages/about'
// import loadable from '@loadable/component'
// import Layout from '@/layout'

// const Home = (() => import('@/pages/home'))
// const About = loadable(() => import('@/pages/about'))

export default function AppRouter() {
  console.log('AppRouter', window.__POWERED_BY_QIANKUN__)
  return (
    <BrowserRouter
    basename={window.__POWERED_BY_QIANKUN__ ? '/micro-react' : '/'}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
