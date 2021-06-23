import { fromEvent } from "rxjs";

/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-15 11:59:48
 * @Description: 
 */
const globalClick=fromEvent<MouseEvent>(document.body,'click')

export {
  globalClick
}