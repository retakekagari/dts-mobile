

/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-06-03 10:49:19
 * @Description: 
 */
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

  public readonly readyState: 0|1|2|3=3;

  public readonly url: string="";

  close(code?: number, reason?: string){
    clearTimeout(this.clock)
    this.onclose?.(new CloseEvent("",undefined))
  };

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView){

  };

  public readonly CLOSED: number=3;
  public readonly CLOSING: number=2;
  public readonly CONNECTING: number=0;
  public readonly OPEN: number=1;

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