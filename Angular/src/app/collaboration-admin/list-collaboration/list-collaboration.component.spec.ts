import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollaborationComponent } from './list-collaboration.component';

describe('ListCollaborationComponent', () => {
  let component: ListCollaborationComponent;
  let fixture: ComponentFixture<ListCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
