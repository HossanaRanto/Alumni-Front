import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldchatComponent } from './oldchat.component';

describe('OldchatComponent', () => {
  let component: OldchatComponent;
  let fixture: ComponentFixture<OldchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
