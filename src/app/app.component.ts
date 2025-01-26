import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Groupe-Njeujip-Construction';

  showScrollToTop: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scroll(0, 0); // Forcer le défilement vers le haut après chaque navigation
    });
  }

  // Cette fonction est appelée lors du défilement
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Ajouter ou retirer la classe visible en fonction de la position de défilement
    this.showScrollToTop = window.scrollY > 200;
  }

  // Cette fonction est appelée lors du clic sur le bouton
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide vers le haut de la page
  }

  
}
