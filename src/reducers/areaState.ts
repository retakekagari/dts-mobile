import { range } from "rxjs"

/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-24 15:35:07
 * @Description: 
 */
export const enum AreaAction {
  INIT_AREA = "INIT_AREA",
  UPDATE_AREA="UPDATE_AREA"
}
export interface IActionPayloadMapping {
  [AreaAction.INIT_AREA]:{areaList:AreaList}
}
export type AreaActions = IAction<AreaAction, IActionPayloadMapping>

const mapState = (state: (Areas | null)[][] = [], action: AreaActions) => {
  switch (action.type){
    case AreaAction.INIT_AREA:
      let temp:null[]=[]
      range(1,5).forEach(()=>{
        temp.push(null)
      })
      range(1,5).forEach(()=>{
        state.push(([] as null[]).concat(temp))
      })
      action.payload.areaList.forEach(item=>{
        state[item.y][item.x]=item
      })
      return state
    default:
      return state
  }
}



export default mapState