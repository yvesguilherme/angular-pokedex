import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';

import { ListOfPokemon, PokeApiResult, PokemonDetails } from '../model/api-model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private urlApi = `https://pokeapi.co/api/v2/pokemon/`;
  private urlApiPaginated = '';

  constructor(private http: HttpClient) { }

  public listAllPokemon(listByPage: boolean): Observable<PokeApiResult> {
    return this.http
      .get<PokeApiResult>(listByPage ? this.urlApiPaginated : `${this.urlApi}?offset=0&limit=20`)
      .pipe(
        tap(resp => resp),
        tap((resp: PokeApiResult) => {
          this.urlApiPaginated = resp.next || '';

          resp.results
            .map((respPokemons: ListOfPokemon) => {
              this.getPokemonStatus(respPokemons.url)
                .subscribe((resp: PokemonDetails) => respPokemons.status = resp);
            });
        })
      );
  };

  public listPokemonByName(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.urlApi}${name}`);
  }

  public getPokemonStatus(url: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(url)
      .pipe(
        map(resp => resp)
      );
  }
}
