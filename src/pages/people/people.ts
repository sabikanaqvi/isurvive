import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Health} from '../../providers/health';
import{PinfoPage} from '../pinfo/pinfo';
import 'rxjs/Rx';
import {PeopleModel} from '../../models/people';

/*
  Generated class for the People page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage implements OnInit {

  people: PeopleModel[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public health: Health) {}



  ngOnInit(){
    this.health.getAllPeople().subscribe(
      (list: PeopleModel[]) => {
        if(list){
          this.people = list;
          console.log(this.people);
        }
      }
    );
  }

   onClickMarker(peep: any){
    this.navCtrl.push(PinfoPage, {peep: peep});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

}
