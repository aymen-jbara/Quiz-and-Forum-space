import { TestBed } from '@angular/core/testing';

import { CommentPubService } from './comment-pub.service';

describe('CommentPubService', () => {
  let service: CommentPubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentPubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
