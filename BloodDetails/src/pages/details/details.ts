import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
declare var google;
/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 public showingWelcome: boolean; 
 hospitalName:any;
 hospLat:any;
 hospLng:any;
 temp: any;
 bGroup:any;
 public Apositive: number;
 public Bpositive: number;
 public Anegative: number;
 public Bnegative: number;
 public ABpositive:number;
 public ABnegative:number;
 public Onegative:number;
 public Opositive:number;
 @ViewChild('map') mapElement: ElementRef;
 map: any;
 mapInitialised: boolean = false;
 apiKey: any = "AIzaSyBPCs7n_a9uo-WejDkhk9Kf8j1N2Nxxhlk";
  constructor(public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
    this.Apositive=0;
    
    this.Bpositive=0;
    this.Anegative=0;
    this.Bnegative=0;
    this.ABpositive=0;
    this.ABnegative=0;
    this.Onegative=0;
    this.Opositive=0;
    console.log("inside cons"+this.navParams.get('nameHosp')+"latlng is"+this.navParams.get('hospLatlng'));
    this.hospitalName=this.navParams.get('nameHosp');
    this.temp=this.navParams.get('hospLatlng');
    this.bGroup=this.navParams.get('bloodGroupValue');
    
    this.hospLat=this.temp.split(":",1);
    this.hospLng=this.temp.split(":",2);
    console.log("insideeee blood"+this.bGroup);
    setTimeout(() => this.loadGoogleMaps(this.hospLat[0],this.hospLng[1]), 800);
    if(this.bGroup=="AB+"){
    this.Apositive=(Math.floor(Math.random() * 9) + 1) ;
    this.Bpositive=Math.floor(Math.random() * 9) + 1 ;
    this.Anegative=Math.floor(Math.random() * 9) + 1 ;
    this.Bnegative=Math.floor(Math.random() * 9) + 1 ;
    this.ABpositive=Math.floor(Math.random() * 9) + 1  ;
    this.ABnegative=Math.floor(Math.random() * 9) + 1 ;
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    this.Opositive=Math.floor(Math.random() * 9) + 1 ;
  }
  if(this.bGroup=="AB-"){
    
    this.Anegative=Math.floor(Math.random() * 9) + 1 ;
    this.Bnegative=Math.floor(Math.random() * 9) + 1 ;
    
    this.ABnegative=Math.floor(Math.random() * 9) + 1 ;
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    //this.showingWelcome=true;
    //this.oneCtrl(this.ABnegative);
  }
  if(this.bGroup=="A+"){
    this.Apositive=Math.floor(Math.random() * 9) + 1  ;
   
    this.Anegative=Math.floor(Math.random() * 9) + 1 ;
    
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    this.Opositive=Math.floor(Math.random() * 9) + 1 ;
  }
  if(this.bGroup=="A-"){
   
    this.Anegative=Math.floor(Math.random() * 9) + 1 ;
    
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
   
  }
  if(this.bGroup=="B+"){
   
    this.Bpositive=Math.floor(Math.random() * 9) + 1 ;
    
    this.Bnegative=Math.floor(Math.random() * 9) + 1 ;
    
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    this.Opositive=Math.floor(Math.random() * 9) + 1 ;
  }
   if(this.bGroup=="B-"){
    
   
   
    this.Bnegative=Math.floor(Math.random() * 9) + 1 ;
   
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    
  }
   if(this.bGroup=="O+"){
    
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    this.Opositive=Math.floor(Math.random() * 9) + 1 ;
  }
   if(this.bGroup=="O-"){
    
    this.Onegative=Math.floor(Math.random() * 9) + 1 ;
    
  }

console.log("value is"+this.Apositive+"ends");
  
}

  
  ionViewDidLoad() {

    console.log('ionViewDidLoad DetailsPage');
  }
   disableMap() {
        console.log("disable map");
    }

    enableMap() {
      this.addMarker();
        console.log("enable map");

    }


    addInfoWindow(marker, content) {

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });

    }
    addMarker() {

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });

        let content = this.hospitalName;

        this.addInfoWindow(marker, content);

    }

    loadGoogleMaps = (a, b) => {
      console.log("inside load maps count checker");
        //a=l;
       // b=lg;
        console.log("17");
        console.log("inside load googlemaps" + a +"      "+ b);
        var x = a;
        var y = b;
        this.addConnectivityListeners(x, y);

        if (typeof google == "undefined" || typeof google.maps == "undefined") {

            console.log("Google maps JavaScript needs to be loaded.");
            this.disableMap();

            //if(this.connectivityService.isOnline()){
            console.log("online, loading map");

            //Load the SDK
            window['mapInit'] = () => {
                this.mapInitialised = true;

                let latLng = new google.maps.LatLng(a, b);

                let mapOptions = {
                    center: latLng,
                    zoom: 50,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }

                this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

                //this.initMap(x,y);
                this.enableMap();
            }

            let script = document.createElement("script");
            script.id = "googleMaps";

            if (this.apiKey) {
                script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            } else {
                script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
            }

            document.body.appendChild(script);

        } else {

            //if(this.connectivityService.isOnline()){
            console.log("showing map");
            //this.initMap(x,y);
            this.mapInitialised = true;

            let latLng = new google.maps.LatLng(a, b);

            let mapOptions = {
                center: latLng,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            this.enableMap();

        }
       // return setTimeout;
    }
    initMap(a, b) {

        this.mapInitialised = true;

        let latLng = new google.maps.LatLng(a, b);

        let mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);



    }
    addConnectivityListeners(x, y) {
        var i = x;
        var j = y;
        let onOnline = () => {

            setTimeout(() => {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {

                    this.loadGoogleMaps(i, j);

                } else {

                    if (!this.mapInitialised) {
                        this.initMap(i, j);
                    }

                    this.enableMap();
                }
            }, 2000);

        };

        let onOffline = () => {
            this.disableMap();
        };

        document.addEventListener('online', onOnline, false);
        document.addEventListener('offline', onOffline, false);

    }

}
