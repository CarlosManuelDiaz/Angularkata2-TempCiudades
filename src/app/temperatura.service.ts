import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor() { }

  public obtenerTemperatura(): number {
    return Math.floor(Math.random() * 30) + 12;
  }
}
