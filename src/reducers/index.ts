/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:14:52
 * @Description: 
 */
import { combineReducers } from "redux";
import characterState, { CharacterActions } from "./characterState";
import areaState, { AreaActions } from "./areaState";
import messageState, { MessageActions } from "./messageState";
const rootReducer = combineReducers({
  characterState,
  messageState,
  areaState
})

export type AppState = ReturnType<typeof rootReducer>
export type AppActions = CharacterActions | AreaActions | MessageActions
export default rootReducer
