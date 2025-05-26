import { Component } from '@angular/core';

// Importá todos tus componentes standalone
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { PrincipiosSectionComponent } from './principios-section/principios-section.component';
import { AriaDemoComponent } from './aria-demo/aria-demo.component';
import { NormativasSectionComponent } from './normativas-section/normativas-section.component';
import { InteractiveMenuDemoComponent } from './interactive-menu-demo/interactive-menu-demo.component';
import { ToggleContrastComponent } from './toggle-contrast/toggle-contrast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroSectionComponent,
    PrincipiosSectionComponent,
    AriaDemoComponent,
    NormativasSectionComponent,
    InteractiveMenuDemoComponent,
    ToggleContrastComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demostracion-a11y-wcag';
}
