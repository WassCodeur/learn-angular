import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
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


  appareils: any[] = [];

  constructor(private appareilService: AppareilService) {

  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllume() {
    this.appareilService.switchOnAll();

  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }


}
