import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBasicComponent } from './school-basic.component';

describe('SchoolBasicComponent', () => {
  let component: SchoolBasicComponent;
  let fixture: ComponentFixture<SchoolBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
