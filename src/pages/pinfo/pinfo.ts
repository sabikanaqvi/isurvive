import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PeopleModel} from '../../models/people';

/*
  Generated class for the Pinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pinfo',
  templateUrl: 'pinfo.html'
})
export class PinfoPage {
  peep: PeopleModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
       this.peep = navParams.get('peep');
    console.log(this.peep);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinfoPage');
  }

}





  

