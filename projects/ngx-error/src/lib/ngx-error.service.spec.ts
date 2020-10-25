import { TestBed } from '@angular/core/testing';

import { NgxErrorService } from './ngx-error.service';

describe('NgxErrorService', () => {
  let service: NgxErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
