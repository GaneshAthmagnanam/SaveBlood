import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { Network } from 'ionic-native';
declare var Connection;
/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectivityServiceProvider {
onDevice: boolean;
  constructor(public http: Http,public platform: Platform) {
    this.onDevice = this.platform.is('cordova');
    console.log('Hello ConnectivityServiceProvider Provider');
  }
  /*isOnline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    } else {
      return navigator.onLine; 
    }
  }
  isOffline(): boolean {
    if(this.onDevice && Network.onConnect){
      return Network.connection === Connection.NONE;
    } else {
      return !navigator.onLine;   
    }*/
  }


