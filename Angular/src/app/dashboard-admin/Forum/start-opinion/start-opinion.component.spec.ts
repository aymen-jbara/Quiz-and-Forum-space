import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartOpinionComponent } from './start-opinion.component';

describe('StartOpinionComponent', () => {
  let component: StartOpinionComponent;
  let fixture: ComponentFixture<StartOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
