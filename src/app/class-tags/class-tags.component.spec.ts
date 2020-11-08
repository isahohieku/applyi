import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTagsComponent } from './class-tags.component';

describe('ClassTagsComponent', () => {
  let component: ClassTagsComponent;
  let fixture: ComponentFixture<ClassTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
