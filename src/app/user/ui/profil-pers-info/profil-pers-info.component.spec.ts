import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPersInfoComponent } from './profil-pers-info.component';

describe('ProfilPersInfoComponent', () => {
  let component: ProfilPersInfoComponent;
  let fixture: ComponentFixture<ProfilPersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPersInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
