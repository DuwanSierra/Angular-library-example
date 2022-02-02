import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffDevButtonComponent } from './jeff-dev-button.component';

describe('JeffDevButtonComponent', () => {
  let component: JeffDevButtonComponent;
  let fixture: ComponentFixture<JeffDevButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeffDevButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffDevButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
