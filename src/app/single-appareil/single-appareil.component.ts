import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
  name: string | undefined = 'Machine à laver';
  status: string | undefined = 'éteint';
  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {

  }



  ngOnInit(): void {
    //afficher l'id de l'appareil
    // const id = this.route.snapshot.params['id'];
    // console.log(id)
    // // const.log()

    // this.name = this.appareilService.getAppareilById(+id)?.name
    // this.status = this.appareilService.getAppareilById(+id)?.status

    //afficher le nom de l'appareil
    const name = this.route.snapshot.params['name'];
    console.log(name)

    this.name = this.appareilService.getAppareilByName(name)?.name
    this.status = this.appareilService.getAppareilByName(name)?.status

  }
}
