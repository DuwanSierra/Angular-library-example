import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffDevInputComponent } from './jeff-dev-input.component';

describe('JeffDevInputComponent', () => {
  let component: JeffDevInputComponent;
  let fixture: ComponentFixture<JeffDevInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeffDevInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffDevInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
