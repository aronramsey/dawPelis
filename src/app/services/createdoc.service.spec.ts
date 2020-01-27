import { TestBed } from '@angular/core/testing';

import { CreatedocService } from './createdoc.service';

describe('CreatedocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatedocService = TestBed.get(CreatedocService);
    expect(service).toBeTruthy();
  });
});
