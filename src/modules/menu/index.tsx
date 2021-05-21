/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-21 14:29:59
 * @Description: 
 */
import React from "react";
import { useStore } from "react-redux";
import style from "./menu.module.less";
import { AppActions, AppState } from "@/reducers";
let menu: React.FC<{}> = () => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState
  if (data.isInit == false) {
    return <div className={style['menu']}></div>
  }
  return <div className={style['menu']}>
    <div className={style['menu-item']}>
      <div className={style['menu-item-tempfull']}>
        角色
      </div>
    </div>
    <div className={style['menu-item']}>
      <div className={style['menu-item-tempfull']}>
        地图
      </div>
    </div>
    <div className={style['menu-item']}>
      <div className={style['menu-item-tempfull']}>
        设置
      </div>
    </div>
  </div>
}
export default menu