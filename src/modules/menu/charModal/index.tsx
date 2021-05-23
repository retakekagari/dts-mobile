/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-23 19:41:46
 * @Description: 
 */
/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-21 17:38:10
 * @Description: 
 */
import React from 'react'
import { useStore } from 'react-redux'
import { AppActions, AppState } from "@/reducers";
import style from "./charModal.module.less";
const charModal: React.FC<{}> = () => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState
  if (!data.isInit) {
    return <></>
  }
  return <div>
    
  </div>
}
export default charModal