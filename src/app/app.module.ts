import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LogInPage} from '../pages/log-in/log-in';
import{SignUpPage} from '../pages/sign-up/sign-up';
import {MapPage} from '../pages/map/map';
import{HealthPage} from'../pages/health/health';
import{HinfoPage} from'../pages/hinfo/hinfo';
import{PinfoPage} from '../pages/pinfo/pinfo';
import {PeoplePage} from'../pages/people/people';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AgmCoreModule} from 'angular2-google-maps/core';
import { Health } from '../providers/health';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    SignUpPage,
    MapPage,
    HealthPage,
   PeoplePage,
   HinfoPage,
   PinfoPage,
   
    
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDfLSzzXyIRIJPdJStL3RGOmrzPoPUVjkc'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    SignUpPage,
    MapPage,
    HealthPage,
    PeoplePage,
   HinfoPage,
   PinfoPage,
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Health


  ]
})
export class AppModule {}
