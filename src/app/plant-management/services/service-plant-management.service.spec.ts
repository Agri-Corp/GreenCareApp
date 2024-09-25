import { TestBed } from '@angular/core/testing';

import { ServicePlantManagementService } from './service-plant-management.service';

describe('ServicePlantManagementService', () => {
  let service: ServicePlantManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePlantManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
