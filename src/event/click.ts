/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-31 10:25:25
 * @Description: 
 */
import BaseEvent from "./event";
class GlobalClick extends BaseEvent<MouseEvent>{
  constructor(private element:HTMLElement){
    super()
    this.install()
  }
  private install() {
    this.element.addEventListener('click', (event) => {
      this.run(event)
    })
  }
}
let globalClick: GlobalClick
const startGClick = (element:HTMLElement) => {
  globalClick = new GlobalClick(element)
}
const getGClick = () => {
  return globalClick
}
export { startGClick, getGClick }