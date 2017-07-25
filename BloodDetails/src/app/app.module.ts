import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BgroupsPage } from '../pages/bgroups/bgroups';
import { DetailsPage } from '../pages/details/details';
import { Geolocation } from '@ionic-native/geolocation';
import { RssForBloodProvider } from '../providers/rss-for-blood/rss-for-blood';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BgroupsPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BgroupsPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RssForBloodProvider,
    ConnectivityServiceProvider,
    GoogleMapsProvider,
    LocationsProvider
  ]
})
export class AppModule {}
