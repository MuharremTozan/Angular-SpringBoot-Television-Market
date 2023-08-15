import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDeleteAlertComponent } from './pop-up-delete-alert.component';

describe('PopUpDeleteAlertComponent', () => {
  let component: PopUpDeleteAlertComponent;
  let fixture: ComponentFixture<PopUpDeleteAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpDeleteAlertComponent]
    });
    fixture = TestBed.createComponent(PopUpDeleteAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
