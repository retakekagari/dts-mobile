/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-21 17:38:10
 * @Description: 
 */
import React from 'react'
import ReactDom from "react-dom";
const test: React.FC<{}> = () => {
  return ReactDom.createPortal(
    <div></div>, 
    document.body
  )
}
export default test