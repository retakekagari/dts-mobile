/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-18 16:49:38
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import { connect, useStore } from "react-redux";
import style from "./main.module.less";
import { AppActions,AppState } from "@/reducers";
import State from "@/modules/state";
let main: React.FC<{}> = () => {
  const store=useStore<AppState,AppActions>()
  const state=store.getState()
  store.dispatch({type:'INIT'})
  return <div className={style["main"]}>
    {/* 图片预留地 */}
    <div></div>
    <div className={style['main-body']}>
      <State></State>
    </div>
  </div>
}
main=connect()(main)
export default main