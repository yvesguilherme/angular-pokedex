import { Component } from '@angular/core';

import { PokeApiService } from 'src/app/service/poke-api.service';

import { PokeApiResult, PokemonDetails } from 'src/app/model/api-model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  public allPokemons: any;
  private setAllPokemons: any;
  public apiError = false;
  public throttle = 300;
  public scrollDistance = 2;

  constructor(private pokeApiService: PokeApiService) {
    this.pokeApiService.listAllPokemon(false).subscribe({
      next: (resp: PokeApiResult) => {
        this.setAllPokemons = resp.results;
        this.allPokemons = this.setAllPokemons;        
      },
      error: error => {
        console.error(error);
        this.apiError = true;
      }
    });
  }

  getEmmitSearchValue(value: string | null) {
    if (value === null) {
      return;
    }

    const filter = this.setAllPokemons.filter((resp: any) => {
      return !resp.name.indexOf(value.toLocaleLowerCase());
    });

    if (!filter.length) {
      this.apiError = false;
      this.pokeApiService.listPokemonByName(value)
        .subscribe({
          next: (resp: PokemonDetails) => {
            this.allPokemons = [];
            const obj: PokemonDetails = { ...resp };
            this.allPokemons.push(obj);
          },
          error: error => {
            console.error(error.error);
            this.apiError = true;
            this.allPokemons = [];
          }
        });

      return;
    }

    this.allPokemons = filter;
  }

  onScrollDown() {
    this.pokeApiService.listAllPokemon(true)
      .subscribe({
        next: (resp: PokeApiResult) => {
          this.setAllPokemons.push(...resp.results);
          this.allPokemons = this.setAllPokemons;
        },
        error: error => {
          console.error(error);
          this.apiError = true;
        }
      });
  }
}
