import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSensorSettingsComponent } from './add-edit-sensor-settings.component';

describe('AddEditSensorSettingsComponent', () => {
  let component: AddEditSensorSettingsComponent;
  let fixture: ComponentFixture<AddEditSensorSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSensorSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSensorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
