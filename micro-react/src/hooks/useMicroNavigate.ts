import {To, useNavigate} from 'react-router-dom'
import {useCallback} from 'react'

export function useMicroNavigate(){
  const navigate = useNavigate()

 return useCallback((to:  string)=>{
   if (window.__POWERED_BY_QIANKUN__) {
     history.pushState(null, to, to)
   } else navigate(to)
 },[])
}
