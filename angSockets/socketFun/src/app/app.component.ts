import { Component } from '@angular/core';
import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socketFun';
  userName: string;
  connected: boolean
  nextMessage: string;
  messages: Array<string>
  constructor(private socketService: SocketioService){}

  ngOnInit(){
    this.userName=''
    this.messages = []
    this.connected = false;
  }

  connect(){
    if(this.userName.length){
      console.log('running connect')
      this.socketService.setupSocketConnection(this.userName).subscribe(message =>{
        //console.log('message changed',message)
        this.messages.push(`${message.user} : ${message.message}`)
      })
      this.nextMessage =''
      this.connected = true;
    }
    
  }

  sendMessage(){
    this.socketService.sendMessage(this.userName,this.nextMessage)
    this.nextMessage = ''
  }
}
