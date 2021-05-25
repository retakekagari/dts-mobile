/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-25 09:29:01
 * @Description: 
 */
import React, { ReactNodeArray } from "react";
import { useStore } from "react-redux";
import style from "./inventory.module.less";
import { AppState, AppActions } from "@/reducers";
import Item from "./item";
const inventory: React.FC<{}> = () => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState
  if (!data.isInit) {
    return <></>
  }
  return <div className={style['main']}>
    <div className={style['item-list']}>
      {
        data.inventory.map((item, index) => {
          return <div className={style['item']} key={index}><Item>{item?.info}</Item></div>
        })
      }
    </div>
  </div>
}
export default inventory