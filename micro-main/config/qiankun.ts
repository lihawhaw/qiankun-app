export default {
  master: {
    apps: [
      {
        name: 'micro1',
        entry: 'https://qiankun.cdn.lihaha.cn/micro-react/index.html',
        credentials: false,
        microAppProps: {
          autoCaptureError: true,
        },
      },
    ],
  },
}
