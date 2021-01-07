import { Component, OnInit } from '@angular/core';

import {GamesService} from '../../services/games.service'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
juegos:any[]=[];
  constructor(private _sg:GamesService) { }

  ngOnInit() {
    this._sg.obtenerJuegos().subscribe((resp:any)=>{
      this.juegos=resp.results; 
    });
  }

  drop(e:CdkDragDrop<any>){
   moveItemInArray(this.juegos,e.previousIndex,e.currentIndex);
  }

}
