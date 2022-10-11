import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit() { }
}
