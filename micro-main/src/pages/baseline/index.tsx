import { MicroAppWithMemoHistory } from "umi";

export default function BaselinePage(){
  return <div>
    baseline page
    <MicroAppWithMemoHistory name="micro1" baseline='/baseline'  url='/micro-react/about' />

    <div id='root'>
      <MicroAppWithMemoHistory name="micro1"  url='/about' autoCaptureError />
    </div>
  </div>
}
