/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:14:52
 * @Description: 
 */
import { combineReducers } from "redux";
import characterState,{CharacterActions} from "./characterState";

const rootReducer=combineReducers({
  characterState
})

export type AppState=ReturnType<typeof rootReducer>
export type AppActions=CharacterActions
export default rootReducer
