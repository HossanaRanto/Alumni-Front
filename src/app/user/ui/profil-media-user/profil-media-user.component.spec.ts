import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMediaUserComponent } from './profil-media-user.component';

describe('ProfilMediaUserComponent', () => {
  let component: ProfilMediaUserComponent;
  let fixture: ComponentFixture<ProfilMediaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilMediaUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilMediaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
