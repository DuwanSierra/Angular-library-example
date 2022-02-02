import { TestBed } from '@angular/core/testing';

import { JeffDevLibraryService } from './jeff-dev-library.service';

describe('JeffDevLibraryService', () => {
  let service: JeffDevLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeffDevLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
