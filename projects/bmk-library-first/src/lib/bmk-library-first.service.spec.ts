import { TestBed } from '@angular/core/testing';

import { BmkLibraryFirstService } from './bmk-library-first.service';

describe('BmkLibraryFirstService', () => {
  let service: BmkLibraryFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmkLibraryFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
