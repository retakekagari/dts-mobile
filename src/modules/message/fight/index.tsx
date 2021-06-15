/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-15 10:00:14
 * @Description: 
 */
import { AppActions, AppState } from "@/reducers";
import React from "react";
import { useStore } from "react-redux";
import { Props } from "../messageModule";
import style from "./fight.module.less";
const message:React.FC<Props<'fight'>>=(props)=>{
  const store=useStore<AppState,AppActions>()
  return <div className={style['main']}>
    {
      props.message.fightList.map(item=>{
        return <div>{`${item.attacked}*${item.fightType}`}</div>
      })
    }
  </div>
}
export default message