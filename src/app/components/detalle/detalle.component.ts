import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
juego:any;
  constructor(private _sg:GamesService,private _route:ActivatedRoute) {
    this._route.params.subscribe((resp:any)=>{
      this._sg.detalleJuego(resp.id).subscribe((resp:any)=>{
        console.log(resp);
        this.juego=resp;
      });
    });
   }

  ngOnInit() {
  }

}
