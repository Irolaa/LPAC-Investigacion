import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toggle-contrast',
  templateUrl: './toggle-contrast.component.html',
  styleUrls: ['./toggle-contrast.component.css']
})
export class ToggleContrastComponent {
  highContrast = false;

  constructor(private renderer: Renderer2) {}

  toggleContrast(): void {
    this.highContrast = !this.highContrast;
    if (this.highContrast) {
      this.renderer.addClass(document.body, 'high-contrast');
    } else {
      this.renderer.removeClass(document.body, 'high-contrast');
    }
  }
}