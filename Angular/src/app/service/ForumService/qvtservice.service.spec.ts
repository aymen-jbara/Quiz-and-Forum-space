import { TestBed } from '@angular/core/testing';

import { QVTServiceService } from './qvtservice.service';

describe('QVTServiceService', () => {
  let service: QVTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QVTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
