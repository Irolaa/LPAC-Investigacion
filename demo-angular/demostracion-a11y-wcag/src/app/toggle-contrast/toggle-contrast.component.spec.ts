import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleContrastComponent } from './toggle-contrast.component';

describe('ToggleContrastComponent', () => {
  let component: ToggleContrastComponent;
  let fixture: ComponentFixture<ToggleContrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleContrastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
