import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HealthModel} from '../../models/health';

/*
  Generated class for the Hinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hinfo',
  templateUrl: 'hinfo.html'
})
export class HinfoPage {

  hospital: HealthModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hospital = navParams.get('hospital');
    console.log(this.hospital);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HinfoPage');
  }

}
