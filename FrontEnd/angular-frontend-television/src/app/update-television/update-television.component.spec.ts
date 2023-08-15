import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTelevisionComponent } from './update-television.component';

describe('UpdateTelevisionComponent', () => {
  let component: UpdateTelevisionComponent;
  let fixture: ComponentFixture<UpdateTelevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTelevisionComponent]
    });
    fixture = TestBed.createComponent(UpdateTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
