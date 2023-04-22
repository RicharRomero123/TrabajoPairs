import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasTableComponent } from './peliculas-table.component';

describe('PeliculasTableComponent', () => {
  let component: PeliculasTableComponent;
  let fixture: ComponentFixture<PeliculasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
