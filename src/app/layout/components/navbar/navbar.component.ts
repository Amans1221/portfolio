import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isFixed: boolean = false;
  isFirstFixedScroll: boolean = true; // Flag to track if the navbar has been fixed for the first time

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    if (offset > 100 && this.isFirstFixedScroll) {
      // If the offset is greater than 100 and it's the first time the navbar is fixed
      this.isFirstFixedScroll = false; // Update flag
    }
    this.isFixed = offset > 100; // Example threshold for fixing the navbar
  }

}



