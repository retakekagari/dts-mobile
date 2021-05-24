/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:14:52
 * @Description: 
 */
import { combineReducers } from "redux";
import characterState,{CharacterActions} from "./characterState";
import areaState,{AreaActions} from "./areaState";
const rootReducer=combineReducers({
  characterState,
  areaState
})

export type AppState=ReturnType<typeof rootReducer>
export type AppActions=CharacterActions |AreaActions
export default rootReducer
