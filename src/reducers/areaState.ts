/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-24 15:35:07
 * @Description: 
 */
export const enum AreaAction {
  INIT_AREA = "INIT_AREA",
  UPDATE_AREA="UPDATE_AREA"
}
export interface IActionPayloadAreaping {
  [AreaAction.INIT_AREA]:{areaList:AreaList}
}
export type AreaActions = IAction<AreaAction, IActionPayloadAreaping>

const mapState = (state: (Areas | undefined)[][] = [], action: AreaActions) => {
  switch (action.type){
    case AreaAction.INIT_AREA:
      for(let i=0;i<5;i++){
        let temp=[]
        for(let i=0;i<5;i++){
          temp.push(undefined)
        }
        state.push(temp)
      }
      action.payload.areaList.forEach(item=>{
        state[item.y][item.x]=item
      })
      return state
    default:
      return state
  }
}



export default mapState