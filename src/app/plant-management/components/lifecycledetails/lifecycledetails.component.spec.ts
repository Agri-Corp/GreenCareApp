import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycledetailsComponent } from './lifecycledetails.component';

describe('LifecycledetailsComponent', () => {
  let component: LifecycledetailsComponent;
  let fixture: ComponentFixture<LifecycledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycledetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
