import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindauthorbookComponent } from './findauthorbook.component';

describe('FindauthorbookComponent', () => {
  let component: FindauthorbookComponent;
  let fixture: ComponentFixture<FindauthorbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindauthorbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindauthorbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
