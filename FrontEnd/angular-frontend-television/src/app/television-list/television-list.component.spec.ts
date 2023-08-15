import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionListComponent } from './television-list.component';

describe('TelevisionListComponent', () => {
  let component: TelevisionListComponent;
  let fixture: ComponentFixture<TelevisionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelevisionListComponent]
    });
    fixture = TestBed.createComponent(TelevisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
