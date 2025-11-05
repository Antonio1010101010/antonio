import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly items: Item[] = [
    {
      id: 1,
      title: 'Montagna: Sentiero dei Faggi',
      image: 'https://picsum.photos/seed/1/800/500',
      description: 'Un bel sentiero tra faggete secolari ideale per escursioni di mezza giornata.',
      tags: ['escursione', 'natura', 'montagna']
    },
    {
      id: 2,
      title: 'Spiaggia: Tramonto dorato',
      image: 'https://picsum.photos/seed/2/800/500',
      description: 'Spiaggia ampia con sabbia fine, adatta a famiglie e relax al tramonto.',
      tags: ['mare', 'relax', 'tramonto']
    },
    {
      id: 3,
      title: 'Città: Percorsi culturali',
      image: 'https://picsum.photos/seed/3/800/500',
      description: 'Itinerari urbani per scoprire monumenti e caffè tipici.',
      tags: ['cultura', 'città', 'storia']
    },
    {
      id: 4,
      title: 'Lago: Kayak e natura',
      image: 'https://picsum.photos/seed/4/800/500',
      description: 'Attività acquatiche leggere e panorami rilassanti sul lago.',
      tags: ['acqua', 'sport', 'natura']
    },
    {
      id: 5,
      title: 'Collina: Vigneti',
      image: 'https://picsum.photos/seed/5/800/500',
      description: 'Passeggiate tra colline e degustazioni in fattorie locali.',
      tags: ['enogastronomia', 'degustazione', 'natura']
    }
  ];

  getItems(): Item[] {
    // restituisce copia per evitare mutazioni esterne
    return this.items.slice();
  }

  getById(id: number): Item | undefined {
    return this.items.find(i => i.id === id);
  }
}
