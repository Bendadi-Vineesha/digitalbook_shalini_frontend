import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallbookComponent } from './findallbook.component';

describe('FindallbookComponent', () => {
  let component: FindallbookComponent;
  let fixture: ComponentFixture<FindallbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindallbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
