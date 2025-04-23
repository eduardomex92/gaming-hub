import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platforms.service';

describe('PlatformsService', () => {
  let service: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
