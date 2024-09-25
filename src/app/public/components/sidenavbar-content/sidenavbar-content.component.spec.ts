import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarContentComponent } from './sidenavbar-content.component';

describe('SidenavbarContentComponent', () => {
  let component: SidenavbarContentComponent;
  let fixture: ComponentFixture<SidenavbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavbarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
