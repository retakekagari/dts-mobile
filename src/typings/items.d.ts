/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-19 10:38:24
 * @Description: 
 */
declare const enum equipmentType{
  garment='garment',
  head='head',
  body='body',
  hand='hand',
  foot='foot',
  accessories='accessories'
}

declare interface Items{
  info:string
  type:string
  desc:string
  dura:number
  attr:number
}
declare type Item = Items | null | undefined
declare interface Booster extends Items{
  type:"booster"
  proptypes:Skill[]
}

declare interface Garment extends Items{
  type:"garment"
  proptypes:Skill[]
  subType:equipmentType.garment
}

declare interface Weapon extends Items{
  type:"weapon"
  proptypes:Skill[]
  subType:equipmentType.head|equipmentType.hand|equipmentType.body|equipmentType.foot|equipmentType.accessories
}
