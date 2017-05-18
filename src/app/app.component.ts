import { Component,ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{HealthPage} from '../pages/health/health';
import{PeoplePage} from'../pages/people/people';
import{MenuController} from "ionic-angular";
import { HomePage } from '../pages/home/home';
import{NavController} from "ionic-angular";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  healthPage=HealthPage;
  peoplePage=PeoplePage;
  @ViewChild('nav') nav: NavController; 
   

  constructor(platform: Platform,
   private menuCtrl:MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
    
  }
}
