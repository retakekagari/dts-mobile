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
      const base:CharacterState={
        isInit:true,
        hp:400,
        maxHP:400,
        vp:400,
        maxVP:400,
        def:10,
        att:10,

        moreDef:10,
        moreAtt:0,

        attState:0,
        defState:0,

        exp:0,
        level:0,

        money:100,

        fight:1,
        shoot:1,
        arms:1,
        throw:1,
      
        kills:0,
        angry:0
      }
      state=base
      return state
    case ACT.UPDATE_HP:
      return state
    default:
      return state
  }
}



export default roleState