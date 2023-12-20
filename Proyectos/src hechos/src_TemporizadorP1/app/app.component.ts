import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parar(ini: HTMLButtonElement, para: HTMLButtonElement) {
    if (this.iniciado) {
      clearInterval(this.temp);
      this.iniciado = false;
    }
  }
  iniciar(ini: HTMLButtonElement, para: HTMLButtonElement) {
    if (!this.iniciado) {
      this.iniciado = true;

      this.temp = setInterval(() => {
        this.hora = Number(new Date().getHours().toString());
        this.minutos = Number(new Date().getMinutes().toString());
        this.segundos = Number(new Date().getSeconds().toString());
        this.milesimas = Number(new Date().getMilliseconds().toString());
      }, 100);
    }
  }

  title = 'AngCalc';
  temp: NodeJS.Timeout | undefined;
  iniciado: boolean = false;
  milesimas: number = 0;
  hora: number = 0;
  minutos: number = 0;
  segundos: number = 0;
}
