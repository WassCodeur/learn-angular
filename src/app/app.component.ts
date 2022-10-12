import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
//importer rxjs
import { Observable } from 'rxjs';
import { interval } from 'rxjs'; //importer interval
//subscribe
import { Subscription } from 'rxjs';

import { map } from 'rxjs/operators';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes?: number;
  counterSubscription?: Subscription;
  constructor() {

  }
  ngOnInit() {

    //observable qui emet une valeur toutes les 1000ms

    const myObservable = interval(1000);
    this.counterSubscription = myObservable.subscribe((integer) => {
      console.log(integer);
      this.secondes = integer;
    },
      (error: any) => {
        console.log('error');

      },
      () => {
        console.log('complete');

      }
    );



    //observer l'observable

  }
  //on detruit l'observable
  ngOnDestroy() {
    this.counterSubscription?.unsubscribe();
  }
}
