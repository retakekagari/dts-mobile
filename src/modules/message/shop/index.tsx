/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-31 16:55:47
 * @Description: 
 */
import { AppActions, AppState } from "@/reducers";
import React from "react";
import { useStore } from "react-redux";
import { Props } from "../messageModule";
import style from "./shop.module.less";
const shop:React.FC<Props<'shop'>>=(props)=>{
  const store=useStore<AppState,AppActions>()
  return <div className={style['main']}>
    {
      props.message.shopList.map(item=>{
        return <div>{`${item.info}*${item.price}`}</div>
      })
    }
  </div>
}
export default shop