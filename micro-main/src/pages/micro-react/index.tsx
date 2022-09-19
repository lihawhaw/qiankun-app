import {MicroAppWithMemoHistory, Outlet} from 'umi'

export default function MicroReactPage(){
  return <div>
    <MicroAppWithMemoHistory name="micro1"  url='/' />
    {/*<Outlet />*/}
  </div>
}
