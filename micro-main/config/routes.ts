/**
 * @type {import('umi').IRoute[]}
 */
export  default [
  {
    path: '/',
    component: '@/layouts/index.tsx',
    routes: [
      {
        path: '/',
        component: '@/pages/index.tsx',
      },
      {
        path: '/micro-react/*',
        component: '@/pages/micro-react/index.tsx',
        // microApp: 'micro1',
        // microAppProps: {
        //   errorBoundary: (error: any) => console.log('errorBoundary|error>', error)
        // }
      },
      {
        path: '/baseline',
        component: '@/pages/baseline/index.tsx',
      }
    ],
  },
]
