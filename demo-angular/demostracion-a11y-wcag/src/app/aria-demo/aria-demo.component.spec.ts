import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaDemoComponent } from './aria-demo.component';

describe('AriaDemoComponent', () => {
  let component: AriaDemoComponent;
  let fixture: ComponentFixture<AriaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AriaDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
