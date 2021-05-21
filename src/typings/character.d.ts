/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:28:33
 * @Description: 
 */
declare type CharacterState = {
  hp: number
  vp: number

  maxHP: number
  maxVP: number

  def: number
  att: number

  moreDef: number
  moreAtt: number

  attState: 0 | 1 | 2
  defState: 0 | 1 | 2

  exp: number
  level: number

  money: number

  fight: number
  shoot: number
  arms: number
  throw: number

  kills: number
  angry: number


  equipment: Equipment,

  isInit: true
} | {
  isInit: false
}
declare type Equipment={
  garment: Garment | undefined
  head: Weapon | undefined
  body: Weapon | undefined
  hand: Weapon | undefined
  foot: Weapon | undefined
  accessories: Weapon | undefined
}