import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldchatlistComponent } from './oldchatlist.component';

describe('OldchatlistComponent', () => {
  let component: OldchatlistComponent;
  let fixture: ComponentFixture<OldchatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldchatlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldchatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
