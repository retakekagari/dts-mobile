/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-20 13:58:41
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import { connect, useStore } from "react-redux";
import style from "./state.module.less";
import { AppActions,AppState } from "@/reducers";

let state: React.FC<{}> = () => {
  const store=useStore<AppState,AppActions>()
  const data=store.getState().characterState
  if(data.isInit==false){
    return <div className={style['state']}></div>
  }
  return <div className={style['state']}>
    <div className={style['state-hp-tube']}>
      <div className={style['state-hp']} style={{width:`${data.hp/data.maxHP*100}%`}}></div>
      {`${data.hp}/${data.maxHP}`}
    </div>
    <div className={style['state-vp-tube']}>
      <div className={style['state-vp']} style={{width:`${data.hp/data.maxHP*100}%`}}></div>
      {`${data.vp}/${data.maxVP}`}
    </div>
    <div className={style['state-buff-list']}></div>
  </div>
}
state=connect()(state)
export default state