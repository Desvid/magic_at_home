import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BootstrapComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
