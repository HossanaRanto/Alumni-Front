import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityStudentsComponent } from './university-students.component';

describe('UniversityStudentsComponent', () => {
  let component: UniversityStudentsComponent;
  let fixture: ComponentFixture<UniversityStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
