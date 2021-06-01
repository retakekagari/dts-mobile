/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-01 16:18:49
 * @Description: 
 */
import React from "react";
import style from "./confirm.module.less";
import Modal from "@/component/modal";
type Props = {
  visible: boolean
  cancel?: () => any
}
const confirm: React.FC<Props> = (props) => {
  return <Modal visible={props.visible}>
    <div className={style['main']}>
      {props.children}
    </div>
    <div className={style['button']}>
      <div className={style['cancel-button']}></div>
      <div className={style['confirm-button']}></div>
    </div>
  </Modal>
}
export default confirm