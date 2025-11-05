import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Item } from './data.service';
import { ItemCardComponent } from './item-card.component';
import { ItemDetailComponent } from './item-detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent, ItemDetailComponent,],
  template: `
    <section>
      <h1>Gallery</h1>
      <div class="controls">
        <input [(ngModel)]="query" placeholder="Cerca per titolo o tag..." />
        <select [(ngModel)]="tagFilter">
          <option value="">Tutti i tag</option>
          <option *ngFor="let t of tags" [value]="t">{{ t }}</option>
        </select>
      </div>

      <div *ngIf="filteredItems.length === 0">Nessun risultato.</div>

      <div class="grid">
        <app-item-card
          *ngFor="let item of filteredItems"
          [item]="item"
          (select)="openDetail($event)">
        </app-item-card>
      </div>

      <app-item-detail *ngIf="selected" [item]="selected" (closed)="selected = null"></app-item-detail>
    </section>
  `,
  styles: [`
    .controls { display:flex; gap:.5rem; margin-bottom:1rem; }
    input, select { padding:.4rem .6rem; border-radius:6px; border:1px solid #ccc; }
    .grid { display:grid; gap:1rem; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
  `]
})
export class GalleryComponent {
  query = '';
  tagFilter = '';
  items: Item[] = [];
  tags: string[] = [];
  selected: Item | null = null;

  constructor(private data: DataService) {
    this.items = this.data.getItems();
    this.tags = Array.from(new Set(this.items.flatMap(i => i.tags))).sort();
  }

  get filteredItems(): Item[] {
    const q = this.query.trim().toLowerCase();
    const tag = this.tagFilter;
    return this.items.filter(it => {
      const matchQ = !q || it.title.toLowerCase().includes(q) || it.description.toLowerCase().includes(q) || it.tags.join(' ').toLowerCase().includes(q);
      const matchTag = !tag || it.tags.includes(tag);
      return matchQ && matchTag;
    });
  }

  openDetail(item: Item) {
    this.selected = item;
  }
}
