import { Component } from '@angular/core';
import { IonicPage, NavController, App  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {LoginPage} from '../login/login';
import { AppVariables } from "../../config/app-variables";
import '../../assets/js/widget';

declare var fcWidget: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  userDetails : any;
  responseData: any;

  userPostData = {"user_id":"","token":""};

  toUser : {toUserId: string, toUserName: string,toUserImg: string};

  constructor(public navCtrl: NavController, public authService:AuthServiceProvider, public app: App ) {

    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    this.userPostData.user_id = this.userDetails._id;
    this.userPostData.token = this.userDetails.token;

    if( this.userPostData.user_id ==  AppVariables.IT_HELP_DESK_ID ){

      this.toUser = {
      toUserId: AppVariables.CHAT_USER_ID,
      toUserName:AppVariables.CHAT_USER_NAME,
      toUserImg : AppVariables.CHAT_USER_IMG
      }

    }else{

      this.toUser = {
      toUserId: AppVariables.IT_HELP_DESK_ID,
      toUserName:AppVariables.IT_HELP_DESK_NAME,
      toUserImg : AppVariables.IT_HELP_DESK_IMG
      }

    }

  }


  backToWelcome(){
    const root = this.getRootNav();
     root.popToRoot();
  }

  getRootNav(): any {
    const rootNavs = this.app.getRootNavs();
    if (rootNavs.length === 0) {
    return null;
    } else if (rootNavs.length > 1) {
    console.warn('ss');
    }
    return rootNavs[0];
}

  logout(){
      localStorage.clear();
      fcWidget.hideChat();
      setTimeout(() => this.backToWelcome(), 1000);
  }


}
