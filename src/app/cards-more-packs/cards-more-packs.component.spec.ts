import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMorePacksComponent } from './cards-more-packs.component';

describe('CardsMorePacksComponent', () => {
  let component: CardsMorePacksComponent;
  let fixture: ComponentFixture<CardsMorePacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsMorePacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsMorePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
