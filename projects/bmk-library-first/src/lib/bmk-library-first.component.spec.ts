import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmkLibraryFirstComponent } from './bmk-library-first.component';

describe('BmkLibraryFirstComponent', () => {
  let component: BmkLibraryFirstComponent;
  let fixture: ComponentFixture<BmkLibraryFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmkLibraryFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmkLibraryFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
