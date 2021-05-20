/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-20 14:50:16
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import { connect, useStore } from "react-redux";
import style from "./char.module.less";
import { AppActions,AppState } from "@/reducers";

let char: React.FC<{}> = () => {
  const store=useStore<AppState,AppActions>()
  const data=store.getState().characterState
  if(data.isInit==false){
    return <div className={style['char']}></div>
  }
  return <div className={style['char']}>
    <div className={style['char-body']}></div>
  </div>
}
char=connect()(char)
export default char