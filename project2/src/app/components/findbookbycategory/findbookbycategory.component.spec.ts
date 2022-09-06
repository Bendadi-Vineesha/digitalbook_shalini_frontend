import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbookbycategoryComponent } from './findbookbycategory.component';

describe('FindbookbycategoryComponent', () => {
  let component: FindbookbycategoryComponent;
  let fixture: ComponentFixture<FindbookbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbookbycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbookbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
