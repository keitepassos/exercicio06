import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsFilmsPage } from './card-details-films.page';

describe('CardDetailsFilmsPage', () => {
  let component: CardDetailsFilmsPage;
  let fixture: ComponentFixture<CardDetailsFilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailsFilmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
