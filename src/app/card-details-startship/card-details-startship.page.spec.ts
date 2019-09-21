import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsStartshipPage } from './card-details-startship.page';

describe('CardDetailsStartshipPage', () => {
  let component: CardDetailsStartshipPage;
  let fixture: ComponentFixture<CardDetailsStartshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailsStartshipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsStartshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
