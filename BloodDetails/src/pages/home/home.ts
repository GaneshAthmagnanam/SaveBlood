import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {RssForBloodProvider} from '../../providers/rss-for-blood/rss-for-blood';
import 'rxjs/add/operator/map';
import {Geolocation} from '@ionic-native/geolocation';
import {ConnectivityServiceProvider} from '../../providers/connectivity-service/connectivity-service';
import { DetailsPage } from "../details/details";


//import {std} from "typescript-stl";
//import { PipeTransform, Pipe } from '@angular/core'
declare var google;
let arr;
let arr1;
let arr_latlng= new Array();
let map1 = new Map();
let mapDetails = new Map();
var op:any;
var l;
var lg;
var currentLat;
var currentLng;
var numericArray: number[];
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [RssForBloodProvider]
})
//

export class HomePage    {
    
    Apositive: any;
    bGroup: any;
    content_hospitalName: any;
    content_address: any;
    Bpositive: any;
    Anegative: any;
    Bnegative: any;
    content: any;
    place: any;
    hospitalName: any;
    address: any;
    pin:any;
    district: any;
    i: number = 0;
    j: number = 0;
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    addressDetails: any;
    ordinates: any;
    lat: any;
    lng: any;
    mapInitialised: boolean = false;
    apiKey: any = "AIzaSyBPCs7n_a9uo-WejDkhk9Kf8j1N2Nxxhlk";
    constructor(public navParams: NavParams,public geolocation: Geolocation,public connectivityService: ConnectivityServiceProvider, public navCtrl: NavController, public bloodData: RssForBloodProvider) {
      console.log("inside cons");
      //currentLat=this.navParams.get('latitude');
      //currentLng=this.navParams.get('longitude');
      this.bGroup=this.navParams.get('groupName');
      console.log("blood group selected is"+this.bGroup);
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
        var newsItems = this.bloodData.getDetailsofRssBloodProvider();
        newsItems.subscribe(datax => {
            this.content = datax.data;
        });

         setTimeout(() => this.loading(), 800);
        

        
    }
    gotToFullDetails(valuerr){
        //let arrx= new Array();
        console.log("again map"+mapDetails.size);
        
         mapDetails.forEach((value: boolean, key: string) => {
        
        console.log(key);
        console.log(value);

//let x=value[0];
 
console.log("key is"+key+"value is"+value);

         //this.apiKey.sort;
        //arr.push(key);
        //arr1.push(value);
});
        //arr1.push(value);

        console.log("loaded"+mapDetails.get(valuerr));
        
        this.navCtrl.push(DetailsPage,{
            nameHosp:valuerr,
            bloodGroupValue:this.bGroup,
            hospLatlng: mapDetails.get(valuerr)
        });
    }
  
    loading():any {
        arr=new Array();
        arr1= new Array();
        for(var n=0;n<50;n++){

        //map1.set(this.content[n][4],this.content[n][0])
        //console.log("for values"+this.content[n][16]);
        var r_name=this.content[n][4];
        var r_state=this.content[n][1];
        var r_city=this.content[n][2];
        var r_lat=this.content[n][16].substring(2,this.content[n][16].indexOf("]"));
        var r_lng=this.content[n][17].substring(2,this.content[n][17].indexOf("]"));
        
        if(r_lat!="NA" && r_lng!="NA"){
            var r_latlng=r_lat,r_lng;
            console.log("values are"+r_lat+r_lng+r_name+r_state);
            
        this.applyHaversinex(r_lat,r_lng,r_name,r_state,r_city);
    }
        }
        console.log("mapppppppppp size is" + map1.size);
       
        map1.forEach((value: boolean, key: string) => {
        this.content_address=key;
        this.content_hospitalName=value;
        console.log("mapPPP  key is"+key);
        console.log("mapPPP VALUE is"+value)
        //console.log(key)
         //this.apiKey.sort;
         if(key!='NaN'){
        arr.push(key);}
        //arr1.push(value);
});

        console.log("arr is"+arr.sort((a,b)=>a-b));


        
        for(var i=0;i<map1.size;i++){
            console.log("ethukkkkkkkkkkkkkkkkkwwww"+map1.get(arr[i]));
            
            arr1.push(map1.get(arr[i]));
        }
        console.log(arr.length+"***vscheck****"+map1.size)
        this.content_hospitalName=arr1;
        console.log("new map"+mapDetails.size);

        //this.content_address=arr1;
    //return keys;
        return this.content_hospitalName;
        //this.loadGoogleMaps(this.lat, this.lng);
    }


  /*  
    showResult(result, n): any {
        console.log("15");
        var x = result.geometry.location.lat();

        var y = result.geometry.location.lng();

        console.log("lat and long" + x + "   " + y);
        //n=x;
        console.log("bjsdbjsdbfdjf" + n);
        return x + "," + y;
        //return x;
        //this.loadGoogleMaps(x, y);
    }

    getLatitudeLongitude(callback, address) {




        console.log("11");

        var output;
        var i = 0;
        // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
        //this.addressDetails = this.hospitalName+","+this.place+","+this.district+","+this.address;
        this.addressDetails = address;
        console.log("new address is" + this.addressDetails);
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        //geocoder.geocode
        // console.log(" return"+geocoder);
        if (geocoder) {
            console.log("1");
            geocoder.geocode({
                    'address': this.addressDetails
                }, function(results, status) {
                    console.log("2");
                    console.log(status);
                    if (status == google.maps.GeocoderStatus.OK) {
                        this.ordinates = callback(results[0]);
                        console.log(this.ordinates);
                        this.ordinates = this.ordinates.split(",");

                        this.lat = this.ordinates[0];
                        console.log("lat" + this.lat);
                        this.lng = this.ordinates[1];
                        lg=this.lng;
                        l=this.lat;
                        console.log("new lat & langit" + l+" "+lg);
                         //HomePage.loadGoogleMaps(this.lat, this.lng);
                        //setTimeout(() => this.loadGoogleMaps(this.lat, this.lng), 9000); 
                        //(obj:HomePage)=>obj.loadGoogleMaps(obj.lat, obj.lng);
                    }
                   //setTimeout((obj:HomePage) => this.loadGoogleMaps(obj.lat, obj.lng), 9000); 
                    console.log("12");
                   //this.loadGoogleMaps(this.lat,this.lng);
                    //return x;
                }

            );

            //return output;
            console.log("13");
        }

        console.log("14");
    }


   swipeLeftEvent(e) {
        if (e.direction == 2) {
            console.log("left");
            if(this.i==3){
                this.i=-1;
            }
            this.i = this.i + 1;
            console.log("left done"+this.i);
            l=null;
            lg=null;
            var newsItems = this.bloodData.getDetailsofRssBloodProvider();
            var n;
            n=this.i;

                if(n==0){

                    this.Apositive=10;
                    this.Bpositive=5;
                    this.Anegative=6;
                    this.Bnegative=4;

                }

                if(n==1){
                    
                    this.Apositive=20;
                    this.Bpositive=15;
                    this.Anegative=10;
                    this.Bnegative=4;
                }
                 if(n==2){
                    
                    this.Apositive=12;
                    this.Bpositive=11;
                    this.Anegative=5;
                    this.Bnegative=14;
                }
                 if(n==3){
                    console.log("map size is"+map1.size);
                    this.Apositive=0;
                    this.Bpositive=7;
                    this.Anegative=15;
                    this.Bnegative=2;
                }
                
 
              console.log("inside for "+n+" th iteration");
            
            newsItems.subscribe(datax => {
                this.address = datax.data[n][1];
                
                this.place = datax.data[n][3];
                this.hospitalName = datax.data[n][4];
                //this.hospitalName = datax.data[n][4];
                //console.log("swiped inside1"+datax.data[1][4]);
                this.district = datax.data[n][5];
                this.pin = datax.data[n][6];
                if(this.pin!="NA"){
                 this.address=this.hospitalName+","+this.place+","+this.district+","+this.address+","+this.pin;}
                 else{
                  this.address=this.hospitalName+","+this.place+","+this.district+","+this.address;

                 }
                 if(n==3){

                    this.address="Andhara Pradesh Vidya Vidhana Parishad, RTC Colony, Machilipatnam, Andhra Pradesh 521001, Hindistan";
                 }
                console.log(this.address); 
                this.getLatitudeLongitude(this.showResult, this.address);
                console.log(datax);
                //setTimeout(() => this.loadGoogleMaps(this.lat, this.lng), 800);
                setTimeout(() => this.applyHaversine(),1000);
                console.log("end of for"+this.map);
                //this.applyHaversine();


                
            });
           
          //direction 2 = right to left swipe.
          setTimeout(() => console.log("before sort after for"+numericArray),3000);
          //
        }



          if (e.direction == 4) {
            console.log("right");
            if(this.i!=0){
            this.i = this.i - 1;}
            console.log("right done"+this.i);
            l=null;
            lg=null;
            var newsItems = this.bloodData.getDetailsofRssBloodProvider();
            var n;
            n=this.i;

                if(n==0){

                    this.Apositive=10;
                    this.Bpositive=5;
                    this.Anegative=6;
                    this.Bnegative=4;

                }

                if(n==1){
                    
                    this.Apositive=20;
                    this.Bpositive=15;
                    this.Anegative=10;
                    this.Bnegative=4;
                }
                 if(n==2){
                    
                    this.Apositive=12;
                    this.Bpositive=11;
                    this.Anegative=5;
                    this.Bnegative=14;
                }

                
 
              console.log("inside for "+n+" th iteration");
            
            newsItems.subscribe(datax => {
                this.address = datax.data[n][1];
                
                this.place = datax.data[n][3];
                this.hospitalName = datax.data[n][4];
                //this.hospitalName = datax.data[n][4];
                //console.log("swiped inside1"+datax.data[1][4]);
                this.district = datax.data[n][5];
                this.pin = datax.data[n][6];
                if(this.pin!="NA"){
                 this.address=this.hospitalName+","+this.place+","+this.district+","+this.address+","+this.pin;}
                 else{
                  this.address=this.hospitalName+","+this.place+","+this.district+","+this.address;

                 }
                console.log(this.address); 
                this.getLatitudeLongitude(this.showResult, this.address);
                console.log(datax);
                setTimeout(() => this.applyHaversine(),1000);
                console.log("end of for");
                //this.applyHaversine();


                
            });
           
          //direction 2 = right to left swipe.
          setTimeout(() => console.log("before sort after for"+numericArray),3000);
          //
        }




    }*/

//Haversine formula

applyHaversinex(x,y,name,state,city):any{
        if(city!="NA"){
        name=name+","+city;
    }
        if(state!="NA"){
        name=name+","+state;
        }
        console.log("apply harvesine"+x,y);
        let usersLocation = {
            lat: currentLat, 
            lng: currentLng
        };


        let mapItemsLocation = {
            lat: x, 
            lng: y
        };
 
        numericArray=this.getDistanceBetweenPointsx(usersLocation,mapItemsLocation,'miles').toFixed(2);
        console.log("before sort"+numericArray);
        
        //arr_latlng.push(x+":"+y);

        mapDetails.set(name,x+":"+y);
        map1.set(numericArray,name);
       
    }
    applyHaversine():any{
 
        let usersLocation = {
            lat: currentLat, 
            lng: currentLng
        };


        let mapItemsLocation = {
            lat: l, 
            lng: lg
        };
 
        numericArray=this.getDistanceBetweenPoints(usersLocation,mapItemsLocation,'miles').toFixed(2);
        console.log("before sort"+numericArray);
        //this.map = new Map();
    //map1.set(this.address, numericArray);
    //console.log("map value is"+map1.get(this.address));
    //console.log("map value is"+this.map.getKey());
        //return x;
        //return x;

        
    }
 
    getDistanceBetweenPoints(start, end, units):any{
      end.lat=l;
      end.lng=lg;
      console.log("inside haversine"+l+"   "+lg);
        let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
 
        let R = earthRadius[units || 'miles'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;
 
        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
 
        return d;
 
    }
    getDistanceBetweenPointsx(start, end, units):any{
      //end.lat=l;
     // end.lng=lg;
     //console.log("inside haversine"+l+"   "+lg);
        let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
 
        let R = earthRadius[units || 'miles'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;
 
        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
 
        return d;
 
    }
 
    toRad(x){
        return x * Math.PI / 180;
    }

//
   










}