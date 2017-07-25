import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
/**
 * Generated class for the BgroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bgroups',
  templateUrl: 'bgroups.html',
})
export class BgroupsPage {
lati:any;
longi:any;
splash = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lati=this.navParams.get('lat');
    this.longi=this.navParams.get('lng');
    console.log("insode cons");
  }
  buttonClicked(e){
    
    console.log(e.srcElement.value)
    var group=e.srcElement.value;
    this.navCtrl.push(HomePage,{
            groupName:group,
            latitude:this.lati,
            longitude:this.longi
            
        });
    
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 6000);
    console.log('ionViewDidLoad BgroupsPage');
  }

}
