import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { registerMicroApps, start } from 'qiankun'
import { App } from './app'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}

registerMicroApps([
  {
    name: 'micro-react',
    entry: 'https://qiankun-1256651264.cos-website.ap-shanghai.myqcloud.com/micro-react/index.html',
    container: '#root',
    activeRule: '/micro-react',
  },
])

start()
