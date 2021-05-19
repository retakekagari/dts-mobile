/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-18 16:49:38
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import { connect, useStore } from "react-redux";
import style from "./main.module.less";
import { AppActions,AppState } from "@/reducers";
let main: React.FC<{}> = () => {
  const store=useStore<AppState,AppActions>()
  
  return <div className={style["main"]}>
    <div></div>
  </div>
}
main=connect()(main)
export default main