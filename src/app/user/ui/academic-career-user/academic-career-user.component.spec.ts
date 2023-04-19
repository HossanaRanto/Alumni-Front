import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCareerUserComponent } from './academic-career-user.component';

describe('AcademicCareerUserComponent', () => {
  let component: AcademicCareerUserComponent;
  let fixture: ComponentFixture<AcademicCareerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicCareerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicCareerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
