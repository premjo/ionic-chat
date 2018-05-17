import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketProvider } from '../../providers/ticket/ticket';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  ticketForm: FormGroup;
  loading: Loading;

item;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public formBuilder: FormBuilder,
   public tp: TicketProvider,
   public loadingCtrl: LoadingController,
   public alertCtrl: AlertController) {
    this.ticketForm = this.formBuilder.group({
      serviceReqNo: [''],
      serviceReqDesc: [''],
      serviceReqDate: ['']
    });
    this.item = navParams.data.item;
    console.log(this.ticketForm)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  createTicket(){
     this.showLoading();

    this.tp.postData(this.ticketForm.value).then((result) => {
     this.navCtrl.push(TabsPage);

    }, (err) => {
      this.showError(err.message)
    });

  }

   showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
