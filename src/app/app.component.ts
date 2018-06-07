import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AppVariables } from "../config/app-variables";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public altCtr: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();


      if ((window as any).FreshChat) {

      this.altCtr.create({
        title: 'Success',
        subTitle: "Before initate freshchat !!! ",
        buttons: ['OK']
      }).present();

        (window as any).FreshChat.init({
          appId: '93cf65a1-3a7f-4d08-b93a-b880e607c067',
          appKey: '6794f43e-c2cd-4362-8f26-d069c3c52c7e',      
          gallerySelectionEnabled: true,
          cameraCaptureEnabled: true,
          teamMemberInfoVisible: true
        }, function (success) {
          
          this.altCtr.create({
            title: 'Success',
            subTitle: "Success freshchat initialized!!! ",
            buttons: ['OK']
          }).present();

          console.log("This is called form the init callback");
        });

        this.altCtr.create({
        title: 'Success',
        subTitle: "After initate freshchat !!! ",
        buttons: ['OK']
      }).present();
      }
    });
  }
}
