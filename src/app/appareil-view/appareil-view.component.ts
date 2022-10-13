import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs'; //importer interval
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  updateAt = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );

    }
  )


  appareils?: any[];
  appareilSubcription?: Subscription;
  secondes?: number;
  counterSubscription?: Subscription;

  constructor(private appareilService: AppareilService) {

  }
  ngOnInit() {
    this.appareilSubcription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emetappareilSubject();
    //observable qui emet une valeur toutes les 1000ms
    const myObservable = interval(1000);
    this.counterSubscription = myObservable.subscribe((integer) => {
      this.secondes = integer;
    },
      (error: any) => {
        console.log('error');

      },
      () => {
        console.log('complete');

      }
    );

  }
  //on detruit l'observable
  ngOnDestroy() {
    this.counterSubscription?.unsubscribe();
  }
  onAllume() {
    this.appareilService.switchOnAll();

  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }


}


