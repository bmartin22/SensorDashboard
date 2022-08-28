import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAlertSettingsComponent } from './add-edit-alert-settings.component';

describe('AddEditAlertSettingsComponent', () => {
  let component: AddEditAlertSettingsComponent;
  let fixture: ComponentFixture<AddEditAlertSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAlertSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAlertSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
