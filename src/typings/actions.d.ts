/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 14:26:12
 * @Description: 
 */
interface IActionsPayloadMapping{
  [key : string]:any
}

declare type IAction<K extends string,M extends IActionsPayloadMapping> = {
  [key in K]: key extends keyof M?
  {
    type: key
    payload: M[key]
  }:{
    type:key
  }
}[K]