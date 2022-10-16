import { Component, Input, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {removePokemonFromTeam} from "../../store/pokemon.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/states/appState.interface";

@Component({
  selector: 'app-pokemon-team-member',
  templateUrl: './pokemon-team-member.component.html',
  styleUrls: ['./pokemon-team-member.component.scss']
})
export class PokemonTeamMemberComponent implements OnInit {
  @Input() teamMember: Pokemon;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  removeTeamMember() {
    this.store.dispatch(removePokemonFromTeam({pokemon: this.teamMember}));
  }

}
