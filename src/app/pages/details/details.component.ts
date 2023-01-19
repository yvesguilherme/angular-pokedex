import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon = `https://pokeapi.co/api/v2/pokemon`;
  private urlPokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species`;
  public pokemon: any;
  public isLoading = true;
  public apiError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  private getPokemon(): Subscription {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.getPokemonStatus(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.getPokemonStatus(`${this.urlPokemonSpecies}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: resp => {
        this.pokemon = resp;
        this.isLoading = false;
      },
      error: error => {
        console.error(error);
        this.apiError = true;
      }
    }
    );
  }
}
