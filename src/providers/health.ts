import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {HealthModel} from '../models/health';
import {PeopleModel} from '../models/people';
/*
  Generated class for the Health provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Health {

  hospital: HealthModel [] = [];
  people: PeopleModel[] = [];

  constructor(public http: Http) {
    console.log('Hello Health Provider');
  }

  getAllHospital(){
    return this.http.get('https://mighty-badlands-21860.herokuapp.com/get-hos')
      .map((response: Response) => {
        const hospital:HealthModel [] = response.json() ? response.json() : [];
        return hospital;
      })
      .do((hospital: HealthModel[]) => {
        if(hospital){
          this.hospital = hospital;
        }
      });
        
  }

  getAllPeople(){
    return this.http.get('https://mighty-badlands-21860.herokuapp.com/get-people')
      .map((response: Response) => {
        const people: PeopleModel [] = response.json() ? response.json() : [];
        return people;
      })
      .do((people: PeopleModel[]) => {
        if(people){
          this.people = people;
        }
      });
  }

}
