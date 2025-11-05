import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from './data.service';
import { ItemCardComponent } from './item-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemCardComponent],
  template: `
    <section class="hero">
      <div>
        <h1>Scopri luoghi e attività</h1>
        <p>Applicazione demo Angular (client-only). Sfoglia e filtra le card senza backend.</p>
        <a class="btn" routerLink="/gallery">Vai alla Gallery</a>
      </div>
      <div class="hero-img" aria-hidden="true"></div>
    </section>

    <section>
      <h2>In evidenza</h2>
      <div class="grid">
        <app-item-card *ngFor="let it of featured" [item]="it" (select)="open(it)"></app-item-card>
      </div>
    </section>
  `,
  styles: [`
    .hero { display:flex; gap:1rem; align-items:center; justify-content:space-between; margin-bottom:1.2rem; }
    .hero-img { width:220px; height:120px; background:linear-gradient(135deg,#f06,#f90); border-radius:8px; }
    .btn { display:inline-block; padding:.5rem .8rem; background:#2b6cff; color:white; border-radius:6px; text-decoration:none; margin-top:.5rem; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1rem; margin-top:.8rem; }
  `]
})
export class HomeComponent {
  featured: any[];
  constructor(private data: DataService) {
    this.featured = this.data.getItems().slice(0, 3);
  }
  open(item: any) { /* evento gestito nella Gallery; qui non apre modal */ }
}
