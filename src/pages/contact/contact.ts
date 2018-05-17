import { Component, NgZone } from '@angular/core';

import { Platform } from 'ionic-angular';

//declare var ApiAIPlugin:any;

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

answers = [];

  constructor(public platform: Platform, public ngZone: NgZone) {
    // platform.ready().then(() => {


    //   ApiAIPlugin.init({
    //     clientAccessToken: "f7bdc74cf2e6402a8a0baa61f9be591e"
    //   })
    //   .then((result) =>  console.log(result))

    // });
  }

  // ask(question) {
  //   ApiAIPlugin.requestText({
  //     query: question
  //   })
  //   .then(({result: {fulfillment: {speech}}}) => {
  //      this.ngZone.run(()=> {
  //      //  this.answer = speech;
  //      });
  //   })
  // }

}
