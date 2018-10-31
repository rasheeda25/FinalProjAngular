import { TestBed } from '@angular/core/testing';

import { TowerServiceService } from './tower-service.service';

describe('TowerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TowerServiceService = TestBed.get(TowerServiceService);
    expect(service).toBeTruthy();
  });
});
