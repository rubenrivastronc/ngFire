import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgregadaComponent } from './lista-agregada.component';

describe('ListaAgregadaComponent', () => {
  let component: ListaAgregadaComponent;
  let fixture: ComponentFixture<ListaAgregadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgregadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAgregadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
