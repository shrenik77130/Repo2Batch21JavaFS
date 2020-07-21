import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntepollationComponent } from './intepollation.component';

describe('IntepollationComponent', () => {
  let component: IntepollationComponent;
  let fixture: ComponentFixture<IntepollationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntepollationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntepollationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
