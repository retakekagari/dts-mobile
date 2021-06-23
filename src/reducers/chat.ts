/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-23 14:55:01
 * @Description: 
 */
export const enum ChatAction {
  ADD_MESSAGE = "ADD_MESSAGE",
}
export interface IChatActionPayloadMapping {
  [ChatAction.ADD_MESSAGE]:{message:string}
}
export type ChatActions = IAction<ChatAction, IChatActionPayloadMapping>

const messageState = (state: ChatMessageList=[], action: ChatActions) => {
  switch (action.type){
    case ChatAction.ADD_MESSAGE:
      state.push({
        content:action.payload.message,
        time:+new Date(),
        name:""
      })
      return state
    default:
      return state
  }
}

export default messageState