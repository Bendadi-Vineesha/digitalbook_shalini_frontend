import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersubscribebookComponent } from './readersubscribebook.component';

describe('ReadersubscribebookComponent', () => {
  let component: ReadersubscribebookComponent;
  let fixture: ComponentFixture<ReadersubscribebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadersubscribebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadersubscribebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
