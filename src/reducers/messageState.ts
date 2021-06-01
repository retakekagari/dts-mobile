/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-01 09:48:06
 * @Description: 
 */
export const enum MessageAction {
  UPDATE_MESSAGE = "INIT_MESSAGE",
}
export interface IActionPayloadMapping {
  [MessageAction.UPDATE_MESSAGE]:{message:Message}
}
export type MessageActions = IAction<MessageAction, IActionPayloadMapping>

const messageState = (state: Message={type:null}, action: MessageActions) => {
  switch (action.type){
    case MessageAction.UPDATE_MESSAGE:
      state=action.payload.message
      return state
    default:
      return state
  }
}

export default messageState