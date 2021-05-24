/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-24 14:51:06
 * @Description: 
 */
import React from "react";
import { useStore } from "react-redux";
import style from "./areaModal.module.less";
import { AppActions, AppState } from "@/reducers";
const areaModal: React.FC<{}> = () => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().areaState
  
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