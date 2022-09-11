import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      Micro React Home Page
      <Link to='/about'>About</Link>
    </div>
  )
}
