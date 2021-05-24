/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-24 14:51:06
 * @Description: 
 */
import React from "react";
import { useStore } from "react-redux";
import style from "./areaModal.module.less";
import { AppActions, AppState } from "@/reducers";
import { AreaAction } from "@/reducers/areaState";
const areaModal: React.FC<{}> = () => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().areaState
  store.dispatch({ type: AreaAction.INIT_AREA, payload: { areaList: [{ x: 0, y: 0, desc: "", info: "无月之影", id: 1 }] } })
  return <div className={style['main']}>
    <div className={style['area']}>
      {
        data?.map((arr,index) => {
          return <div className={style['area-line']} key={index}>
            {
              arr.map((area,index) => {
                return <div key={index} className={style['area-item']}>{area?.info}</div>
              })
            }
          </div>
        })
      }
    </div>
  </div>
}
export default areaModal