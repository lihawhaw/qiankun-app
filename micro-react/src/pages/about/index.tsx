import { microPush } from '@/utils'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useMicroNavigate} from '@/hooks/useMicroNavigate'

export default function AboutPage() {
  const navigate = useMicroNavigate()

  return (
    <div>
      Micro React About Page
      <div>
        <Link to='/'>micro Home</Link>
      </div>
      <div>
        <a onClick={() => navigate('/')}>home</a>
      </div>
    </div>
  )
}
