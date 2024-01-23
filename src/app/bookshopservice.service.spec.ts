import { TestBed } from '@angular/core/testing';

import { BookshopserviceService } from './bookshopservice.service';

describe('BookshopserviceService', () => {
  let service: BookshopserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookshopserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
