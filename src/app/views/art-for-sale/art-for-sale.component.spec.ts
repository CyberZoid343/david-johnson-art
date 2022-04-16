import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtForSaleComponent } from './art-for-sale.component';

describe('ArtForSaleComponent', () => {
  let component: ArtForSaleComponent;
  let fixture: ComponentFixture<ArtForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
