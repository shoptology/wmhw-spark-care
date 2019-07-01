import { TestBed } from '@angular/core/testing';

import { WmhwApiService } from './wmhw-api.service';

describe('WmhwApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WmhwApiService = TestBed.get(WmhwApiService);
    expect(service).toBeTruthy();
  });
});
