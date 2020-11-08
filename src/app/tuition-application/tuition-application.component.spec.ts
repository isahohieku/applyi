import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionApplicationComponent } from './tuition-application.component';

describe('TuitionApplicationComponent', () => {
  let component: TuitionApplicationComponent;
  let fixture: ComponentFixture<TuitionApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
