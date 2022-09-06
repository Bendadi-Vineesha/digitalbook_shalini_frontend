import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbookbypublisherComponent } from './findbookbypublisher.component';

describe('FindbookbypublisherComponent', () => {
  let component: FindbookbypublisherComponent;
  let fixture: ComponentFixture<FindbookbypublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbookbypublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbookbypublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
