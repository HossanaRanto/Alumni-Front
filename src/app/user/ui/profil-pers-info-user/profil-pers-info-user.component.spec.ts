import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPersInfoUserComponent } from './profil-pers-info-user.component';

describe('ProfilPersInfoUserComponent', () => {
  let component: ProfilPersInfoUserComponent;
  let fixture: ComponentFixture<ProfilPersInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPersInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPersInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
