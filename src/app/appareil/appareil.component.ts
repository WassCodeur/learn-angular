import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {


  constructor(private appareilService: AppareilService) {

    this.indexOfAppareil = 1;
  }


  @Input() appareilName?: string;
  @Input() appareilStatus?: string;
  @Input() indexOfAppareil: number;
  @Input() idOfAppareil?: number;



  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }

    return;
  }
  switchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  switchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

  ngOnInit(): void {
  }

}
