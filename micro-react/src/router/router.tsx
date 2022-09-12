import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import loadable from '@loadable/component'
// import Layout from '@/layout'

const Home = loadable(() => import('@/pages/home'))
const About = loadable(() => import('@/pages/about'))

export default function AppRouter() {
  console.log('__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
  return (
    <BrowserRouter
    // basename={window.__POWERED_BY_QIANKUN__ ? '/micro-react' : '/'}
    >
      <Routes>
        <Route path='/micro-react' element={<Home />} />
        <Route path='/micro-react/about' element={<About />} />
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
