import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlertSettingsComponent } from './show-alert-settings.component';

describe('ShowAlertSettingsComponent', () => {
  let component: ShowAlertSettingsComponent;
  let fixture: ComponentFixture<ShowAlertSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlertSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAlertSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
