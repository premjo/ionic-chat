import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { AppVariables } from "../../config/app-variables";

import '../../assets/js/widget';

/**
 * Generated class for the FreshChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var fcWidget: any;
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-fresh-chat',
  templateUrl: 'fresh-chat.html',
})
export class FreshChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public alt: AlertController) {
    platform.ready().then((readySource) => {
      // console.log('Platform ready from', readySource);
      // if (fcWidget) {
      //     fcWidget.init({

      //         token: AppVariables.FRESHCHAT_TOKEN,
      //         host: AppVariables.FRESHCHAT_HOST,
      //         //Have the widget open on load by default by setting the below value to true
      //         open: true,
      //         config: {
      //             showFAQOnOpen: true,
      //             hideFAQ: false,
      //         }
      //     });
      // }
      //  console.log(((window as any).Freshchat));
      // console.log((window as any).FreshChat);
      if ((window as any).Freshchat) {
                (window as any).FreshChat.init({
                      appId       : AppVariables.FRESHCHAT_APPID,
                      appKey      : AppVariables.FRESHCHAT_TOKEN,
                      gallerySelectionEnabled   : true,
                      cameraCaptureEnabled      : true,
                      teamMemberInfoVisible     : true
                    }, function(success){
                      this.showError("im success")
                      console.log("This is called form the init callback");
                  });

      } else {
        console.log("Something is wrong!!!!!")
      }
    });
  }

  ionViewDidLoad() {
    this.initialiseFreshChat()
    console.log('ionViewDidLoad FreshChatPage');
  }

  initialiseFreshChat() {
    this.showError('Hello im here to init');
    if ((window as any).Freshchat) {
     (window as any).Freshchat.showFAQs();
    }
      this.showError('success');
    // (window as any).FreshChat.init({
    //   appId: AppVariables.FRESHCHAT_APPID,
    //   appKey: AppVariables.FRESHCHAT_TOKEN,
    //   gallerySelectionEnabled: true,
    //   cameraCaptureEnabled: true,
    //   teamMemberInfoVisible: true
    // }, function (success) {
    //   this.showError('success init');
     

    //   console.log("This is called form the init callback");
    // });
  }


  showSupportChat = function () {

    if ((window as any).Freshchat) {

      this.showError('Im here')
        (window as any).Freshchat.showFAQs();
      this.showError('@@@');
    } else {
      this.showError('byeee')
      console.log("Something is wrong!!!")
    }
  };

  showError(text) {
    let alert = this.alt.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }


}
