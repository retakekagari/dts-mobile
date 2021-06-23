/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-23 14:49:31
 * @Description: 
 */
import { useStore } from "@/reducers";
import React from "react";
import style from "./chat.module.less";
const chat:React.FC<{}>=()=>{
  const chatList=useStore().getState().chat
  return <div className={style['main']}>
    {
      chatList.map(message=>{
        return <div className={style['message']}>
          <div className={style['message-name']}>
            {message.name}:
          </div>
          <div className={style['message-content']}>
            {message.content}
          </div>
        </div>
      })
    }
  </div>
}
export default chat