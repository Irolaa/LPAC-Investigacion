import { Component } from '@angular/core';

@Component({
  selector: 'app-aria-demo',
  templateUrl: './aria-demo.component.html',
  styleUrls: ['./aria-demo.component.css']
})
export class AriaDemoComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}