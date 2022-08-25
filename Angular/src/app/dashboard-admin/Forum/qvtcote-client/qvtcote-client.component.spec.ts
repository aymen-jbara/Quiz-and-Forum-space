import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QVTCoteClientComponent } from './qvtcote-client.component';

describe('QVTCoteClientComponent', () => {
  let component: QVTCoteClientComponent;
  let fixture: ComponentFixture<QVTCoteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QVTCoteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QVTCoteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
