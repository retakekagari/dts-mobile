/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-01 09:16:38
 * @Description: 
 */
// type PropBase<Payload extends PayloadBase, T extends Payload['type']> = Extract<Payload, { type: T }>
export type Props<T extends Message['type']> = Omit<Extract<Message, { type: T }>,'type'>
