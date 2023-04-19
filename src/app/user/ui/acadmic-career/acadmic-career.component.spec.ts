import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmicCareerComponent } from './acadmic-career.component';

describe('AcadmicCareerComponent', () => {
  let component: AcadmicCareerComponent;
  let fixture: ComponentFixture<AcadmicCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmicCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadmicCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
