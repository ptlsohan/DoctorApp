import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DoctorEffects } from './doctor.effects';

describe('DoctorEffects', () => {
  let actions$: Observable<any>;
  let effects: DoctorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DoctorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DoctorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
