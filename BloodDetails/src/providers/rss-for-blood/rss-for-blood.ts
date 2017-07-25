import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { HomePage } from "../../pages/home/home";

/*
  Generated class for the RssForBloodProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RssForBloodProvider {

  constructor(public http: Http) {
    console.log('Hello RssForBloodProvider Provider');
  }
  getDetailsofRssBloodProvider(){
    var response=this.http.get('https://data.gov.in/node/356981/datastore/export/json').map(res=>res.json());
    return response;
   
  }

}
