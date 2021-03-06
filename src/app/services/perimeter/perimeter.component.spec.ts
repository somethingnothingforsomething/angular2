/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerimeterComponent } from './perimeter.component';

describe('PerimeterComponent', () => {
  let component: PerimeterComponent;
  let fixture: ComponentFixture<PerimeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerimeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
