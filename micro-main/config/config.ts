import routes from './routes'
import qiankun from './qiankun'

export default {
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/qiankun'],
  routes,
  qiankun,
};
