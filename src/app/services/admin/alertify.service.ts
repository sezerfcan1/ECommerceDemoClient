import { Injectable } from '@angular/core';

declare let alertify : any

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }


  message(message:string , messageType:MessageType, position:Position){
    alertify.set('notifier' , 'position' , position)
    alertify[messageType](message,position)
  }

}



export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}



export enum Position{
  topRight = "top-right",
  topLeft = "top-left",
  topCenter = "top-center",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
  bottomCenter = "bottomCenter"
}