import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Health } from '../../providers/health';
import{HinfoPage} from '../hinfo/hinfo';
import 'rxjs/Rx';
import {HealthModel} from '../../models/health';

/*
  Generated class for the Health page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-health',
  templateUrl: 'health.html'
})


export class HealthPage implements OnInit {
  hospitals: HealthModel [] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public health: Health) {}

  ngOnInit(){
    this.health.getAllHospital().subscribe(
      (list: HealthModel[]) => {
        if(list){
          this.hospitals = list;
          console.log(this.hospitals);
        }
      }
    );
  }

  onClickMarker(hospital: any){
    this.navCtrl.push(HinfoPage, {hospital: hospital});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }

}
