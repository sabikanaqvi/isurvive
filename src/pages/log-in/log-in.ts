import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MapPage } from '../map/map';
import{HomePage} from '../home/home';


/*
  Generated class for the LogIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html'
})
export class LogInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  onLogin(){
    this.navCtrl.push(MapPage);
  }

onCancel(){
    this.navCtrl.push(HomePage);
  }
}
