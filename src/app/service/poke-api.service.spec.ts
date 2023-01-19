import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { tap } from 'rxjs';

import { PokeApiService } from './poke-api.service';

import { MOCK_LIST_POKEMON_BY_NAME } from './test/mock-list-pokemon-by-name';
import { MOCK_POKEMON_STATUS } from './test/mock-pokemon-status';
import { MOCK_LIST_POKEMONS_WITHOUT_PAGINATION } from './test/mock-list-pokemons-without-pagination';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpController: HttpTestingController;
  let urlApi = `https://pokeapi.co/api/v2/pokemon/`;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeApiService]
    });
    service = TestBed.inject(PokeApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returned all pokémons without pagination', () => {
    const pagination = false;

    service.listAllPokemon(pagination)
      .pipe(
        tap(resp => resp),
        tap(
          pokeApiResult => pokeApiResult.results
            .map(respPokemons => {
              service.getPokemonStatus(respPokemons.url)
                .subscribe(pokemonDetail => respPokemons.status = pokemonDetail);
            })
        )
      )
      .subscribe(resp => {
        return expect(resp).toEqual(MOCK_LIST_POKEMONS_WITHOUT_PAGINATION);
      });


    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlApi}?offset=0&limit=20`
    });

    req.flush(MOCK_LIST_POKEMONS_WITHOUT_PAGINATION);
  });

  it('should be returned pokémon by name', () => {
    const pokemonName = 'pikachu';

    service.listPokemonByName(pokemonName)
      .subscribe((resp) => {
        return expect(resp).toEqual(MOCK_LIST_POKEMON_BY_NAME);
      });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlApi}${pokemonName}`
    });

    req.flush(MOCK_LIST_POKEMON_BY_NAME);
  });

  it('should be returned pokémon status', () => {
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1/';

    service.getPokemonStatus(urlPokemon)
      .subscribe((resp) => {
        return expect(resp).toEqual(MOCK_POKEMON_STATUS);
      });

    const req = httpController.expectOne({
      method: 'GET',
      url: urlPokemon
    });

    req.flush(MOCK_POKEMON_STATUS);
  });

});
