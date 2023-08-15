import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTelevisionComponent } from './create-television.component';

describe('CreateTelevisionComponent', () => {
  let component: CreateTelevisionComponent;
  let fixture: ComponentFixture<CreateTelevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTelevisionComponent]
    });
    fixture = TestBed.createComponent(CreateTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
