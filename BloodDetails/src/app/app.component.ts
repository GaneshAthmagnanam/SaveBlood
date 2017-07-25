import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {Geolocation} from '@ionic-native/geolocation';
import { BgroupsPage } from '../pages/bgroups/bgroups';


declare var google;
var currentLat;
var currentLng;

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = BgroupsPage;

  constructor(public geolocation: Geolocation,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
      this.geolocation.getCurrentPosition().then((position) => {
        
      currentLat=position.coords.latitude;
      currentLng=position.coords.longitude;
      console.log("inside current position"+currentLat+"-----"+currentLng);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      

 
});
 

    });
  }
}

