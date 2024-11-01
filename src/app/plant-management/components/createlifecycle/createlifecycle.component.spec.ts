import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelifecycleComponent } from './createlifecycle.component';

describe('CreatelifecycleComponent', () => {
  let component: CreatelifecycleComponent;
  let fixture: ComponentFixture<CreatelifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatelifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatelifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
