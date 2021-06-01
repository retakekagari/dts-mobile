/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-01 09:17:00
 * @Description: 
 */
declare interface BaseMessage {
  type: string | null
  message?: unknown
}
declare interface NullMessage extends BaseMessage {
  type: null
}
declare interface ShopMessage extends BaseMessage {
  type: 'shop'
  message: {
    content: string
    shopList: Items[]
  }
}
declare interface FightMessage extends BaseMessage {
  type: 'fight'
  message: {
    fightList: FightInfo[]
  }
}

declare type Message = NullMessage | ShopMessage | FightMessage
