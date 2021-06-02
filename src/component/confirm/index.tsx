/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-01 16:18:49
 * @Description: 
 */
import React, { useEffect, useState } from "react";
import style from "./confirm.module.less";
import Modal from "@/component/modal";
type Props = {
  visible?: boolean
  cancel?: () => any
  confirm?: () => any
}
const confirm: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(props.visible || false)
  }, [props.visible])
  function handleConfirm() {
    props.cancel?.()
    setVisible(false)
  }
  function handleCancel() {
    props.confirm?.()
    setVisible(false)
  }
  return <Modal visible={visible}>
    <div className={style['main']}>
      {props.children}
    </div>
    <div className={style['button']}>
      <div className={style['cancel-button']}>取消</div>
      <div className={style['confirm-button']}>确定</div>
    </div>
  </Modal>
}
export default confirm