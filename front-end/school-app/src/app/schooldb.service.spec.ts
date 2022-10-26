import { TestBed } from '@angular/core/testing';

import { SchooldbService } from './schooldb.service';

describe('SchooldbService', () => {
  let service: SchooldbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchooldbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
