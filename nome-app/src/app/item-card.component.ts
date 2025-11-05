import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Item } from './data.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card" (click)="onSelect()">
      <img [src]="item.image" [alt]="item.title" />
      <div class="card-body">
        <h3>{{ item.title }}</h3>
        <p class="tags">{{ item.tags.join(' · ') }}</p>
      </div>
    </article>
  `,
  styles: [`
    :host { display:block; }
    .card {
      border: 1px solid #e3e3e3; border-radius:8px; overflow:hidden; cursor:pointer;
      transition: box-shadow .15s ease;
    }
    .card:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
    img { width:100%; height:160px; object-fit:cover; display:block; }
    .card-body { padding:0.6rem; }
    h3 { margin:0 0 .35rem 0; font-size:1rem; }
    .tags { margin:0; color:#666; font-size:.85rem; }
  `]
})
export class ItemCardComponent {
  @Input() item!: Item;
  @Output() select = new EventEmitter<Item>();
  onSelect() { this.select.emit(this.item); }
}
