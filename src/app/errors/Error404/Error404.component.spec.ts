import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M404Component } from './Error404.component';

describe('M404Component', () => {
  let component: M404Component;
  let fixture: ComponentFixture<M404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
