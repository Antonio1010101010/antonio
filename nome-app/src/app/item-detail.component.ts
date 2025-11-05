import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Item } from './data.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overlay" (click)="close()">
      <div class="modal" (click)="$event.stopPropagation()">
        <button class="close" (click)="close()" aria-label="Close">&times;</button>
        <img [src]="item?.image" [alt]="item?.title" />
        <h2>{{ item?.title }}</h2>
        <p class="tags">{{ item?.tags?.join(' · ') }}</p>
        <p>{{ item?.description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:1000;
    }
    .modal {
      background:white; border-radius:8px; max-width:720px; width:90%; padding:1rem; position:relative;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    .close {
      position:absolute; right:0.5rem; top:0.25rem; background:transparent; border:0; font-size:1.6rem; cursor:pointer;
    }
    img { width:100%; height:240px; object-fit:cover; border-radius:6px; }
    h2 { margin:.6rem 0 .2rem 0; }
    .tags { color:#666; margin:0 0 .6rem 0; }
  `]
})
export class ItemDetailComponent {
  @Input() item: Item | null = null;
  @Output() closed = new EventEmitter<void>();
  close() { this.closed.emit(); }
}
