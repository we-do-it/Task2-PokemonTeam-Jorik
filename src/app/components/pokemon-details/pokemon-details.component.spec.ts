import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {addPokemonToTeam} from "../../store/pokemon.actions";
import {Pokemon} from "../../models/pokemon.model";
import {Sprites} from "../../models/sprites.model";
import {Stats} from "../../models/stats.model";

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action when selectedPokemon is not null', function () {
    //get selectedPokemon from store

    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const AddToTeamButtonSpy = spyOn(component, 'addPokemonToTeam').and.callThrough();
    expect(AddToTeamButtonSpy).not.toHaveBeenCalled();

    let button = fixture.nativeElement.querySelector('#addPokemon');
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Add to team');

    const app = fixture.componentInstance;
    app.selectedPokemon$ = new Pokemon('pokemon1', 0, new Sprites('', '', '', ''), '', '', new Stats(0, 0, 0, 0, 0, 0));
    app.myTeam$ = [];
    button.click();
    expect(AddToTeamButtonSpy).toHaveBeenCalled();
    //expect dispatched action for addPokemonToTeam
    expect(dispatchSpy).toHaveBeenCalledWith(addPokemonToTeam({pokemon:app.selectedPokemon$}));
  });
});
