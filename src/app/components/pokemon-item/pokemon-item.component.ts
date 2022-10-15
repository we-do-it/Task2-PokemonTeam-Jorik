import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {Store} from "@ngrx/store";
import { selectPokemon } from 'src/app/store/pokemon.actions';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  selectPokemon() {
    this.store.dispatch(selectPokemon({pokemon: this.pokemon}))
  }

}
