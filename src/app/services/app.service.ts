import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://pokeapi.co/api/v2'

  getAllPokemon() {
    return this.http.get(this.rootURL + '/pokemon?limit=151');
  }

  getMorePokemonData(name: string) {
    return this.http.get(this.rootURL + `/pokemon/${name}`);
  }
}
