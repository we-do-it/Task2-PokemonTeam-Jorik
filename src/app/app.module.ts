import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {reducers} from "./store/pokemon.reducer";
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';
import { PokemonTeamMemberComponent } from './components/pokemon-team-member/pokemon-team-member.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonDetailsComponent,
    PokemonTeamComponent,
    PokemonTeamMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('pokemon', reducers),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, autoPause: true,}),
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
