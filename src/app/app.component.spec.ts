import {getTestBed, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Pokemon} from "./models/pokemon.model";
import {Sprites} from "./models/sprites.model";
import {Stats} from "./models/stats.model";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Task2-PokemonTeam-Jorik'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Task2-PokemonTeam-Jorik');
  });

  it('should return an array with only the filtered pokemon', function () {
    const pokemons = [
      new Pokemon('pokemon1', 0, new Sprites('', '', '', ''), '', '', new Stats(0, 0, 0, 0, 0, 0)),
      new Pokemon('pokemon2', 0, new Sprites('', '', '', ''), '', '', new Stats(0, 0, 0, 0, 0, 0)),
      new Pokemon('pokemon3', 0, new Sprites('', '', '', ''), '', '', new Stats(0, 0, 0, 0, 0, 0))
    ]

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pokemonList = pokemons;
    app.filterPokemonByName('1')

    expect(app.filteredPokemonList.length === 1);
  });
});
