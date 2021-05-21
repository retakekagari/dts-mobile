/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-20 14:50:16
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import { connect, useStore } from "react-redux";
import style from "./char.module.less";
import { AppActions, AppState } from "@/reducers";

let char: React.FC<{}> = () => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState
  if (data.isInit == false) {
    return <div className={style['char']}></div>
  }
  return <div className={style['char']}>
    <div className={style['char-base-proptypes']}>
      {`攻：${data.att}+${data.moreAtt}`}
    </div>
    <div className={style['char-base-proptypes']}>
      {`防：${data.def}+${data.moreDef}`}
    </div>
    <div className={style['char-base-proptypes']}>
      {`钱：${data.money}`}
    </div>
    <div className={style['char-inventory']}>
      <div className={style['char-items']}>
        <div className={style['char-items-info']}>
          {data.equipment.garment ? data.equipment.garment.info : '武器'}
        </div>
      </div>
      <div className={style['char-items']}>
        <div className={style['char-items-info']}>
          {data.equipment.head ? data.equipment.head.info : '头部装备'}
        </div>
      </div>
      <div className={style['char-items']}>
        <div className={style['char-items-info']}>
          {data.equipment.hand ? data.equipment.hand.info : '身体装备'}
        </div>
      </div>
      <div className={style['char-items']}>
        <div className={style['char-items-info']}>
          {data.equipment.body ? data.equipment.body.info : '手臂装备'}
        </div>
      </div>
      <div className={style['char-items']}>
        <div className={style['char-items-info']}>
          {data.equipment.foot ? data.equipment.foot.info : '脚部装备'}
        </div>
      </div>
      <div className={style['char-items']}>
        <div className={style['char-items-info']}>
          {data.equipment.accessories ? data.equipment.accessories.info : '饰品'}
        </div>
      </div>
    </div>
    <div className={style['char-proptypes']}>
      <div className={style['char-proptypes-item']}>
        <div className={style['title']}>投:</div>
        <div className={style['content']}>{data.throw}</div>
      </div>
      <div className={style['char-proptypes-item']}>
        <div className={style['title']}>殴:</div>
        <div className={style['content']}>{data.fight}</div>
      </div>
      <div className={style['char-proptypes-item']}>
        <div className={style['title']}>斩:</div>
        <div className={style['content']}>{data.arms}</div>
      </div>
      <div className={style['char-proptypes-item']}>
        <div className={style['title']}>射:</div>
        <div className={style['content']}>{data.shoot}</div>
      </div>
      <div className={style['char-proptypes-item']}>
        <div className={style['title']}>杀:</div>
        <div className={style['content']}>{data.kills}</div>
      </div>
      <div className={style['char-proptypes-item']}>
        <div className={style['title']}>怒:</div>
        <div className={style['content']}>{data.angry}</div>
      </div>
    </div>
    <div className={style['char-exp-tube']}>
      <div className={style['char-exp']} style={{ width: `${data.exp / (data.level + 1) / (data.level + 1) / 9 * 100}%` }}></div>
      {`${data.exp}/${(data.level + 1) * (data.level + 1) * 9}`}
    </div>
  </div>
}
char = connect()(char)
export default char