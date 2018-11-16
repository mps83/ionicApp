import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsPage } from './single-news.page';

describe('SingleNewsPage', () => {
  let component: SingleNewsPage;
  let fixture: ComponentFixture<SingleNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
