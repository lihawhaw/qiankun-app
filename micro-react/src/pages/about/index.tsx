import { microPush } from '@/utils'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div>
      Micro React About Page
      <Link to='/'>micro Home</Link>
      <a onClick={() => microPush('/')}>home</a>
    </div>
  )
}
