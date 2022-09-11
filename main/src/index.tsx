import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import AppRouter from './router/router'
import { registerMicroApps, start } from 'qiankun'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<AppRouter />)
}

registerMicroApps([
  {
    name: 'micro-react',
    entry:
      'https://qiankun-1256651264.cos-website.ap-shanghai.myqcloud.com/micro-react',
    container: '#root',
    activeRule: '/micro-react',
  },
])

start()
