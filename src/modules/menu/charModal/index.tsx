/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-23 19:41:46
 * @Description: 
 */
import React from 'react'
import { useStore } from 'react-redux'
import { AppActions, AppState } from "@/reducers";
import style from "./charModal.module.less";
import { attState, defState } from "@/utils/state";
import { equipmentName } from "@/utils/equipment";
type Props = {
  close?: () => void
}
const charModal: React.FC<Props> = (props) => {
  const store = useStore<AppState, AppActions>()
  const data = store.getState().characterState
  if (!data.isInit) {
    return <></>
  }
  const equipment = data.equipment
  const equipments = Object.keys(equipmentName)
  return <div className={style['main']}>
    <div className={style['close']} onClick={props.close}></div>
    <div className={style['content']}>
      <table className={style['char-table']}>
        <tbody>
          <tr>
            <td colSpan={2} rowSpan={3}></td>
            <td>姓名</td>
            <td colSpan={2}>{`${data.name}/lv.${data.level}`}</td>
            <td>钱</td>
            <td colSpan={2}>{data.money}</td>
          </tr>
          <tr>
            <td>攻击</td>
            <td colSpan={2}>{`${data.att}+${data.moreAtt}`}</td>
            <td>防御</td>
            <td colSpan={2}>{`${data.def}+${data.moreDef}`}</td>
          </tr>
          <tr>
            <td>生命值</td>
            <td colSpan={2}>{`${data.hp}/${data.maxHP}`}</td>
            <td>活力值</td>
            <td colSpan={2}>{`${data.vp}/${data.maxVP}`}</td>
          </tr>
          <tr>
            <td>基础姿态</td>
            <td>{attState[data.attState]}</td>
            <td>应战策略</td>
            <td>{defState[data.defState]}</td>
            <td>怒气</td>
            <td>{data.angry}</td>
            <td>击杀数</td>
            <td>{data.kills}</td>
          </tr>
          <tr>
            <td>投熟</td>
            <td>{data.throw}</td>
            <td>斩熟</td>
            <td>{data.arms}</td>
            <td>射熟</td>
            <td>{data.shoot}</td>
            <td>殴熟</td>
            <td>{data.fight}</td>
          </tr>
          <tr>
            <td colSpan={8}>
              装备
            </td>
          </tr>
          <tr className={style['sub-title']}>
            <th>种类</th>
            <th colSpan={2}>名称</th>
            <th colSpan={2}>属性</th>
            <th>效果</th>
            <th>耐久</th>
            <th></th>
          </tr>
          {
            equipments.map((item, index) => {
              return <tr key={index}>
                {
                  equipment[item as keyof Equipment] ?
                    <>
                      <th>
                        {equipment[item as keyof Equipment]?.type}
                      </th>
                      <th colSpan={2}>
                        {equipment[item as keyof Equipment]?.info}
                      </th>
                      <th colSpan={2}>
                        {equipment[item as keyof Equipment]?.proptypes}
                      </th>
                      <th>
                        {equipment[item as keyof Equipment]?.attr}
                      </th>
                      <th>
                        {equipment[item as keyof Equipment]?.dura}
                      </th>
                      <th>
                        <button>使用</button>
                      </th>
                    </>

                    : <>
                      <th>
                        {equipmentName[item as keyof typeof equipmentName]}
                      </th>
                      <th colSpan={2}>
                        --
                    </th>
                      <th colSpan={2}>
                        --
                    </th>
                      <th>
                        --
                    </th>
                      <th>
                        --
                    </th>
                      <th>

                      </th>
                    </>
                }
              </tr>
            })
          }
          <tr>
            <td colSpan={8}>
              背包
            </td>
          </tr>
          <tr className={style['sub-title']}>
            <th>种类</th>
            <th colSpan={2}>名称</th>
            <th colSpan={2}>属性</th>
            <th>效果</th>
            <th>耐久</th>
            <th></th>
          </tr>
          {
            data.inventory.map((item,index) => {
              return <tr key={index}>
                <th>
                  {item.type}
                </th>
                <th colSpan={2}>
                  {item.info}
                </th>
                <th colSpan={2}>
                  {item.desc}
                </th>
                <th>
                  {item.attr}
                </th>
                <th>
                  {item.dura}
                </th>
                <th>
                  <button>使用</button>
                </th>
              </tr>
            })
          }


        </tbody>
      </table>
    </div>

  </div>
}
export default charModal