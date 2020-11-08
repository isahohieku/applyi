import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionRequirementComponent } from './admission-requirement.component';

describe('AdmissionRequirementComponent', () => {
  let component: AdmissionRequirementComponent;
  let fixture: ComponentFixture<AdmissionRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
