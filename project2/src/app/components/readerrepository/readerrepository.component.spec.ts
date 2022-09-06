import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderrepositoryComponent } from './readerrepository.component';

describe('ReaderrepositoryComponent', () => {
  let component: ReaderrepositoryComponent;
  let fixture: ComponentFixture<ReaderrepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderrepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderrepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
