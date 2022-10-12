import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

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

  constructor(private appareilService: AppareilService) {

  }
  ngOnInit() {
    this.appareilSubcription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emetappareilSubject();

  }
  onAllume() {
    this.appareilService.switchOnAll();

  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }


}


