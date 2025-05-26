import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-menu-demo',
  templateUrl: './interactive-menu-demo.component.html',
  styleUrls: ['./interactive-menu-demo.component.css']
})
export class InteractiveMenuDemoComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}