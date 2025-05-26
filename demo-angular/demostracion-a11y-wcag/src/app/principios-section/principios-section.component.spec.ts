import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosSectionComponent } from './principios-section.component';

describe('PrincipiosSectionComponent', () => {
  let component: PrincipiosSectionComponent;
  let fixture: ComponentFixture<PrincipiosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipiosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipiosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
