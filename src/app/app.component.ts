import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AppVariables } from "../config/app-variables";
import {FreshChatPage} from '../pages/fresh-chat/fresh-chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FreshChatPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
        // (window as any).FreshChat.init({
        //       appId       : AppVariables.FRESHCHAT_APPID,
        //       appKey      : AppVariables.FRESHCHAT_TOKEN
        //     },(err) => {
        //       console.log("Om he")
        // console.log(err);
        //     });
    });
  }
}
