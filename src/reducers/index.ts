/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:14:52
 * @Description: 
 */
import { combineReducers } from "redux";
import characterState, { CharacterActions } from "./characterState";
import areaState, { AreaActions } from "./areaState";
import messageState, { MessageActions } from "./messageState";
import chat, { ChatActions } from "./chat";
import { useStore as us } from "react-redux";
const rootReducer = combineReducers({
  characterState,
  messageState,
  areaState,
  chat
})

export const useStore = () => {
  return us<AppState, AppActions>()
}
export type AppState = ReturnType<typeof rootReducer>
export type AppActions = CharacterActions | AreaActions | MessageActions | ChatActions
export default rootReducer
