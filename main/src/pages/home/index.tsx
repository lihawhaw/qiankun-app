import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      HomePage
      <Link to='/about'>About</Link>
      <br />
      <Link to='/micro-react/about'>micro About</Link>
    </div>
  )
}
