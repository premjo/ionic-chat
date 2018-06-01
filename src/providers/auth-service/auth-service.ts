import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AppVariables } from "../../config/app-variables";
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

   postData(credentials, type) {
    return new Promise((resolve, reject) => {

      resolve({success:'true',user:{ _id: AppVariables.IT_HELP_DESK_ID, token:''}});

    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // headers = headers.set('Authorization', "Bearer " + AppVariables.APP_TOKEN);

    // //debugger
    //   this.http.post(AppVariables.AUTH_URL, credentials,{ headers: headers } )
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    });



  }

}
