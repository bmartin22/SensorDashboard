import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDashbaordComponent } from './show-dashbaord.component';

describe('ShowDashbaordComponent', () => {
  let component: ShowDashbaordComponent;
  let fixture: ComponentFixture<ShowDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
