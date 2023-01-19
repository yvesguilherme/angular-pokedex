import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import { HomeComponent } from './home.component';
import { PokeListComponent } from 'src/app/shared/poke-list/poke-list.component';
import { PokeSearchComponent } from 'src/app/shared/poke-search/poke-search.component';
import { PokeHeaderComponent } from 'src/app/shared/poke-header/poke-header.component';

import { PokeApiService } from 'src/app/service/poke-api.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let pokeSearchComponent: PokeSearchComponent;
  let pokeListComponent: PokeListComponent;
  let pokeHeaderComponent: PokeHeaderComponent;

  let fixture: ComponentFixture<HomeComponent>;
  let fixturePokeSearchComponent: ComponentFixture<PokeSearchComponent>;
  let fixturePokeListComponent: ComponentFixture<PokeListComponent>;
  let fixturePokeHeaderComponent: ComponentFixture<PokeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [HomeComponent, PokeSearchComponent, PokeListComponent, PokeHeaderComponent, InfiniteScrollDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [PokeApiService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixturePokeSearchComponent = TestBed.createComponent(PokeSearchComponent);
    fixturePokeListComponent = TestBed.createComponent(PokeListComponent);
    fixturePokeHeaderComponent = TestBed.createComponent(PokeHeaderComponent);

    component = fixture.componentInstance;
    pokeSearchComponent = fixturePokeSearchComponent.componentInstance;
    pokeListComponent = fixturePokeListComponent.componentInstance;
    pokeHeaderComponent = fixturePokeHeaderComponent.componentInstance;

    fixture.detectChanges();
    fixturePokeSearchComponent.detectChanges();
    fixturePokeListComponent.detectChanges();
    fixturePokeHeaderComponent.detectChanges();
  });

  it('should create homeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create PokeSearchComponent', () => {
    expect(pokeSearchComponent).toBeTruthy();
  });

  it('should create pokeListComponent', () => {
    expect(pokeListComponent).toBeTruthy();
  });

  it('should create pokeHeaderComponent', () => {
    expect(pokeHeaderComponent).toBeTruthy();
  });
});
