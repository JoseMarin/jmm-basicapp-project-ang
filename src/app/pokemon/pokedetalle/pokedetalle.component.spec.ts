import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedetalleComponent } from './pokedetalle.component';

describe('PokedetalleComponent', () => {
  let component: PokedetalleComponent;
  let fixture: ComponentFixture<PokedetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
