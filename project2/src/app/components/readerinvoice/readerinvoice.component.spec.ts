import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderinvoiceComponent } from './readerinvoice.component';

describe('ReaderinvoiceComponent', () => {
  let component: ReaderinvoiceComponent;
  let fixture: ComponentFixture<ReaderinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
