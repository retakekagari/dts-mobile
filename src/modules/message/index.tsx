/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-31 16:21:47
 * @Description: 
 */
import React from "react";
import { useStore } from "react-redux";
import { AppState,AppActions  } from "@/reducers";
import style from "./message.module.less";
import Shop from "./shop";

const message:React.FC<{}>=()=>{
  const store=useStore<AppState,AppActions>()

  return <div className={style['main']}>
    <div className={style['message']}>
      <Shop></Shop>
    </div>
  </div> 
}
export default message