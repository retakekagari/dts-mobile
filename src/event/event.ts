/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-05-31 10:28:22
 * @Description: 
 */
class BaseEvent<T extends Event>{
  private eventList: { [key in string]: (event: any) => any } = {}
  private prevent: string = ""
  constructor() { }
  private guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  add(func: (event: T) => any) {
    let guid = this.guid();
    this.eventList[guid] = func
    return guid
  }
  set(uuid: string) {
    this.prevent = uuid
  }
  del(uuid: string){
    delete this.eventList[uuid]
  }
  protected run(event: T) {
    Object.keys(this.eventList).forEach(key => {
      if (key != this.prevent) {
        this.eventList[key](event)
      }
    })
    this.prevent = ""
  }
}
export default BaseEvent