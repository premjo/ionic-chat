import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Loading, AlertController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  responseData : any;
  registerCredentials = { username: '', password: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthServiceProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }



  public createAccount() {
    this.navCtrl.push('SignupPage');
  }


  public login() {
    this.showLoading()

    this.auth.postData(this.registerCredentials,'login').then((result) => {
      this.responseData = result;
      if(this.responseData.success){
      localStorage.setItem('userData', JSON.stringify(this.responseData.user));
      this.navCtrl.push(TabsPage);
      }else{
         this.showError(this.responseData.message);
         }
    }, (err) => {
      this.showError(err.error.message)
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
