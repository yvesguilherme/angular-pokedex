import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string | null> = new EventEmitter();

  searchInput = new FormControl('');

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(650),
        distinctUntilChanged()
      )
      .subscribe(value => this.emmitSearch.emit(value))
  }

}
