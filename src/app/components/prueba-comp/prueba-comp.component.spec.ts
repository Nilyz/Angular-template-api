import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCompComponent } from './prueba-comp.component';

describe('PruebaCompComponent', () => {
  let component: PruebaCompComponent;
  let fixture: ComponentFixture<PruebaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
