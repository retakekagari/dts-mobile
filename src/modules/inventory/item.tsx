/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-25 09:43:44
 * @Description: 
 */
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { useStore } from "react-redux";
import style from "./item.module.less";
import { AppState, AppActions } from "@/reducers";
import { getEvents } from "@/event"
import { filter } from "rxjs/operators";
type Props = {
  useItem?: (item: Item) => any
  item?: Item
}
const item: React.FC<Props> = (props) => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState

  const [visible, setVisible] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  function useItem(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    event.preventDefault()

    props.useItem?.(props.item!)
    setVisible(false)
  }
  useEffect(() => {
    const id = getEvents().globalClick
      .pipe(filter(event => event.target != divRef.current))
      .subscribe(() => setVisible(false))
    return () => id.unsubscribe()
  }, [])
  function openMessage() {
    setVisible(true)
  }
  return <div className={style['main']}>
    {
      props.children ? <div ref={divRef} className={style['content']} onClick={openMessage}>
        {props.children}
      </div> : null
    }
    {visible ? <div className={style['message']} onClick={(e) => useItem(e)}>使用</div> : null}
  </div>
}
export default item