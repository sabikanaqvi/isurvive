import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{MenuController} from "ionic-angular";

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private menuCtrl:MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

onOpenMenu(){
  this.menuCtrl.open();
}
}
