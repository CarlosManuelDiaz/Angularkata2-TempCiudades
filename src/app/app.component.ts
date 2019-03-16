import { Component } from '@angular/core';
import { Ciudad } from './ciudad';
import { TemperaturaService } from './temperatura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata2-temperaturas';

  constructor(private temperaturaservice: TemperaturaService) {}

  public misciudades: Array<Ciudad> = [];

public agregarCiudad(nombre: string): void {
  this.misciudades.push({
    nombre,
    temperatura: {
      valor: this.temperaturaservice.obtenerTemperatura(),
      tipo: 'ºC'
    }

  });
}
}
