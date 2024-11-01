import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenFunctionComponent } from './garden-function.component';

describe('GardenFunctionComponent', () => {
  let component: GardenFunctionComponent;
  let fixture: ComponentFixture<GardenFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
