import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokeHeaderComponent } from './poke-header.component';

import { PokeApiService } from 'src/app/service/poke-api.service';

describe('PokeHeaderComponent', () => {
  let component: PokeHeaderComponent;
  let fixture: ComponentFixture<PokeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PokeHeaderComponent],
      providers: [PokeApiService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be created service', () => {
    const service: PokeApiService = TestBed.inject(PokeApiService);
    expect(service).toBeTruthy();
  });
});
