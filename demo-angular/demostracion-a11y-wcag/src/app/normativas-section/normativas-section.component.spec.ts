import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativasSectionComponent } from './normativas-section.component';

describe('NormativasSectionComponent', () => {
  let component: NormativasSectionComponent;
  let fixture: ComponentFixture<NormativasSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormativasSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormativasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
