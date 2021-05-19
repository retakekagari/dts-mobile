/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:25:30
 * @Description: role base status
 */
export const enum ACT{
  INIT="INIT",
  UPDATE_HP="UPDATE_HP"
}
export interface IActionPayloadMapping  {
  [ACT.UPDATE_HP]: { val: number }
}
export type CharacterActions=IAction<typeof ACT,IActionPayloadMapping>
const roleState = (state: CharacterState = { isInit: false }, action: CharacterActions) => {
  switch (action.type) {
    case ACT.INIT:
      return state
    case ACT.UPDATE_HP:
      return state
    default:
      return state
  }
}



export default roleState