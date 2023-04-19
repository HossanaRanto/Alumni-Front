import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityStudentComponent } from './university-student.component';

describe('UniversityStudentComponent', () => {
  let component: UniversityStudentComponent;
  let fixture: ComponentFixture<UniversityStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
