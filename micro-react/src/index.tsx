import './public-path'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { MicroAppProps } from './types/qiankun'
import { App } from './app'

let root: ReactDOM.Root

function render(props: MicroAppProps) {
  const { container } = props
  root = ReactDOM.createRoot(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  )
  console.log('micro-react render props>', props, root)
  console.log('micro-react render document>', document.querySelector('#root'))
  root.render(<App />)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
  console.log('__POWERED_BY_QIANKUN__')
}

export async function bootstrap() {
  console.log('micro-react bootstrap')
}

export async function mount(props: MicroAppProps) {
  console.log('micro-react mount', props)
  render(props)
}

export async function unmount(props: MicroAppProps) {
  console.log('micro-react unmount', props)
  root.unmount()
}
