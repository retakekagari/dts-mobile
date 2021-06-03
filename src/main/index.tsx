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
import Char from "@/modules/char";
import Menu from "@/modules/menu";
import { CharAction } from "@/reducers/characterState";
import { AreaAction } from "@/reducers/areaState";
import Inventory from "@/modules/inventory";
import { WebSocketInit } from "@/mock/WS-mock";
let main: React.FC<{}> = () => {
  useEffect(()=>{
    const ws=WebSocketInit('dddd',[])
  },[])
  const store=useStore<AppState,AppActions>()
  const state=store.getState()
  store.dispatch({type:CharAction.INIT})
  store.dispatch({ type: AreaAction.INIT_AREA, payload: { areaList: [{ x: 0, y: 0, desc: "", info: "无月之影", id: 1 }] } })
  return <div className={style["main"]}>
    {/* 图片预留地 */}
    <div></div>
    <div className={style['main-body']}>
      <State></State>
      <Char></Char>
      <Menu></Menu>
      <Inventory></Inventory>
    </div>
  </div>
}
main=connect()(main)
export default main