import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedListComponent } from './saved-list.component';

describe('SavedListsComponent', () => {
  let component: SavedListComponent;
  let fixture: ComponentFixture<SavedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
