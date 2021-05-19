/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:38:24
 * @Description: 
 */
declare interface Items{
  type:string
  desc:string
  dura:number
  attr:number
}
declare interface Booster extends Items{
  type:"booster"
  proptypes:Skill[]
}

declare interface Garment extends Items{
  type:"garment"
  proptypes:Skill[]
}

declare interface Weapon extends Items{
  type:"weapon"
  proptypes:Skill[]
  position:"head"|"hand"|"body"|"foot"|"accessories"
}
