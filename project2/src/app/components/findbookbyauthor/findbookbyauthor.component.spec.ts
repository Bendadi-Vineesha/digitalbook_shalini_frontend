import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbookbyauthorComponent } from './findbookbyauthor.component';

describe('FindbookbyauthorComponent', () => {
  let component: FindbookbyauthorComponent;
  let fixture: ComponentFixture<FindbookbyauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbookbyauthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbookbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
