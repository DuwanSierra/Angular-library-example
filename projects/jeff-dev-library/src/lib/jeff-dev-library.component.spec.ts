import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffDevLibraryComponent } from './jeff-dev-library.component';

describe('JeffDevLibraryComponent', () => {
  let component: JeffDevLibraryComponent;
  let fixture: ComponentFixture<JeffDevLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeffDevLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffDevLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
