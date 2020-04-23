import { TestBed } from '@angular/core/testing';

import { TMapiService } from './tmapi.service';

describe('TMapiService', () => {
  let service: TMapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
