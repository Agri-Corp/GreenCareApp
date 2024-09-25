import { TestBed } from '@angular/core/testing';

import { CurrentSectionService } from './current-section.service';

describe('CurrentSectionService', () => {
  let service: CurrentSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
