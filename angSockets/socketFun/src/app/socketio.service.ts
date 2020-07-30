import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  
  socket;
  messages: Subject<{user:string,message:string}>

  constructor() {
    this.messages = new Subject<{user:string,message:string}>()
  }
  
  setupSocketConnection(userName:string){
    this.socket = io(environment.SOCKET_ENDPOINT)
    
    this.socket.emit('hello', userName)
    this.socket.on('handshake', (data)=>{
      console.log('handshake from server: ', data)
    })
    this.socket.on('newMessage', (message)=>{
      //console.log('newMessage from server: ', message)
      this.messages.next(message)
    })
    return this.messages
  }
  sendMessage(user:string,nextMessage: string) {
    this.socket.emit('message',{user:user,message:nextMessage})
  }
}
