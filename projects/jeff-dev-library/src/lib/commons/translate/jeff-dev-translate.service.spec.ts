import { TestBed } from '@angular/core/testing';

import { JeffDevTranslateService } from './jeff-dev-translate.service';

describe('JeffDevTranslateService', () => {
  let service: JeffDevTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeffDevTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
