import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Wolverine'},
      {id: 12, name: 'Magneto'},
      {id: 13, name: 'Batman'},
      {id: 14, name: 'Superman'},
      {id: 15, name: 'Gavião Arqueiro'},
      {id: 16, name: 'Lanterna Verde'},
      {id: 17, name: 'Hulk'},
      {id: 18, name: 'Thor'},
      {id: 19, name: 'Homem Aranha'},
      {id: 20, name: 'Ciclope'},
      {id: 21, name: 'Professor Xavier'},
      {id: 22, name: 'Homem de Ferro'},
      {id: 23, name: 'Fênix'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
