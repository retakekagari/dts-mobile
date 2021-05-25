/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-25 09:43:44
 * @Description: 
 */
import React, { useState } from "react";
import { useStore } from "react-redux";
import style from "./item.module.less";
import { AppState, AppActions } from "@/reducers";
const item: React.FC<{}> = (props) => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState
  const [visible,setVisible]=useState(false)
  function closeMessage(){
    
  }
  return <div className={style['main']} onClick={()=>setVisible(true)}>
    {props.children}
    {visible?<div className={style['message']}>使用</div>:null}
  </div>
}
export default item