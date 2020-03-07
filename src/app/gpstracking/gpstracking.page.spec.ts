import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPSTrackingPage } from './gpstracking.page';

describe('GPSTrackingPage', () => {
  let component: GPSTrackingPage;
  let fixture: ComponentFixture<GPSTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPSTrackingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPSTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
