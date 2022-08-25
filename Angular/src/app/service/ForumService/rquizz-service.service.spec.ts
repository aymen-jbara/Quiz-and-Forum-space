import { TestBed } from '@angular/core/testing';

import { RQuizzServiceService } from './rquizz-service.service';

describe('RQuizzServiceService', () => {
  let service: RQuizzServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RQuizzServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
