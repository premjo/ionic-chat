import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import {TicketPage} from '../ticket/ticket';
import {HomePage} from '../home/home';
import {FaqPage} from '../faq/faq';
import {FreshChatPage} from '../fresh-chat/fresh-chat';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  items;


  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {

    this.items = [
      {
        "name":"Chat",
        "icon": "chatbubbles",
        "color": "#0CA9EA"
      },

      {
        "name":"FAQ",
        "icon":"information-circle",
        "color": "#F48024"
      },
       {
        "name":"Ticket",
        "icon":"create",
        "color": "green"
      },
      {
        "name":"Logout",
        "icon":"log-out",
        "color": "red"
      },

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  openNavDetailsPage(item) {
    if(item.name == "Chat"){
      this.navCtrl.push(FreshChatPage, { item: item });
    }else if (item.name == "Ticket"){
      this.navCtrl.push(TicketPage, { item: item });
    }else if(item.name == "FAQ"){
    this.navCtrl.push(FaqPage, { item: item });
    }else{
      this.logout();
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

    }
    return rootNavs[0];
}

  logout(){
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 1000);
  }

}
