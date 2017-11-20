import { TestBed, inject } from '@angular/core/testing';

import { CommonDataStoreService } from './common-data-store.service';

describe('CommonDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonDataStoreService]
    });
  });

  it('should ...', inject([CommonDataStoreService], (service: CommonDataStoreService<any>) => {
    expect(service).toBeTruthy();
  }));
});
