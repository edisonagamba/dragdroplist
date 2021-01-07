import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
 games:string = "https://api.rawg.io/api/games";

  constructor(private _sg:HttpClient) { }

obtenerJuegos(){
  let url = `${this.games}?page_size=8`;
  return this._sg.get(url);
}

detalleJuego(nombre:string){
  let url = `${this.games}/${nombre}`;
  return this._sg.get(url);
}

}