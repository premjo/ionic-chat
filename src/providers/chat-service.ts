import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AppVariables } from "../config/app-variables";
import 'rxjs/add/operator/map';

export class ChatMessage {
  message_id: string;
  from_user_id: string;
  from_user_name: string;
  from_user_avatar: string
  to_user_avatar: string;
  to_user_id: string;
  time: number | string;
  message: string;
  status: string;
}

export class UserInfo {
  id: string;
  name?: string;
  avatar?: string;
}

@Injectable()
export class ChatService {
  userDetails : any;
  constructor(private http: HttpClient,
              private events: Events) {
  }

  mockNewMsg(msg) {

    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    let postParams = {
      messageId: Date.now().toString(),
      userId: this.userDetails._id,
      userName: this.userDetails.firstname,
      userAvatar: ((this.userDetails._id  ==  AppVariables.IT_HELP_DESK_ID)?AppVariables.IT_HELP_DESK_IMG:AppVariables.CHAT_USER_IMG),
      toUserId: (this.userDetails._id  ==  AppVariables.IT_HELP_DESK_ID)?AppVariables.CHAT_USER_ID:AppVariables.IT_HELP_DESK_ID,
      toUserAvatar: ((this.userDetails._id  ==  AppVariables.IT_HELP_DESK_ID)?AppVariables.CHAT_USER_IMG:AppVariables.IT_HELP_DESK_IMG),
      time: Date.now(),
      message: msg.message,
      status: 'success'
    };

    this.http.post(AppVariables.CHAT_SERVICE_URL+'chat', JSON.stringify(postParams)).subscribe((response: Response) => {

        if(response){
                const mockMsg: ChatMessage = {
                message_id: response.data.message_id,
                from_user_id: response.data.from_user_id,
                from_user_name: response.data.from_user_name,
                from_user_avatar : response.data.from_user_avatar,
                to_user_avatar: response.data.to_user_avatar,
                to_user_id: response.data.to_user_id,
                time: response.data.time,
                message: response.data.message,
                status: response.data.status
              };
                this.events.publish('chat:received', mockMsg, Date.now())
        }
    });


  }

  getMsgList(): Observable<ChatMessage[]> {

    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    const msgListUrl =  AppVariables.CHAT_SERVICE_URL+'chat/'+this.userDetails._id+'/'+((this.userDetails._id  ==  AppVariables.IT_HELP_DESK_ID)?AppVariables.CHAT_USER_ID:AppVariables.IT_HELP_DESK_ID);
    return this.http.get<any>(msgListUrl)
    .pipe(map(response => response));
  }

  sendMsg(msg: ChatMessage) {
    return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
    .then(() => this.mockNewMsg(msg));
  }

  getUserInfo(): Promise<UserInfo> {
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    const userInfo: UserInfo = {
      id: this.userDetails._id,
      name: this.userDetails.firstname,
      avatar: ((this.userDetails._id  ==  AppVariables.IT_HELP_DESK_ID)?AppVariables.IT_HELP_DESK_IMG:AppVariables.CHAT_USER_IMG)
    };
    return new Promise(resolve => resolve(userInfo));
  }

}
