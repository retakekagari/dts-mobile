/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-03 10:49:19
 * @Description: 
 */
namespace WebSocketMock{
  export type ReadyState=0|1|2|3
}
class WebSocketMock extends EventTarget {
  private clock:number
  constructor(url:string,protocol:string[]|string){
    super()
    this.url=url
    this.clock=setTimeout(()=>this.run(), 1000);
  }
  public binaryType: BinaryType = "blob"
  public readonly bufferdAmount: number = 0
  public readonly extensions: string = ""
  public onclose: ((this: WebSocketMock, ev: CloseEvent) => any) | null = null
  public onerror: ((this: WebSocketMock, ev: Event) => any) | null = null;
  public onmessage: ((this: WebSocketMock, ev: MessageEvent) => any) | null = null;
  public onopen: ((this: WebSocketMock, ev: Event) => any) | null = null;
  public readonly protocol: string="";

  public readonly readyState: WebSocketMock.ReadyState=3;

  public readonly url: string="";

  close(code?: number, reason?: string){
    clearTimeout(this.clock)
    this.onclose?.(new CloseEvent("",undefined))
  };

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView){

  };

  public readonly CLOSED: WebSocketMock.ReadyState=3;
  public readonly CLOSING: WebSocketMock.ReadyState=2;
  public readonly CONNECTING: WebSocketMock.ReadyState=0;
  public readonly OPEN: WebSocketMock.ReadyState=1;

  private run(){
    this.clock=setTimeout(()=>{
      this.run()
    }, 1000);
  }
}

function WebSocketInit(url:string,protocol:string[]|string){
  if(process.env.NODE_ENV==="development"){
    return new WebSocketMock(url,protocol)
  }else{
    return new WebSocket(url,protocol)
  }
}
export {
  WebSocketInit
}