import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityItemComponent } from './university-item.component';

describe('UniversityItemComponent', () => {
  let component: UniversityItemComponent;
  let fixture: ComponentFixture<UniversityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
