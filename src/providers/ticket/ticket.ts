import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AppVariables } from "../../config/app-variables";
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TicketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

   postData(ticketInfo) {
     console.log(ticketInfo)
    return new Promise((resolve, reject) => {

       let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', "Basic " + btoa(AppVariables.FRESHDESK_USERNAME+":"+AppVariables.FRESHDESK_PWD));

      this.http.post(AppVariables.FRESHDESK_URL+'api/v2/tickets', JSON.stringify(ticketInfo),{ headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err)
          reject(err);
        });
    });

  }

}
