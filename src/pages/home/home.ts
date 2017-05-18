import { Component } from '@angular/core';
import {LogInPage} from '../log-in/log-in';
import{SignUpPage} from'../sign-up/sign-up';


import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
 onGoToLogin(){
   this.navCtrl.push(LogInPage);
   
 }

 
 onGoToSignUp(){
  this.navCtrl.push(SignUpPage);
 }

 
 
}
