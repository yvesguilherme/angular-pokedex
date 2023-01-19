import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import { PokeListComponent } from './poke-list.component';
import { PokeSearchComponent } from '../poke-search/poke-search.component';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let pokeSearchComponent: PokeSearchComponent;
  let fixture: ComponentFixture<PokeListComponent>;
  let fixturePokeSearchComponent: ComponentFixture<PokeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [PokeListComponent, PokeSearchComponent, InfiniteScrollDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokeListComponent);
    fixturePokeSearchComponent = TestBed.createComponent(PokeSearchComponent);
    component = fixture.componentInstance;
    pokeSearchComponent = fixturePokeSearchComponent.componentInstance;

    fixture.detectChanges();
    fixturePokeSearchComponent.detectChanges();
  });

  it('should create PokeListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create PokeSearchComponent', () => {
    expect(pokeSearchComponent).toBeTruthy();
  });
});
