import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section>
      <h1>Documento di Progettazione — Fase 1</h1>

      <h2>1. Titolo del sito e tema</h2>
      <p><strong>Titolo:</strong> ExplorApp — sito demo di luoghi e attività (client-side).</p>
      <p><strong>Tema:</strong> Presentazione di luoghi/attività con cards, immagini e dettagli.</p>

      <h2>2. Elenco delle pagine / sezioni previste</h2>
      <ul>
        <li>Home — presentazione e elementi in evidenza</li>
        <li>Gallery — lista filtrabile di card (dettagli in modal)</li>
        <li>About / Progettazione — documentazione e requisiti (questa pagina)</li>
      </ul>

      <h2>3. Tipologie di contenuti</h2>
      <p>Testi, immagini (placeholder), liste, card, tags.</p>

      <h2>4. Interazioni previste</h2>
      <ul>
        <li>Ricerca testuale lato client</li>
        <li>Filtri per tag (select)</li>
        <li>Apertura dettagli in modal client-side</li>
        <li>Navigazione tra pagine tramite Router</li>
      </ul>

      <h2>5. Schema struttura / Wireframe</h2>
      <p>Struttura semplice: header/navigazione, content area, footer. Wireframe disegnato a mano (se richiesto, allegare separatamente).</p>

      <p>Nota: l'app funziona completamente lato client, i dati sono contenuti in un array locale (DataService).</p>

      <p><a routerLink="/">« Torna alla Home</a></p>
    </section>
  `,
  styles: [`
    section { max-width:900px; margin:0 auto; padding:1rem; }
    h1 { margin-bottom:.6rem; }
  `]
})
export class AboutComponent {}
