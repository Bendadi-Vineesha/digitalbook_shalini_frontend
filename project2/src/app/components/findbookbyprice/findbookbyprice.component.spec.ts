import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbookbypriceComponent } from './findbookbyprice.component';

describe('FindbookbypriceComponent', () => {
  let component: FindbookbypriceComponent;
  let fixture: ComponentFixture<FindbookbypriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbookbypriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbookbypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
