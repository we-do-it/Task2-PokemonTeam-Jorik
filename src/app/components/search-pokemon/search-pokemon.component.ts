import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  searchValue: string;

  @Output() inputValue = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.inputValue.emit(this.searchValue);
  }

}
