import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  minimizedAside = new EventEmitter<string>();
  // ---
  constructor() { }
}
