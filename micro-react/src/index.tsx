import './public-path'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import AppRouter from './router/router'
import { MicroAppProps } from './types/qiankun'

let root: ReactDOM.Root

function render(props: MicroAppProps) {
  const { container } = props
  root = ReactDOM.createRoot(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  )
  console.log('micro-react', props)
  root.render(<AppRouter />)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: MicroAppProps) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props: MicroAppProps) {
  const { container } = props
  root.unmount()
}
