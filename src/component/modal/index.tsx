/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-23 19:25:30
 * @Description: 
 */
import React from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.less";
type Props = {
    visible: boolean
    cancel?: () => void
}
const modal: React.FC<Props> = (props) => {
    if (!props.visible) {
        return <></>
    }
    console.log(props.children)
    return createPortal(<div>
        <div className={style['mask']} onClick={() => props.cancel ? props.cancel() : null}></div>
        <div className={style['main']}>
            {props.children?props.children:null}
        </div>
    </div>,
        document.body
    )
}
export default modal