import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTeamMemberComponent } from './pokemon-team-member.component';
import {provideMockStore} from "@ngrx/store/testing";

describe('PokemonTeamMemberComponent', () => {
  let component: PokemonTeamMemberComponent;
  let fixture: ComponentFixture<PokemonTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTeamMemberComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
