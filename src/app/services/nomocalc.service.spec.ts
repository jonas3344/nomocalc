import { TestBed } from '@angular/core/testing';

import { NomocalcService } from './nomocalc.service';

describe('NomocalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NomocalcService = TestBed.get(NomocalcService);
    expect(service).toBeTruthy();
  });
});
