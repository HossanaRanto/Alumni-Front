import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMediaComponent } from './profil-media.component';

describe('ProfilMediaComponent', () => {
  let component: ProfilMediaComponent;
  let fixture: ComponentFixture<ProfilMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
