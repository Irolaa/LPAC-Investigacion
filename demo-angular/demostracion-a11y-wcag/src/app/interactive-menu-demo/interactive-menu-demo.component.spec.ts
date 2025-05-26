import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMenuDemoComponent } from './interactive-menu-demo.component';

describe('InteractiveMenuDemoComponent', () => {
  let component: InteractiveMenuDemoComponent;
  let fixture: ComponentFixture<InteractiveMenuDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveMenuDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
