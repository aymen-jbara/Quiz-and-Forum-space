import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { XOComponent } from './XO.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        XOComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(XOComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tic-tac-toe'`, () => {
    const fixture = TestBed.createComponent(XOComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tic-tac-toe');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(XOComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('tic-tac-toe app is running!');
  });
});
