import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSensorSettingsComponent } from './show-sensor-settings.component';

describe('ShowSensorSettingsNewComponent', () => {
  let component: ShowSensorSettingsComponent;
  let fixture: ComponentFixture<ShowSensorSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSensorSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSensorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
