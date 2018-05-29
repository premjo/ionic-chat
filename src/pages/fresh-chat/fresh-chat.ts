import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController  } from 'ionic-angular';
import { AppVariables } from "../../config/app-variables";


//import '../../assets/js/widget';

/**
 * Generated class for the FreshChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var Freshchat: any;
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-fresh-chat',
  templateUrl: 'fresh-chat.html',
})
export class FreshChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alt: AlertController) {
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
           console.log(((window as any).Freshchat));
// console.log((window as any).FreshChat);
if((window as any).Freshchat){
          (window as any).FreshChat.init({
              appId       : AppVariables.FRESHCHAT_APPID,
              appKey      : AppVariables.FRESHCHAT_TOKEN
            },(err) => {
              console.log("Om he")
        console.log(err);
            });

}else{
      console.log("Something is wrong!!!!!")
    }
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreshChatPage');
  }

  showSupportChat = function() {

    if((window as any).Freshchat){

    this.showError('Hiiiii')
      (window as any).FreshChat.init({
              appId       : AppVariables.FRESHCHAT_APPID,
              appKey      : AppVariables.FRESHCHAT_TOKEN
            },(err) => {
              this.showError(err.message)
              console.log("Om he")
        console.log(err);
            });
             this.showError('Successs!!!')
  (window as any).Freshchat.showConversations();
    }else{
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
