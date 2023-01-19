import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DetailsComponent } from './details.component';
import { PokeHeaderComponent } from 'src/app/shared/poke-header/poke-header.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let pokeHeaderComponent: PokeHeaderComponent;
  let fixturePokeHeaderComponent: ComponentFixture<PokeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent, PokeHeaderComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    fixturePokeHeaderComponent = TestBed.createComponent(PokeHeaderComponent);
    component = fixture.componentInstance;
    pokeHeaderComponent = fixturePokeHeaderComponent.componentInstance;

    fixture.detectChanges();
    fixturePokeHeaderComponent.detectChanges();
  });

  it('should create DetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create PokeHeaderComponent', () => {
    expect(pokeHeaderComponent).toBeTruthy();
  });
});
