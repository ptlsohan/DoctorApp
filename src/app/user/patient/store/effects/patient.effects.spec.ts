import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PatientEffects } from './patient.effects';

describe('PatientEffects', () => {
  let actions$: Observable<any>;
  let effects: PatientEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PatientEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
